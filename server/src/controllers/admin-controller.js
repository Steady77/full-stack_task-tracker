import AdminService from '../services/admin-service.js';

class AdminController {
	async editTask(req, res, next) {
		try {
			const { text, isDone } = req.body;
			const { id } = req.params;

			const task = await AdminService.editTask(text, isDone, id);

			res.status(200).json(task);
		} catch (error) {
			next(error);
		}
	}
}

export default new AdminController();
