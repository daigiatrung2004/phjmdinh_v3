import PropTypes from 'prop-types';

import * as $ from './Styles';

function Item({ data, ...propsDefault }) {
	return (
		<$.Item {...propsDefault}>
			<$.Image
				src={data.src}
				alt={data.title}
			/>
			<$.ItemInfo>
				<$.Title>{data.title}</$.Title>
				<$.SubTitle>{data.description}</$.SubTitle>
			</$.ItemInfo>
		</$.Item>
	);
}

Item.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Item;
