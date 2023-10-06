import Carousel from '~/components/Carousel';
import { forwardRef, useEffect, useLayoutEffect, useState } from 'react';
import handleError from '~/utils/handleError';
import { getTrending } from '~/services/moviesService';

function TestPopup2() {
	const [itemsTrending, setItemsTrending] = useState([]);
	useLayoutEffect(() => {
		Promise.all([handleError(getTrending({ page: 1, adults: false }))])
			.then(([trendingData]) => {
				setItemsTrending(trendingData);
				console.log('trendingData:', trendingData);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<Carousel
			CarouselItems={itemsTrending}
			type="multi"
			step={'5'}
		/>
	);
}

export default TestPopup2;
