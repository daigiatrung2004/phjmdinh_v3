import styled from 'styled-components';

export const Area = styled.div`
	--progress-height: 0.5rem;

	position: relative;
	display: block;
	width: fit-content;
	background-color: ${({ bgColor }) => (bgColor ? bgColor : 'transparent')};
	height: ${({ height }) => (height ? height : '41.5rem')};
	width: ${({ width }) => (width ? width : '73.8rem')};
`;

export const PresentVideo = styled.video`
	height: 100%;
	width: 100%;

	&::-webkit-media-controls {
		display:none !important;
	}
`;

export const ControlArea = styled.div`
	position: absolute;
	height: ${({ height }) => (height ? height : '4.8rem')};
	bottom: 0rem;
	left: 0rem;
	right: 0rem;
	width: 100%;
	/* background-color: rgba(255, 255, 255, 0.1); */
	display: flex;
	overflow: hidden;
	height: 0px;
	transition: all 0.2s var(--timing-function-carousel);

	&.control {
		height: ${({ height }) => (height ? height : '6rem')};
	}

	/* z-index: 2147483647; */
	/* justify-content: center; */
`;

export const ProgressBar = styled.div`
	position: absolute;
	top: 1rem;
	left: 0;
	right: 0;
	height: var(--progress-height);
	width: calc(100% - 0.5rem);
	background-color: rgba(255, 255, 255, 0.6);
	cursor: pointer;

	&:hover {
		transform: scaleY(1.25);
	}

	&:hover .active::after {
		content: '';
		position: absolute;
		top: 0rem;
		right: -0.75rem;
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 50%;
		border-radius: 50%;
		background-color: var(--primary);
		transform: translateY(calc(-50% + 0.25rem));
		transition: all 0.2s var(--timing-function-carousel);
	}
`;

export const ProgressActive = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100%;
	width: ${({ width }) => (width ? width + '%' : '0%')};
	background-color: var(--primary);

	&::after {
		content: '';
		position: absolute;
		top: 0rem;
		right: -0.25rem;
		height: 0.5rem;
		width: 0.5rem;
		border-radius: 50%;
		background-color: var(--primary);
		transform: translateY(calc(-50% + 0.25rem));
	}
`;

export const ControlsArea = styled.div`
	padding-top: calc(var(--progress-height) + 1rem);
	flex-grow: 1;
	display: flex;
`;

export const ControlItem = styled.div`
	color: var(--white);
	font-size: 2rem;
	align-items: center;
	padding-left: 2rem;
	cursor: pointer;
	display: flex;
	transform-origin: 75% 50%;
	transition: all .2s var(--timing-function-carousel);
	flex-shrink: 0;

	&.transformLeft {
		transform: rotate(-45deg);
		transform-origin: 75% 50%;
		transition: all .2s var(--timing-function-carousel);
	}

	&.transformDefault {
		transform: rotate(0deg);
		transform-origin: 75% 50%;
		transition: all .2s var(--timing-function-carousel);
	}
`;

export const ControlsLeft = styled.div`
	margin-right: auto;
	display: flex;
`;

export const ControlsRight = styled.div`
	display: flex;
	margin-right: 1rem;
`;

export const VolumeRangeArea = styled.div`
	margin-left: 1rem;
`;

export const SettingsExpandArea = styled.div`
	position: absolute;
	width: 12.8rem;
	bottom: 6rem;
	right: 1rem;
	color: var(--white);
`;
