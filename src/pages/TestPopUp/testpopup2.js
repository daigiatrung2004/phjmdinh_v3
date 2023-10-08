import Carousel from '~/components/Carousel';
import { forwardRef, useEffect, useLayoutEffect, useState } from 'react';
import handleError from '~/utils/handleError';
import { getTrending } from '~/services/moviesService';
import ToggleList from '~/components/ToggleList';

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

	const list = [
		'Thành viên đặt mua',
		'Quyền lợi thành viên',
		'Thành viên phát tải về',
		'Hoạt động thành viên',
		'Khác',
	];

	return (
		<>
			<Carousel
				CarouselItems={itemsTrending}
				type="multi"
				step={'5'}
			/>
			<ToggleList subListItems={list}>Vấn đề hội viên</ToggleList>
		</>
	);
}

export default TestPopup2;
