import styled from 'styled-components';

export const Wrapped = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px 250px 0px 250px;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '0px')};
`;

export const InfoFilm = styled.div`
	flex-grow: 1;
	color: var(--white);
`;
