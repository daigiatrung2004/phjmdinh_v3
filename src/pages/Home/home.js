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
import Carousel from '~/components/Carousel';

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

	const ListItems = [
		'https://media.istockphoto.com/id/1466755525/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%81%AE%E9%A3%BE%E3%82%8A%E3%82%92%E3%81%98%E3%81%A3%E3%81%8F%E3%82%8A%E8%A6%8B%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E3%81%AE%E5%AD%90.jpg?s=1024x1024&w=is&k=20&c=3VqBgbjC2cr4EWurSutMUBNM9IXs83jrAFuOKcQNlqE=',
		'https://media.istockphoto.com/id/1318144940/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%AE%E8%B5%A4%E3%83%A9%E3%83%B3%E3%83%97%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E5%86%99%E7%9C%9F%E7%81%AB%E7%81%BD%E5%A0%B1%E7%9F%A5%E5%99%A8%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%83%9C%E3%82%BF%E3%83%B3.jpg?s=1024x1024&w=is&k=20&c=0k38Q0UgtkcmnIO-y_mHsfh0hzPeZqOodCAIhtG0WXA=',
		'https://media.istockphoto.com/id/1280885379/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%86%AC%E4%BC%91%E3%81%BF%E7%A5%9D%E3%81%86%E5%B9%B8%E3%81%9B%E3%81%AA%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E7%B3%BB%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E4%BA%BA%E3%81%AE%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB.jpg?s=1024x1024&w=is&k=20&c=19IAt8pLCRIFKCByUCAcC4Sf-xuRpYvesCGCcYStY0Y=',
		'https://media.istockphoto.com/id/1442033196/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%BB%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E7%9D%80%E3%81%A6%E3%83%99%E3%83%83%E3%83%89%E3%81%AB%E5%BA%A7%E3%82%8A%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%E8%BF%91%E3%81%8F%E3%81%A7%E6%8A%B1%E3%81%8D%E3%81%97%E3%82%81%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%81%A8%E7%94%B7%E6%80%A7.jpg?s=1024x1024&w=is&k=20&c=RcPBhV3TsZIqt4p_nMuf98UTvksciduCkEeP3NXlAl0=',
	];

	return (
		<>
			<Carousel
				CarouselItems={ListItems}
				type="strecth"
				offset={['unset', 0, 0]}
				render={() => {
					return <h1>xin chao</h1>;
				}}
			/>
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
			<$.Trailer src={srcTrailer}>
				<ItemContext.Provider value={handleMouseEnter}>
					<Items
						src="/reviewfilm/"
						items={itemsLastest}
						type="HORIZON_DISPLAY_TYPE"
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
