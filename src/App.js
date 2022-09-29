import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '~/layouts/defaultlayout';
import routes from '~/routes';

function App() {
	return (
		<Router>
			<div className="App">
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
			</div>
		</Router>
	);
}

export default App;
