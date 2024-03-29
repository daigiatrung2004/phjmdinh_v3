import styled from 'styled-components';

export const DropZone = styled.div`
	&.dropzone {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		border-width: 0.2rem;
		border-radius: 0.2rem;
		border-color: #eeeeee;
		border-style: dashed;
		background-color: #fafafa;
		color: #bdbdbd;
		outline: none;
		transition: border 0.24s ease-in-out;
		cursor: pointer;
	}

	&:focus {
		border-color: var(--primary);
	}

	&:focus svg {
		color: var(--primary);
	}
`;

export const Title = styled.h3`
	margin-bottom: 2rem;
`;

export const TitleUpload = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
