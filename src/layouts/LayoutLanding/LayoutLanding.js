import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function LayoutLanding({ children }) {
	return (
		<>
			<Header layout={'landing'} />
			<main style={{ paddingBottom: '30rem' }}>{children}</main>
			<Footer />
		</>
	);
}

export default LayoutLanding;
