import styled, { keyframes } from 'styled-components';

const renderAnimation = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

export const Tabs = styled.div`
	display: flex;
	flex-direction: column;
	width: 45rem;
	min-height: 40rem;
	color: var(--white);
	margin-top: 1rem;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
	cursor: pointer;
	width: 180px;
	background-color: ${({ isActive }) => (isActive ? '#2D2F34' : 'rgba(0, 0, 0, 0.2)')};

	& .icon {
		margin-right: 10px;
	}

	&:nth-child(2n)::after {
		content: '';
		width: 0px;
		height: 0px;
		display: block;
		border-bottom: 25px solid ${({ isActive }) => (isActive ? '#2D2F34' : 'rgba(0, 0, 0, 0.2)')};
		border-left: 25px solid transparent;
		border-top: 25px solid transparent;
		border-right: 25px solid ${({ isActive }) => (isActive ? '#2D2F34' : 'rgba(0, 0, 0, 0.2)')};
		position: absolute;
		top: 0;
		right: 100%;
	}

	&:nth-child(2n + 1)::after {
		content: '';
		width: 0px;
		height: 0px;
		display: block;
		border-bottom: 25px solid ${({ isActive }) => (isActive ? '#2D2F34' : 'rgba(0, 0, 0, 0.2)')};
		border-left: 25px solid ${({ isActive }) => (isActive ? '#2D2F34' : 'rgba(0, 0, 0, 0.2)')};
		border-top: 25px solid transparent;
		border-right: 25px solid transparent;
		position: absolute;
		top: 0;
		left: 100%;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	height: 50px;
	width: 100%;
`;

export const Detail = styled.div`
	background-color: transparent;
	min-height: 200px;
	border-top: 1px solid rgba(0, 0, 0, 0.4);
	padding: 20px;
	clear: both;
	animation: ${renderAnimation} 0.2s ease-in-out 1 normal forwards;
`;

export const Item = styled.div`
	background-color: rgba(255, 255, 255, 0.6);
	color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	float: left;
	margin-right: 20px;
	width: 20px;
	margin-bottom: 20px;
	user-select: none;

	&.active {
		color: var(--white);
		cursor: pointer;
	}

	&.live {
		color: var(--primary);
	}
`;
