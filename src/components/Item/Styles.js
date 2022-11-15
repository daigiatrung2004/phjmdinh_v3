import styled from 'styled-components';
import ImageComponent from '~/components/Image';
import { Link } from 'react-router-dom';

// item
const ItemCustom = ({ src, className, children }) => {
	let Tag = 'div';
	if (src) {
		Tag = Link;
		className = `hover-underline ${className}`;
	}
	return (
		<Tag
			to={src}
			className={className}
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
