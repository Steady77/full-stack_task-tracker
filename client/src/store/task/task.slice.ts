import { createSlice } from '@reduxjs/toolkit';
import { createTask, getTasks } from './task.actions';
import { Task } from './task.types';

interface tasksInitialState {
	tasks: Task[];
}

const initialState: tasksInitialState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getTasks.fulfilled, (state, { payload }) => {
				state.tasks = payload.tasks;
			})
			.addCase(createTask.fulfilled, (state, { payload }) => {
				state.tasks.push(payload);
			});
	},
});

export default taskSlice.reducer;
