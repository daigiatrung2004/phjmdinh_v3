import styled from 'styled-components';
import Background from '~/components/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const PlayIcon = styled(FontAwesomeIcon).attrs(() => ({ icon: faPlay }))`
	font-size: var(--size-icon);
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all var(--time-scale-item) ease-in-out;
`;

export const Container = styled.div`
	--margin-left-default: 5.6rem;
`;
export const Header = styled.header`
	color: var(--white);
	margin: 0px calc(var(--margin-left-default));
`;

export const Line = styled.div`
	opacity: 0.15;
	height: 0.1rem;
	margin: 0.2rem var(--margin-left-default);
	background-color: var(--white);
`;
export const List = styled.ul`
	display: flex;
	justify-content: flex-start;
`;
export const ListItemHeader = styled.li`
	opacity: 0.6;
	color: rgb(255, 255, 255);
	padding: 16px 0px;
	/* margin-left: 1rem; */
	margin-right: 2rem;
	cursor: pointer;

	&.selected {
		opacity: 1;
		font-weight: 700;
		cursor: pointer;
		border-bottom: 0.4rem solid var(--primary);
		/* width: fit-content; */
		padding-left: 5px;
		padding-right: 5px;
	}
`;
export const Body = styled.main`
	margin: 2rem var(--margin-left-default);
	padding-right: 2rem;
	padding-left: 0.2rem;
	color: var(--white);
`;
export const Content = styled.div``;

export const Trailer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);

	& > * {
		z-index: 100;
	}
`;
