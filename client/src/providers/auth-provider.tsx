import {
	createContext,
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	useState,
} from 'react';
import { TOKEN } from '../shared/utils/consts';

interface Context {
	isAuth: boolean;
	setIsAuth: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Context>({} as Context);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	// Упрощенная авторизации в целях экономии времени, по хорошему нужно
	// делать проверку на роль пользователя
	const [isAuth, setIsAuth] = useState(!!localStorage.getItem(TOKEN));

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
