import PropTypes from 'prop-types';

import Item from '~/components/Item';

/**
 * Returns function component FilmItem.
 *
 * @param {array} items list item data.
 * @param {number} type type display.
 * @return {component} <FilmItem/>.
 */
function FilmItem({
	items,
	type,
	src,
	// translateXSlide,
	// transitionTime,
	// transform,
	isSlide,
	// position,
	...propsDefault
}) {
	// console.log('items rerender:', items);
	return items.map((item, index) => {
		if (isSlide) {
			return (
				<Item
					to={src}
					key={index}
					data={item}
					type={type}
					isslide="true"
					// style={
					// 	translateXSlide
					// 		? (index == 0 && {
					// 				transform: `translateX(0px)`,
					// 				transition: `all ${transitionTime / 1000}s ease-out`,
					// 		  }) || {
					// 				transform: `translateX(${position}px)`,
					// 				transition: `all ${transitionTime / 1000}s ease-out`,
					// 		  }
					// 		: {
					// 				transform: `translateX(0px)`,
					// 				transition: `unset`,
					// 		  }
					// }
					{...propsDefault}
				/>
			);
		} else {
			return (
				<Item
					to={src}
					key={index}
					data={item}
					type={type}
					{...propsDefault}
				/>
			);
		}
	});
}

FilmItem.propTypes = {
	items: PropTypes.array.isRequired,
	type: PropTypes.string,
};

export default FilmItem;
