import styled from 'styled-components';

export const Content = styled.div`
	clear: both;
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '300px')};
	position: relative;
	overflow-x: scroll;
	overflow-y: hidden;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	background: transparent;

	&.content > * {
		z-index: 100;
	}
`;

export const Background = styled.div`
	clear: both;
	background: ${({ src }) =>
		src ? `url('${src}')` : `url('http://image.tmdb.org/t/p/w500/7ABsaBkO1jA2psC8Hy4IDhkID4h.jpg')`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	position: relative;
	height: 100%;
	width: 100%;
`;

export const Overlay = styled.div`
	background-color: rgba(3, 37, 65, 0.7);
	position: relative;
	z-index: 50;
	height: 100%;
	width: 100%;
`;
