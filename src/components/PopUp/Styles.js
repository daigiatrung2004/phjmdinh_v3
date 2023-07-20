import styled, { keyframes } from 'styled-components';
import { PUSettings } from '~/utils/StylesBase';

const vibrateAnimation = keyframes`
	0% {
		transform: scale(0);
	}

	66% {
		transform: scale(1.25);
	}

	100% {
		transform: scale(1);
	}
`;

const transitionAnimation = keyframes`
	0% {
		transform: translateX(50%)
	}

	66% {
		transform: translateX(-10%)
	}

	100% {
		transform: translateX(0%)
	}
`;

const processAnimation = keyframes`
	0% {
		width: 0%;
		border-bottom-right-radius: 0px;
	}

	100% {
		width: 100%;
		border-bottom-right-radius: 5px;
	}
`;

const Square = styled.div`
	position: absolute;
	top: ${({ top, height }) => (top ? top(height) : '0')};
	left: ${({ left, width }) => (left ? left(width) : '0')};
	height: ${({ height }) => (height ? height : '320px')};
	width: ${({ width }) => (width ? width : '320px')};
	background-color: ${({ contrast }) => contrast};
	animation: ${vibrateAnimation} ${({ timeVibrate }) => `${timeVibrate ? timeVibrate / 1000 : 0.6}s`} ease-out 1
		normal forwards;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.06) 0px 2px 4px -1px;
	z-index: 100000;
`;

const Rectangle = styled(Square)`
	height: 520px;
`;

const Toast = styled.div`
	position: fixed;
	display: flex;
	top: 5px;
	right: 5px;
	background-color: ${({ contrast }) => contrast};
	border-radius: 5px;
	animation: ${transitionAnimation} ${({ timeTransition }) => `${timeTransition ? timeTransition / 1000 : 0.6}s`}
		ease-out 1 normal forwards;
	flex-direction: column;
	min-width: 200px;
	z-index: 100000;
`;

const ProcessBar = styled.div`
	height: 5px;
	background-color: var(--primary);
	animation: ${processAnimation} ${({ timeOut }) => `${timeOut ? timeOut / 1000 : 2}s`} ease-in 1 normal forwards;
	border-bottom-left-radius: 5px;
`;

export const ModalGeneral = ({ type, shape, children, contrast, border, timeOut, ...style }) => {
	if (type == 'Error') {
		return (
			<Toast
				contrast={contrast}
				border={border}
				{...style}
			>
				{children}
				<ProcessBar timeOut={timeOut} />
			</Toast>
		);
	}

	if (shape === PUSettings['shape']['square']) {
		return (
			<Square
				contrast={contrast}
				border={border}
				{...style}
			>
				{children}
			</Square>
		);
	}
	return (
		<Rectangle
			contrast={contrast}
			border={border}
			{...style}
		>
			{children}
		</Rectangle>
	);
};

export const Header = styled.div`
	border-radius: 5px;
	position: relative;
	min-height: 10px;
`;

export const Footer = styled(Header)`
	border-radius: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 25px;
`;

export const Content = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${({ centerIcon }) => {
		console.log(centerIcon);
		return centerIcon ? 'column' : 'row';
	}};
	padding: 25px;

	& > p {
		padding-left: 5px;
		padding-right: 5px;
		margin: 0px;
		flex-grow: 1;
		text-align: left;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
	background-color: var(--white);
	opacity: 0.1;
	overflow: hidden;
	z-index: 9900;
`;

export const Icon = styled.div`
	display: flex;
	justify-content: center;
	width: 20%;
	align-items: center;
`;
