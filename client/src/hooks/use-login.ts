import { useEffect, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthFields } from '../components/screens/auth/auth';
import { AuthService } from '../services/auth.service';
import { useAuth } from './use-auth';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

export const useLogin = () => {
	const { isAuth, setIsAuth } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<AuthFields>({
		mode: 'onChange',
	});

	useEffect(() => {
		if (isAuth) navigate('/');
	}, [isAuth]);

	const { mutateAsync } = useMutation(
		['auth/login'],
		(data: AuthFields) => AuthService.login(data),
		{
			onSuccess: () => {
				setIsAuth(true);
				reset();
			},

			onError: (error: any) => {
				toast.error(error, { delay: 10 });
			},
		},
	);

	const addTask: SubmitHandler<AuthFields> = (data) => {
		mutateAsync(data);
	};

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			addTask,
		}),
		[errors],
	);
};
