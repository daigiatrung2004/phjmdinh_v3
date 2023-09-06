import * as $ from './Styles';
import PopUp from '~/components/PopUp';
import { PUSettings } from '~/utils/StylesBase';
import { createContext, useState, useEffect } from 'react';
import { Success } from '~/components/Icons';
import TabList from '~/components/TabList';
import Slide from '~/components/Slide/Slide';
import { useTransition, animated } from '@react-spring/web';
import Image from '~/components/Image';
import './test.css';
import { flushSync } from 'react-dom';
import Loading from '~/components/Loading';

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

const List = ({ children, scale }) => {
	return (
		<div
			style={{
				display: 'flex',
			}}
		>
			{children}
		</div>
	);
};

const Cardo = ({ src, scale, className, onAnimationEnd }) => (
	<div
		className={className}
		onAnimationEnd={onAnimationEnd}
		style={{
			transform: `scale(${scale})`,
		}}
	>
		<Image
			src={src}
			style={{
				height: '300px',
				width: '200px',
				borderRadius: '5px',
				margin: '0px 5px 0px 5px',
				// transform: `scale(${scale})`,
				// animation: `${(scale == 1.1 && 'scaleItem') || 'scaleItemNormal'} 0.2s ease-out forwards`,
				// transition: 'all 0.2s linear',
				boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
				imageRendering: 'auto',
			}}
		/>
	</div>
);

function Testpopup() {
	// let config = {
	// 	shape: PUSettings['shape']['square'],
	// 	isFooter: true,
	// 	isHeader: true,
	// 	content: 'Whoops !!',
	// };
	const [list, setList] = useState([dataCards[0], dataCards[1], dataCards[2]]);
	const [dataOri, setDataOri] = useState(dataCards);
	const [index, setIndex] = useState(0);
	const [config, setConfig] = useState({
		shape: PUSettings['shape']['square'],
		// srcIcon: Success,
		isFooter: false,
		isHeader: true,
		content: 'Whoops !!',
	});

	function handleDisplay(index) {
		// const arrDelete = currentArr.splice(0, index + 1);
		// currentArr.push(...arrDelete);
		let dataTmp;
		setDataOri(dataOriPrev => {
			dataTmp = dataOriPrev;
			return dataOriPrev;
		});
		return dataTmp.slice(0, 4);
	}

	const [moveClass, setMoveClass] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			let indexTmp;
			setIndex(index => {
				indexTmp = index;
				if (indexTmp + 1 > 5) {
					return (indexTmp = 0);
				} else {
					return (indexTmp = indexTmp + 1);
				}
			});
			setList(handleDisplay(indexTmp));
			setMoveClass('center');
		}, 4000);
	}, []);

	function handleAnimationEnd() {
		if (moveClass != '') {
			const currentArr = [...dataOri];
			const arrDelete = currentArr.splice(0, 1);
			currentArr.push(...arrDelete);
			console.log('animationEnd:', currentArr);
			setList(currentArr.slice(0, 3));
			setDataOri(currentArr);
			setMoveClass('');
		}
	}

	return (
		<TestContext.Provider value={count}>
			{/* <$.Modal> */}
			{/* <Button
					theme={{ type: 'primary', size: 'medium' }}
					onClick={() => setCount(count + 1)}
				>
					ok
				</Button> */}
			{/* <PopUp settings={config} /> */}
			{/* <TabList /> */}
			{/* <Slide />
			</$.Modal> */}
			{/* <App /> */}
			<List>
				{list.map((item, index) => {
					let className;
					if (moveClass == '') {
						className = '';
					} else if (index == 1) {
						className = 'center';
					} else if (index == 2) {
						className = 'right';
					} else if (index == 3) {
						className = 'hidden';
					} else {
						className = 'left';
					}

					console.log('className:', className);

					return (
						<Cardo
							key={`card-${index}`}
							src={item.imageURL}
							scale={index % 2 != 0 && index % 3 != 0 ? 1.1 : 0.8}
							className={className}
							onAnimationEnd={handleAnimationEnd}
						/>
					);
				})}
			</List>
			{/* <Loading /> */}
		</TestContext.Provider>
	);
}

export default Testpopup;
