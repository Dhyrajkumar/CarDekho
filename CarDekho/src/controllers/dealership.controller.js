import fs from "fs";
import  Dealership  from "../models/dealership.model.js";

const dealershipController = {
  async createDealershipFromJSON(req, res) {
    try {
      // Read the JSON file
      const jsonFilePath = './dealership.json';
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

      // Parse the JSON data
      const dealershipInfoFromJSON = JSON.parse(jsonData);

      // Create a new Dealership document
      const newDealership = new Dealership({
        dealership_email: req.body.dealership_email,
        dealership_name: req.body.dealership_name,
        dealership_location: req.body.dealership_location,
        dealership_info: dealershipInfoFromJSON
      });

      // Save the new Dealership document
      const savedDealership = await newDealership.save();

      res.status(201).json({ dealership: savedDealership });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default dealershipController;
