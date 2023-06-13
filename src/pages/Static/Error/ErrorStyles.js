import styled from 'styled-components';

export const Content = styled.div`
	display: flex;
	min-height: 608px;
	align-items: center;
	justify-content: space-around;
	flex-direction: ${({ isCenterImg }) => (isCenterImg ? 'column' : 'row')};
	background-color: var(--bg-color);
	color: white;
`;

export const Title = styled.h1`
	font-size: 46px;
`;

export const ErrorType = styled.small`
	text-decoration: underline;
`;

export const Detail = styled.h5`
	font-size: 18px;
`;

export const Wrapper = styled.div`
	padding-left: 10px;
`;
