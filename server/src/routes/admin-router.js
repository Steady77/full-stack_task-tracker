import { Router } from 'express';
import AdminController from '../controllers/admin-controller.js';

const router = Router();

router.put('/task/:id', AdminController.editTask);

export default router;
