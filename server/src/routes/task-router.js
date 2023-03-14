import { Router } from 'express';
import TaskController from '../controllers/task-controller.js';

const router = Router();

router.get('/tasks', TaskController.getAllTasks);
router.post('/task', TaskController.createTask);

export default router;
