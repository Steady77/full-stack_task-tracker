import { prisma } from '../prisma.js';

class AdminService {
	async editTask(text, isDone, id) {
		try {
			const task = await prisma.task.update({
				where: {
					id: Number(id),
				},
				data: {
					text,
					isDone,
					wasEditByAdmin: true,
				},
			});

			return task;
		} catch (error) {
			throw new Error('Задача не найдена');
		}
	}
}

export default new AdminService();
