import styled from 'styled-components';

export const Tip = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '4.7rem')};
	height: ${({ height }) => (height ? height : '4.7rem')};
	padding: ${({ padding }) => (padding ? padding : '1.4rem 1rem 1.4rem 6px')};
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;
	background-color: var(--white);
	cursor: pointer;
`;

export const TipSheet = styled.div`
	position: relative;
`;

export const SubListUl = styled.ul`
	padding: 2rem;

	width: 100%;
	background-color: var(--white);
	overflow: hidden;
	transition: all 0.2s ease;
`;
