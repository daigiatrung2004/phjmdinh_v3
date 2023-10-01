import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function LayoutLanding({ children }) {
	return (
		<>
			<Header layout={'landing'} />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default LayoutLanding;
