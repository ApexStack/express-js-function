import express from 'express';
import userRoutes from './src/routes/userRoutes.js'
import { errorMiddleWare } from './src/middleware/error.middleware.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("Hello from Reactive Forge");
});
app.use('/user', userRoutes);
app.use(errorMiddleWare);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
