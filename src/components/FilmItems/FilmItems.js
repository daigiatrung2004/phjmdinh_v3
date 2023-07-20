import PropTypes from 'prop-types';

import Item from '~/components/Item';

/**
 * Returns function component FilmItem.
 *
 * @param {array} items list item data.
 * @param {number} type type display.
 * @return {component} <FilmItem/>.
 */
function FilmItem({ items, type, src, ...propsDefault }) {
	console.log('items rerender:', items);
	return items.map((item, index) => (
		<Item
			to={src}
			key={index}
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
