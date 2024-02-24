import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import fs from "fs"; // Import the fs module to read the JSON file

const dealSchema = new Schema({
    car_id: {
        type: Schema.Types.ObjectId,
        ref: "Cars"
    },
    deal_info: {
        type: Schema.Types.Mixed // You can set this to 'Object' if you know the structure of the deal_info object
    }
});

dealSchema.plugin(mongooseAggregatePaginate);

const Deal = mongoose.model("Deal", dealSchema);
export default Deal;

// Read the JSON file
const jsonFilePath = 'C:\\Users\\Dheeraj\\Desktop\\chai-backend-main\\src\\models\\deal.json';
const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

// Parse the JSON data
const dealInfoFromJSON = JSON.parse(jsonData);

const someCarId = JSON.parse(jsonData); // Define someCarId with a placeholder value


// Now you can use the parsed JSON data to create or update a Deal document
const newDeal = new Deal({
    car_id: someCarId,
    deal_info: dealInfoFromJSON // Assign the parsed JSON data to the deal_info field
});

newDeal.save()
    .then(savedDeal => {
        console.log("New deal saved:", savedDeal);
    })
    .catch(error => {
        console.error("Error saving deal:", error);
    });
