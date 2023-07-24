import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ImageComponent from '~/components/Image';

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
const ItemCustom = ({ src, className, children, state, setState, transitiontime, ...propsDefault }) => {
	let Tag = 'div';
	const ref = useRef();
	const [statef, setStatef] = useState(false);

	// console.log('ref item custom:', ref.current);
	// console.dir(ref.current);
	// console.log('context:', context);
	// if (context && typeof context == 'function' && ref.current) {
	// 	const styled = window.getComputedStyle(ref.current);
	// 	const marginWidth = parseInt(styled.marginRight) + parseInt(styled.marginLeft);
	// 	const width = ref.current.offsetWidth;
	// 	// let scrollWidth = ref.current.scrollWidth;
	// 	// console.log('marginWidth :', marginWidth);
	// 	// console.log('width :', width);
	// 	// console.log('scrollWidth :', scrollWidth);
	// 	context(marginWidth + width);
	// }

	useEffect(() => {
		if (state) {
			const id = setTimeout(() => {
				setState(false);
			}, transitiontime);

			return () => clearTimeout(id);
		}
	}, [state, transitiontime]);

	if (src) {
		Tag = Link;
		className = `hover-underline ${className} animation`;
	}
	return (
		<Tag
			ref={ref}
			to={src}
			state={state}
			className={className}
			transitiontime={transitiontime}
			{...propsDefault}
		>
			{children}
		</Tag>
	);
};

export const Item = styled(ItemCustom)`
	--height-img-item: 40px;
	--width-img-item: 40px;
	display: flex;
	padding: 2px 10px 10px 10px;
	margin-bottom: 8px;
	border-bottom: 1px dashed;
	max-height: 40px;
	position: relative;

	/* https://codesandbox.io/s/react-reset-css-animation-63dsx */
	&.animation {
		animation: ${({ isslide, translatexslide, transform, state, sign }) => {
				console.log('state init:', state);

				if (isslide == 'true' && translatexslide == 'true' && state) {
					return frame(sign, transform);
				} else {
					return '';
				}
			}}
			${({ transitiontime }) => (transitiontime ? transitiontime / 1000 + 's' : '0.5s')} linear;
	}

	&.item__display-vertical {
		display: block;
		margin-bottom: 100px;
		border: none;
		max-height: none;
		padding: 0px;
		flex-shrink: 0;
		float: left;
		height: ${({ h }) => (h ? h : '250px')};
		width: ${({ w }) => (w ? w : '150px')};
		margin: ${({ margin }) => (margin ? margin : '20px 75px 80px 0px')};
	}

	&.item__display-horizontal {
		display: block;
		margin: 25px 50px 50px 25px;
		max-height: none;
		padding: 0px;
		flex-shrink: 0;
		float: left;
		height: ${({ h }) => (h ? h : '250px')};
		width: ${({ w }) => (w ? w : '300px')};
		margin: ${({ margin }) => (margin ? margin : '20px 60px 20px 60px')};
	}

	&.hover-underline:hover {
		text-decoration: underline;
		text-decoration-color: var(--white);
	}

	& > .wrapper {
		position: relative;
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
		border-radius: 15px;
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

	&.hover-scaling:hover ~ svg {
		font-size: calc(var(--scale-item) * var(--size-icon) + 10px);
	}

	&.hover-scaling:hover {
		transform: scale(var(--scale-item));
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
`;

export const ItemInfo = styled.div`
	flex-grow: 1;
	width: 125px;
	word-break: break-word;
	display: ${props => (props.isHide ? 'none' : 'block')};
`;
