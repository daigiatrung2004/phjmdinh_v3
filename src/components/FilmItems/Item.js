import PropTypes from 'prop-types';

import * as $ from './Styles';

function Item({ data, ...propsDefault }) {
	let src = data.backdropPath ? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${data.backdropPath}` : '';
	return (
		<$.Item {...propsDefault}>
			<$.Image
				src={src}
				alt={data.title}
			/>
			<$.ItemInfo>
				<$.Title>{data.title}</$.Title>
				<$.SubTitle>{data.originalTitle}</$.SubTitle>
			</$.ItemInfo>
		</$.Item>
	);
}

Item.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Item;
