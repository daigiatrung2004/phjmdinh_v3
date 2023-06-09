import styled, { keyframes } from 'styled-components';

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
	background-color: #15232d;
	animation: ${vibrateAnimation} 0.6s ease-out 1 normal forwards;
`;

const Rectangle = styled(Square)`
	height: 520px;
`;

export const ModalGeneral = ({ shape }) => {
	// console.log('shape:', shape);
	// console.log('shape:', shape == 'square');
	// console.log(Rectangle);
	// console.log(<Square />);
	if (shape == 'square') {
		return <Square />;
	}
	return <Rectangle />;
};

export const Header = styled.div`
	background-color: #15232d;
	border: 1px solid white;
	border-radius: 5px;
`;

export const Footer = styled(Header)`
	border-radius: 0px;
`;
