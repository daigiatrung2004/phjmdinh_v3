import Home from '~/pages/Home';
import ReviewFilm from '~/pages/ReviewFilm';

export const privateRoutes = [
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/reviewfilm/*',
		component: <ReviewFilm />,
	},
];

export const publicRoutes = [];
