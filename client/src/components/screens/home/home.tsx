import { FC } from 'react';
import AddTaskForm from './add-task-form/add-task-form';
import TaskList from './task-list/task-list';

const Home: FC = () => {
	return (
		<section>
			<AddTaskForm />
			<TaskList />
		</section>
	);
};

export default Home;
