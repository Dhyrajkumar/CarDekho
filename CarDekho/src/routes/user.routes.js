import express from 'express';
import userController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/users/register', userController.registerUser);
router.post('/users/login', userController.loginUser);
router.post('/users/refresh-token', userController.refreshAccessToken);
router.post('/users/logout', userController.logoutUser);

export default router;
