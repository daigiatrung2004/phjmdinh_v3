import styled, { keyframes } from 'styled-components';
import { convertHEXToRGB } from '~/utils/utility.function';
import { mediaQueries } from '~/utils/reponsive';

const opacityFrame = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const opacityFrameHide = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

// const colors = {
// 	degree: '269deg',
// 	blueStrong: [
// 		'rgba(20, 41, 51, 0) 1%',
// 		'rgba(20, 41, 51, 0.02) 10%',
// 		'rgba(20, 41, 51, 0.05) 18%',
// 		'rgba(20, 41, 51, 0.12) 25%',
// 		'rgba(20, 41, 51, 0.2) 32%',
// 		'rgba(20, 41, 51, 0.29) 38%',
// 		'rgba(20, 41, 51, 0.39) 44%',
// 		'rgba(20, 41, 51, 0.5) 50%',
// 		'rgba(20, 41, 51, 0.61) 57%',
// 		'rgba(20, 41, 51, 0.71) 63%',
// 		'rgba(20, 41, 51, 0.8) 69%',
// 		'rgba(20, 41, 51, 0.88) 76%',
// 		'rgba(20, 41, 51, 0.95) 83%',
// 		'rgba(20, 41, 51, 0.98) 91%',
// 		'rgb(20, 41, 51) 100%',
// 	],
// 	blue: [
// 		'rgba(20, 40, 51, 0) 1%',
// 		'rgba(20, 40, 51, 0.02) 10%',
// 		'rgba(20, 40, 51, 0.05) 18%',
// 		'rgba(20, 40, 51, 0.12) 25%',
// 		'rgba(20, 40, 51, 0.2) 32%',
// 		'rgba(20, 40, 51, 0.29) 38%',
// 		'rgba(20, 40, 51, 0.39) 44%',
// 		'rgba(20, 40, 51, 0.5) 50%',
// 		'rgba(20, 40, 51, 0.61) 57%',
// 		'rgba(20, 40, 51, 0.71) 63%',
// 		'rgba(20, 40, 51, 0.8) 69%',
// 		'rgba(20, 40, 51, 0.88) 76%',
// 		'rgba(20, 40, 51, 0.95) 83%',
// 		'rgba(20, 40, 51, 0.98) 91%',
// 		'rgb(20, 40, 51) 100%',
// 	],
// };

export const Sheet = styled.div`
	--height-sheet: ${({ height }) => height}
	--height-control: '80px';
	--width-control: '60px';
	--font-size-control: 4rem;
	--indicator-width: .8rem;
	--indicator-height: .8rem;
	--indicator-margin-left: 0.5rem;
	--zIndex-carousel: 1000;
	--zIndex-background: 101;
	--zIndex-caoursel: 100;
	position: relative;
	display: flex;
	background: center center / cover no-repeat;
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.3) 4%,
			rgba(0, 0, 0, 0) 12%,
			rgba(0, 0, 0, 0) 88%,
			rgba(0, 0, 0, 0.3) 95%,
			rgba(0, 0, 0, 0.8) 100%
		),url(${({ backgroundImage }) => (backgroundImage ? backgroundImage : '')});
	/* justify-content: center; */
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	overflow: hidden;

	margin-bottom: -12.5%;

	&.bg-animation-hide {
		animation: ${opacityFrameHide} .3s ease forwards;
	}

	&.bg-animation {
		animation: ${opacityFrame} .2s ease-out forwards;
	}

	${mediaQueries(
		'mobile',
		`
		height: 30rem;
		`
	)}

	${mediaQueries(
		'tablet',
		`
		height: 50rem;
		`
	)}

`;

