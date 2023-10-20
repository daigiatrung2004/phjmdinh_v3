import { get } from '~/utils/httpRequest';

export const search = async (query, page, ...options) => {
	try {
		let response = await get('/search/movie', {
			params: {
				query,
				page,
				...options,
			},
		});

		let data = JSON.parse(response.data);
		return data.results;
	} catch (error) {
		console.log(error);
		throw Error('error happened!');
	}
};
