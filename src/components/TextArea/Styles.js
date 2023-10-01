import styled from 'styled-components';

export const StyleGeneral = styled.div`
	--border-radius: 0.4rem;
	--border-color: #dbdbdb;
	--border-width: 0.1rem;
`;

export const TextArea = styled.textarea`
	border: var(--border-width) solid var(--border-color);
	border-radius: var(--border-radius);
	padding: 1.5rem;
	line-height: 1.9rem;
	resize: none;
	&::placeholder {
		color: var(--border-color);
	}
`;
