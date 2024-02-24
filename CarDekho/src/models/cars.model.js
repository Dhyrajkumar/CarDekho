import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import fs from "fs"; // Import the fs module to read the JSON file

const carsSchema = new Schema({
    type: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        index: true
    },
    model: {
        type: String,
        required: true,
    },
    car_info: {
        type: Schema.Types.Mixed // You can set this to 'Object' if you know the structure of the car_info object
    }
});

carsSchema.plugin(mongooseAggregatePaginate);

const Cars = mongoose.model("Cars", carsSchema);

export default Cars;

// Read the JSON file
const jsonFilePath = 'C:\\Users\\Dheeraj\\Desktop\\chai-backend-main\\src\\models\\cars.json';
const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

// Parse the JSON data
const carInfoFromJSON = JSON.parse(jsonData);

// Now you can use the parsed JSON data to create or update a Cars document
const newCar = new Cars({
    type: "SUV",
    name: "Toyota RAV4",
    model: "2022",
    car_info: carInfoFromJSON // Assign the parsed JSON data to the car_info field
});

newCar.save()
    .then(savedCar => {
        console.log("New car saved:", savedCar);
    })
    .catch(error => {
        console.error("Error saving car:", error);
    });
