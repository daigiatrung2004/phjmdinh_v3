import { useCallback, useEffect, useState } from 'react';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PUSettings } from '~/utils/StylesBase';

import { getPopular, getTrending, getUpComing } from '~/services/moviesService';
import Label from '~/components/Label';
import Items from '~/components/FilmItems';
import handleError from '~/utils/handleError';
import * as $ from './Styles';
import ItemContext from './ItemContext';
import PopUp from '~/components/PopUp';

function Home() {
	const [itemsPopular, setItemsPopular] = useState([]);
	const [itemsTrending, setItemsTrending] = useState([]);
	const [itemsUpComing, setItemsUpComing] = useState([]);
	const [itemsLastest, setItemsLastest] = useState([]);
	const [srcTrailer, setSrcTrailer] = useState(null);
	const [showPopUp, setShowPopUp] = useState(false);
	const [config, setConfig] = useState({
		shape: PUSettings['shape']['square'],
		// srcIcon: Success,
		isFooter: true,
		isHeader: true,
		content: 'System remaining ...!',
	});

	const handleMouseEnter = useCallback(src => {
		console.log('src:', src);
		setSrcTrailer(src);
	}, []);

	const handlePopUP = useCallback(() => {
		setShowPopUp(false);
	}, []);

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
				if (latestData.length > 1) {
					setSrcTrailer(
						latestData[0].backdropPath
							? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${latestData[0].backdropPath}`
							: ''
					);
				}
				console.log('lastestData:', latestData);
			})
			.catch(error => console.log(error));
	}, []);

	return (
		<>
			{/* <$.Wrapper>
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
			</$.Wrapper> */}
			<$.Trailer src={srcTrailer}>
				<ItemContext.Provider value={handleMouseEnter}>
					<Items
						// src="/reviewfilm/"
						items={itemsLastest}
						
						icon={<$.PlayIcon />}
						onClick={() => setShowPopUp(true)}
					/>
				</ItemContext.Provider>
			</$.Trailer>
			{showPopUp && (
				<PopUp
					settings={config}
					onClick={handlePopUP}
				/>
			)}
		</>
	);
}

export default Home;
