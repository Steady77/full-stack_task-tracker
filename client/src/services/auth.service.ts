import { AuthFields } from '../components/screens/auth/auth';
import { getLoginUrl } from '../shared/config/api';
import { axiosServer } from '../shared/config/axios';
import { AuthResponse } from '../shared/types/auth.types';
import { TOKEN } from '../shared/utils/consts';
import { errorCatch } from '../shared/utils/error-catch';

export const AuthService = {
	async login(data: AuthFields) {
		try {
			const response = await axiosServer.post<AuthResponse>(
				getLoginUrl(),
				data,
			);

			if (response.data.token) localStorage.setItem(TOKEN, response.data.token);

			return response.data;
		} catch (error: any) {
			throw errorCatch(error);
		}
	},
};
