import { FC } from 'react';
import Button from '../../ui/form-elements/button/button';
import style from './header.module.scss';

const Header: FC = () => {
	return (
		<header className={style.header}>
			<p className={style.logo}>TODO LIST</p>
			<Button>Войти</Button>
		</header>
	);
};

export default Header;
