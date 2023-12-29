import PropTypes from 'prop-types';
import { Suspense } from 'react';
import Loading from '~/components/Loading';
import Footer from '~/layouts/components/Footer';
import Header from '~/layouts/components/Header';
import * as $ from './Styles';

function DefaultLayout({ children }) {
	// const Test = lazy(() => import('~/pages/WatchFilm'));
	return (
		<Suspense fallback={<Loading />}>
			{/* <Header /> */}
			{/* <Test /> */}
			<$.Main>{children}</$.Main>
			{/* <Footer /> */}
		</Suspense>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
