import cn from 'classnames';
import { FC } from 'react';
import { Task } from '../../../../../store/task/task.types';
import styles from './task-item.module.scss';

const TaskItem: FC<Task> = ({ isDone, text, name, email, wasEditByAdmin }) => {
	return (
		<li
			className={cn(styles.item, {
				[styles.done]: isDone,
			})}
		>
			<div className={styles.user}>
				<span>{name}</span>
				<span>{email}</span>
			</div>
			<div>
				<h6 className={styles.taskText}>{text}</h6>
				<div className={styles.checkboxs}>
					{isDone && <span>выполнено</span>}
					{wasEditByAdmin && <span>изменено админом</span>}
				</div>
			</div>
		</li>
	);
};

export default TaskItem;
