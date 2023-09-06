import styled, { keyframes } from 'styled-components';

const loadingFrame = keyframes`
	from {
		width: auto;
		transform: rotateY(0deg);
	}
	to {
		
		transform: rotateY(360deg);
		width: auto;
	}
`;

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	animation: ${loadingFrame} 1s 1s cubic-bezier(0.97, -0.03, 0.805, 0.685) infinite;
	justify-content: center;
	width: 20px;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
`;
