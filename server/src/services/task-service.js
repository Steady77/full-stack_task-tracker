import { prisma } from '../prisma.js';

class TaskService {
	async getAll() {
		try {
			const tasks = await prisma.task.findMany();

			return tasks;
		} catch (error) {
			throw new Error();
		}
	}

	async createTask(name, email, text) {
		try {
			const newTask = prisma.task.create({
				data: {
					name,
					email,
					text,
					isDone: false,
					wasEditByAdmin: false,
				},
			});

			return newTask;
		} catch (error) {
			throw new Error();
		}
	}
}

export default new TaskService();
