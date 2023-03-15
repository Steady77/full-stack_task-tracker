import { FC, PropsWithChildren } from 'react';
import Header from './header/header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};

export default Layout;
