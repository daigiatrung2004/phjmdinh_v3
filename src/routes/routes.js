import Home from '~/pages/Home';
import ReviewFilm from '~/pages/ReviewFilm';
import Testpopup from '~/pages/TestPopUp';
import Error from '~/pages/Static/Error';

export const privateRoutes = [
	{
		path: '*',
		component: <Error message={'404 oOps!'} />,
	},
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
