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

const Square = styled.div`
	height: 320px;
	width: 320px;
	background-color: ${({ contrast }) => contrast};
	animation: ${vibrateAnimation} 0.6s ease-out 1 normal forwards;
	display: flex;
	flex-direction: column;
`;

const Rectangle = styled(Square)`
	height: 520px;
`;

export const ModalGeneral = ({ shape, children, contrast, border }) => {
	if (shape === PUSettings['shape']['square']) {
		return (
			<Square
				contrast={contrast}
				border={border}
			>
				{children}
			</Square>
		);
	}
	return (
		<Rectangle
			contrast={contrast}
			border={border}
		>
			{children}
		</Rectangle>
	);
};

export const Header = styled.div`
	border-radius: 5px;
`;

export const Footer = styled(Header)`
	border-radius: 0px;
`;

export const Content = styled.div`
	flex-grow: 1;
`;
