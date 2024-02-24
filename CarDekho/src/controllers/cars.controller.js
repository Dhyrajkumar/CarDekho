import fs from "fs";
import Cars from "../models/cars.model.js";

const carsController = {
  async createCarsFromJSON(req, res) {
    try {
      // Read the JSON file
      const jsonFilePath = './cars.json';
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

      // Parse the JSON data
      const carInfoFromJSON = JSON.parse(jsonData);

      // Create a new Cars document
      const newCar = new Cars({
        type: req.body.type, // Assuming type comes from the request body
        name: req.body.name, // Assuming name comes from the request body
        model: req.body.model, // Assuming model comes from the request body
        car_info: carInfoFromJSON
      });

      // Save the new Cars document
      const savedCar = await newCar.save();

      res.status(201).json({ car: savedCar });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default carsController;