export const WallSheet = styled.div`
	--height-sheet: ${({ height }) => height}
	--height-control: '80px';
	--width-control: '60px';
	--font-size-control: 4rem;
	--indicator-width: .8rem;
	--indicator-height: .8rem;
	--indicator-margin-left: 0.5rem;
	--zIndex-carousel: 1000;
	--zIndex-background: 101;
	--zIndex-caoursel: 100;
	--height-mb: 30rem;
	position: relative;
	display: flex;
	background: center right / cover no-repeat;
	background-size: 71% 100%;
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.3) 4%,
			rgba(0, 0, 0, 0) 12%,
			rgba(0, 0, 0, 0) 88%,
			rgba(0, 0, 0, 0.3) 95%,
			rgba(0, 0, 0, 0.8) 100%
		),url(${({ backgroundImage }) => (backgroundImage ? backgroundImage : '')});
	/* justify-content: center; */
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	overflow: hidden;

	margin-bottom: -12.5%;

	&.bg-animation-hide {
		animation: ${opacityFrameHide} .3s ease forwards;
	}

	&.bg-animation {
		animation: ${opacityFrame} .2s ease-out forwards;
	}

	${mediaQueries(
		'mobile',
		`
		height: var(--height-mb);
		`
	)}

	${mediaQueries(
		'tablet',
		`
		height: 50rem;
		`
	)}

	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}
`;
export const SupperMultiSheet = styled.div`
	--padding-left: 2.5rem;
	--carousel-transition-2: cubic-bezier(0.3, 0.23, 0.63, 0.87);
	position: relative;
	display: block;
	/* background-color: green; */

	&.super-multi-sheet .control-left {
		top: 50%;
		transform: translateY(-100%);
		left: calc(var(--padding-left) * -2.5);

		& svg {
			font-size: ${({ fontsize }) => (fontsize ? fontsize : '3rem')};
		}
		z-index: var(--zIndex-general);

		${mediaQueries(
			'mobile',
			`
			font-size: '2rem';
		`
		)}
	}

	&.super-multi-sheet .control-right {
		top: 50%;
		right: calc(var(--padding-left) * 1.5);
		transform: translateY(-100%);

		& svg {
			font-size: ${({ fontsize }) => (fontsize ? fontsize : '3rem')};
		}
		z-index: var(--zIndex-general);
		${mediaQueries(
			'mobile',
			`
			font-size: '2rem';
		`
		)}
	}
`;
export const MultiSheet = styled.div`
	/* background-color: var(--bg-color); */
	/* margin-left: calc(var(--padding-left) * 1.75 * -1); */
	position: relative;
	display: flex;
	justify-content: center;
	overflow: hidden;
	max-width: ${({ maxwidth }) => (maxwidth ? `calc(${maxwidth})` : 'calc(130rem)')};
	/* margin-left: 10rem; */
	/* padding: 0rem 7rem 0rem 7rem; */
	z-index: calc(var(--zIndex-general));
	margin-left: ${({ space }) => (space ? `calc(${space} * -1)` : '')};
	${mediaQueries(
		'mobile',
		`
		justify-content: start;
		`
	)}

	${mediaQueries(
		'tablet',
		`
		justify-content: start;
		margin-left: 0.075rem;
		`
	)}
`;

export const ItemSheet = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(${({ size }) => (size ? size : 20)}, minmax(23.7rem, 23.7rem));
	/* background-color: red; */

	${mediaQueries(
		'desktop',
		`
		display: grid;
		
		`
	)}

	${mediaQueries(
		'mobile',
		`
			display: grid;
			grid-template-columns: repeat(20, minmax(10.1rem, 10.1rem));
		`
	)}

	/* overflow: hidden; */
	height: 100%;
	/* padding: 0rem var(--padding-left) 0rem var(--padding-left); */
	grid-template-rows: 1;
	padding-left: ${({ space }) => (space ? `calc(${space} * 1)` : '')};
	translate: ${({ distance }) => (distance ? distance : '0px')};
	transition: all 0.4s var(--carousel-transition-2);
	z-index: calc(var(--zIndex-general) - 1);
	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}
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
	background-image: url(${({ src }) => src});
	background-size: 50% 80%;
	background-position: 80% 20%;
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	flex-shrink: 0;
	float: left;
	position: relative;

	${mediaQueries(
		'mobile',
		`
		background-size: 20rem 30rem;
		background-position: top right;
		`
	)}

	${mediaQueries(
		'tablet',
		`
		background-size: 40% 70%;
		background-position: 80% 70%;
		`
	)}

	&.right {
		animation: ${rightKeyFrame} 0.5s var(--timing-function-carousel) forwards;
	}

	&.left {
		animation: ${leftKeyFrame} 0.5s var(--timing-function-carousel) forwards;
	}
	z-index: var(--zIndex-caoursel);
`;

export const Infomation = styled.div`
	position: absolute;
	padding: 25px;
	top: ${({ offset }) => (offset[0] === 'unset' || (!offset[0] && offset[0] !== '0') ? 'auto' : offset[0])};
	left: ${({ offset }) => (offset[1] === 'unset' || (!offset[1] && offset[1] !== '0') ? 'auto' : offset[1])};
	bottom: ${({ offset }) => (offset[2] === 'unset' || (!offset[2] && offset[2] !== '0') ? 'auto' : offset[2])};
	right: ${({ offset }) => (offset[3] === 'unset' || (!offset[3] && offset[3] !== '0') ? 'auto' : offset[3])};
	z-index: 1000;

	${mediaQueries(
		'mobile',
		`
		top: 0rem;
		left: 0rem;
		bottom: 5rem;
		right: auto;
		`
	)}

	${mediaQueries(
		'tablet',
		`
		bottom: 10rem;
		`
	)}
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
		${mediaQueries(
			'mobile',
			`
			font-size: 2rem;
			`
		)}
	}

	&.control-right {
		right: 10px;
		${mediaQueries(
			'mobile',
			`
			font-size: 2rem;
			`
		)}
	}

	&:hover {
		color: var(--white);
	}
	transition: all 0.2s linear;
	z-index: var(--zIndex-carousel);
