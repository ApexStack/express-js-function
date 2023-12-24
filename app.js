import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes.js'
import { errorMiddleWare } from './src/middleware/error.middleware.js';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/', userRoutes);
app.use(errorMiddleWare);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
