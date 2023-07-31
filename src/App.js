import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoadingIcon } from '~/components/Icons';
import Layout from '~/layouts/defaultlayout';
import routes from '~/routes';

function App() {
	return (
		<Router>
			<div className="App">
				<Suspense fallback={<LoadingIcon />}>
					<Routes>
						{routes.privateRoutes &&
							routes.privateRoutes.map((route, index) => {
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
