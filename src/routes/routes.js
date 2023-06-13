import Home from '~/pages/Home';
import ReviewFilm from '~/pages/ReviewFilm';
import Testpopup from '~/pages/TestPopUp';
import Error from '~/pages/Static/Error';
import Images from '~/assets/images';

export const privateRoutes = [
	{
		path: '*',
		component: (
			<Error
				settings={{
					title: 'Oops! Something wrong!',
					background: '',
					detail: 'Sorry, something wrong! Please click button go to homepage!',
					hasErrorType: true,
					errCode: '404',
					errMsg: 'Not Found',
					isLeftImg: true,
					isRightImg: false,
					isCenterImg: false,
					leftImg: Images.error,
					rightImg: '',
					centerImg: '',
				}}
			/>
		),
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
