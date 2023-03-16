import { FC } from 'react';
import Layout from '../../layout/layout';
import Button from '../../ui/form-elements/button/button';
import Field from '../../ui/form-elements/field/field';
import Heading from '../../ui/heading/heading';
import styles from './auth.module.scss';
import { useLogin } from '../../../hooks/use-login';

export interface AuthFields {
	name: string;
	password: string;
}

const Auth: FC = () => {
	const { addTask, errors, handleSubmit, register } = useLogin();

	return (
		<Layout>
			<form
				onSubmit={handleSubmit(addTask)}
				className={styles.authForm}
			>
				<Heading title="Войти" />
				<Field
					{...register('name', {
						required: 'Введите имя',
					})}
					placeholder="Имя"
					error={errors.name}
				/>
				<Field
					{...register('password', {
						required: 'Введите пароль',
					})}
					type="password"
					placeholder="Пароль"
					error={errors.password}
				/>
				<Button>Войти</Button>
			</form>
		</Layout>
	);
};

export default Auth;
