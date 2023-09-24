import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const ElementTag = forwardRef(({ to, type, children, ...propsDefault }, ref) => {
	let Element = 'h4';
	if (to) {
		Element = Link;
	} else {
		Element = type;
	}
	return (
		<Element
			ref={ref}
			to={to}
			{...propsDefault}
		>
			{children}
		</Element>
	);
});

export const Anchor = styled(ElementTag)`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
	display: block;
	clear: both;
	line-height: 1;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
	position: relative;
	color: var(--text-color-search);

	&.primary {
		color: var(--primary);
	}

	&.hover-under:hover {
		text-decoration: underline;
	}

	&.vertical {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	&.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.text-italic {
		font-style: italic;
	}

	&.hover-text-color:hover {
		color: var(--primary);
	}

	&.hover-text-color:hover .icon > svg path {
		fill: var(--primary);
	}

	&.pointer {
		cursor: pointer;
	}

	& .icon {
		font-size: ${({ iconsize }) => (iconsize ? iconsize : 'inherit')};
	}

	.content ~ .icon,
	.icon ~ .content {
		margin-left: 10px;
	}
`;
