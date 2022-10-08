import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tag = ({ to, type, children, ...propsDefault }) => {
	let Element = 'h4';
	if (to) {
		Element = Link;
	} else {
		Element = type;
	}
	return (
		<Element
			to={to}
			{...propsDefault}
		>
			{children}
		</Element>
	);
};

export const Anchor = styled(Tag)`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
	display: block;
	clear: both;
	line-height: 1;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
	position: relative;
	color: var(--white);

	&.primary {
		color: var(--primary);
	}

	&.hover-under:hover {
		text-decoration: underline;
	}

	& .icon {
		font-size: ${({ iconsize }) => (iconsize ? iconsize : 'inherit')};
	}

	.content ~ .icon,
	.icon ~ .content {
		margin-left: 10px;
	}
`;
