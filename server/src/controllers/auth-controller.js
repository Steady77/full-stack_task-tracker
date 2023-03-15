import AuthService from '../services/auth-service.js';

class AuthController {
	async login(req, res, next) {
		try {
			const { name, password } = req.body;

			const { user, token } = await AuthService.login(name, password);

			res.status(200).json({
				name: user.name,
				isAdmin: user.isAdmin,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new AuthController();
