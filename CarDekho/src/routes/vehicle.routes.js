import express from 'express';
import vehicleController from '../controllers/vehicle.controller.js';

const router = express.Router();

// Route to create a vehicle from JSON
router.post('/vehicles/from-json', vehicleController.createVehicleFromJSON);

export default router;
