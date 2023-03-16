import Auth from '../components/screens/auth/auth';
import Home from '../components/screens/home/home';

export const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/auth',
		component: Auth,
	},
];
