import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '../src/routes/user.routes.js';
import carsRoutes from '../src/routes/cars.routes.js';
import dealershipRoutes from '../src/routes/dealership.routes.js';
import dealRoutes from '../src/routes/deal.routes.js';
import vehicleRoutes from '../src/routes/vehicle.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Routes
app.use(userRoutes);
app.use(carsRoutes);
app.use(dealershipRoutes);
app.use(dealRoutes);
app.use(vehicleRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;