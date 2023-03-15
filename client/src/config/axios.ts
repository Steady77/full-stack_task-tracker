import axios from 'axios';
import { SERVER_URL } from './api';

export const axiosServer = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
