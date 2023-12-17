import { faArrowUpFromBracket, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Carousel from '~/components/Carousel';
import Label from '~/components/Label';
import Paragraph from '~/components/Paragraph';
import TabList from '~/components/TabList';
import { getCastFilms } from '~/services/actorService';
import { getPopular } from '~/services/moviesService';
import handleError from '~/utils/handleError';
import * as $ from './Styles';
import Video from './Video';
import ListItems from './datasets';

function Watch() {
	let videoRef = useRef();
	const [itemsPopular, setItemsPopular] = useState([]);
	const [casts, setCasts] = useState([]);

	useEffect(() => {
		Promise.all([
			handleError(getPopular({ page: 1, adults: false })),
			handleError(getCastFilms({ page: 1, id: '466420', adults: false })),
		])
			.then(([popularData, castsData]) => {
				setItemsPopular(popularData);
				setCasts(castsData);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	return (
		<$.WatchArea>
			<$.WatchContainer>
				<$.PresentationFilmArea>
					<$.VideoArea>
						<Video
							ref={videoRef}
							width={'100%'}
						/>
						{/* <button onClick={() => videoRef.current.play()}>play</button>
						<button onClick={() => videoRef.current.pause()}>pause</button> */}
					</$.VideoArea>
					<$.FooterPresentationArea>
						<Label
							className={'channel hover-text-color pointer'}
							style={{
								color: 'var(--white)',
								fontSize: '1.6rem',
								fontWeight: 'normal',
								marginLeft: '1.5rem',
							}}
							leftIcons={<FontAwesomeIcon icon={faBookBookmark} />}
						>
							Collection
						</Label>
						<Label
							className={'channel hover-text-color pointer'}
							style={{
								color: 'var(--white)',
								fontSize: '1.6rem',
								fontWeight: 'normal',
								marginLeft: '1.5rem',
							}}
							leftIcons={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
						>
							Share
						</Label>
					</$.FooterPresentationArea>
				</$.PresentationFilmArea>
				<$.EposideArea>
					<Label style={{ color: 'var(--white)', fontSize: '3rem', paddingBottom: '3rem' }}>
						Oppa Xã Hội Đen Thân Yêu
					</Label>
					<TabList />
				</$.EposideArea>
			</$.WatchContainer>
			<$.ContentFilm>
				{Array.isArray(ListItems) &&
					ListItems.map(item => {
						return (
							<>
								<$.CarouselTitle>{item.title}</$.CarouselTitle>
								<$.Rank>{item.rank}</$.Rank>
								<$.Info>{item.info}</$.Info>
								<$.Tags>{item.tags}</$.Tags>
								<Paragraph
									devicearguments={{
										desktop: {
											style: 'font-size: 1.2rem; margin-top: 1.2rem;color: var(--white);width: 100%;',
										},
										tablet: {
											style: 'font-size: 1.2rem; margin-top: 1.2rem;color: var(--white);width: 40%;',
										},
										mobile: {
											style: 'font-size: 1.2rem;margin-top: 1.2rem;color: var(--white);width: 60%;',
										},
									}}
									isTextOverFlow
									isToggleFlag
									numLine={3}
									moreTitle="Giới thiệu"
									moreTitleDetail="Thu nhỏ giới thiệu"
									linkMore={'./reviewfilm/'}
								>
									{item.desc}
								</Paragraph>
							</>
						);
					})}
				<Carousel
					CarouselItems={casts}
					carouselItemsType="PROFILE_TYPE"
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
					isLoadingCurrent={true}
				/>
			</$.ContentFilm>
			<$.RecommendFilmArea>
				<Label style={{ color: 'var(--white)', fontSize: '3rem' }}>Đề xuất cho bạn</Label>
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
					isLoadingCurrent={true}
				/>
			</$.RecommendFilmArea>
		</$.WatchArea>
	);
}

export default Watch;
