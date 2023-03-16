export interface TaskResponse {
	tasks: Task[];
	total_count: number;
}

export interface Task {
	id: number;
	name: string;
	email: string;
	text: string;
	isDone: boolean;
	wasEditByAdmin: boolean;
}

export interface TaskData {
	email: string;
	name: string;
	text: string;
}

export interface TaskField {
	name: string;
	email: string;
	text: string;
}

export interface EditTaskData {
	id: string;
	text: string;
	isDone: boolean;
}
