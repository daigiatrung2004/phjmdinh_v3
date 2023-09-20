import styled from 'styled-components';
import Background from '~/components/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const Wrapper = styled.div`
	padding-left: 83px;
`;

export const ItemsWrapper = styled.div`
	display: block;
	max-width: calc(225px * 5);
	/* flex-wrap: wrap;
	justify-items: center; */
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
	min-width: 180px;
	max-width: 360px;
	height: 13.67vw;
	max-height: 240px;
	min-height: 120px;
	background-position: left bottom;
	background-repeat: no-repeat;
	color: rgb(230, 230, 230);
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

	& div.focus-item-score {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		font-size: 14px;
		color: rgb(28, 199, 73);
		font-weight: 700;
		line-height: 17px;
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
	}

	& span.focus-item-update {
		display: inline-flex;
		-webkit-box-align: center;
		align-items: center;
		text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
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
`;
