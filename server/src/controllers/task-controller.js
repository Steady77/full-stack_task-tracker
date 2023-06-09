import TaskService from '../services/task-service.js';

class TaskController {
	async getAllTasks(req, res, next) {
		try {
			const { page, sortBy, orderBy } = req.query;

			const tasks = await TaskService.getAll(page, sortBy, orderBy);

			res.status(200).json(tasks);
		} catch (error) {
			next(error);
		}
	}

	async createTask(req, res, next) {
		try {
			const { name, email, text } = req.body;

			const newTask = await TaskService.createTask(name, email, text);

			res.status(200).json(newTask);
		} catch (error) {
			next(error);
		}
	}
}

export default new TaskController();
