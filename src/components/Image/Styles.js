import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StaticImage = styled.img`
	height: 400px;
	width: 400px;
	border-radius: 50%;
	object-fit: cover;
	border: 1px solid black;
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
