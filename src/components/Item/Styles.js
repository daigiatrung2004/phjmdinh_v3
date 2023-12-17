import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ImageComponent from '~/components/Image';
import { mediaQueries } from '~/utils/reponsive';

const frame = (sign, transform) => keyframes`
	from {
		left: ${sign > 0 ? 0 : -transform}px;
	}
	to {
		left: ${sign > 0 ? -transform : 0}px;
	}
`;

// state pass params.true false
//

// item
const ItemCustom = forwardRef(({ src, className, children, state, setState, transitiontime, ...propsDefault }, ref) => {
	let Ele = 'div';
	const refElement = useRef();

	// if (context && typeof context == 'function' && ref.current) {
	// 	const styled = window.getComputedStyle(ref.current);
	// 	const marginWidth = parseInt(styled.marginRight) + parseInt(styled.marginLeft);
	// 	const width = ref.current.offsetWidth;
	// 	// let scrollWidth = ref.current.scrollWidth;
	// 	context(marginWidth + width);
	// }
	useImperativeHandle(
		ref,
		() => {
			if (!refElement.current) {
				return {
					width: 0,
					margin: 0,
				};
			}
			var style = refElement.current.currentStyle || window.getComputedStyle(refElement.current);
			return {
				width: refElement.current.offsetWidth,
				space: style ? parseInt(style.marginRight.replace('px')) : 0,
			};
		},
		[]
	);

	useEffect(() => {
		if (state) {
			const id = setTimeout(() => {
				setState(false);
			}, transitiontime);
			return () => clearTimeout(id);
		}
	}, [state, transitiontime, setState]);

	if (src) {
		Ele = Link;
		className = `hover-underline ${className} animation`;
	}
	return (
		<Ele
			ref={refElement}
			to={src}
			state={state}
			className={className}
			transitiontime={transitiontime}
			{...propsDefault}
		>
			{children}
		</Ele>
	);
});

export const Item = styled(ItemCustom)`
	--scale-item: 1.15;
	--height-img-item: 40px;
	--width-img-item: 40px;
	display: flex;
	padding: 2px 10px 10px 18px;
	/* margin-bottom: 8px; */
	border-bottom: 1px dashed;
	/* max-height: 40px; */
	position: relative;
	cursor: pointer;
	transition: all ${({ transitiontime }) => (transitiontime ? transitiontime / 1000 + 's' : '0.5s')} linear;

	/* https://codesandbox.io/s/react-reset-css-animation-63dsx */
	&.animation {
		/* animation: ${({ isslide, translatexslide, transform, state, sign }) => {
			if (isslide === 'true' && translatexslide === 'true' && state) {
				return frame(sign, transform);
			}
		}}
			${({ transitiontime }) => (transitiontime ? transitiontime / 1000 + 's' : '0.5s')} linear; */
	}

	&.item__display-vertical {
		display: block;
		margin-bottom: 100px;
		border: none;
		max-height: none;
		padding: 0px;
		flex-shrink: 0;
		/* float: left; */
		height: ${({ h }) => (h ? h : 'auto')};
		width: ${({ w }) => (w ? w : 'auto')};
		margin: ${({ margin }) => (margin ? margin : '2rem 5.5rem 0rem 0px')};
	}

	&.item__display-horizontal {
		display: block;
		margin: 25px 50px 50px 25px;
		max-height: none;
		padding: 0px;
		flex-shrink: 0;
		/* float: left; */
		height: ${({ h }) => (h ? h : '250px')};
		width: ${({ w }) => (w ? w : '300px')};
		margin: ${({ margin }) => (margin ? margin : '20px 60px 20px 60px')};
	}

	&.hover-underline:hover {
		text-decoration: underline;
		text-decoration-color: var(--white);
	}

	&.hover-text-color {
		color: var(--primary);
	}

	&.hover-background:hover {
		background-color: var(--primary);
		color: var(--white);
	}

	& > .wrapper {
		position: relative;
	}

	${mediaQueries(
		['tablet', 'desktop'],
		`
		&:hover .cardo {
			visibility: visible;
			opacity: 1;
			pointer-events: auto;

			/* width: 25.5rem;
			transform: scale(1.05);
			height: 110%; */
		}
	`
	)}

	${mediaQueries(
		'mobile',
		`
		&:hover .cardo {
			visibility: visible;
			opacity: 1;
			pointer-events: auto;

			/* width: 25.5rem;
			transform: scale(0.7);
			height: 110%; */
			display:none;
		}

		&:hover {
			transform: scale(1.05);
		}

		&.item__display-vertical {
			margin-right: 0px;
			width: 9.1rem;
		}

		&.item__display-vertical .wrapper img {
			padding: 0px;
			border-radius: 0.8rem;
		}
	`
	)}
`;

export const PresentItem = styled.div`
	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}
	position: relative;
	/* z-index: 100; */
	/* &.item-present:hover ~ .cardo {
		opacity: 1;
		transform: scale(1.05);
		z-index: 101;
	} */

	/* &.item-present:hover {
		z-index: 98;
	} */

	&.item__display-searchtype {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;

		& .content,
		& small {
			max-width: 21rem;
			display: inline-block;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}

	&.item-circle:hover {
		transform: scale(var(--scale-item));
		& label.normal {
			color: var(--primary);
		}
	}

	&.item-circle:hover + &.item-vertical {
		flex-direction: column;
	}

	&.item-horizontal {
		flex-direction: row;
	}
`;

