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

const Square = styled.div`
	position: absolute;
	top: ${({ top, height }) => (top ? top(height) : '0')};
	left: ${({ left, width }) => (left ? left(width) : '0')};
	height: ${({ height }) => (height ? height : '320px')};
	width: ${({ width }) => (width ? width : '320px')};
	background-color: ${({ contrast }) => contrast};
	animation: ${vibrateAnimation} 0.6s ease-out 1 normal forwards;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.06) 0px 2px 4px -1px;
	z-index: 10000;
`;

const Rectangle = styled(Square)`
	height: 520px;
`;

const Toast = styled.div`
	position: fixed;
	display: flex;
	padding: 0px 10px 0px 10px;
	top: 5px;
	right: 5px;
	background-color: ${({ contrast }) => contrast};
	border-radius: 5px;
	animation: ${transitionAnimation} 0.6s ease-out 1 normal forwards;
	flex-direction: column;
`;

export const ModalGeneral = ({ type, shape, children, contrast, border, ...style }) => {
	if (type == 'Error') {
		return (
			<Toast
				contrast={contrast}
				border={border}
				{...style}
			>
				{children}
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
	justify-content: space-between;
	align-items: center;
	flex-direction: ${centerIcon => (centerIcon ? 'row' : 'column')};
	padding: 25px;
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
