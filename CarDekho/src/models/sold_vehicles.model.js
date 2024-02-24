import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import fs from "fs"; // Import the fs module to read the JSON file

const vehicleSchema = new Schema({
    car_id: {
        type: Schema.Types.ObjectId,
        ref: "Cars"
    },
    vehicle_info: {
        type: Schema.Types.Mixed // You can set this to 'Object' if you know the structure of the vehicle_info object
    }
});

vehicleSchema.plugin(mongooseAggregatePaginate);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;

// Read the JSON file
const jsonFilePath = 'C:\\Users\\Dheeraj\\Desktop\\chai-backend-main\\src\\models\\vehicle.json';
const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

const someCarId = 'placeholder_car_id'; // Define someCarId with a placeholder value

// Parse the JSON data
const vehicleInfoFromJSON = JSON.parse(jsonData);

// Now you can use the parsed JSON data to create or update a Vehicle document
const newVehicle = new Vehicle({
    car_id: someCarId,
    vehicle_info: vehicleInfoFromJSON // Assign the parsed JSON data to the vehicle_info field
});

newVehicle.save()
    .then(savedVehicle => {
        console.log("New vehicle saved:", savedVehicle);
    })
    .catch(error => {
        console.error("Error saving vehicle:", error);
    });
