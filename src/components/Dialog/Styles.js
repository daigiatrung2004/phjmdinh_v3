import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const popUP = keyframes`
	0% {
		opacity: 0;
		transform: scale(0.95);
	}
	66% {
		opacity: .5;
		transform: scale(1.05);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;

export const PopUp = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
	min-width: 0px;
	padding: 20px;
	/* top: 50%;
	left: 50%; */
	/* transform: translate(-50%, -50%); */
	flex-direction: column;
	background-color: white;
	animation: 0.6s 0.3s ease-in-out 1 normal running ${popUP};
	border-radius: 5px;
`;

export const HeaderPopup = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0px 20px 0px;
	font-size: 2.6rem;
	position: relative;
`;

export const BodyPopup = styled.div`
	width: 100%;
	padding: 20px;
	font-size: 1.6rem;
	position: relative;
	flex: 1;
	text-align: center;
`;

export const FooterPopup = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-items: center;
	padding: 5px;
`;

export const CloseIcon = styled(FontAwesomeIcon)`
	font-size: 1.8rem;
	position: absolute;
	top: 0px;
	right: 0px;
	color: var(--black);
	cursor: pointer;
`;
