import { forwardRef } from 'react';
import Item from '~/components/Item';

/**
 * Returns function component FilmItem.
 *
 * @param {array} items list item data.
 * @param {number} type type display.
 * @return {component} <FilmItem/>.
 */

// const data = use(
// 	fetch(
// 		'https://api.themoviedb.org/3/movie/popular?api_key=53ae16d555ba0f93862d360f383c196a&language=vi-VN&page=1&adults=false'
// 		// 	// 'https://www.sharpecho.com/microservices-and-the-n1-problem/'
// 	)
// );

// function use(promise) {
// 	let status = 'pending';
// 	let result = promise.then(
// 		resolved => {
// 			status = 'success';
// 			result = resolved;
// 		},
// 		rejected => {
// 			status = 'error';
// 			result = rejected;
// 		}
// 	);
// 	return {
// 		read() {
// 			if (status === 'pending') throw result;
// 			if (status === 'error') throw result;
// 			if (status === 'success') return result;
// 			throw new Error('This should be impossible');
// 		},
// 	};
// }

const FilmItem = forwardRef(function (
	{
		items,
		type,
		src,
		// translateXSlide,
		// transitionTime,
		// transform,
		isSlide,
		// position,
		...propsDefault
	},
	ref
) {
	// console.log('items rerender:', items);
	// useEffect(() => getPopular({ page: 1, adults: false }), []);
	// const datafetch = data.read();
	console.log('items.....:', items);
	return (
		items &&
		items.map((item, index) => {
			if (isSlide) {
				return (
					<Item
						to={src}
						key={index}
						data={item}
						type={type}
						isslide="true"
						ref={ref}
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
						ref={ref}
						{...propsDefault}
					/>
				);
			}
		})
	);
});

// FilmItem.propTypes = {
// 	items: PropTypes.array.isRequired,
// 	type: PropTypes.string,
// };

export default FilmItem;
