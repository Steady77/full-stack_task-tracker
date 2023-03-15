import ApiError from '../exeptions/api-error.js';
import { prisma } from '../prisma.js';
import { generateToken } from '../utils/generate-token.js';

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
			const token = generateToken(user.id);
			return { user, token };
		} else {
			throw ApiError.UnauthorizedError('Неверное имя или пароль');
		}
	}
}

export default new AuthService();
