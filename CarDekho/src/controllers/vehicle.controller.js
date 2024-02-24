import fs from "fs";
import Vehicle  from "../models/sold_vehicles.model.js";

const vehicleController = {
  async createVehicleFromJSON(req, res) {
    try {
      // Read the JSON file
      const jsonFilePath = './vehicle.json';
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

      // Parse the JSON data
      const vehicleInfoFromJSON = JSON.parse(jsonData);

      // Create a new Vehicle document
      const newVehicle = new Vehicle({
        car_id: req.body.car_id, // Assuming car_id comes from the request body
        vehicle_info: vehicleInfoFromJSON
      });

      // Save the new Vehicle document
      const savedVehicle = await newVehicle.save();

      res.status(201).json({ vehicle: savedVehicle });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default vehicleController;
