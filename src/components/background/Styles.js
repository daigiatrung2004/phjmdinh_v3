import styled from 'styled-components';

export const Background = styled.div`
	clear: both;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '300px')};
	background-color: var(--bg-color-override);
	position: relative;
	background: ${({ src }) =>
		src ? `url('${src}')` : `url('http://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg')`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	overflow-x: scroll;
	overflow-y: hidden;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(3, 37, 65, 0.8);
		/* background-image: linear-gradient(120deg, #eaee44, #33d0ff); */
		/* background-image: linear-gradient(to left, #026990, #0c3b5a); */
		z-index: 1;
		background-position: center;
		background-size: cover;
	}

	&.background > * {
		z-index: 100;
	}
`;
