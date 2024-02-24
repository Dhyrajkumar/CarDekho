import fs from "fs";
import Deal from "../models/deal.model.js";

const dealController = {
  async createDealFromJSON(req, res) {
    try {
      // Read the JSON file
      const jsonFilePath = './deal.json';
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');

      // Parse the JSON data
      const dealInfoFromJSON = JSON.parse(jsonData);

      // Create a new Deal document
      const newDeal = new Deal({
        car_id: req.body.car_id, // Assuming car_id comes from the request body
        deal_info: dealInfoFromJSON
      });

      // Save the new Deal document
      const savedDeal = await newDeal.save();

      res.status(201).json({ deal: savedDeal });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default dealController;
