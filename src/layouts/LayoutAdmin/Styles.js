import styled from 'styled-components';
import Images from '~/assets/images';

export const Header = styled.div`
	background-color: var(--primary);
	height: 6rem;
	position: relative;
	z-index: 100;
`;

export const Username = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 100%;
	right: 2rem;
`;

export const Name = styled.p`
	margin: 0;
	font-size: 2rem;
	color: white;
	margin-left: 0.5rem;
	font-weight: 500;
`;

export const Navbar = styled.div`
	position: absolute;
	background-color: var(--bg-color-override);
	min-width: 35rem;
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	z-index: 100;
`;

export const NavbarHeader = styled.div`
	height: 12rem;
	background-origin: padding-box;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: ${`linear-gradient(-45deg, rgba(0,220,90,0.5) 35%, rgba(0,220,90,0.8) 100%), url(${Images.BgAbout})`};
`;

export const List = styled.div`
	padding: 5rem 1rem 5rem 1rem;
	flex-grow: 1;
`;

export const Content = styled.div`
	width: 102rem;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: var(--white);
	z-index: 1;
`;
export const Container = styled.div`
	background-color: var(--white);
`;
