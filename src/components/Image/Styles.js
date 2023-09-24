import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StaticImage = styled.img`
	height: ${({ height }) => (height ? height : '400px')};
	width: ${({ width }) => (width ? width : '400px')};
	border-radius: ${({ isBorder }) => (isBorder ? '50%' : '0px')};
	object-fit: cover;
	border: ${({ isBorder }) => (isBorder ? '1px solid black' : 'none')};
`;

const Element = ({ children, to }) => {
	let Ele = 'div';
	if (to) {
		Ele = Link;
	}
	return <Ele className="wrapper">{children}</Ele>;
};

export const Wrapper = styled(Element)`
	&.wrapper {
		position: relative;
	}
`;
