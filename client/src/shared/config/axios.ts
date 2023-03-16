import axios from 'axios';
import { TOKEN } from '../utils/consts';
import { SERVER_URL } from './api';

export const axiosServer = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: localStorage.getItem(TOKEN)
			? `Bearer ${localStorage.getItem(TOKEN)}`
			: '',
	},
});
