// import Home from '~/pages/Home';
import ReviewFilm from '~/pages/ReviewFilm';
import Testpopup from '~/pages/TestPopUp';
import Error from '~/pages/Static/Error';
import PageTool from '~/pages/PageTool';
import Images from '~/assets/images';
import Watch from '~/pages/WatchFilm';
import About from '~/pages/LandingPage/About';
import Privacy from '~/pages/LandingPage/Privacy';
import TermOfUse from '~/pages/LandingPage/TermOfUse';
import PreInstall from '~/pages/LandingPage/PreInstall';
import OverSea from '~/pages/LandingPage/OverSea';
import PartnerShip from '~/pages/LandingPage/PartnerShip';
import { lazy } from 'react';
import Feedback from '~/pages/LandingPage/Feedback';

const Home = lazy(() => import('~/pages/Home'));

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
		path: '/tool',
		component: <PageTool />,
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
	{
		path: '/watch ',
		component: <Watch />,
	},
	{
		path: '/aboutus',
		component: <About />,
		denp: 'landing',
	},
	{
		path: '/privacy',
		component: <Privacy />,
		denp: 'landing',
	},
	{
		path: '/termofuse',
		component: <TermOfUse />,
		denp: 'landing',
	},
	{
		path: '/preinstall',
		component: <PreInstall />,
		denp: 'landing',
	},
	{
		path: '/oversea',
		component: <OverSea />,
		denp: 'landing',
	},
	{
		path: '/partnership',
		component: <PartnerShip />,
		denp: 'landing',
	},
	{
		path: '/feedback',
		component: <Feedback />,
		denp: 'landing',
	},
];

export const publicRoutes = [];
