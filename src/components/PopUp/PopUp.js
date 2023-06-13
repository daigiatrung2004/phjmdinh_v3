import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react';
import Button from '~/components/Button';
import * as $ from './Styles';
import { PUSettings } from '~/utils/StylesBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Images from '~/assets/images';
import Image from '~/components/Image';
import logger from '~/utils/logger';
import { memo } from 'react';
import { useContext } from 'react';
import { TestContext } from '~/pages/TestPopUp';

/*
useEffect 
1. update state
2. update dom (mutated)
3. render UI
4. call clean up uffect
5. call callback uffect

useLayoutEffect
1. update state
2. update dom (mutated)
3. call cleanup useffect ch? ??n khi xong (sync)
4. call callback useeffect ch? ??n khi xong (sync)
5. render UI
*/

// function reducer(state, action) {
// 	switch (action.TYPE) {
// 		case 'increment':
// 			console.log('increment:', state);
// 			state.count = state.count + 1;
// 			return { ...state };
// 		case 'decrease':
// 			state.count = state.count - 1;
// 			console.log('decrease:', state);
// 			return { ...state };
// 	}
// }

// function logger1(state) {
// 	const log = logger('debug123');
// 	log(`state is current : ${JSON.stringify(state)}`);
// 	return state;
// }

function PopUp({ settings }) {
	const [isShow, setIsShow] = useState(true);

	let test = useContext(TestContext);
	console.log('context render:', test);
	// const [state, dispatch] = useReducer(reducer, { count: 0 }, logger1);
	// const [num, setNum] = useState(0);
	const config = {
		shape: PUSettings['shape']['square'],
		isFooter: true,
		isHeader: true,
		content: 'Whoops !!',
		contrast: PUSettings['contrast']['light'],
		border: '5px',
		leftIcon: false,
		rightIcon: false,
		centerIcon: true,
		srcIcon: Images.warning,
		hIcon: '100px',
		wIcon: '100px',
		height: '320px',
		width: '320px',
		top: height => (window.innerHeight - height.replace('px', '') - 3) / 2 + 'px',
		left: width => (window.innerWidth - width.replace('px', '') - 3) / 2 + 'px',
	};

	Object.assign(config, settings);
	let log = logger('debug');
	log(`config : ${config}`);

	// let id = useLayoutEffect(() => {
	// 	if (num > 3) setNum(0);

	// 	console.log('uselayouteffect');
	// 	return 1;
	// }, [num]);

	// let test = useMemo(() => {
	// 	console.log('sdfasdf');
	// 	return 1;
	// }, [num]);

	// console.log('test :', test);
	// console.log('id :', id);

	return (
		isShow && (
			<$.ModalGeneral {...config}>
				{config.isHeader && (
					<$.Header>
						<Button
							theme={{ type: 'default transparent', size: 'small' }}
							stylesCustom={{ position: 'absolute', right: '5px', top: '5px' }}
							onClick={() => setIsShow(false)}
						>
							<FontAwesomeIcon icon={faXmark} />
						</Button>
					</$.Header>
				)}
				<$.Content centerIcon={config.centerIcon}>
					{(config.leftIcon || config.centerIcon) && (
						<Image
							className={'icon'}
							src={config.srcIcon}
							width={config.wIcon}
							height={config.hIcon}
						/>
					)}
					<p>{config.content}</p>
					{/* <p>{state.count}</p> */}
					{config.rightIcon && (
						<Image
							className={'icon'}
							src={config.srcIcon}
							width={config.wIcon}
							height={config.hIcon}
						/>
					)}
				</$.Content>
				{config.isFooter && (
					<$.Footer>
						<Button
							theme={{ type: 'primary', size: 'small fullW' }}
							onClick={() => setIsShow(false)}
							// onClick={() => dispatch({ TYPE: 'increment' })}
						>
							OK
						</Button>
						{/* <Button
							theme={{ type: 'primary', size: 'small fullW' }}
							// onClick={() => setIsShow(false)}
							onClick={() => dispatch({ TYPE: 'decrease' })}
						>
							CANCEL
						</Button> */}
					</$.Footer>
				)}
			</$.ModalGeneral>
		)
	);
}
export default memo(PopUp);
