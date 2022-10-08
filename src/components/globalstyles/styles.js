import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import '~/assets/fonts/fonts.css';

export const Style = createGlobalStyle`
	${normalize}
	/* @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap'); */

	:root {
		--black: #000;
		--bg-color: #193549;
		--bg-color-override: #163042;
		--white: #fff;
		--primary: #FFC600;
		--bg-img-after: rgba(35, 78, 109, 0.35);
		--scale-item: 1.05;
		--size-icon: 40px;
		--time-scale-item:0.25s;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: Nunito, sans-serif;
		font-size: 1.6rem;
		line-height: 1.5;
		color: var(--black);
		text-rendering: optimizeSpeed;
		margin: 0;
		padding: 0;
		background-color: var(--bg-color);
	}

	input,
	button,
	[tabindex] {
		border: none;
		outline: none;
	}

	a[href] {
		color: var(--black);
		text-decoration: none;
		border: none;
	}

/* custom scrollbar */
	::-webkit-scrollbar {
		width: 20px;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a8bbbf;
	}
`;
