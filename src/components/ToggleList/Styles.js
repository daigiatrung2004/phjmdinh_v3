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
	border-bottom: ${({ underlineFlag }) => (underlineFlag ? 'none' : '1px solid #eee')};
	background-color: ${({ transparentFlag }) => (transparentFlag ? 'transparent' : 'var(--white)')};
	cursor: pointer;
`;

export const TipSheet = styled.div`
	position: relative;
	background-color: ${({ transparentFlag }) => (transparentFlag ? 'transparent' : 'var(--white)')};
	cursor: pointer;
`;

export const SubListUlSheet = styled.div`
	display: flex;
	overflow: hidden;
	height: ${({ subListUlHeight }) => (subListUlHeight ? subListUlHeight : '0px')};
	transition: all 0.2s ease;
`;

export const SubListUl = styled.ul`
	padding: 2rem;

	width: 100%;
	background-color: var(--white);
	overflow: hidden;
	background-color: ${({ transparentFlag }) => (transparentFlag ? 'transparent' : 'var(--white)')};
	flex-shrink: 0;
`;

export const Label = styled.span`
	color: ${({ colorLabel }) => (colorLabel ? colorLabel : '#666')};
	cursor: pointer;
`;
