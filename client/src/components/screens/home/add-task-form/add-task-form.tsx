import { FC } from 'react';
import Field from '../../../ui/form-elements/field/field';
import Heading from '../../../ui/heading/heading';
import style from './add-task-form.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validEmail } from '../../../../utils/regex';
import Button from '../../../ui/form-elements/button/button';
import { useActions } from '../../../../hooks/use-actions';
import { ToastContainer, toast } from 'react-toastify';

interface TaskField {
	name: string;
	email: string;
	text: string;
}

const AddTaskForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TaskField>({
		mode: 'onChange',
	});

	const { createTask } = useActions();

	const addTask: SubmitHandler<TaskField> = (data) => {
		createTask(data);
		toast('Задача добавлена');
		reset();
	};

	return (
		<>
			<form
				className={style.addForm}
				onSubmit={handleSubmit(addTask)}
			>
				<Heading title="Добавить задачу" />
				<Field
					{...register('email', {
						required: 'Введите почту',
						maxLength: {
							value: 30,
							message: 'Не более 30 символов',
						},
						pattern: {
							value: validEmail,
							message: 'Введите корректный адрес почты',
						},
					})}
					placeholder="Почта"
					error={errors.email}
				/>
				<Field
					{...register('name', {
						required: 'Введите имя',
						maxLength: {
							value: 15,
							message: 'Не более 15 символов',
						},
					})}
					placeholder="Имя"
					error={errors.name}
				/>
				<Field
					{...register('text', {
						required: 'Введите текст задачи',
						maxLength: {
							value: 100,
							message: 'Не более 100 символов',
						},
					})}
					placeholder="Текст задачи"
					error={errors.text}
				/>
				<Button>Добавить</Button>
				<ToastContainer />
			</form>
		</>
	);
};

export default AddTaskForm;
