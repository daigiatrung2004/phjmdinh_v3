import PropTypes from 'prop-types';

import Item from './Item';

function FilmItem({ items }) {
	return items.map(item => (
		<Item
			key={item.id}
			data={item}
		/>
	));
}

FilmItem.propTypes = {
	items: PropTypes.array.isRequired,
};

export default FilmItem;
