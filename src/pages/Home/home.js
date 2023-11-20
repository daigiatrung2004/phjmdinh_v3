import { faChevronRight, faChevronUp, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PUSettings } from '~/utils/StylesBase';

import { createPortal } from 'react-dom';
import Carousel from '~/components/Carousel';
import { Collector, CollectorHover, Play } from '~/components/Icons';
import Label from '~/components/Label';
import PopUp from '~/components/PopUp';
import { getPopular, getTrending, getUpComing } from '~/services/moviesService';
import { carouselDataDefault } from '~/utils/dataDefaults';
import handleError from '~/utils/handleError';
import * as $ from './Styles';
import { useTranslation } from 'react-i18next';
import ListItems from './datasets.js';

function Home() {
	const [itemsPopular, setItemsPopular] = useState([]);
	const [itemsTrending, setItemsTrending] = useState([]);
	const [itemsUpComing, setItemsUpComing] = useState([]);
	const [itemsLastest, setItemsLastest] = useState([]);
	// const [srcTrailer, setSrcTrailer] = useState(null);
	const [showPopUp, setShowPopUp] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	// const [config, setConfig] = useState({
	// 	shape: PUSettings['shape']['square'],
	// 	// srcIcon: Success,
	// 	isFooter: true,
	// 	isHeader: true,
	// 	content: 'System remaining ...!',
	// });
	const config = {
		shape: PUSettings['shape']['square'],
		// srcIcon: Success,
		isFooter: true,
		isHeader: true,
		content: 'System remaining ...!',
	};
	const backTopRef = useRef();

	// const handleMouseEnter = useCallback(src => {
	// 	setSrcTrailer(src);
	// }, []);

	const handlePopUP = useCallback(() => {
		setShowPopUp(false);
	}, []);

	function handleBackTop() {
		window.scrollTo(0, 0);
	}

	function handleToggleBackTop(e) {
		if (backTopRef && backTopRef.current && backTopRef.current.style) {
			if (window.scrollY > 499) {
				backTopRef.current.style.display = 'flex';
			} else {
				backTopRef.current.style.display = 'none';
			}
		}
	}

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
				// if (latestData.length > 1) {
				// 	setSrcTrailer(
				// 		latestData[0].backdropPath
				// 			? `${process.env.REACT_APP_BASE_IMAGE_URL_500}/${latestData[0].backdropPath}`
				// 			: ''
				// 	);
				// }

				setIsLoaded(true);
			})
			.catch(error => {
				console.log(error);
				setIsLoaded(true);
			});

		window.addEventListener('scroll', handleToggleBackTop);

		return () => window.removeEventListener('scroll', handleToggleBackTop);
	}, []);

	const { t } = useTranslation();
	return (
		<>
			<Carousel
				CarouselItems={Array.isArray(ListItems) && ListItems.sortobj('index')}
				type="strecth"
				offset={['unset', '5rem', '20rem']}
				indicatorFlag
				render={item => {
					return (
						<>
							<$.CarouselTitle
								style={{ backgroundImage: `url(${item.titleSrc})`, backgroundSize: 'auto 100%' }}
							/>
							<$.Rank>{item.rank}</$.Rank>
							<$.Info>{item.info}</$.Info>
							<$.Tags>{item.tags}</$.Tags>
							<$.Desc>{item.desc}</$.Desc>
							<$.WrapBtn>
								<$.PlayWrap className="wrap pointer">
									<Play />
								</$.PlayWrap>
								<$.CollectorWrap>
									<div className="collector pointer">
										<Collector />
									</div>
									<div className="collector-hover pointer">
										<CollectorHover />
									</div>
								</$.CollectorWrap>
							</$.WrapBtn>
						</>
					);
				}}
			/>
			<$.Wrapper>
				<$.Row className="row">
					<Label
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						devicearguments={{
							mobile: {
								style: 'font-size : 1.5rem;margin-left: 0px!important;color: white!important',
							},
							tablet: {
								style: 'margin-left: 5.6rem;',
							},
						}}
						// leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
						// iconsize={'20px'}
					>
						{t('recommendHot')}
					</Label>
					{/* <$.ItemsWrapper>
						<Items
							src="/reviewfilm/"
							items={itemsPopular}
							type="VERTICAL_DISPLAY_TYPE"
							hImage={'25.35rem'}
							wImage={'19.0167rem'}
						/>
					</$.ItemsWrapper> */}
					<$.ItemsWrapper>
						{(isLoaded && (
							<Carousel
								CarouselItems={itemsPopular}
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								type="multi"
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={carouselDataDefault}
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								type="multi"
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>
				<$.Row className="row">
					<$.TitleLabel
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						devicearguments={{
							mobile: {
								style: 'font-size : 1.5rem;margin-left: 0px!important;color: white!important',
							},
							tablet: {
								style: 'margin-left: 5.6rem;',
							},
						}}
						rightIcons={
							<>
								<$.ExtendIcon className="extend-icon">
									<span style={{ flexShrink: '0', fontSize: '1.4rem' }}>xem thêm</span>
								</$.ExtendIcon>
								<$.ArrowRight
									icon={faChevronRight}
									style={{ color: 'var(--text-color-search)' }}
								/>
							</>
						}
						iconsize={'20px'}
					>
						{t('trending')}
					</$.TitleLabel>
					{/* <$.ItemsWrapper>
						<Items
							src="/reviewfilm/"
							items={itemsTrending}
							type="VERTICAL_DISPLAY_TYPE"
							hImage={'25.35rem'}
							wImage={'19.0167rem'}
						/>
					</$.ItemsWrapper> */}
					<$.ItemsWrapper>
						{(isLoaded && (
							<Carousel
								CarouselItems={itemsTrending}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={carouselDataDefault}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>
				<$.Row className="row">
					<$.TitleLabel
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						devicearguments={{
							mobile: {
								style: 'font-size : 1.5rem;margin-left: 0px!important;color: white!important',
							},
							tablet: {
								style: 'margin-left: 5.6rem;',
							},
						}}
						rightIcons={
							<>
								<$.ExtendIcon className="extend-icon">
									<span style={{ flexShrink: '0', fontSize: '1.4rem' }}>xem thêm</span>
								</$.ExtendIcon>
								<$.ArrowRight
									icon={faChevronRight}
									style={{ color: 'var(--text-color-search)' }}
								/>
							</>
						}
						iconsize={'20px'}
					>
						{t('release')}
					</$.TitleLabel>
					{/* <$.ItemsWrapper>
						<Items
							src="/reviewfilm/"
							items={itemsTrending}
							type="VERTICAL_DISPLAY_TYPE"
							hImage={'25.35rem'}
							wImage={'19.0167rem'}
						/>
					</$.ItemsWrapper> */}
					<$.ItemsWrapper>
						{(isLoaded && (
							<Carousel
								CarouselItems={itemsLastest}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={carouselDataDefault}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>

				<$.Row className="row">
					<$.TitleLabel
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						devicearguments={{
							mobile: {
								style: 'font-size : 1.5rem;margin-left: 0px!important;color: white!important',
							},
							tablet: {
								style: 'margin-left: 5.6rem;',
							},
						}}
						rightIcons={
							<>
								<$.ExtendIcon className="extend-icon">
									<span style={{ flexShrink: '0', fontSize: '1.4rem' }}>xem thêm</span>
								</$.ExtendIcon>
								<$.ArrowRight
									icon={faChevronRight}
									style={{ color: 'var(--text-color-search)' }}
								/>
							</>
						}
						iconsize={'20px'}
					>
						{t('upcoming')}
					</$.TitleLabel>
					{/* <$.ItemsWrapper>
						<Items
							src="/reviewfilm/"
							items={itemsUpComing}
							type="VERTICAL_DISPLAY_TYPE"
							hImage={'25.35rem'}
							wImage={'19.0167rem'}
						/>
					</$.ItemsWrapper> */}
					<$.ItemsWrapper>
						{(isLoaded && (
							<Carousel
								CarouselItems={itemsUpComing}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={carouselDataDefault}
								type="multi"
								devicearguments={{
									mobile: {
										style: 'width: 9.1rem',
									},
									tablet: {
										style: 'width: 14.7rem',
									},
								}}
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>
				{/* <Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					LASTEST TRAILERS
				</Label> */}
			</$.Wrapper>
			{/* <$.Trailer src={srcTrailer}>
				<ItemContext.Provider value={handleMouseEnter}>
					<Items
						src="/reviewfilm/"
						items={itemsLastest}
						type="HORIZON_DISPLAY_TYPE"
						icon={<$.PlayIcon />}
						onClick={() => setShowPopUp(true)}
					/>
				</ItemContext.Provider>
			</$.Trailer> */}
			{showPopUp && (
				<PopUp
					settings={config}
					onClick={handlePopUP}
				/>
			)}
			{createPortal(
				<$.BackTop
					className="backtop"
					ref={backTopRef}
				>
					<$.BtnBackHome
						className={'primary'}
						src={'http://localhost:5000/'}
					>
						<FontAwesomeIcon icon={faHome} />
					</$.BtnBackHome>
					<$.Line />
					<$.BtnBackTop
						className={'primary'}
						onClick={handleBackTop}
					>
						<FontAwesomeIcon icon={faChevronUp} />
					</$.BtnBackTop>
				</$.BackTop>,
				document.querySelector('.App')
			)}
		</>
	);
}

export default Home;
