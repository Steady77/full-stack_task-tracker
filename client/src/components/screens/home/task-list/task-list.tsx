import { FC, useEffect } from 'react';
import { useActions } from '../../../../hooks/use-actions';
import { useTypedSelector } from '../../../../hooks/use-typed-selector.hook';
import TaskItem from './task-item/task-item';
import styles from './task-list.module.scss';

const TaskList: FC = () => {
	const { getTasks } = useActions();
	const { tasks } = useTypedSelector((state) => state.taskSlice);

	useEffect(() => {
		getTasks();
	}, []);

	return (
		<ul className={styles.list}>
			{tasks.map((task) => (
				<TaskItem
					{...task}
					key={task.id}
				/>
			))}
		</ul>
	);
};

export default TaskList;
