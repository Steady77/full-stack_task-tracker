import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { prisma } from './src/prisma.js';
import { exeption } from './src/middleware/exeption.js';
import taskRoutes from './src/routes/task-router.js';
import authRoutes from './src/routes/auth-router.js';
import adminRoutes from './src/routes/admin-router.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

	app.use(cors());
	app.use(express.json());

	app.use('/api', taskRoutes);
	app.use('/api/auth', authRoutes);
	app.use('/api/admin', adminRoutes);

	app.use(exeption);

	app.listen(PORT, () => {
		console.log('Server started');
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