`;

export const Indicators = styled.ul`
	position: absolute;
	top: ${({ offset }) => (offset[0] === 'unset' || (!offset[0] && offset[0] !== '0') ? 'auto' : offset[0])};
	right: ${({ offset }) => (offset[1] === 'unset' || (!offset[1] && offset[1] !== '0') ? 'auto' : offset[1])};
	bottom: ${({ offset }) => (offset[2] === 'unset' || (!offset[2] && offset[2] !== '0') ? 'auto' : offset[2])};
	left: ${({ offset }) => (offset[3] === 'unset' || (!offset[3] && offset[3] !== '0') ? 'auto' : offset[3])};
	height: 2rem;
	width: ${({ totalsize }) =>
		totalsize ? `calc((var(--indicator-width) + var(--indicator-margin-left) + 1rem) * ${totalsize})` : '50%'};
	z-index: var(--zIndex-carousel);

	${mediaQueries(
		'mobile',
		`
		top: auto;
		right: 0rem;
		bottom: 5rem;
		left: auto;
		`
	)}

	${mediaQueries(
		'tablet',
		`
		bottom: 10rem;
		`
	)}
`;

export const Indicator = styled.li`
	width: var(--indicator-width);
	height: var(--indicator-height);
	margin-left: var(--indicator-margin-left);
	background-color: var(--text-color-search);
	display: inline-block;
	transition: all 0.2s var(--timing-function-carousel);

	&.active {
		transform: scale(1.15);
		width: 1.5rem;
		background-color: var(--white);
	}
`;

export const BgLeft = styled.div`
	position: absolute;
	top: 0;
	width: 30%;
	height: 100%;
	background: ${({ bgLeftColor }) => {
		if (bgLeftColor) {
			if (bgLeftColor[0] === '#') {
				bgLeftColor = convertHEXToRGB(bgLeftColor);
			}

			bgLeftColor = bgLeftColor
				.trim()
				.toLowerCase()
				.replace(/rgba\(/gim, '')
				.replace(/\)/gim, '')
				.split(',');
			let red = bgLeftColor[0];
			let green = bgLeftColor[1];
			let blue = bgLeftColor[2];
			return `linear-gradient(
						269deg,
						rgba(${red}, ${green}, ${blue}, 0) 1%,
						rgba(${red}, ${green}, ${blue}, 0.02) 10%,
						rgba(${red}, ${green}, ${blue}, 0.05) 18%,
						rgba(${red}, ${green}, ${blue}, 0.12) 25%,
						rgba(${red}, ${green}, ${blue}, 0.2) 32%,
						rgba(${red}, ${green}, ${blue}, 0.29) 38%,
						rgba(${red}, ${green}, ${blue}, 0.39) 44%,
						rgba(${red}, ${green}, ${blue}, 0.5) 50%,
						rgba(${red}, ${green}, ${blue}, 0.61) 57%,
						rgba(${red}, ${green}, ${blue}, 0.71) 63%,
						rgba(${red}, ${green}, ${blue}, 0.8) 69%,
						rgba(${red}, ${green}, ${blue}, 0.88) 76%,
						rgba(${red}, ${green}, ${blue}, 0.95) 83%,
						rgba(${red}, ${green}, ${blue}, 0.98) 91%,
						rgb(${red}, ${green}, ${blue}) 100%
					)`;
		} else {
			return `linear-gradient(
						269deg,
						rgba(20, 40, 51, 0) 1%,
						rgba(20, 40, 51, 0.02) 10%,
						rgba(20, 40, 51, 0.05) 18%,
						rgba(20, 40, 51, 0.12) 25%,
						rgba(20, 40, 51, 0.2) 32%,
						rgba(20, 40, 51, 0.29) 38%,
						rgba(20, 40, 51, 0.39) 44%,
						rgba(20, 40, 51, 0.5) 50%,
						rgba(20, 40, 51, 0.61) 57%,
						rgba(20, 40, 51, 0.71) 63%,
						rgba(20, 40, 51, 0.8) 69%,
						rgba(20, 40, 51, 0.88) 76%,
						rgba(20, 40, 51, 0.95) 83%,
						rgba(20, 40, 51, 0.98) 91%,
						rgb(20, 40, 51) 100%
					)`;
		}
	}};
	z-index: var(--zIndex-background);
