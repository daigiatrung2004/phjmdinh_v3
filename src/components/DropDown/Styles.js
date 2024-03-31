import styled from 'styled-components';

export const StyleGeneral = styled.div`
	--border-radius: 0.4rem;
	--border-color: #dbdbdb;
	--border-width: 0.1rem;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 2rem;
`;

export const Select = styled.select`
	border-radius: 0.4rem;
	border: 1px solid #dbdbdb;
	height: ${({ height }) => (height ? height : '4.5rem')};
	padding-left: 0.5rem;
	flex-grow: 1;
`;

export const LabelText = styled.label`
	color: var(--black);
	width: 9rem;
	display: block;
`;
