import { forwardRef, InputHTMLAttributes } from 'react';
import style from './field.module.scss';
import { FieldError } from 'react-hook-form';

interface FieldProps {
	error?: FieldError | undefined;
}

type FieldType = InputHTMLAttributes<HTMLInputElement> & FieldProps;

const Field = forwardRef<HTMLInputElement, FieldType>(
	({ placeholder, error, type = 'text', ...rest }, ref) => {
		return (
			<div className={style.fieldWrapper}>
				<input
					placeholder={placeholder}
					ref={ref}
					type={type}
					{...rest}
					className={style.field}
				/>
				{error && <div className={style.error}>{error.message}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
