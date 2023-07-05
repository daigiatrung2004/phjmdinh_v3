import { useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useState } from 'react';
import Button from '~/components/Button';
import * as $ from './Styles';
import { PUSettings } from '~/utils/StylesBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Images from '~/assets/images';
import Image from '~/components/Image';
import logger from '~/utils/logger';
import { memo } from 'react';
import { useContext } from 'react';
import { TestContext } from '~/pages/TestPopUp';
import { Warning } from '~/components/Icons';
import useTimeOutEffect from '~/hooks/useTimeOutEffect';

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

function PopUp({ settings, onClick, type = 'Error', ...propsDefault }) {
	const [isShow, setIsShow] = useState(true);
	// const [state, dispatch] = useReducer(reducer, { count: 0 }, logger1);
	// const [num, setNum] = useState(0);
	const config = {
		Normal: {
			type: 'Normal',
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
			hIcon: '80px',
			wIcon: '80px',
			height: '320px',
			width: '320px',
			top: height => (window.innerHeight - height.replace('px', '') - 3) / 2 + 'px',
			left: width => (window.innerWidth - width.replace('px', '') - 3) / 2 + 'px',
			isOverlay: false,
		},
		Error: {
			type: 'Error',
			leftIcon: true,
			rightIcon: false,
			centerIcon: false,
			isFooter: false,
			isHeader: true,
			srcIcon: Images.warning,
			content: 'No message!!!',
			contrast: PUSettings['contrast']['light'],
			hIcon: '80px',
			wIcon: '80px',
			height: '320px',
			width: '320px',
			position: 'left',
			isOverlay: false,
			timeOut: 2000,
		},
	};
	Object.assign(config[type], settings);
	let isExpiredTime = useTimeOutEffect(isShow, config[type].timeOut);

	useEffect(() => {
		// console.log('isExpiredTime:', isExpiredTime);
		if (type == 'Error' && isShow) setIsShow(isExpiredTime);
	}, [isExpiredTime]);

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
			<>
				{config[type].isOverlay && <$.Overlay />}
				<$.ModalGeneral
					{...config[type]}
					{...propsDefault}
				>
					{config[type].isHeader && (
						<$.Header>
							<Button
								theme={{ type: 'default transparent', size: 'small' }}
								stylesCustom={{ position: 'absolute', right: '5px', top: '5px' }}
								onClick={() => {
									setIsShow(false);
									typeof onClick == 'function' && onClick();
								}}
							>
								<FontAwesomeIcon icon={faXmark} />
							</Button>
						</$.Header>
					)}
					{type == 'Error' ? (
						<$.Content style={{ padding: '10px' }}>
							{(config[type].leftIcon || config[type].centerIcon) && (
								<$.Icon>
									<FontAwesomeIcon
										icon={faCircleCheck}
										style={{ fontSize: '20px', color: '#3dff3d' }}
									/>
								</$.Icon>
							)}
							<div>{config[type].content}</div>
							{config[type].rightIcon && (
								<$.Icon>
									<FontAwesomeIcon
										icon={faCircleCheck}
										style={{ fontSize: '20px' }}
									/>
								</$.Icon>
							)}
						</$.Content>
					) : (
						<$.Content centerIcon={config[type].centerIcon}>
							{(config[type].leftIcon || config[type].centerIcon) && (
								// <Image
								// 	className={'icon'}
								// 	src={config[type].srcIcon}
								// 	width={config[type].wIcon}
								// 	height={config[type].hIcon}
								// />
								<Warning
									width={config[type].wIcon}
									height={config[type].hIcon}
								/>
								// <LoadingIcon
								// 	width="100px"
								// 	height="100px"
								// />
							)}
							<p>{config[type].content}</p>
							{/* <p>{state.count}</p> */}
							{config[type].rightIcon && (
								<Image
									className={'icon'}
									src={config[type].srcIcon}
									width={config[type].wIcon}
									height={config[type].hIcon}
								/>
							)}
						</$.Content>
					)}
					{console.log('log:', config[type].isFooter)}
					{config[type].isFooter && (
						<$.Footer>
							<Button
								theme={{ type: 'primary', size: 'small fullW' }}
								onClick={() => {
									setIsShow(false);
									typeof onClick == 'function' && onClick();
								}}
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
				{/* </$.Overlay> */}
			</>
		)
	);
}
export default memo(PopUp);
