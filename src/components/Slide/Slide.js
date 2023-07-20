import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import * as $ from './Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Background from '~/components/Background';
import Items from '~/components/FilmItems';
import ItemsContext from './itemscontext';
import reducer from './reducer';
import { useReducer, useRef, useState } from 'react';

function Slide(settings) {
	// const [position, setPosition] = useState(0);
	const [position, dispatch] = useReducer(reducer, 0);
	const [widthItem, setWidthItem] = useState(0);
	const refItem = useRef(1);

	const config = {
		type: 'default',
		transitionTime: 1000,
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
		],
	};

	const [list, setList] = useState(config['list']);

	function handleLeft() {
		setList(arr => {
			arr = [...arr, arr[0]];
			console.log('array=', arr);
			return arr;
		});
		setTimeout(() => {
			console.log('co vao day=');
			refItemWrapper.current.style.transition = '';
			dispatch({
				type: 'right',
				payload: 420,
			});
			console.log('style = ', refItemWrapper.current.style);
			setList(arr => {
				console.log('co vao day 123:', arr);
				arr.shift();
				console.log('array set timeout=', arr);
				return [...arr];
			});
		}, config['transitionTime']);
		dispatch({
			type: 'left',
			payload: 420,
		});

		refItemWrapper.current.style.transition = `all ${config['transitionTime'] / 1000}s ease-out`;
	}

	function handleRight() {
		setList(arr => {
			arr = [arr[arr.length - 1], ...arr];
			console.log('array=', arr);
			return arr;
		});
		setTimeout(() => {
			console.log('co vao day=');
			refItemWrapper.current.style.transition = '';
			dispatch({
				type: 'left',
				payload: 420,
			});
			console.log('style = ', refItemWrapper.current.style);
			setList(arr => {
				console.log('co vao day 123:', arr);
				arr.pop();
				console.log('array set timeout=', arr);
				return [...arr];
			});
		}, config['transitionTime']);

		dispatch({
			type: 'right',
			payload: 420,
		});

		refItemWrapper.current.style.transition = `all ${config['transitionTime'] / 1000}s ease-out`;
	}

	Object.assign(config, settings);

	console.log('list re-render:', list);
	return (
		<Background style={{ overflow: 'hidden' }}>
			<Button
				style={{ position: 'absolute', top: '0', bottom: '0', left: '0', zIndex: '100000', margin: '0px' }}
				onClick={() => handleLeft()}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</Button>
			<Button
				style={{ position: 'absolute', top: '0', bottom: '0', right: '0', zIndex: '10000', margin: '0px' }}
				onClick={() => handleRight()}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</Button>
			<$.Frame
				style={{
					marginTop: '20px',
					padding: '0px',
					display: 'flex',
					overflow: 'hidden',
					zIndex: 0,
					justifyContent: 'center',
				}}
			>
				<div
					ref={refItemWrapper}
					style={{
						transform: `translateX(${position}px)`,
						display: 'flex',
						transition: `all ${config['transitionTime'] / 1000}s ease-out`,
						width: '1680px',
					}}
				>
					{console.log('list before rerender:', list)}
					<ItemsContext.Provider value={refItem}>
						<Items
							src="/reviewfilm/"
							items={list}
							type={'HORIZON_DISPLAY_TYPE'}
						/>
					</ItemsContext.Provider>
				</div>
			</$.Frame>
		</Background>
	);
}

export default Slide;
