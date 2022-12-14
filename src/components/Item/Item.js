import PropTypes from 'prop-types';

import Label from '~/components/Label';
import * as $ from './Styles';

function Item({ to, data, type = 'SEARCH_TYPE', icon, isHideTitle, hImage, wImage, ...propsDefault }) {
	let src = data.posterPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.posterPath}` : '';

	if (type === 'HORIZON_DISPLAY_TYPE') {
		src = data.backdropPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}` : '';
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
			src={to}
			{...propsDefault}
			className={typeClassNames[type].wrapperItem}
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
		</$.Item>
	);
}

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
