import { prisma } from '../prisma.js';

class AdminService {
	async editTask(text, isDone, id) {
		try {
			const task = await prisma.task.findUnique({
				where: {
					id: Number(id),
				},
			});

			const prevText = task.text;
			const prevStatus = task.wasEditByAdmin;

			const updatedTask = await prisma.task.update({
				where: {
					id: Number(id),
				},
				data: {
					text,
					isDone,
					wasEditByAdmin: prevText !== text || prevStatus,
				},
			});

			return updatedTask;
		} catch (error) {
			throw new Error('Задача не найдена');
		}
	}
}

export default new AdminService();
