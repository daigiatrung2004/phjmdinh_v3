import { createGlobalStyle } from 'styled-components';

export const Style = createGlobalStyle`
	@import url('normalize.css');
	/* @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,700;0,800;0,900;1,400;1,500;1,700;1,800;1,900&display=swap'); */
	@import url('~/assets/fonts/fonts.scss');

	:root {
		--black: #000;
		--bg-color: #193549;
		--bg-color-override: #163042;
		--white: #fff;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-family: 'Nunito', sans-serif;
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
	}
`;
