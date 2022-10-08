import axios from 'axios';

const httpRequest = axios.create({
	baseURL: process.env.REACT_APP_API_URL_ORIGIN,
	params: {
		api_key: process.env.REACT_APP_API_KEY,
		language: 'vi-VN',
	},
	timeout: 1000,
	transformResponse: [
		function (data) {
			let regexList = data.match(/_\w/gim);
			let regexUniList = new Set(regexList);
			for (let regex of regexUniList) {
				data = data.replace(new RegExp(regex, 'gmi'), regex.replace('_', '').toUpperCase());
			}
			return data;
		},
	],
});

export const get = async (path, options = {}) => {
	return await httpRequest.get(path, options);
};
