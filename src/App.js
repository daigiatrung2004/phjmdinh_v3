import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoadingIcon } from '~/components/Icons';
import DefaultLayout from '~/layouts/defaultlayout';
import LandingLayout from '~/layouts/LayoutLanding';
import LayoutAdmin from '~/layouts/LayoutAdmin';
import routes from '~/routes';

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<LoadingIcon />}>
					<Routes>
						{routes.privateRoutes &&
							routes.privateRoutes.map((route, index) => {
								let Layout;
								switch (route.denp) {
									case 'landing':
										Layout = LandingLayout;
										break;
									case 'admin':
										Layout = LayoutAdmin;
										break;
									default:
										Layout = DefaultLayout;
										break;
								}
								return (
									<Route
										key={index}
										path={route.path}
										element={<Layout>{route.component}</Layout>}
									/>
								);
							})}
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
