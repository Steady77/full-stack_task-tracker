import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaskService } from '../../services/task.service';
import { Task, TaskData, TaskResponse } from './task.types';

export const getTasks = createAsyncThunk<TaskResponse>(
	'tasks/getTask',
	async (_, thunkApi) => {
		try {
			return await TaskService.getTasks();
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);

export const createTask = createAsyncThunk<Task, TaskData>(
	'tasks/createTask',
	async ({ email, name, text }, thunkApi) => {
		try {
			const response = await TaskService.createTask(email, name, text);

			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);
