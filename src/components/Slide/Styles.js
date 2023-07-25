import styled, { keyframes } from 'styled-components';

export const Frame = styled.div`
	position: relative;
	overflow: hidden;
`;

const prev = position => keyframes`
	from {
		transform: translateX(0px);
	}

	to {
		transform: translateX(${-position}px);
	}
`;

const next = position => keyframes`
	from {
		transform: translateX(0px)
	}

	to {
		transform: translateX(${position}px);
	}
`;

export const Div = styled.div`
	display: flex;
	width: ${({ itemshowlength, widthitem }) => itemshowlength * widthitem}px;
	margin-left: ${({ widthitem }) => -widthitem + 'px'};

	&.prev {
		animation: ${({ position }) => prev(position)} ${({ transitiontime }) => transitiontime / 1000}s linear;
	}

	&.next {
		animation: ${({ position }) => next(position)} ${({ transitiontime }) => transitiontime / 1000}s linear;
	}
`;
