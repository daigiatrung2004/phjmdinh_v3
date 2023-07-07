import styled from 'styled-components';

export const Tabs = styled.div`
	display: flex;
	flex-direction: column;
	width: 450px;
	min-height: 400px;
	color: var(--white);
	margin-top: 50px;
`;

export const Tab = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
	cursor: pointer;
	width: 180px;
	background-color: ${({ isActive }) => (isActive ? 'rgba(13, 27, 36)' : 'rgba(0, 0, 0, 0.2)')};

	&:nth-child(2n)::after {
		content: '';
		width: 0px;
		height: 0px;
		display: block;
		border-bottom: 25px solid ${({ isActive }) => (isActive ? 'rgba(13, 27, 36)' : 'rgba(0, 0, 0, 0.2)')};
		border-left: 25px solid transparent;
		border-top: 25px solid transparent;
		border-right: 25px solid ${({ isActive }) => (isActive ? 'rgba(13, 27, 36)' : 'rgba(0, 0, 0, 0.2)')};
		position: absolute;
		top: 0;
		right: 100%;
	}

	&:nth-child(2n + 1)::after {
		content: '';
		width: 0px;
		height: 0px;
		display: block;
		border-bottom: 25px solid ${({ isActive }) => (isActive ? 'rgba(13, 27, 36)' : 'rgba(0, 0, 0, 0.2)')};
		border-left: 25px solid ${({ isActive }) => (isActive ? 'rgba(13, 27, 36)' : 'rgba(0, 0, 0, 0.2)')};
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
	background-color: rgba(0, 0, 0, 0.5);
	min-height: 200px;
	border-top: 1px solid rgba(0, 0, 0, 0.4);
	padding: 20px;
	clear: both;
`;

export const Item = styled.div`
	background-color: rgb(26, 54, 72);
	color: gray;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	float: left;
	margin-right: 20px;
	width: 20px;
	margin-bottom: 20px;

	&.active {
		color: var(--white);
	}

	&.live {
		color: var(--primary);
	}
`;
