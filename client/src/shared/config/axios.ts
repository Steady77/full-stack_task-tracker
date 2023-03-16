import axios from 'axios';
import Cookies from 'js-cookie';
import { TOKEN } from '../utils/consts';
import { SERVER_URL } from './api';

export const axiosServer = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : '',
	},
});
