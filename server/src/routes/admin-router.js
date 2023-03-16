import { Router } from 'express';
import AdminController from '../controllers/admin-controller.js';
import { checkRole } from '../middleware/check-role.js';

const router = Router();

router.put('/task/:id', checkRole, AdminController.editTask);

export default router;
