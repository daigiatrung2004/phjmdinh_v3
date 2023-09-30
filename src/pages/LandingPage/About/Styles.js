import styled from 'styled-components';
import Images from '~/assets/images';

export const Summary = styled.div`
	margin-top: var(--width-header);
	background-repeat: no-repeat;
	background-size: 100%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.3) 123.2px, rgb(17, 19, 25) 560px, rgb(17, 19, 25) 100%),
		url('${Images.BgAbout}');
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
	color: var(--white);
	padding-top: 7rem;
	font-size: 3rem;
`;

export const ContentSheet = styled.div`
	margin-top: 3rem;
	width: 80.4rem;
	background-image: linear-gradient(rgb(56, 60, 71) 0%, rgb(26, 28, 34) 0%, rgb(17, 19, 25) 100%);
	box-shadow: rgba(0, 0, 0, 0.2) 0px -6px 15px 0px;
	text-align: center;
	margin: 5rem auto 0rem;
`;

export const TrendSheet = styled.div`
	margin-top: 7rem;
`;

export const TrendSlide = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Contact = styled.div`
	margin-top: 5rem;
	text-align: center;
	color: var(--white);
`;

export const Culture = styled.div`
	width: 904px;
	min-height: 380px;
	box-sizing: border-box;
	/* margin-top: 60px; */
	padding-top: 60px;
	background-size: 380px;
	margin: 7rem auto;
	background: url('${Images.BgEarthAbout}') right center / 44rem no-repeat;
	color: var(--white);
`;

export const CultureItem = styled.div`
	margin-bottom: 5rem;
`;

export const CultureTitle = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
`;

export const CultureDesc = styled.div`
	margin-top: 1.6rem;
	font-size: 1.4rem;
	color: var(--text-color-search);
`;

export const Line = styled.div`
	background: rgb(22, 24, 28);
	height: 0.2rem;
	margin-top: 6rem;
`;
