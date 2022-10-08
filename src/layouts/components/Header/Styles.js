import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageComponent from '~/components/Image';

// wrapper
export const Header = styled.header`
	width: 100%;
	min-height: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: var(--bg-color-override);
`;

// logo
export const Image = styled(ImageComponent)`
	height: 10rem;
	width: 20rem;
	display: flex;
`;

// search
export const Search = styled.div`
	height: 6rem;
	border-radius: 999px;
	&:focus-within {
		border: 2px solid var(--black);
		box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	}
	flex-shrink: 1;
	display: flex;
	background-color: var(--white);
`;

export const Input = styled.input`
	font-size: 2rem;
	margin: 10px 25px 10px 25px;
	caret-color: red;
`;

export const Button = styled(FontAwesomeIcon)`
	font-size: 2.5rem;
	padding: 1.7rem;
	cursor: pointer;

	&:focus:active {
	}
`;

export const Spacer = styled.span`
	height: 4.5rem;
	width: 1px;
	background-color: var(--black);
	margin: 0.75rem 0rem 0.75rem 0rem;
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Loading = styled(FontAwesomeIcon)`
	font-size: 1.6rem;
	margin: 22px 20px 22px 0px;
	animation: ${rotate} 0.75s ease-in-out infinite;
`;

export const Close = styled(FontAwesomeIcon)`
	font-size: 1.6rem;
	margin: 22px 20px 22px 0px;
	cursor: pointer;
`;

export const User = styled.div`
	display: flex;
	align-items: center;
`;

// User
export const SignUpIcon = styled(FontAwesomeIcon)`
	font-size: 1.8rem;
`;
