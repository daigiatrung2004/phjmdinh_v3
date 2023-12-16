import { faArrowUpFromBracket, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Carousel from '~/components/Carousel';
import Label from '~/components/Label';
import TabList from '~/components/TabList';
import { getPopular } from '~/services/moviesService';
import handleError from '~/utils/handleError';
import * as $ from './Styles';
import Video from './Video';

function Watch() {
	let videoRef = useRef();
	const [itemsPopular, setItemsPopular] = useState([]);

	useEffect(() => {
		Promise.all([handleError(getPopular({ page: 1, adults: false }))])
			.then(([popularData]) => {
				setItemsPopular(popularData);
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
				<Label style={{ color: 'var(--white)', fontSize: '3rem' }}>Oppa Xã Hội Đen Thân Yêu</Label>
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
