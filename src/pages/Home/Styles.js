import styled from 'styled-components';
import Background from '~/components/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Label from '~/components/Label';
import { mediaQueries } from '~/utils/reponsive';

export const Wrapper = styled.div`
	/* padding-left: 83px; */
	position: relative;
	z-index: 1000;
`;
export const Row = styled.div`
	${mediaQueries(
		'mobile',
		`
			position: relative;
			margin-left: .5rem;
		`
	)}

	${mediaQueries(
		'desktop',
		`
			position: relative;
			margin-left: 8.3rem;
		`
	)}
`;
export const ItemsWrapper = styled.div`
	display: block;
	/* grid-template-columns: repeat(20, minmax(23.7rem, 1fr)); */
	/* grid-auto-flow: column; */
	/* justify-content: center; */
	/* max-width: calc(225px * 5); */
	/* flex-wrap: wrap;
	justify-items: center; */
	/* overflow-x: hidden;
	padding-left: 2.5rem; */
	margin-bottom: 8rem;
	${mediaQueries(
		'mobile',
		`
			margin-bottom: 0.5rem;
		`
	)}
`;

//trailers
export const Trailer = styled(Background)`
	display: flex;

	& > * {
		z-index: 100;
	}
`;

export const PlayIcon = styled(FontAwesomeIcon).attrs(() => ({ icon: faPlay }))`
	font-size: var(--size-icon);
	color: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all var(--time-scale-item) ease-in-out;
`;

/*style for carousel*/
export const CarouselTitle = styled.div`
	width: 20.5vw;
	min-width: 18rem;
	max-width: 36rem;
	height: 13.67vw;
	max-height: 24rem;
	min-height: 12rem;
	background-position: left bottom;
	background-repeat: no-repeat;
	color: rgb(230, 230, 230);
	${mediaQueries(
		'mobile',
		`
		min-height: 8rem;
		`
	)}
`;

export const Rank = styled.div`
	& div.focus-item-labels {
		display: flex;
		margin-top: 20px;
		font-size: 12px;
		-webkit-box-align: center;
		align-items: center;
		color: var(--white);
	}

	& span.focus-item-label-top {
		background: rgba(255, 255, 255, 0.2);
		padding-left: 0px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		height: 1.8rem;
		line-height: 1.8rem;
		font-size: 1.1rem;
		color: rgb(255, 255, 255);
		padding: 0px 0.4rem 0px 0px;
		margin-right: 0.6rem;
		border-radius: 0.2rem;
		box-sizing: border-box;
		font-weight: 700;

		${mediaQueries(
			'mobile',
			`
		font-size: .8rem
		`
		)}
	}

	& span.focus-item-label-rank {
		background-image: linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%);
		border-radius: 2px 0px 0px 2px;
		padding: 0px 4px;
		margin-right: 4px;
		height: 18px;
		line-height: 18px;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		color: var(--white);
	}

	& span.focus-item-label-original {
		background-image: linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%);
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
		height: 18px;
		line-height: 18px;
		font-size: 11px;
		color: rgb(255, 255, 255);
		padding: 0px 4px;
		margin-right: 6px;
		border-radius: 2px;
		box-sizing: border-box;
		font-weight: 700;
	}
`;

export const Info = styled.div`
	& div.focus-item-info {
		font-weight: 500;
		line-height: 17px;
		margin-top: 12px;
		display: flex;
		font-size: 12px;
		-webkit-box-align: center;
		align-items: center;
		color: var(--white);
	}

	& span.focus-item-score {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		font-size: 14px;
		color: rgb(28, 199, 73);
		font-weight: 700;
		line-height: 17px;

		& svg {
			width: 12px;
			height: 12px;
			margin-right: 4px;
		}

		&::after {
			content: '';
			margin: 0px 6px;
			height: 10px;
			width: 2px;
			background: rgba(255, 255, 255, 0.2);
		}
	}

	& span.focus-item-year {
		text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
	}

	& span.focus-item-rating {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
		font-weight: 500;
		line-height: 17px;

		&::before {
			content: '';
			margin: 0px 6px;
			height: 10px;
			width: 2px;
			background: rgba(255, 255, 255, 0.2);
		}
	}

	& span.focus-item-update {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;

		&::before {
			content: '';
			margin: 0px 6px;
			height: 10px;
			width: 2px;
			background: rgba(255, 255, 255, 0.2);
		}
	}
`;

