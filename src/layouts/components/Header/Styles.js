import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImageComponent from '~/components/Image';

// wrapper
export const Header = styled.header`
	--width-header: 60px;
	width: 100%;
	height: var(--width-header);
	display: flex;
	align-items: center;
	justify-content: start;
	background-color: var(--color-transparent);
	position: fixed;
	transition: background-color 0.5s linear 0s;
	z-index: 10000;
`;

// logo
export const Image = styled(ImageComponent)`
	height: 100%;
	width: 15rem;
	display: flex;
`;

// search
export const Search = styled.div`
	--right-loading-lose: 49px;
	--font-loading-lose: 1.6rem;
	--height-loading-lose: 16px;
	--font-search: 2rem;
	--right-spacer: 44px;
	--width-spacer: 1px;
	--height-spacer: 16px;
	--height-search: 36px;
	--width-search: 240px;
	--width-lookup: 18px;
	--height-lookup: 18px;
	--right-lookup: 11px;

	position: relative;
`;

export const Input = styled.input`
	height: var(--height-search);
	width: var(--width-search);
	font-size: var(--font-search);
	caret-color: var(--text-color-search);
	padding: 0px 73px 0px 12px;
	box-sizing: border-box;
	border-radius: 4px;
	display: block;
	border: none;
	color: var(--text-color-search);
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	background-color: var(--bg-search);
	outline: none;
	flex-shrink: 0;
	&:focus-within {
		/* border: 1px solid var(--white); */
		box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	}
`;

export const Button = styled(FontAwesomeIcon)`
	position: absolute;
	right: var(--right-lookup);
	color: var(--white);
	top: calc((var(--height-search) - var(--height-lookup)) / 2);
	width: var(--width-lookup);
	height: var(--height-lookup);
	font-size: 12px;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	cursor: pointer;

	&:focus:active {
	}
`;

export const Spacer = styled.span`
	position: absolute;
	right: var(--right-spacer);
	top: calc((var(--height-search) - var(--height-spacer)) / 2);
	width: var(--width-spacer);
	height: var(--height-spacer);
	background: var(--text-color-search);
`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const Loading = styled(FontAwesomeIcon)`
	font-size: var(--font-loading-lose);
	top: calc((var(--height-search) - var(--height-loading-lose)) / 2);
	right: var(--right-loading-lose);
	animation: ${rotate} 0.75s ease-in-out infinite;
	position: absolute;
	color: var(--white);
`;

export const Close = styled(FontAwesomeIcon)`
	font-size: var(--font-loading-lose);
	top: calc((var(--height-search) - var(--height-loading-lose)) / 2);
	right: var(--right-loading-lose);
	cursor: pointer;
	position: absolute;
	color: var(--white);
`;

export const User = styled.div`
	display: flex;
	align-items: center;
`;

// User
export const SignUpIcon = styled(FontAwesomeIcon)`
	font-size: 1.8rem;
`;

export const KindRecommend = styled.div`
	margin-right: 270px;
	position: relative;
	display: flex;

	& label.channel {
		margin-left: 24px;
		flex-shrink: 0;
	}
`;

export const Tool = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TitlePremote = styled.div`
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	white-space: normal;
	word-break: break-all;
	font-size: 12px;
	line-height: 14px;
	color: rgb(255, 255, 255);
	width: 82px;
	padding: 2px 4px 2px 4px;
	background-color: #ff4f18;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	margin-left: 16px;
	position: absolute;
	left: -6px;
	top: -8px;
`;

export const MenuItem = styled.div`
	margin: 0px;
	text-align: center;
	font-size: 14px;
	width: 180px;
	height: 44px;
	line-height: 44px;
	display: block;
	color: rgb(169, 169, 172);
	cursor: pointer;
`;

export const ListPage = styled.div`
	box-sizing: border-box;
	display: flex;
	padding: 16px 26px;
	flex-direction: column;
	-webkit-box-pack: start;
	justify-content: flex-start;
	-webkit-box-align: center;
	align-items: center;
	flex: 1 1 0%;
	width: 280px;
	min-height: 202px;

	& .list-page-title {
		font-size: 13px;
		color: rgb(169, 169, 172);
		letter-spacing: 0px;
		text-align: center;
		line-height: 18px;
		margin-top: 8px;
		overflow: hidden;
		font-weight: normal;
		margin-bottom: 10px;
	}
`;

export const LanguageArea = styled.div`
	position: relative;
	padding: 8px 0px;
	background-color: rgb(26, 28, 34);
	width: 28.2rem;
	height: 15rem;

	& .language {
		width: 248px;
		padding: 0px 16px;
		text-align: center;
		position: relative;
		height: 44px;
		line-height: 44px;
		font-size: 14px;
	}
`;

export const Account = styled.div`
	text-align: center;
	padding: 16px;
	width: 280px;
	height: 114px;
`;
