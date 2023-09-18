import styled from 'styled-components';

export const Button = styled.button`
	font-size: 1.8rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	margin-left: 10px;
	margin-right: 10px;
	box-sizing: border-box;
	user-select: none;

	&:active {
		background-color: rgba(255, 198, 0);
		color: var(--white);
	}

	&.small {
		padding: 6px 20px;
	}

	&.mini-small {
		padding: 6px;
		font-size: 1.2rem;
	}

	&.medium {
		padding: 10px 36px;
	}

	&.fullW {
		width: 95%;
	}

	&.large {
		padding: 16px 32px;
	}

	&.rounded {
		border-radius: 999px;
	}

	&.primary {
		background-color: var(--primary);
		color: var(--white);
		border-radius: 5px;

		&:active {
			background-color: white;
			color: var(--black);
		}
	}

	&.border {
		border: 1px solid var(--black);
		border-radius: 5px;
	}

	&.default {
		background-color: var(--white);
		color: var(--black);
	}

	&.transparent {
		background-color: transparent;
		box-shadow: none;
		padding: 0;
	}

	.icon ~ .content,
	.content ~ .icon {
		margin-left: 10px;
	}

	${props => ({ ...props.stylesCustom })}
`;
