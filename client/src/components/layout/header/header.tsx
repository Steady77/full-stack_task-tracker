import { FC } from 'react';
import Button from '../../ui/form-elements/button/button';
import style from './header.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';
import { TOKEN } from '../../../shared/utils/consts';

const Header: FC = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { isAuth, setIsAuth } = useAuth();

	const logout = () => {
		localStorage.removeItem(TOKEN);
		setIsAuth(false);
	};

	return (
		<header className={style.header}>
			<p className={style.logo}>TODO LIST</p>
			<div>
				{isAuth && <Button onClick={logout}>Выйти</Button>}
				{pathname !== '/' ? (
					<Button onClick={() => navigate('/')}>Назад</Button>
				) : (
					<Button onClick={() => navigate('/auth')}>Войти</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