export const Image = styled(ImageComponent)`
	max-height: var(--height-img-item);
	max-width: var(--width-img-item);
	padding-right: 5px;

	transition: all var(--time-scale-item) ease-in-out;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
	&.img__vertical {
		max-height: none;
		max-width: none;
		height: ${({ h }) => (h ? h : 'calc(15rem * 1.5)')};
		width: ${({ w }) => (w ? w : 'calc(10rem * 1.5)')};
		background-size: cover;
		border: none;
		/* border-radius: 15px; */
		border-radius: 0.2rem;
		padding: 0px;
	}

	&.img__horizontal {
		max-height: none;
		max-width: none;
		width: calc(30rem);
		height: calc(30rem / 1.78);
		background-size: 50% 50%;
		border: none;
		border-radius: 15px;
	}

	&.img__circle {
		max-height: none;
		max-width: none;
		height: 7rem;
		width: 7rem;
		border-radius: 100%;
		background-image: url('${({ src }) => (src ? src : '')}');
		background-size: 100% 100%;
	}

	&.hover-scaling:hover ~ svg {
		font-size: calc(var(--scale-item) * var(--size-icon) + 1rem);
	}

	&.hover-scaling:hover {
		transform: scale(var(--scale-item));
	}

	&.not-border-radius {
		border-radius: unset;
	}

	&.not-padding {
		padding: unset;
	}
`;

export const ImageSheet = styled.div`
	position: relative;
`;

export const ControlSheet = styled.div`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	display: flex;
	align-items: center;
	justify-content: end;
	width: 15rem;

	&:hover svg.play-button circle {
		fill: rgb(73, 210, 109);
	}
`;

export const PlayWrap = styled.div`
	&:hover svg.play-button circle {
		fill: rgb(73, 210, 109);
	}

	& svg.play-button {
		width: 3.51562vw;
		height: 3.51562vw;
		align-items: flex-start;
		max-width: 4rem;
		max-height: 4rem;
	}
`;

export const CollectorWrap = styled.div`
	position: relative;
	width: 3.51562vw;
	height: 3.51562vw;
	align-items: flex-start;
	max-width: 4rem;
	max-height: 4rem;
	margin-left: 1rem;
	& div {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	& svg {
		width: 3.51562vw;
		height: 3.51562vw;
		align-items: flex-start;
		color: #111319;
		max-width: 4rem;
		max-height: 4rem;
	}

	& div.collector {
		display: block;
	}

	& div.collector-hover {
		display: none;
	}

	&:hover > div.collector {
		display: none;
	}

	&:hover > div.collector-hover {
		display: block;
	}
`;

export const Title = styled.h4`
	font-size: 1.8rem;
	margin: 0;
`;

export const SubTitle = styled.small`
	font-size: 1.5rem;
	color: #a4a6a6;
	font-style: italic;
	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}
`;

export const ItemInfo = styled.div`
	flex-grow: 1;
	width: 12.5rem;
	word-break: break-word;
	display: ${props => (props.isHide ? 'none' : 'block')};
`;

export const Cardo = styled.div`
	${mediaQueries(
		'desktop',
		`
		width: 25.5rem;
		transform: scale(1.05);
		height: 110%;
	`
	)}

	${mediaQueries(
		'mobile',
		`
		display: none;
		transform: scale(.7);
		`
	)}
	background-color: #1a1c22;
	position: absolute;
	top: 0%;
	left: -12.5%;
	z-index: var(--zIndex-general);
	border-radius: 0.5rem 0.5rem 0rem 0rem;
	transform: translate(0%, 0%) scale(1);
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: all 0.7s 0.05s ease;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	z-index: 99;
	overflow: hidden;
	color: var(--white);
	visibility: hidden;
	pointer-events: none;

	/* &:hover {
		opacity: 1;
		transform: scale(1.05);
	} */

	/* &:hover ~ .item */
`;

export const CardoBody = styled.div`
	padding: 8px;

	& div.broken-line {
		width: 2px;
		height: 10px;
		border: none;
		background: rgba(255, 255, 255, 0.2);
		color: rgb(230, 230, 230);
		margin: 0px 6px;
		display: inline-block;
	}

	& span {
		letter-spacing: 0px;
		text-shadow: rgba(0, 0, 0, 0.7) 1px 1px 0px;
		font-weight: 400;
		line-height: 1.9rem;
	}
	// luc dung after/before luc dung div ????
`;

export const Score = styled.div`
	display: inline-flex;
	color: white;
	position: relative;
	-webkit-box-align: center;
	align-items: center;
	font-size: 1.4rem;

	& span.score-info-greenStar {
		font-size: 1.2rem;
		margin-right: 0.5rem;
		display: flex;
	}
`;

export const Episode = styled.span`
	font-size: 1.2rem;
`;

export const Episode_Info_Tag = styled.div`
	color: var(--white);
	font-size: 1.6rem;
	letter-spacing: 0px;
	line-height: 2.2rem;
`;

export const HashTagSheet = styled.div`
	height: 1.8rem;
	margin-top: 0.6rem;
	display: flex;
	flex-wrap: wrap;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const EpisodeLabel = styled.div`
	background-image: linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%);
	position: absolute;
	right: 0rem;
	top: 0rem;
	display: inline-block;
	font-size: 1.2rem;
	color: rgb(255, 255, 255);
	letter-spacing: 0px;
	line-height: 1.4rem;
	border-radius: 0.2rem;
	text-align: center;
	padding: 0.3rem 0.4rem;

	${mediaQueries(
		'mobile',
		`
		font-size: 1.2rem;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		height: 1.8rem;
		`
	)}
`;
