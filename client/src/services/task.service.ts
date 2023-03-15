import { getTasksUrl, getTaskUrl } from '../config/api';
import { axiosServer } from '../config/axios';
import { Task, TaskResponse } from '../store/task/task.types';

export const TaskService = {
	async getTasks() {
		const response = await axiosServer.get<TaskResponse>(getTasksUrl());

		return response.data;
	},

	async createTask(email: string, name: string, text: string) {
		const response = await axiosServer.post<Task>(getTaskUrl(), {
			email,
			name,
			text,
		});

		return response.data;
	},
};
