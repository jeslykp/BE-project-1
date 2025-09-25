import express from 'express';
import { getTasks, addTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', auth, getTasks);
router.post('/', auth, addTask);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

export default router;