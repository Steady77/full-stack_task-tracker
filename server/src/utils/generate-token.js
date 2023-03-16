import jwt from 'jsonwebtoken';

export const generateToken = (id, isAdmin) =>
	jwt.sign(
		{
			id,
			isAdmin,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '10d',
		},
	);
