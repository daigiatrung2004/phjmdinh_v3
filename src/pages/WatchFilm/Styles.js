import styled from 'styled-components';
import { mediaQueries } from '~/utils/reponsive';

export const WatchArea = styled.div`
	/* margin-top: 6rem; */
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-left: 8rem;
	padding-right: 8rem;
	padding-top: 8rem;
`;

export const WatchContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 9fr 1fr;
	margin-top: 2rem;
	background-color: var(--bg-color-override);
	margin-bottom: 2rem;
`;

export const PresentationFilmArea = styled.div`
	display: grid;
	grid-template-rows: 90% 10%;
`;

export const VideoArea = styled.div`
	border-right: 1px solid rgba(255, 255, 255, 0.3);
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const FooterPresentationArea = styled.div`
	display: flex;
	align-items: center;
`;

export const EposideArea = styled.div`
	justify-self: end;
	padding: 3rem 0rem;
`;

export const RecommendFilmArea = styled.div`
	margin-top: 3rem;
`;

export const ContentFilm = styled.div`
	min-height: 30rem;
`;

/*style for carousel*/
export const CarouselTitle = styled.div`
	width: 20.5vw;
	min-width: 18rem;
	max-width: 36rem;
	max-height: 24rem;
	background-position: left bottom;
	background-repeat: no-repeat;
	color: rgb(230, 230, 230);
	font-family: 'Noto Sans';
	font-size: 2.8rem;
	font-weight: 800;

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

export const ActorsArea = styled.div``;

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

export const CalendarEposide = styled.div`
	border: 1px solid var(--primary);
	margin-bottom: 2rem;
	padding-left: 1rem;
`;

export const ChatFbArea = styled.div`
	min-height: 20rem;
`;

export const ChatBody = styled.div`
	background-color: var(--white);
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
