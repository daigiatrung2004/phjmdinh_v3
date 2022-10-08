import PropTypes from 'prop-types';

import Item from './Item';

/**
 * Returns function component FilmItem.
 *
 * @param {array} items list item data.
 * @param {number} type type display.
 * @return {component} <FilmItem/>.
 */
function FilmItem({ items, type, src, ...propsDefault }) {
	return items.map(item => (
		<Item
			to={src}
			key={item.id}
			data={item}
			type={type}
			{...propsDefault}
		/>
	));
}

FilmItem.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.string,
};

export default FilmItem;
