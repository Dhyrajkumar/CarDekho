import express from 'express';
import dealController from '../controllers/deal.controller.js';

const router = express.Router();

// Route to create a deal from JSON
router.post('/deals/from-json', dealController.createDealFromJSON);

export default router;
