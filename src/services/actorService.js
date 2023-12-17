import { get } from '~/utils/httpRequest';

export const getCastFilms = async ({ query, page, id, ...options }) => {
	try {
		let response = await get(`/movie/${id}/casts`, {
			params: {
				query,
				page,
				...options,
			},
		});

		let data = JSON.parse(response.data);
		return data.cast.slice(0, 10);
	} catch (error) {
		console.log(error);
		throw Error('error happened!');
	}
};
