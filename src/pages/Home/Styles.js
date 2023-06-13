import styled from 'styled-components';
import Background from '~/components/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const Wrapper = styled.div`
	padding-left: 83px;
`;

export const ItemsWrapper = styled.div`
	display: block;
	max-width: calc(225px * 5);
	/* flex-wrap: wrap;
	justify-items: center; */
`;

//trailers
export const Trailer = styled(Background)`
	display: flex;

	& > * {
		z-index: 100;
	}
`;

export const PlayIcon = styled(FontAwesomeIcon).attrs(() => ({ icon: faPlay }))`
	font-size: var(--size-icon);
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all var(--time-scale-item) ease-in-out;
`;