`;
export const BgWallLeft = styled.div`
	position: absolute;
	top: 0;
	left: 28%;
	width: 30%;
	height: 100%;
	background-image: linear-gradient(
		270deg,
		rgba(17, 19, 25, 0) 0%,
		rgba(17, 19, 25, 0.05) 16%,
		rgba(17, 19, 25, 0.2) 30%,
		rgba(17, 19, 25, 0.39) 43%,
		rgba(17, 19, 25, 0.61) 55%,
		rgba(17, 19, 25, 0.8) 68%,
		rgba(17, 19, 25, 0.95) 82%,
		rgb(17, 19, 25) 98%
	);
	z-index: var(--zIndex-background);
`;

export const BgTop = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 120px;
	background-image: ${({ bgTopColor }) => {
		if (bgTopColor) {
			if (bgTopColor[0] === '#') {
				bgTopColor = convertHEXToRGB(bgTopColor);
			}

			bgTopColor = bgTopColor
				.trim()
				.toLowerCase()
				.replace(/rgba\(/gim, '')
				.replace(/\)/gim, '')
				.split(',');
			let red = bgTopColor[0];
			let green = bgTopColor[1];
			let blue = bgTopColor[2];
			return `linear-gradient(
						179.5deg,
						rgba(${red}, ${green}, ${blue}, 0.88) 0%,
						rgba(${red}, ${green}, ${blue}, 0.89) 9%,
						rgba(${red}, ${green}, ${blue}, 0.85) 17%,
						rgba(${red}, ${green}, ${blue}, 0.79) 24%,
						rgba(${red}, ${green}, ${blue}, 0.72) 31%,
						rgba(${red}, ${green}, ${blue}, 0.64) 37%,
						rgba(${red}, ${green}, ${blue}, 0.55) 44%,
						rgba(${red}, ${green}, ${blue}, 0.45) 50%,
						rgba(${red}, ${green}, ${blue}, 0.35) 56%,
						rgba(${red}, ${green}, ${blue}, 0.26) 63%,
						rgba(${red}, ${green}, ${blue}, 0.18) 69%,
						rgba(${red}, ${green}, ${blue}, 0.11) 76%,
						rgba(${red}, ${green}, ${blue}, 0.05) 83%,
						rgba(${red}, ${green}, ${blue}, 0.01) 91%,
						rgba(${red}, ${green}, ${blue}, 0) 100%
					)`;
		} else {
			return `linear-gradient(
						179.5deg,
						rgba(17, 19, 25, 0.88) 0%,
						rgba(17, 19, 25, 0.89) 9%,
						rgba(17, 19, 25, 0.85) 17%,
						rgba(17, 19, 25, 0.79) 24%,
						rgba(17, 19, 25, 0.72) 31%,
						rgba(17, 19, 25, 0.64) 37%,
						rgba(17, 19, 25, 0.55) 44%,
						rgba(17, 19, 25, 0.45) 50%,
						rgba(17, 19, 25, 0.35) 56%,
						rgba(17, 19, 25, 0.26) 63%,
						rgba(17, 19, 25, 0.18) 69%,
						rgba(17, 19, 25, 0.11) 76%,
						rgba(17, 19, 25, 0.05) 83%,
						rgba(17, 19, 25, 0.01) 91%,
						rgba(17, 19, 25, 0) 100%
					)`;
		}
	}};
	z-index: var(--zIndex-background);
`;

export const BgBottom = styled(BgTop)`
	bottom: -1%;
	top: auto;
	background-image: linear-gradient(rgba(17, 19, 25, 0) 2%, rgb(17, 19, 25) 94%);
	/* background-image: linear-gradient(
		360deg,
		rgba(17, 19, 25, 0.88) 0%,
		rgba(17, 19, 25, 0.89) 9%,
		rgba(17, 19, 25, 0.85) 17%,
		rgba(17, 19, 25, 0.79) 24%,
		rgba(17, 19, 25, 0.72) 31%,
		rgba(17, 19, 25, 0.64) 37%,
		rgba(17, 19, 25, 0.55) 44%,
		rgba(17, 19, 25, 0.45) 50%,
		rgba(17, 19, 25, 0.35) 56%,
		rgba(17, 19, 25, 0.26) 63%,
		rgba(17, 19, 25, 0.18) 69%,
		rgba(17, 19, 25, 0.11) 76%,
		rgba(17, 19, 25, 0.05) 83%,
		rgba(17, 19, 25, 0.01) 91%,
		rgba(17, 19, 25, 0) 100%
	); */
`;
