import ApiError from '../exeptions/api-error.js';
import { prisma } from '../prisma.js';

class AuthService {
	async login(name, password) {
		const user = await prisma.user.findUnique({
			where: {
				name,
			},
		});

		if (!user) throw new Error('Пользователь не найден');

		// упрощенная авторизация
		const isValidPassword = user.password === password;

		if (isValidPassword) {
			return user;
		} else {
			throw ApiError.UnauthorizedError('Неверное имя или пароль');
		}
	}
}

export default new AuthService();
