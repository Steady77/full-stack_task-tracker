import { FC, useState } from 'react';
import { useTasks } from '../../../hooks/use-tasks';
import Layout from '../../layout/layout';
import AddTaskForm from './add-task-form/add-task-form';
import TaskList from './task-list/task-list';
import styles from './home.module.scss';
import { useQuery } from '@tanstack/react-query';
import { TaskService } from '../../../services/task.service';

const Home: FC = () => {
	const {
		data,
		isLoading,
		createTask,
		setCurrentPage,
		currentPage,
		editTask,
		setFilters,
	} = useTasks();

	return (
		<Layout>
			<section>
				<AddTaskForm createTask={createTask} />

				<div className={styles.selectWrapper}>
					<select
						onChange={(e) =>
							setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
						}
						className={styles.select}
					>
						<option disabled>Сортировка по:</option>
						<option value="name">По имени</option>
						<option value="email">По почте</option>
						<option value="isDone">По статусу</option>
					</select>

					<select
						onChange={(e) =>
							setFilters((prev) => ({ ...prev, orderBy: e.target.value }))
						}
						className={styles.select}
					>
						<option disabled>Сортировка по:</option>
						<option value="asc">По возрастанию</option>
						<option value="desc">По убыванию</option>
					</select>
				</div>

				<TaskList
					editTask={editTask}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					data={data}
					isLoading={isLoading}
				/>
			</section>
		</Layout>
	);
};

export default Home;
