import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import fs from "fs"; // Import the fs module to read the JSON file

const dealershipSchema = new Schema({
    dealership_email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    dealership_name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    dealership_location: {
        type: String,
        required: true,
    },
    dealership_info: {
        type: Schema.Types.Mixed // You can set this to 'Object' if you know the structure of the dealership_info object
    },
    cars: {
        type: Schema.Types.ObjectId,
        ref: "Cars"
    },
    deals: {
        type: Schema.Types.ObjectId,
        ref: "Deal"
    },
    sold_vehicles: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle"
    }
});

dealershipSchema.plugin(mongooseAggregatePaginate);

const Dealership = mongoose.model("Dealership", dealershipSchema);
export default Dealership;

// Read the JSON file
const jsonFilePath = 'C:\\Users\\Dheeraj\\Desktop\\chai-backend-main\\src\\models\\dealership.json';
const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

// Parse the JSON data
const dealershipInfoFromJSON = JSON.parse(jsonData);

// Now you can use the parsed JSON data to create or update a Dealership document
const newDealership = new Dealership({
    dealership_email: "example@example.com",
    dealership_name: "Example Dealership",
    dealership_location: "Some Location",
    dealership_info: dealershipInfoFromJSON // Assign the parsed JSON data to the dealership_info field
});

newDealership.save()
    .then(savedDealership => {
        console.log("New dealership saved:", savedDealership);
    })

    .catch(err =>
    {
        if (err.code === 11000 && err.keyPattern && err.keyValue && err.keyValue.dealership_email) {
          console.error('Duplicate email address:', err.keyValue.dealership_email);
          // Handle duplicate email address error here
        } else {
          console.error('Error saving dealership:', err)
        }
    });
