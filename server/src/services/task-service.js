import { prisma } from '../prisma.js';

class TaskService {
	async getAll(page) {
		try {
			const PER_PAGE = 3;
			const currentPage = Number(page || 1);
			const options = {
				take: PER_PAGE,
				skip: (currentPage - 1) * PER_PAGE,
			};

			const [tasks, count] = await Promise.all([
				prisma.task.findMany(options),
				prisma.task.count(),
			]);

			return {
				tasks,
				total_count: count,
			};
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
