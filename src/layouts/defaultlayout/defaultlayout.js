import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';
import { LoadingIcon } from '~/components/Icons/icons';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
	// const Test = lazy(() => import('~/pages/WatchFilm'));
	// console.log('test layout============:', Test);
	return (
		<Suspense fallback={<LoadingIcon />}>
			{/* <Header /> */}
			{/* <Test /> */}
			<main>{children}</main>
			{/* <Footer /> */}
		</Suspense>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
