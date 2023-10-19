import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loading from '~/components/Loading';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';

function DefaultLayout({ children }) {
	// const Test = lazy(() => import('~/pages/WatchFilm'));
	// console.log('test layout============:', Test);
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			{/* <Test /> */}
			<main style={{ paddingBottom: '30rem' }}>{children}</main>
			<Footer />
		</Suspense>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
