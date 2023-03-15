export interface TaskResponse {
	tasks: Task[];
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
