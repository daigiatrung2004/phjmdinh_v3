import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useRef, useState } from 'react';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Items from '~/components/FilmItems';
import * as $ from './Styles';
import ItemsContext from './itemscontext';

const Slide = forwardRef(function (settings, ref) {
	const config = {
		type: 'default',
		transitionTime: 500,
		itemshowlength: 4,
		widthItem: 420,
		list: [
			{
				id: 1,
				backdropPath: '/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg',
				title: 'Áo Giáp Vàng: Thánh Chiến Khởi Đầu',
				originalTitle: 'Knights of the Zodiac',
			},
			{
				id: 2,
				backdropPath: '/woJbg7ZqidhpvqFGGMRhWQNoxwa.jpg',
				title: 'Transformers: Quái Thú Trỗi Dậy',
				originalTitle: 'Transformers: Rise of the Beasts',
			},
			{
				id: 3,
				backdropPath: '/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
				title: 'Xứ Sở Các Nguyên Tố',
				originalTitle: 'Elemental',
			},
			{
				id: 4,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 5,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 6,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 7,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 8,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 9,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 10,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 11,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 12,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 13,
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
			{
				id: 14,
				backdropPath: '/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
				title: 'Xứ Sở Các Nguyên Tố',
				originalTitle: 'Elemental',
			},
		],
	};

	Object.assign(config, settings);

	const [widthItem, setWidthItem] = useState(config['widthItem']);
	const [list, setList] = useState([config['list'].pop(), ...config['list']]);
	const [isTranslateXSlide, setIsTranslateXSlide] = useState(false);
	const [state, setState] = useState(false);
	const [sign, setSign] = useState(null);
	const refWrapper = useRef();
	const [moveClass, setMoveClass] = useState('');

	function handleLeft() {
		setIsTranslateXSlide(true);
		setState(true);
		setSign(1);
		// setList(arr => {
		// 	arr = [...arr, arr[0]];
		// 	return arr;
		// });

		// setTimeout(() => {
		// 	dispatch({
		// 		type: 'right',
		// 		payload: config['widthItem'],
		// 	});

		// 	refWrapper.current.style.transition = `unset`;

		// 	setList(arr => {
		// 		arr.shift();
		// 		return [...arr];
		// 	});
		// }, config['transitionTime']);

		// dispatch({
		// 	type: 'left',
		// 	payload: config['widthItem'],
		// });

		// refWrapper.current.style.transition = `all ${config['transitionTime'] / 1000 + 's'} linear`;

		setList(arr => {
			const itemDelete = arr.shift();
			return [...arr, itemDelete];
		});
	}

	function handleRight() {
		setIsTranslateXSlide(true);
		setState(true);
		// setSign(-1);
		// setList(arr => {
		// 	arr = [arr[arr.length - 1], ...arr];
		// 	console.log('array=', arr);
		// 	return arr;
		// });
		// setTimeout(() => {
		// 	setList(arr => {
		// 		arr.pop();
		// 		return [...arr];
		// 	});
		// }, config['transitionTime']);

		setList(arr => {
			const itemDel = arr.pop();
			return [itemDel, ...arr];
		});
	}

	function handleAnimationEnd() {
		if (moveClass == 'prev') {
			handleLeft();
		} else {
			handleRight();
		}
		setMoveClass('');
	}

	return (
		<Background style={{ overflow: 'hidden' }}>
			<Button
				style={{
					position: 'absolute',
					top: '0',
					bottom: '0',
					left: '0',
					zIndex: '100000',
					margin: '0px',
					backgroundColor: 'rgba(3,37,65,1)',
					color: 'var(--white)',
					fontSize: '30px',
					boxShadow: 'unset',
				}}
				onClick={() => setMoveClass('prev')}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</Button>
			<Button
				style={{
					position: 'absolute',
					top: '0',
					bottom: '0',
					right: '0',
					zIndex: '10000',
					margin: '0px',
					backgroundColor: 'rgba(3,37,65,1)',
					color: 'var(--white)',
					fontSize: '30px',
					boxShadow: 'unset',
				}}
				onClick={() => {
					setMoveClass('next');
				}}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</Button>
			<$.Frame
				ref={ref}
				style={{
					marginTop: '20px',
					padding: '0px',
					display: 'flex',
					overflow: 'hidden',
					zIndex: 0,
					paddingLeft: '50px',
					paddingRight: '100px',
				}}
			>
				<$.Div
					ref={refWrapper}
					itemshowlength={config['itemshowlength']}
					widthitem={widthItem}
					position={widthItem}
					transitiontime={config['transitionTime']}
					className={moveClass}
					onAnimationEnd={handleAnimationEnd}
				>
					<ItemsContext.Provider value={setWidthItem}>
						<Items
							sign={sign}
							state={state}
							setState={setState}
							w={widthItem}
							src="/reviewfilm/"
							items={list}
							type={'HORIZON_DISPLAY_TYPE'}
							isslide={'true'}
							translatexslide={`${isTranslateXSlide}`}
							transitiontime={config['transitionTime']}
							transform={widthItem}
						/>
					</ItemsContext.Provider>
				</$.Div>
			</$.Frame>
		</Background>
	);
});

export default Slide;
