import { faArrowUpFromBracket, faBookBookmark, faCircleInfo, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from '~/components/Carousel';
import Label from '~/components/Label';
import Paragraph from '~/components/Paragraph';
import TabList from '~/components/TabList';
import Popper from '~/components/popper';
import { getCastFilms } from '~/services/actorService';
import { getPopular } from '~/services/moviesService';
import handleError from '~/utils/handleError';
import * as $ from './Styles';
import Video from '~/components/Video';
import ListItems from './datasets';
import { FacebookProvider, Comments } from 'react-facebook';
import src from '~/assets/videos/a.mp4';
import PopUp from '~/components/PopUp';
import { PUSettings } from '~/utils/StylesBase';
import Button from '~/components/Button';
import { faFacebookF, faTelegram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Watch() {
	let videoRef = useRef();
	const [itemsPopular, setItemsPopular] = useState([]);
	const [casts, setCasts] = useState([]);
	const [showPopUp, setShowPopUp] = useState(false);

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

	const { t } = useTranslation();
	const config = {
		type: 'Annoucement',
		shape: PUSettings['shape']['Rectangle'],
		leftIcon: false,
		rightIcon: false,
		centerIcon: true,
		isFooter: false,
		isHeader: true,
		content: (
			<>
				<Button
					theme={{ type: 'rounded', size: 'large fullW' }}
					style={{ marginBottom: '2.5rem' }}
					leftIcon={<FontAwesomeIcon icon={faFacebookF} />}
				>
					Chia sẻ FACEBOOK
				</Button>
				<Button
					theme={{ type: 'rounded', size: 'large fullW' }}
					style={{ marginBottom: '2.5rem' }}
					leftIcon={<FontAwesomeIcon icon={faTelegram} />}
				>
					Chia sẻ TELEGRAM
				</Button>
				<Button
					theme={{ type: 'rounded', size: 'large fullW' }}
					style={{ marginBottom: '2.5rem' }}
					leftIcon={<FontAwesomeIcon icon={faTiktok} />}
				>
					Chia sẻ TIKTOK
				</Button>
				<Button
					theme={{ type: 'rounded', size: 'large fullW' }}
					style={{ marginBottom: '2.5rem' }}
					leftIcon={<FontAwesomeIcon icon={faTwitter} />}
				>
					Chia sẻ X
				</Button>
			</>
		),
		contrast: PUSettings['contrast']['light'],
		hIcon: '80px',
		wIcon: '80px',
		height: '480px',
		width: '420px',
		position: 'center',
		isOverlay: true,
		hideFlag: false,
		shape: PUSettings['shape']['rectangle'],
	};

	const handlePopUP = useCallback(() => {
		setShowPopUp(false);
	}, []);

	return (
		<$.WatchArea>
			{showPopUp && (
				<PopUp
					settings={config}
					onClick={handlePopUP}
					type={'Annoucement'}
				/>
			)}
			<$.CalendarEposide>
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
					linkMore={'./reviewfilm/'}
				>
					Nhà Mọt (MotChill) có địa chỉ duy nhất là motchilli.net, mọi trang khác đều là giả mạo! Xem phim tại
					motchilli.net là góp phần ủng hộ Subteam
				</Paragraph>
			</$.CalendarEposide>
			<$.CalendarEposide>
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
					linkMore={'./reviewfilm/'}
				>
					{`${t('calendarEposide')}: 2 Tập mỗi tối trên Mọt Chill.`}
				</Paragraph>
			</$.CalendarEposide>
			<$.WatchContainer>
				<$.PresentationFilmArea>
					<$.VideoArea>
						<Video
							src={src}
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
							{t('saved')}
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
							onClick={() => setShowPopUp(true)}
						>
							{t('share')}
						</Label>
						<Label
							className={'channel hover-text-color pointer'}
							style={{
								color: 'var(--white)',
								fontSize: '1.6rem',
								fontWeight: 'normal',
								marginLeft: '1.5rem',
							}}
							leftIcons={<FontAwesomeIcon icon={faCircleInfo} />}
						>
							{t('error')}
						</Label>
						<Tippy
							interactive
							placement={'bottom-start'}
							offset={[0, 25]}
							render={() => {
								return (
									<Popper>
										<>
											<Label
												className={'channel hover-text-color pointer primary'}
												style={{
													fontSize: '1.6rem',
													fontWeight: 'normal',
													padding: '1rem',
													textAlign: 'center',
													minWidth: '10rem',
												}}
											>
												VIP1
											</Label>
											<Label
												className={'channel hover-text-color pointer'}
												style={{
													color: 'var(--white)',
													fontSize: '1.6rem',
													fontWeight: 'normal',
													padding: '1rem',
													textAlign: 'center',
													minWidth: '10rem',
												}}
											>
												VIP2
											</Label>
										</>
									</Popper>
								);
							}}
						>
							<Label
								className={'channel hover-text-color pointer'}
								style={{
									color: 'var(--white)',
									fontSize: '1.6rem',
									fontWeight: 'normal',
									marginLeft: '1.5rem',
								}}
								leftIcons={<FontAwesomeIcon icon={faServer} />}
							>
								{t('server')}
							</Label>
						</Tippy>
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
				<$.ActorsArea>
					<Label style={{ color: 'var(--white)', fontSize: '3rem' }}>{t('actors')}</Label>
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
							desktop: {
								style: 'padding-top: 1rem',
							},
						}}
						type="multi"
						step={'5'}
						isLoadingCurrent={true}
					/>
				</$.ActorsArea>
			</$.ContentFilm>
			<$.ChatFbArea>
				<Label style={{ color: 'var(--white)', fontSize: '3rem', paddingBottom: '3rem' }}>{t('comment')}</Label>
				<$.ChatBody>
					<FacebookProvider
						appId="849633732416047"
						className={'facebook'}
					>
						<Comments
							href="http://www.facebook.com"
							width="100%"
						/>
					</FacebookProvider>
				</$.ChatBody>
			</$.ChatFbArea>
			<$.RecommendFilmArea>
				<Label style={{ color: 'var(--white)', fontSize: '3rem' }}>{t('recommendForU')}</Label>
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
