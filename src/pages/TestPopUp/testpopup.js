import * as $ from './Styles';
import PopUp from '~/components/PopUp';
import { PUSettings } from '~/utils/StylesBase';
import { createContext, useState } from 'react';
import Button from '~/components/Button';

export const TestContext = createContext('123');

console.log('TestContext:', TestContext);

function Testpopup() {
	// let config = {
	// 	shape: PUSettings['shape']['square'],
	// 	isFooter: true,
	// 	isHeader: true,
	// 	content: 'Whoops !!',
	// };
	const [config, setConfig] = useState({
		shape: PUSettings['shape']['square'],
		isFooter: true,
		isHeader: true,
		content: 'Whoops !!',
	});
	const [count, setCount] = useState(0);

	return (
		<TestContext.Provider value={count}>
			<$.Modal>
				{/* <Button
					theme={{ type: 'primary', size: 'medium' }}
					onClick={() => setCount(count + 1)}
				>
					ok
				</Button> */}
				<PopUp settings={config} />
			</$.Modal>
		</TestContext.Provider>
	);
}

export default Testpopup;
