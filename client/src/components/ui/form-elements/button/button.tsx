import { ButtonHTMLAttributes, FC } from 'react';
import style from './button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonType> = ({ children, ...rest }) => {
	return (
		<button
			className={style.button}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
