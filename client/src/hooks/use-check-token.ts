import { useEffect } from 'react';
import { TOKEN } from '../shared/utils/consts';
import { useLocation } from 'react-router-dom';
import { useAuth } from './use-auth';

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		const token = localStorage.getItem(TOKEN);
		if (!token) setIsAuth(false);
	}, [pathname, isAuth]);
};
