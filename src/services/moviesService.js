import { get, getTest } from '~/utils/httpRequest';

export const getTrending = async ({ page = 1, adults, ...options }) => {
	try {
		// let response = await get('/movie/top_rated', {
		// 	params: {
		// 		page,
		// 		adults,
		// 		...options,
		// 	},
		// });

		let response = await getTest('/trending', {
			params: {
				page,
				adults,
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

export const getUpComing = async ({ page = 1, adults, ...options }) => {
	try {
		let response = await get('/movie/upcoming', {
			params: {
				page,
				adults,
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

export const getPopular = async ({ page = 1, adults, ...options }) => {
	try {
		let response = await get('/movie/popular', {
			params: {
				page,
				adults,
				...options,
			},
		});

		let data = JSON.parse(response.data);
		console.log('data =', data);
		return data.results;
	} catch (error) {
		console.log(error);
		throw Error('error happened!');
	}
};

export const getLastest = async ({ page = 1, adults, ...options }) => {
	try {
		let response = await get('/movie/latest', {
			params: {
				page,
				adults,
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

export const getItemFilm = async id => {
	try {
		let response = await get(`/movie/${id}`);

		let data = JSON.parse(response.data);
		return data;
	} catch (error) {
		console.log(error);
		throw Error('error happened!');
	}
};
