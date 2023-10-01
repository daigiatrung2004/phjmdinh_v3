import styled from 'styled-components';

export const Dialog = styled.div`
	position: relative;
	width: 74.5vw;
	top: 6.2vw;
	background: white;
	margin: 0 auto 110px;
	min-height: 72vh;
	padding: 0.65vw 3.65vw 4.65vw 3.65vw;
	font-size: 14px;
	box-sizing: border-box;

	& h3 {
		font-size: 28px;
		line-height: 28px;
		text-align: center;
		margin-bottom: 1.46vw;
		font-weight: bold;
	}

	& h4 {
		font-size: 2.4rem;
		line-height: 2.4rem;
		text-align: left;
		margin-bottom: 0.9375vw;
		font-weight: bold;
	}

	& p {
		margin-bottom: 3.125vw;
		font-size: 20px;
		word-wrap: break-word;
		text-align: justify;
	}
`;
