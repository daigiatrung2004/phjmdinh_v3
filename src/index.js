import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/pages/TestPopUp';
import GlobalStyles from '~/components/Globalstyles';

ReactDOM.render(
	// <RouterProvider router={router} />,
	// <React.StrictMode>
	<GlobalStyles>
		<App />
	</GlobalStyles>,
	// </React.StrictMode>,
	document.getElementById('root')
);
