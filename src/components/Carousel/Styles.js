import styled, { keyframes } from 'styled-components';

export const Sheet = styled.div`
	--height-sheet: ${({ height }) => height}
	--height-control: '80px';
	--width-control: '60px';
	--font-size-control: 4rem;
	position: relative;
	display: flex;
	/* justify-content: center; */
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	overflow: hidden;
`;

const rightKeyFrame = keyframes`
	from {
		translate: -200%
	}
	to {
		translate: -100%;
	}
`;

const leftKeyFrame = keyframes`
	from {
		translate: 0%;
	}

	to {
		translate: -100%;
	}
`;

export const CarouselItem = styled.div`
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.3) 4%,
			rgba(0, 0, 0, 0) 12%,
			rgba(0, 0, 0, 0) 88%,
			rgba(0, 0, 0, 0.3) 95%,
			rgba(0, 0, 0, 0.8) 100%
		),
		url(${({ src }) => src});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	flex-shrink: 0;
	float: left;

	&.right {
		animation: ${rightKeyFrame} 0.5s var(--timing-function-carousel) forwards;
	}

	&.left {
		animation: ${leftKeyFrame} 0.5s var(--timing-function-carousel) forwards;
	}
`;

export const Infomation = styled.div`
	position: absolute;
	padding: 25px;
	top: ${({ offset }) => (offset[0] == 'unset' || (!offset[0] && offset[0] != '0') ? 'auto' : offset[0])};
	left: ${({ offset }) => (offset[1] == 'unset' || (!offset[1] && offset[1] != '0') ? 'auto' : offset[1])};
	bottom: ${({ offset }) => (offset[2] == 'unset' || (!offset[2] && offset[2] != '0') ? 'auto' : offset[2])};
	right: ${({ offset }) => (offset[3] == 'unset' || (!offset[3] && offset[3] != '0') ? 'auto' : offset[3])};
`;

export const SheetNeighbor = styled.div``;

export const Control = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: var(--height-control);
	width: var(--width-control);
	color: var(--text-color-search);
	font-size: var(--font-size-control);
	padding: 1.5rem;
	cursor: pointer;
	opacity: 0.8;

	& svg {
		filter: drop-shadow(3px 1px 2px rgb(0 0 0 / 0.4));
	}

	&.control-left {
		left: 10px;
	}

	&.control-right {
		right: 10px;
	}

	&:hover {
		color: var(--white);
	}
	transition: all 0.2s linear;
	z-index: 1000;
`;
