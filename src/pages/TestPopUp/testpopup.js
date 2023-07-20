import * as $ from './Styles';
import PopUp from '~/components/PopUp';
import { PUSettings } from '~/utils/StylesBase';
import { createContext, useState, useEffect } from 'react';
import { Success } from '~/components/Icons';
import TabList from '~/components/TabList';
import Slide from '~/components/Slide/Slide';
import { useTransition, animated } from '@react-spring/web';
import './test.css';

export const TestContext = createContext('123');

console.log('TestContext:', TestContext);

const dataCards = [
	{
		index: 0,
		imageURL:
			'https://upload.wikimedia.org/wikipedia/ru/thumb/1/1a/Microsoft_Flight_Simulator_2020_cover.jpeg/533px-Microsoft_Flight_Simulator_2020_cover.jpeg',
	},
	{
		index: 1,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg',
	},
	{
		index: 2,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/4/43/Star_Wars_Jedi_Survivor.jpg',
	},
	{
		index: 3,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg',
	},
	{
		index: 4,
		imageURL: 'https://www.theloadout.com/wp-content/sites/theloadout/2022/07/nba-2k23-cover-athletes-10.jpg',
	},
];
const getDataFromIndex = (data, initialIndex) => {
	const result = [];
	let index = initialIndex;
	for (let i = 0; i < data.length; i++) {
		if (index >= data.length) {
			index = 0;
		}
		result.push(data[index]);
		if (result.length === 3) {
			break;
		}
		index++;
	}

	return result;
};

const CARD_WIDTH = 250;
const X_TRANSITION = 150;

const Cards = () => {
	const [data, setData] = useState(getDataFromIndex(dataCards, 0));

	useEffect(() => {
		let index = 1;
		setInterval(() => {
			setData(getDataFromIndex(dataCards, index));
			index++;
			if (index >= dataCards.length) {
				index = 0;
			}
		}, 2500);
	}, []);

	const transitions = useTransition(
		data.map((item, i) => ({
			...item,
			x: i * CARD_WIDTH,
			scale: i !== 1 ? 0.8 : 1,
		})),
		{
			from: ({ x }) => ({ x: x + X_TRANSITION, opacity: 0, scale: 0.6 }),
			enter: ({ x, scale }) => ({ x, opacity: 1, scale }),
			leave: ({ x }) => ({ x: x - X_TRANSITION, opacity: 0, scale: 0.6 }),
			update: ({ x, scale }) => ({ x, scale }),
			keys: ({ index }) => index,
		}
	);

	return (
		<div className="cards">
			{transitions((style, item) => (
				<animated.div
					className="card"
					style={{ '--url': `url(${item.imageURL})`, ...style }}
				/>
			))}
		</div>
	);
};

const Decorations = () => (
	<>
		<div className="purple-circle" />
		<div className="gradient-circle-bottom" />
		<div className="green-circle" />
		<div className="yellow-circle" />
		<div className="gradient-circle" />
		<div className="dashed-circle">
			{Array.from({ length: 15 }).map(_ => (
				<div className="line" />
			))}
		</div>
		<div className="little-green-circle" />
	</>
);

const App = () => (
	<div className="app">
		<Decorations />
		<Cards />
	</div>
);

function Testpopup() {
	// let config = {
	// 	shape: PUSettings['shape']['square'],
	// 	isFooter: true,
	// 	isHeader: true,
	// 	content: 'Whoops !!',
	// };
	const [config, setConfig] = useState({
		shape: PUSettings['shape']['square'],
		// srcIcon: Success,
		isFooter: false,
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
				{/* <TabList /> */}
				<Slide />
			</$.Modal>
			{/* <App /> */}
		</TestContext.Provider>
	);
}

export default Testpopup;
