import PropTypes from 'prop-types';

import Label from '~/components/Label';
import * as $ from './Styles';
import { forwardRef, useContext } from 'react';
import ItemContext from '~/pages/Home/ItemContext';
import { Star } from '~/components/Icons';
import HashTag from '~/components/HashTag';
import Paragraph from '~/components/Paragraph';

const Item = forwardRef(function (
	{ to, data, type = 'SEARCH_TYPE', icon, isHideTitle, hImage, wImage, ...propsDefault },
	ref
) {
	let src = data.posterPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.posterPath}` : '';

	if (type === 'HORIZON_DISPLAY_TYPE') {
		src = data.backdropPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}` : '';
	}

	let mouseEnter = useContext(ItemContext);

	// console.log('mouseenter:', mouseEnter);
	if (typeof mouseEnter != 'function') {
		mouseEnter = () => {};
	}

	const typeClassNames = {
		SEARCH_TYPE: '',
		VERTICAL_DISPLAY_TYPE: { img: 'img__vertical', wrapperItem: 'item__display-vertical', title: 'primary' },
		HORIZON_DISPLAY_TYPE: {
			img: 'hover-scaling img__horizontal',
			wrapperItem: 'item__display-horizontal',
			title: 'primary',
		},
	};

	return (
		<$.Item
			ref={ref}
			src={to}
			{...propsDefault}
			className={typeClassNames[type].wrapperItem}
			onMouseEnter={() => mouseEnter(src)}
		>
			<$.Image
				src={src}
				alt={data.title}
				h={hImage}
				w={wImage}
				className={typeClassNames[type].img}
			>
				{icon}
			</$.Image>
			<$.ItemInfo isHide={isHideTitle}>
				<Label className={typeClassNames[type].title}>{data.title}</Label>
				<$.SubTitle>{data.originalTitle}</$.SubTitle>
			</$.ItemInfo>
			<$.Cardo>
				<$.Image
					src={`${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}`}
					alt={data.title}
					h={'14.5rem'}
					w={'25.5rem'}
					className={typeClassNames[type].img + ' not-border-radius not-padding'}
				/>
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
		</$.Item>
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
