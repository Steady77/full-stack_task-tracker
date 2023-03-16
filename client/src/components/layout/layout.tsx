import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import { useCheckToken } from '../../hooks/use-check-token';
import Header from './header/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	useCheckToken();

	return (
		<main>
			<ToastContainer />
			<Header />
			{children}
		</main>
	);
};

export default Layout;
