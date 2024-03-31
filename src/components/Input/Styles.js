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

export const InputText = styled.input`
	border: var(--border-width) solid var(--border-color);
	border-radius: var(--border-radius);
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '3rem')};
	padding: 2.1rem 1rem 2.1rem 1.6rem;
	font-size: ${({ fontsize }) => (fontsize ? fontsize : '1.6rem')};

	&:hover,
	&:active {
		outline: none;
	}
`;

export const InputRadio = styled.input``;

export const LabelRadio = styled.label`
	color: var(--black);
	flex-grow: 1;
`;

export const LabelText = styled.label`
	color: var(--black);
	width: 10rem;
`;
