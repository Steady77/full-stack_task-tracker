import { Router } from 'express';
import AdminController from '../controllers/admin-controller.js';
import { checkAuth } from '../middleware/check-auth.js';

const router = Router();

router.put('/task/:id', checkAuth, AdminController.editTask);

export default router;
