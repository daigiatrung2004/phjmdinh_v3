import PropTypes from 'prop-types';

import { forwardRef, useContext, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import HashTag from '~/components/HashTag';
import { Collector, CollectorHover, Play, Star } from '~/components/Icons';
import Label from '~/components/Label';
import Paragraph from '~/components/Paragraph';
import ItemContext from '~/pages/Home/ItemContext';
import * as $ from './Styles';

const Item = forwardRef(function (
	{
		to,
		data,
		type = 'SEARCH_TYPE',
		icon,
		isHideTitle,
		hImage,
		wImage,
		hoverCardoFlag = false,
		hoverBackgroundColorFlag = false,
		isLoadingCurrent = false,
		...propsDefault
	},
	ref
) {
	const [isLoading, setIsLoading] = useState(isLoadingCurrent);
	let src = data.posterPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.posterPath}` : '';

	if (type === 'HORIZON_DISPLAY_TYPE') {
		src = data.backdropPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}` : '';
	}

	let mouseEnter = useContext(ItemContext);

	if (typeof mouseEnter != 'function') {
		mouseEnter = () => {};
	}

	const typeClassNames = {
		SEARCH_TYPE: {
			img: '',
			wrapperItem: 'item__display-searchtype',
			title: '',
			item: 'item-horizontal',
			hoverBgColor: hoverBackgroundColorFlag ? 'hover-background' : '',
		},
		VERTICAL_DISPLAY_TYPE: {
			img: 'img__vertical',
			wrapperItem: 'item__display-vertical',
			title: 'primary',
			item: 'item-vertical',
			hoverBgColor: hoverBackgroundColorFlag ? 'hover-background' : '',
		},
		HORIZON_DISPLAY_TYPE: {
			img: 'hover-scaling img__horizontal',
			wrapperItem: 'item__display-horizontal',
			title: 'primary',
			item: 'item-horizontal',
			hoverBgColor: hoverBackgroundColorFlag ? 'hover-background' : '',
		},
	};

	useEffect(() => {
		setIsLoading(isLoadingCurrent);
	}, [isLoadingCurrent]);

	return isLoading || type === 'SEARCH_TYPE' ? (
		<$.Item
			ref={ref}
			src={to}
			{...propsDefault}
			className={`${typeClassNames[type].wrapperItem} item ${typeClassNames[type].hoverBgColor}`}
			onMouseEnter={() => mouseEnter(src)}
		>
			<$.PresentItem className={`item-present ${typeClassNames[type].item} ${typeClassNames[type].wrapperItem}`}>
				<$.Image
					src={src}
					alt={data.title}
					h={'100%'}
					w={'100%'}
					className={typeClassNames[type].img}
				>
					{icon}
				</$.Image>
				<$.ItemInfo isHide={isHideTitle}>
					<Label className={typeClassNames[type].title}>{data.title}</Label>
					<$.SubTitle>{data.originalTitle}</$.SubTitle>
				</$.ItemInfo>
			</$.PresentItem>
			{hoverCardoFlag && (
				<$.Cardo className="cardo">
					<$.ImageSheet>
						<$.Image
							src={`${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}`}
							alt={data.title}
							h={'14.5rem'}
							w={'25.5rem'}
							className={typeClassNames[type].img + ' not-border-radius not-padding'}
							style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
						/>
						<$.ControlSheet>
							<$.PlayWrap className="wrap pointer flex-center">
								<Play
									width="4rem"
									height="4rem"
								/>
							</$.PlayWrap>
							<$.CollectorWrap>
								<div className="collector pointer">
									<Collector
										width="4rem"
										height="4rem"
									/>
								</div>
								<div className="collector-hover pointer">
									<CollectorHover
										width="4rem"
										height="4rem"
									/>
								</div>
							</$.CollectorWrap>
						</$.ControlSheet>
					</$.ImageSheet>
					<$.CardoBody>
						<Label
							className={typeClassNames[type].title}
							style={{}}
						>
							{data.title}
						</Label>
						<$.Episode_Info_Tag>
							<$.Score>
								<span className="score-info-greenStar">
									<Star
										width="12px"
										height="12px"
									/>
								</span>
								<span className="score-info-number">{data.voteAverage}</span>
								<div className="broken-line"></div>
								<$.Episode>{(data.adult && 'T18') || 'T13'}</$.Episode>
								<div className="broken-line"></div>
								<span>2023</span>
							</$.Score>
							<$.HashTagSheet>
								<HashTag>Thái Lan</HashTag>
								<HashTag>Tình Tiết</HashTag>
								<HashTag>Thái Lan</HashTag>
							</$.HashTagSheet>
							<Paragraph
								style={{ fontSize: '1.2rem', marginTop: '1.2rem' }}
								isTextOverFlow
								numLine={5}
								moreTitle="Xem thêm"
								linkMore={'./reviewfilm/'}
							>
								{data.overview}
							</Paragraph>
						</$.Episode_Info_Tag>
					</$.CardoBody>
				</$.Cardo>
			)}
		</$.Item>
	) : (
		<SkeletonTheme
			baseColor="#202020"
			highlightColor="#444"
			enableAnimation
		>
			<$.Item
				ref={ref}
				src={to}
				{...propsDefault}
				className={`${typeClassNames[type].wrapperItem} item ${typeClassNames[type].hoverBgColor}`}
				onMouseEnter={() => mouseEnter(src)}
			>
				<$.PresentItem
					className={`item-present ${typeClassNames[type].item} ${typeClassNames[type].wrapperItem}`}
				>
					<Skeleton
						height={265.5}
						width={182}
						duration={2}
						// enableAnimation={true}
						style={{ '--pseudo-element-display': 'auto' }}
					/>
					<$.ItemInfo isHide={isHideTitle}>
						<Skeleton
							count={1.5}
							style={{ '--pseudo-element-display': 'auto' }}
						/>
					</$.ItemInfo>
				</$.PresentItem>
			</$.Item>
		</SkeletonTheme>
	);
});

Item.propTypes = {
	to: PropTypes.string,
	data: PropTypes.object.isRequired,
	type: PropTypes.string,
	icon: PropTypes.node,
	isHideTitle: PropTypes.bool,
	hImage: PropTypes.string,
	wImage: PropTypes.string,
};

export default Item;