export const Tags = styled.div`
	& div.focus-item-tags {
		margin-top: 13px;
		font-size: 12px;
		line-height: 16px;
		color: rgb(236, 236, 236);
		font-weight: 500;
		text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
	}

	& div.focus-item-tags span {
		display: inline-block;
		margin-right: 6px;
		padding: 0px 5px;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 2px;
	}

	${mediaQueries(
		'mobile',
		`
		display:none;
		`
	)}
`;

export const Desc = styled.div`
	width: 31.25vw;
	min-width: 320px;
	overflow: hidden;
	height: 32px;
	line-height: 16px;
	margin-top: 12px;
	font-size: 14px;
	display: -webkit-box;
	text-overflow: ellipsis;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
	font-weight: 500;
	color: var(--white);
	${mediaQueries(
		'mobile',
		`
		display:none;
		`
	)}
`;

export const WrapBtn = styled.div`
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	width: 8.333vw;
	max-width: 152px;
	margin-top: 1.6rem;
	${mediaQueries(
		'mobile',
		`
		display:none;
		`
	)}
`;

export const PlayWrap = styled.div`
	color: var(--white);
	&:hover svg.play-button circle {
		fill: rgb(73, 210, 109);
	}

	& svg.play-button {
		width: 3.51562vw;
		height: 3.51562vw;
		align-items: flex-start;
		max-width: 60px;
		max-height: 60px;
	}
`;

export const CollectorWrap = styled.div`
	position: relative;
	width: 3.51562vw;
	height: 3.51562vw;
	align-items: flex-start;
	max-width: 60px;
	max-height: 60px;
	& div {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	& svg {
		width: 3.51562vw;
		height: 3.51562vw;
		align-items: flex-start;
		max-width: 60px;
		max-height: 60px;
	}

	& div.collector {
		display: block;
	}

	& div.collector-hover {
		display: none;
	}

	&:hover > div.collector {
		display: none;
	}

	&:hover > div.collector-hover {
		display: block;
	}
`;

// backtop

export const BackTop = styled.div`
	background: rgb(49, 52, 57);
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	border-radius: 999px;
	flex-direction: column;
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: var(--zIndex-general);
	display: none;
`;

export const Line = styled.div`
	opacity: 0.08;
	background: var(--white);
	border-radius: 1px;
	width: 16px;
	height: 1px;
	margin: 0px auto;
`;

export const BtnBackHome = styled(Label)`
	width: 44px;
	height: 44px;
	background: rgb(49, 52, 57);
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	-webkit-box-pack: center;
	justify-content: center;
	border-radius: 50%;

	&:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.05);
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}

	&:active {
		cursor: default;
		background: rgb(49, 52, 57);
		border-top-right-radius: 999px;
		border-top-left-radius: 999px;
	}
`;

export const BtnBackTop = styled(BtnBackHome)`
	&:hover {
		cursor: pointer;
		background-color: rgba(255, 255, 255, 0.05);
		border-top-right-radius: 0px;
		border-top-left-radius: 0px;
	}

	&:active {
		cursor: default;
		background: rgb(49, 52, 57);
		border-bottom-right-radius: 999px;
		border-bottom-left-radius: 999px;
	}
`;

export const TitleLabel = styled(Label)`
	margin-left: 1rem;
	cursor: pointer;

	&:hover svg {
		color: var(--primary) !important;
	}

	&:hover .extend-icon {
		width: 10rem;
	}

	${mediaQueries(
		'mobile',
		`
		&:hover .extend-icon {
			width: 7rem;
		}
		`
	)}

	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}

	transition: all 0.2s 0.4s ease;
`;

export const ExtendIcon = styled.span`
	color: var(--primary);
	display: inline-flex;
	width: 0rem;
	height: 2.7rem;
	overflow: hidden;
	font-size: 2rem;
	font-weight: normal;
	transition: all 0.1s 0.2s ease;

	${mediaQueries(
		'mobile',
		`
		font-size: 1.6rem;
		`
	)}
`;

export const ArrowRight = styled(FontAwesomeIcon)`
	${mediaQueries(
		'mobile',
		`
	font-size: 1.4rem
	`
	)}
`;
