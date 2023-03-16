import cn from 'classnames';
import { FC, useState } from 'react';
import { useAuth } from '../../../../../hooks/use-auth';
import { EditTaskData, Task } from '../../../../../shared/types/task.types';
import Button from '../../../../ui/form-elements/button/button';
import styles from './task-item.module.scss';

interface TaskItemProp extends Task {
	editTask: (data: EditTaskData) => void;
}

const TaskItem: FC<TaskItemProp> = ({
	id,
	isDone,
	text,
	name,
	email,
	wasEditByAdmin,
	editTask,
}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(text);

	const { isAuth } = useAuth();

	const handelDone = () => {
		editTask({
			id: String(id),
			isDone: !isDone,
			text,
		});
	};

	const handelEdit = () => {
		if (!isEdit) {
			setIsEdit(true);
		} else {
			editTask({
				id: String(id),
				isDone: isDone,
				text: value,
			});

			setIsEdit(false);
			setValue('');
		}
	};
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
				{isEdit ? (
					<input
						onChange={(e) => setValue(e.target.value)}
						className={styles.inputEdit}
						type="text"
						autoFocus
						value={value}
					/>
				) : (
					<h6 className={styles.taskText}>{text}</h6>
				)}
				<div className={styles.group}>
					<div className={styles.status}>
						{isDone && <span>выполнено</span>}
						{wasEditByAdmin && <span>изменено админом</span>}
					</div>
					{isAuth && (
						<div className={styles.buttons}>
							<Button onClick={handelDone}>
								{isDone ? 'Не готово' : 'Выполнить'}
							</Button>
							<Button onClick={handelEdit}>Редактировать</Button>
						</div>
					)}
				</div>
			</div>
		</li>
	);
};

export default TaskItem;
