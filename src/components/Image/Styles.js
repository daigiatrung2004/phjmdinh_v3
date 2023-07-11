import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StaticImage = styled.img`
	height: ${({ height }) => (height ? height : '400px')};
	width: ${({ width }) => (width ? width : '400px')};
	border-radius: ${({ isBorder }) => (isBorder ? '50%' : '0px')};
	object-fit: cover;
	border: ${({ isBorder }) => (isBorder ? '1px solid black' : 'none')};
`;

const Tag = ({ children, to }) => {
	let Tag = 'div';
	if (to) {
		Tag = Link;
	}
	return <Tag className="wrapper">{children}</Tag>;
};

export const Wrapper = styled(Tag)`
	&.wrapper {
		position: relative;
	}
`;
