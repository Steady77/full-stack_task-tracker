import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { TaskService } from '../services/task.service';
import { EditTaskData, TaskField } from '../shared/types/task.types';

export const useTasks = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [filters, setFilters] = useState({ sortBy: 'name', orderBy: 'asc' });

	const queryData = useQuery(
		['get tasks', currentPage, filters],
		() => TaskService.getTasks(currentPage, filters?.sortBy, filters?.orderBy),
		{
			refetchOnMount: false,
			keepPreviousData: true,
			select: (data) => data,
		},
	);

	const { mutateAsync: createTask } = useMutation(
		['create task'],
		(data: TaskField) => TaskService.createTask(data),
		{
			onError: (error: any) => {
				toast.error(error, { delay: 10 });
			},

			onSuccess: () => {
				toast.success('Задача добавлена', { delay: 10 });
				queryData.refetch();
			},
		},
	);

	const { mutateAsync: editTask } = useMutation(
		['edit task'],
		({ id, text, isDone }: EditTaskData) =>
			TaskService.editTask(id, text, isDone),
		{
			onError: (error: any) => {
				toast.error(error, { delay: 10 });
			},

			onSuccess: () => {
				toast.success('Задача изменена', { delay: 10 });
				queryData.refetch();
			},
		},
	);

	return useMemo(
		() => ({
			createTask,
			setCurrentPage,
			currentPage,
			editTask,
			setFilters,
			...queryData,
		}),
		[createTask, queryData, setCurrentPage, currentPage],
	);
};
