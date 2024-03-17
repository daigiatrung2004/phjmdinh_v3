import styled from 'styled-components';
import Images from '~/assets/images';

export const Header = styled.div`
	background-color: var(--primary);
	height: var(--height-header);
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
	min-width: ${({ isShowNav }) => (isShowNav ? 'var(--width-navbar)' : '0rem')};
	width: ${({ isShowNav }) => (isShowNav ? 'var(--width-navbar)' : '0rem')};
	top: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	z-index: 100;
	transition: all 0.2s var(--timing-function-carousel);
	overflow: hidden;
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
	width: ${({ isShowNav }) => (isShowNav ? 'calc(100% + (-1) * var(--width-navbar))' : '100%')};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: var(--white);
	z-index: 1;
	flex-grow: 1;
`;
export const Container = styled.div`
	--width-navbar: 35rem;
	--height-header: 6rem;
	background-color: var(--white);
	display: flex;
	flex-direction: column;
`;

export const Bars = styled.div`
	position: absolute;
	left: ${({ isShowNav }) => (isShowNav ? 'calc(var(--width-navbar) + 2rem)' : '2rem')};
	top: 1.5rem;
	cursor: pointer;
	transition: all 0.2s var(--timing-function-carousel);
`;
