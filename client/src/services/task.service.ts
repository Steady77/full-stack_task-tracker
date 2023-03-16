import { getAdminUrl, getTasksUrl, getTaskUrl } from '../shared/config/api';
import { axiosServer } from '../shared/config/axios';
import { Task, TaskField, TaskResponse } from '../shared/types/task.types';
import { errorCatch } from '../shared/utils/error-catch';

export const TaskService = {
	async getTasks(currentPage?: number, sortBy?: string, orderBy?: string) {
		try {
			const response = await axiosServer.get<TaskResponse>(getTasksUrl(), {
				params: {
					page: currentPage,
					sortBy,
					orderBy,
				},
			});

			return response.data;
		} catch (error) {
			throw errorCatch(error);
		}
	},

	async createTask(data: TaskField) {
		try {
			const response = await axiosServer.post<Task>(getTaskUrl(), data);

			return response.data;
		} catch (error) {
			throw errorCatch(error);
		}
	},

	async editTask(id: string, text: string, isDone: boolean) {
		try {
			const response = await axiosServer.put<Task>(getAdminUrl(`/task/${id}`), {
				text,
				isDone,
			});

			return response.data;
		} catch (error) {
			throw errorCatch(error);
		}
	},
};
