import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Main routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
