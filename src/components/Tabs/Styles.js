import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { mediaQueries } from '~/utils/reponsive';

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
	position: relative;
`;

export const Header = styled.header`
	${mediaQueries(
		'desktop',
		`
			color: var(--white);
			margin: 0px calc(var(--margin-left-default));
		`
	)}

	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}
`;

export const HeaderMB = styled.header`
	${mediaQueries(
		['desktop', 'tablet'],
		`
			display: none;
		`
	)}

	${mediaQueries(
		'mobile',
		`
		margin-left: .7rem;
		`
	)}
`;

export const Line = styled.div`
	${mediaQueries(
		'desktop',
		`
			opacity: 0.15;
			height: 0.1rem;
			margin: 0.2rem calc(var(--margin-left-default) - 0.55rem);
			background-color: var(--white);
		`
	)}

	${mediaQueries(
		'mobile',
		`
			background-color: var(--white);
			opacity: 0.15;
			height: 0.1rem;
			margin: 0px;
		`
	)}
`;
export const List = styled.ul`
	display: flex;
	justify-content: flex-start;

	${mediaQueries(
		'mobile',
		`
		font-size: 1.4rem;
		flex-shrink: 0;
		display: block;
		`
	)}
`;
export const ListItemHeader = styled.li`
	position: relative;
	opacity: 0.6;
	color: var(--white);
	padding: 1.6rem 0px;
	/* margin-left: 1rem; */
	margin-right: 2rem;
	cursor: pointer;
	font-weight: 700;

	&::after {
		content: '';
		position: absolute;
		height: 0.4rem;
		width: 100%;
		pointer-events: none;
		opacity: 0;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		left: -0.5rem;
		bottom: 0;
		transition: all 0.5s var(--timing-function-carousel);
	}

	&.selected::after {
		content: '';
		opacity: 1;
		background-color: var(--primary);
		height: 0.4rem;
		width: 100%;
		pointer-events: all;
	}

	&.selected {
		opacity: 1;
		cursor: pointer;
		transition: all 0.5s var(--timing-function-carousel);
	}

	${mediaQueries(
		'mobile',
		`
		font-size: 1.4rem;
		padding-left: 1rem;
		margin-right: 0rem;
		padding-right: 1rem;
		overflow: hidden;
		&.selected::after {
			content: '';
			opacity: 1;
			background-color: var(--primary);
			height: 0.4rem;
			width: 100%;
			pointer-events: all;
		}

		&:hover {
			background-color: rgba(0, 0, 0, .1);
			opacity: 1;

		}
		`
	)}

	transition: all 0.5s var(--timing-function-carousel);
`;
export const Body = styled.main`
	margin: 2rem var(--margin-left-default);
	padding-right: 2rem;
	padding-left: 0.2rem;
	color: var(--white);
	position: relative;
`;
export const Content = styled.div`
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 0%;
	width: 0%;
	pointer-events: none;

	&.show {
		opacity: 1;
		height: 100%;
		width: 100%;
		pointer-events: all;
		transition: all 0.5s var(--timing-function-carousel);
	}
`;

export const Trailer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);

	& > * {
		z-index: 100;
	}
`;
