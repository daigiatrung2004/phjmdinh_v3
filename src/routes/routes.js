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
import Support from '~/pages/LandingPage/Support';

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
		path: '/phjmdinh_v3/tool',
		component: <PageTool />,
	},
	{
		path: '/phjmdinh_v3/abc',
		component: <Home />,
	},
	{
		path: '/phjmdinh_v3/reviewfilm/*',
		component: <ReviewFilm />,
	},
	{
		path: '/phjmdinh_v3',
		component: <Testpopup />,
	},
	{
		path: '/phjmdinh_v3/watch ',
		component: <Watch />,
	},
	{
		path: '/phjmdinh_v3/aboutus',
		component: <About />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/privacy',
		component: <Privacy />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/termofuse',
		component: <TermOfUse />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/preinstall',
		component: <PreInstall />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/oversea',
		component: <OverSea />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/partnership',
		component: <PartnerShip />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/feedback',
		component: <Feedback />,
		denp: 'landing',
	},
	{
		path: '/phjmdinh_v3/support',
		component: <Support />,
		denp: 'landing',
	},
];

export const publicRoutes = [];
