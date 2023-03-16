import { Dispatch, FC, SetStateAction } from 'react';
import {
	EditTaskData,
	TaskResponse,
} from '../../../../shared/types/task.types';
import Pagination from '../../../pagination/pagination';
import TaskItem from './task-item/task-item';
import styles from './task-list.module.scss';

interface TaskListProps {
	data: TaskResponse | undefined;
	isLoading: boolean;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	currentPage: number;
	editTask: (data: EditTaskData) => void;
}

const TaskList: FC<TaskListProps> = ({
	isLoading,
	setCurrentPage,
	currentPage,
	data,
	editTask,
}) => {
	return (
		<>
			<ul className={styles.list}>
				{isLoading ? (
					<div>Загрузка...</div>
				) : (
					data?.tasks.map((task) => (
						<TaskItem
							editTask={editTask}
							key={task.id}
							{...task}
						/>
					))
				)}
			</ul>
			<Pagination
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				totalCount={data?.total_count || 0}
			/>
		</>
	);
};

export default TaskList;
