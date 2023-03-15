import jwt from 'jsonwebtoken';
import ApiError from '../exeptions/api-error.js';
import { prisma } from '../prisma.js';

export const checkAuth = async (req, res, next) => {
	let token;

	if (req.headers.authorization?.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const userFound = await prisma.user.findUnique({
			where: {
				id: decoded.userId,
			},
			select: {
				name: true,
				isAdmin: true,
			},
		});

		if (userFound) {
			req.user = userFound;
			next();
		} else {
			throw new ApiError.UnauthorizedError('Неверное имя или пароль');
		}
	}

	if (!token) {
		throw new Error('Не авторизован');
	}
};
