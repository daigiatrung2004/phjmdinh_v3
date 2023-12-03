import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mediaQueries } from '~/utils/reponsive';
import ImageComponent from '~/components/Image';
import Images from '~/assets/images';

// wrapper
export const Header = styled.header`
	${mediaQueries(
		'mobile',
		`
		width: 100%;
		height: var(--width-header);
		background-color: var(--bg-color-override);
		display: flex;
		align-items: center;
		justify-content: space-around;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		width: 100%;
		height: var(--width-header);
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: var(--color-transparent);
		position: fixed;
		transition: background-color 0.5s linear 0s;
		z-index: 10000;
		`
	)}
`;

/*
	component for mobile
*/
export const Bar = styled.div`
	${mediaQueries(
		'mobile',
		`
		color: var(--white);
		font-size: 2rem;
		cursor: pointer;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: none;
		`
	)}
`;

export const SearchMobile = styled.div`
	${mediaQueries(
		'mobile',
		`
		color: var(--white);
		font-size: 2rem;
		cursor: pointer;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: none;
		`
	)}
`;

export const InputSearchMobile = styled.input`
	${mediaQueries(
		'mobile',
		`
		position: absolute;
		top: 6rem;
		z-index: 1000;
		padding: 1.5rem;
		width: 100%;
		color: var(--black);
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: none;
		`
	)}
`;

// logo
export const Image = styled(ImageComponent)`
	${mediaQueries(
		'mobile',
		`
		height: 100%;
		width: 12rem;
		display: flex;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
			height: 100%;
			width: 15rem;
			display: flex;
		`
	)}
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

	${mediaQueries(
		'desktop',
		`
		position: relative;
		`
	)}

	${mediaQueries(
		['mobile', 'tablet'],
		`
		display: none;
		`,
		true
	)}
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
		/* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
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
	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: flex;
		align-items: center;
		`
	)}
`;

// User
export const SignUpIcon = styled(FontAwesomeIcon)`
	font-size: 1.8rem;
`;

export const KindRecommend = styled.div`
	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}

	${mediaQueries(
		'desktop',
		`
		margin-right: 27rem;
		position: relative;
		display: flex;

		& label.channel {
			margin-left: 2.4rem;
			flex-shrink: 0;
		}
		`
	)}

	${mediaQueries(
		'tablet',
		`
		margin-right: 6rem;
		position: relative;
		display: flex;

		& label.channel {
			margin-left: 2.4rem;
			flex-shrink: 0;
		}
		`
	)}
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
	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
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
		`
	)}
`;

export const Account = styled.div`
	${mediaQueries(
		'mobile',
		`
		display: none;
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		text-align: center;
		padding: 1.6rem;
		width: 28rem;
		height: 11.4rem;
		`
	)}
`;

export const NabBarMbWrapper = styled.div`
	--background-navbar-mobile: #23252b;
	${mediaQueries(
		'mobile',
		`
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: var(--max-zIndex);
		cursor: pointer;
		width: 0%;
		height: 100%;
		overflow: hidden;
		&.showNav {
			width: 100%;
		}
		transition: all 0.5s var(--timing-function-carousel);
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display:none;
		`
	)}
`;

export const OverlayMb = styled.div`
	${mediaQueries(
		'mobile',
		`
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: var(--black);
		opacity: 0.5;
		z-index: var(--max-zIndex);
		display: none;
		&.showNav {
			display: block;
		}
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: none;
		`
	)}
`;

export const NavbarMb = styled.div`
	${mediaQueries(
		'mobile',
		`
		background-color: var(--background-navbar-mobile);
		position: absolute;
		height: 100%;
		width: 0%;
		overflow: scroll;
		z-index: calc(var(--max-zIndex) + 1);
		top: 0;
		left: 0;
		bottom: 0;
		&.showNav {
			width: 80%;
		}
		transition: all 0.5s var(--timing-function-carousel);

		&::-webkit-scrollbar {
			width: 0px;
		}
		`
	)}

	${mediaQueries(
		['desktop', 'tablet'],
		`
		display: none;
		`
	)}
`;

export const NavBarHeaderMb = styled.div`
	height: 10rem;
	background-image: linear-gradient(0deg, rgba(0, 214, 57, 0.6) 2%, rgba(0, 214, 57, 0.4) 100%),
		url('${Images.BgAbout}');
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	display: flex;
	padding-left: 1.6rem;
	align-items: center;
`;

export const NavBarBodyMb = styled.div`
	position: relative;
	margin-top: 3rem;
	padding-left: 1rem;
	overflow: hidden;
`;
export const Line = styled.div`
	content: '';
	position: absolute;
	right: 0px;
	bottom: -8px;
	width: 254px;
	height: 1px;
	background-color: rgb(45, 47, 52);
`;

export const AboutMb = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 24rem;
	overflow: hidden;
`;
export const SettingsMb = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 24rem;
	overflow: hidden;
`;
export const AccountMb = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 24rem;
	overflow: hidden;
`;

export const UserMb = styled.div`
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 2rem;
	width: 20rem;
	overflow: hidden;
`;

export const UserNameMb = styled.span`
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	width: 15rem;
	flex-shrink: 0;
	color: var(--white);
	font-weight: 700;
	font-size: 1.6rem;
`;
