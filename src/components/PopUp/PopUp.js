import { faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, isValidElement, memo, useEffect, useState } from 'react';
import Images from '~/assets/images';
import Button from '~/components/Button';
import Image from '~/components/Image';
import useTimeOutEffect from '~/hooks/useTimeOutEffect';
import { PUSettings } from '~/utils/StylesBase';
import * as $ from './Styles';
import { createPortal } from 'react-dom';

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

const PopUp = forwardRef(function ({ settings, onClick, type = 'Error', ...propsDefault }, ref) {
	const [isShow, setIsShow] = useState(true);
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
			srcIcon: {
				type: Image,
				props: {
					className: 'icon',
					src: Images.warning,
					width: '80px',
					height: '80px',
				},
			},
			// srcIcon: {
			// 	type: Warning,
			// 	props: {
			// 		width: '80px',
			// 		height: '80px',
			// 	},
			// },
			hIcon: '80px',
			wIcon: '80px',
			height: '320px',
			width: '320px',
			top: height => (window.innerHeight - height.replace('px', '') - 3) / 2 + 'px',
			left: width => (window.innerWidth - width.replace('px', '') - 3) / 2 + 'px',
			isOverlay: false,
			timeVibrate: 600,
		},
		Error: {
			type: 'Error',
			leftIcon: true,
			rightIcon: false,
			centerIcon: false,
			isFooter: false,
			isHeader: true,
			srcIcon: {
				type: FontAwesomeIcon,
				props: {
					icon: faCircleCheck,
					style: { fontSize: '20px', color: '#3dff3d' },
				},
			},
			content: 'No message!!!',
			contrast: PUSettings['contrast']['light'],
			hIcon: '80px',
			wIcon: '80px',
			height: '320px',
			width: '320px',
			position: 'left',
			isOverlay: false,
			timeOut: 2000,
			timeTransition: 600,
		},
	};

	Object.assign(config[type], settings);
	let IconComponent = {
		type: Image,
		props: {
			src: '',
		},
	};
	let isExpiredTime = useTimeOutEffect(isShow, (config[type].timeOut ?? 0) + 300);

	useEffect(() => {
		if (type == 'Error' && isShow) setIsShow(isExpiredTime);
	}, [isExpiredTime]);

	if (typeof config[type].srcIcon == 'string') {
		Object.assign(IconComponent, {
			props: {
				className: 'icon',
				src: config[type].srcIcon,
				width: config[type].wIcon,
				height: config[type].hIcon,
			},
		});
	} else if (isValidElement(config[type].srcIcon)) {
		IconComponent = config[type].srcIcon;
	} else if (typeof config[type].srcIcon == 'object') {
		Object.assign(IconComponent, config[type].srcIcon);
	}

	return (
		isShow &&
		createPortal(
			<>
				{config[type].isOverlay && <$.Overlay />}
				<$.ModalGeneral
					ref={ref}
					{...config[type]}
					{...propsDefault}
				>
					{config[type].isHeader && (
						<$.Header>
							<Button
								theme={{ type: 'default transparent', size: 'small' }}
								stylesCustom={{ position: 'absolute', right: '2px', top: '2px' }}
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
						<$.Content style={{ padding: '10px', paddingTop: '5px' }}>
							{config[type].leftIcon && (
								<$.Icon>
									{isValidElement(IconComponent) ? (
										IconComponent
									) : (
										<IconComponent.type {...IconComponent.props} />
									)}
								</$.Icon>
							)}
							<p>{config[type].content}</p>
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
								<$.Icon>
									{isValidElement(IconComponent) ? (
										IconComponent
									) : (
										<IconComponent.type {...IconComponent.props} />
									)}
								</$.Icon>
							)}
							<p>{config[type].content}</p>
							{config[type].rightIcon && (
								<$.Icon>
									{isValidElement(IconComponent) ? (
										IconComponent
									) : (
										<IconComponent.type {...IconComponent.props} />
									)}
								</$.Icon>
							)}
						</$.Content>
					)}
					{config[type].isFooter && (
						<$.Footer>
							<Button
								theme={{ type: 'primary', size: 'small fullW' }}
								onClick={() => {
									setIsShow(false);
									typeof onClick == 'function' && onClick();
								}}
							>
								OK
							</Button>
						</$.Footer>
					)}
				</$.ModalGeneral>
			</>,
			document.body,
			1
		)
	);
});
export default memo(PopUp);
