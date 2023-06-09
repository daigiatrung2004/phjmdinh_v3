import Home from '~/pages/Home';
import ReviewFilm from '~/pages/ReviewFilm';
import Testpopup from '~/pages/TestPopUp/testpopup';

export const privateRoutes = [
	{
		path: '/abc',
		component: <Home />,
	},
	{
		path: '/reviewfilm/*',
		component: <ReviewFilm />,
	},
	{
		path: '/',
		component: <Testpopup />,
	},
];

export const publicRoutes = [];
