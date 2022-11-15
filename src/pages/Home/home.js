import { useEffect, useState } from 'react';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getPopular, getTrending, getUpComing } from '~/services/moviesService';
import Label from '~/components/Label';
import Items from '~/components/FilmItems';
import handleError from '~/utils/handleError';
import * as $ from './Styles';

function Home() {
	const [itemsPopular, setItemsPopular] = useState([]);
	const [itemsTrending, setItemsTrending] = useState([]);
	const [itemsUpComing, setItemsUpComing] = useState([]);
	const [itemsLastest, setItemsLastest] = useState([]);
	useEffect(() => {
		// (async function getData() {
		// 	let popularData = await handleError(getPopular({ page: 1, adults: false }));
		// 	let trendingData = await handleError(getTrending({ page: 1, adults: false }));
		// 	let upComingData = await handleError(getUpComing({ page: 1, adults: false }));
		// 	let latestData = await handleError(getUpComing({ page: 1, adults: false }));
		// 	setItemsPopular(popularData);
		// 	setItemsTrending(trendingData);
		// 	setItemsUpComing(upComingData);
		// 	setItemsLastest(latestData);
		// })();
		Promise.all([
			handleError(getPopular({ page: 1, adults: false })),
			handleError(getTrending({ page: 1, adults: false })),
			handleError(getUpComing({ page: 1, adults: false })),
			handleError(getUpComing({ page: 1, adults: false })),
		])
			.then(([popularData, trendingData, upcomingData, latestData]) => {
				setItemsPopular(popularData);
				setItemsTrending(trendingData);
				setItemsUpComing(upcomingData);
				setItemsLastest(latestData);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<>
			<$.Wrapper>
				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					POPULAR
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsPopular}
						type="VERTICAL_DISPLAY_TYPE"
					/>
				</$.ItemsWrapper>
				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					TRENDING
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsTrending}
						type="VERTICAL_DISPLAY_TYPE"
					/>
				</$.ItemsWrapper>

				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					UPCOMING
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsUpComing}
						type="VERTICAL_DISPLAY_TYPE"
					/>
				</$.ItemsWrapper>
				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					LASTEST TRAILERS
				</Label>
			</$.Wrapper>
			<$.Trailer>
				<Items
					src="/reviewfilm/"
					items={itemsLastest}
					type={'HORIZON_DISPLAY_TYPE'}
					icon={<$.PlayIcon />}
				/>
			</$.Trailer>
		</>
	);
}

export default Home;
