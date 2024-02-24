import express from 'express';
import dealershipController from '../controllers/dealership.controller.js';

const router = express.Router();

// Route to create a dealership from JSON
router.post('/dealerships/from-json', dealershipController.createDealershipFromJSON);

export default router;
