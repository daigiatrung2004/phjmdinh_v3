import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
