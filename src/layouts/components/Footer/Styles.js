import styled from 'styled-components';
import Background from '~/components/Background';

export const Footer = styled.footer`
	clear: both;
	min-height: 300px;
	background-color: var(--bg-color-override);
	position: relative;
	background: url('http://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	overflow: hidden;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-img-after);
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	font-size: 1.2rem;
	width: 80%;
	overflow: hidden;
`;

export const CustomBg = styled(Background)`
	&:hover {
		height: 100% !important;
		cursor: pointer;
	}

	transition: all 0.2s ease;
`;
