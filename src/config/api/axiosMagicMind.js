import axios from 'axios';

import { BASE_URL } from './apiEndpoints';

const axiosMagicMind = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

axiosMagicMind.interceptors.request.use(
	request => {
		return request;
	},
	error => {
		return Promise.reject(error);
	}
);

axiosMagicMind.interceptors.response.use(
	response => {
		return Promise.resolve(response.data);
	},
	error => {
		return Promise.reject(error);
	}
);

export default axiosMagicMind;

export const axiosMagicMindFileUpload = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});

axiosMagicMindFileUpload.interceptors.request.use(
	request => {
		return request;
	},
	error => {
		return Promise.reject(error);
	}
);

axiosMagicMindFileUpload.interceptors.response.use(
	response => {
		return Promise.resolve(response.data);
	},
	error => {
		return Promise.reject(error);
	}
);


