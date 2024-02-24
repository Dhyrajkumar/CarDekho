import express from 'express';
import carsController from '../controllers/cars.controller.js';

const router = express.Router();

// Route to create a car from JSON
router.post('/cars/from-json', carsController.createCarsFromJSON);

export default router;
