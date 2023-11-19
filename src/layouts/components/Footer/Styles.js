import styled from 'styled-components';
import Background from '~/components/Background';
import Label from '~/components/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mediaQueries } from '~/utils/reponsive';

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

export const CustomBg = styled(Background)``;

export const Copy = styled.div`
	--copy-color: rgb(155, 155, 155);
	margin-top: 2rem;
	text-align: center;
	font-family: 'Noto Sans';
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	justify-content: center;
	margin-bottom: 2rem;
`;

export const CopyContent = styled.div`
	margin-right: 4.5rem;
`;

export const CopyRight = styled.p`
	font-size: 12px;
	line-height: 16px;
	font-weight: 300;
	color: var(--copy-color);
	text-align: left;
	margin: 0px auto;
	line-height: 1.9rem;
`;

export const App = styled.div`
	display: flex;
	-webkit-box-pack: justify;
	justify-content: center;
	align-items: flex-end;
	height: 40px;
	margin: 0px auto 0px 62px;
	min-width: 122px;
`;

export const FooterSheet = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: var(--zIndex-general);
	background-color: var(--bg-color-override);
	padding-bottom: 2rem;
	overflow: hidden;
	height: 9rem;

	&:hover {
		height: 29.4rem;
		cursor: pointer;
	}

	&.opacity-transparent {
		pointer-events: none;
		height: 0rem;
		opacity: 0;
	}

	transition: all 0.5s 0.4s ease;

	${mediaQueries(
		'mobile',
		`
		display:none;
		`
	)}
`;

export const Social = styled(Label)``;

export const Icon = styled(FontAwesomeIcon)`
	font-size: 3rem;
	margin-left: 1.5rem;

	&:hover {
		color: var(--primary);
	}
`;
