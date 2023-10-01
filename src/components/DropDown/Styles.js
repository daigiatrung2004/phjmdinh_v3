import styled from 'styled-components';

export const StyleGeneral = styled.div`
	--border-radius: 0.4rem;
	--border-color: #dbdbdb;
	--border-width: 0.1rem;
	flex-grow: 1;
`;

export const Select = styled.select`
	border-radius: 0.4rem;
	border: 1px solid #dbdbdb;
	height: ${({ height }) => (height ? height : '4.5rem')};
	padding-left: 0.5rem;
`;

export const LabelText = styled.label`
	color: var(--black);
`;
