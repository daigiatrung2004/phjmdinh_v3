import { faChevronRight, faChevronUp, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PUSettings } from '~/utils/StylesBase';

import { createPortal } from 'react-dom';
import Carousel from '~/components/Carousel';
import Items from '~/components/FilmItems';
import { Collector, CollectorHover, Play } from '~/components/Icons';
import Label from '~/components/Label';
import PopUp from '~/components/PopUp';
import { getPopular, getTrending, getUpComing } from '~/services/moviesService';
import handleError from '~/utils/handleError';
import Images from '~/assets/images';
import * as $ from './Styles';

function Home() {
	const [itemsPopular, setItemsPopular] = useState([]);
	const [itemsTrending, setItemsTrending] = useState([]);
	const [itemsUpComing, setItemsUpComing] = useState([]);
	const [itemsLastest, setItemsLastest] = useState([]);
	const [srcTrailer, setSrcTrailer] = useState(null);
	const [showPopUp, setShowPopUp] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [config, setConfig] = useState({
		shape: PUSettings['shape']['square'],
		// srcIcon: Success,
		isFooter: true,
		isHeader: true,
		content: 'System remaining ...!',
	});
	const backTopRef = useRef();

	const handleMouseEnter = useCallback(src => {
		console.log('src:', src);
		setSrcTrailer(src);
	}, []);

	const handlePopUP = useCallback(() => {
		setShowPopUp(false);
	}, []);

	function handleBackTop() {
		window.scrollTo(0, 0);
	}

	function handleToggleBackTop(e) {
		// console.log('handleToggleBackTop log:', window.scrollY);
		// console.log('handleToggleBackTop ref log:', backTopRef.current);
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
				console.log('popularData:', popularData);
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

				setIsLoaded(true);
				console.log('co vao day==========');
				// console.log('isloaded======:', isLoaded);
				console.log('lastestData:', latestData);
			})
			.catch(error => {
				console.log(error);
				setIsLoaded(true);
			});

		window.addEventListener('scroll', handleToggleBackTop);

		return () => window.removeEventListener('scroll', handleToggleBackTop);
	}, []);

	const ListItems = [
		{
			index: 0,
			imgSrc: Images.PrimaryTest,
			bgSrc: Images.BgTest,
			titleSrc: 'https://pic6.iqiyipic.com/hamster/20230327/d1/9d/f66fac5fe1_xxx.webp',
			rank: (
				<div className="focus-item focus-item-labels">
					<span className="focus-item-label-top">
						<span className="focus-item-label-rank">TOP 8</span>Top Phim Thịnh Hành
					</span>
					<span className="focus-item-label-original">PHJMDINH sản xuất</span>
				</div>
			),
			info: (
				<div className="focus-item focus-item-info">
					<span className="focus-item-score">
						<svg
							width="16px"
							height="16px"
							viewBox="0 0 28 27"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								id="V1.12.0_UI_4391_Watch-Page-Add-Rating"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="4391-6_1920_info"
									transform="translate(-948.000000, -906.000000)"
									fill="#1CC749"
									fillRule="nonzero"
								>
									<g
										id="Group-10-Copy-10"
										transform="translate(906.000000, 880.000000)"
									>
										<g
											id="ic/star_green"
											transform="translate(40.000000, 24.000000)"
										>
											<path
												d="M16.7983826,2.56356746 L19.7968803,11.2875241 L29.1657516,11.3941138 C29.9719564,11.4033379 30.3057022,12.4128653 29.6590696,12.8853446 L22.1424877,18.3829131 L24.9344802,27.1724634 C25.17436,27.9288402 24.3014061,28.55198 23.643301,28.0938493 L16.0005215,22.7674392 L8.35669898,28.0928244 C7.69963687,28.5509551 6.82563997,27.9267904 7.06551979,27.1714385 L9.85751226,18.3818882 L2.34093036,12.8843197 C1.69429781,12.4118404 2.02804364,11.402313 2.83424842,11.3930889 L12.2031197,11.2864992 L15.2016174,2.56254256 C15.4602704,1.81231509 16.5407725,1.81231509 16.7983826,2.56356746 Z"
												id="Star"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
						9.7
					</span>
					<span className="focus-item-year">2022</span>
					<span className="focus-item-rating">T13</span>
					<span className="focus-item-update">Trọn bộ 36 tập</span>
				</div>
			),
			tags: (
				<div className="focus-item focus-item-tags">
					<span>Trung Quốc đại lục</span>
					<span>Viễn Tưởng</span>
					<span>Tình Yêu Ngọt Ngào</span>
					<span>Tiếng Phổ Thông</span>
					<span>Cổ Đại</span>
					<span>Lãng Mạn</span>
					<span>Hư Cấu</span>
					<span>Cổ Trang</span>
				</div>
			),
			desc: `"Thương Lan Quyết" do Y Tranh đạo diễn với sự tham gia của các diễn viên Ngu Thư Hân, Vương Hạc Đệ, Từ Hải Kiều, Phó Bạch Hàm, Quách Hiểu Đình, Trương Lăng Hác, Lâm Bá Duệ. Là một bộ phim truyền hình Trung Quốc, được chuyển thể từ tiểu thuyết Ma tôn của tác giả Cửu Lộ Phi Hương. Câu chuyện kể về mối lương duyên ngang trái giữa Thần nữ thuộc tộc Phách Tâm và Ma tôn Phương Đông Thanh Thương.Thần nữ Phách Tâm tộc bị Ma tôn Đông Phương Thanh Thương diệt tộc, vạn năm sau sống lại trở thành thần tiên cấp thấp ở tiên giới Hoa Lan Nhỏ, vô tình làm cho Ma tôn đang bị nhốt trong tháp Hạo Thiên sống lại. Để hóa giải phong ấn chú thuật trên người cũng như hồi sinh kẻ thù lớn nhất, lần này Đông Phương Thanh Thương cần phải hy sinh hồn thần nữ của Hoa Lan Nhỏ. Tuy nhiên trong quá trình đó, đại ma đầu đã dần yêu tiểu tiên nữ ranh ma đáng yêu.`,
		},
		{
			index: 1,
			imgSrc: Images.PrimaryTest2,
			bgSrc: Images.BgTest2,
			titleSrc: 'https://pic6.iqiyipic.com/hamster/20230327/d1/9d/f66fac5fe1_xxx.webp',
			rank: (
				<div className="focus-item focus-item-labels">
					<span className="focus-item-label-top">
						<span className="focus-item-label-rank">TOP 8</span>Top Phim Thịnh Hành
					</span>
					<span className="focus-item-label-original">PHJMDINH sản xuất</span>
				</div>
			),
			info: (
				<div className="focus-item focus-item-info">
					<span className="focus-item-score">
						<svg
							width="16px"
							height="16px"
							viewBox="0 0 28 27"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								id="V1.12.0_UI_4391_Watch-Page-Add-Rating"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="4391-6_1920_info"
									transform="translate(-948.000000, -906.000000)"
									fill="#1CC749"
									fillRule="nonzero"
								>
									<g
										id="Group-10-Copy-10"
										transform="translate(906.000000, 880.000000)"
									>
										<g
											id="ic/star_green"
											transform="translate(40.000000, 24.000000)"
										>
											<path
												d="M16.7983826,2.56356746 L19.7968803,11.2875241 L29.1657516,11.3941138 C29.9719564,11.4033379 30.3057022,12.4128653 29.6590696,12.8853446 L22.1424877,18.3829131 L24.9344802,27.1724634 C25.17436,27.9288402 24.3014061,28.55198 23.643301,28.0938493 L16.0005215,22.7674392 L8.35669898,28.0928244 C7.69963687,28.5509551 6.82563997,27.9267904 7.06551979,27.1714385 L9.85751226,18.3818882 L2.34093036,12.8843197 C1.69429781,12.4118404 2.02804364,11.402313 2.83424842,11.3930889 L12.2031197,11.2864992 L15.2016174,2.56254256 C15.4602704,1.81231509 16.5407725,1.81231509 16.7983826,2.56356746 Z"
												id="Star"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
						9.7
					</span>
					<span className="focus-item-year">2022</span>
					<span className="focus-item-rating">T13</span>
					<span className="focus-item-update">Trọn bộ 36 tập</span>
				</div>
			),
			tags: (
				<div className="focus-item focus-item-tags">
					<span>Trung Quốc đại lục</span>
					<span>Viễn Tưởng</span>
					<span>Tình Yêu Ngọt Ngào</span>
					<span>Tiếng Phổ Thông</span>
					<span>Cổ Đại</span>
					<span>Lãng Mạn</span>
					<span>Hư Cấu</span>
					<span>Cổ Trang</span>
				</div>
			),
			desc: `"Thương Lan Quyết" do Y Tranh đạo diễn với sự tham gia của các diễn viên Ngu Thư Hân, Vương Hạc Đệ, Từ Hải Kiều, Phó Bạch Hàm, Quách Hiểu Đình, Trương Lăng Hác, Lâm Bá Duệ. Là một bộ phim truyền hình Trung Quốc, được chuyển thể từ tiểu thuyết Ma tôn của tác giả Cửu Lộ Phi Hương. Câu chuyện kể về mối lương duyên ngang trái giữa Thần nữ thuộc tộc Phách Tâm và Ma tôn Phương Đông Thanh Thương.Thần nữ Phách Tâm tộc bị Ma tôn Đông Phương Thanh Thương diệt tộc, vạn năm sau sống lại trở thành thần tiên cấp thấp ở tiên giới Hoa Lan Nhỏ, vô tình làm cho Ma tôn đang bị nhốt trong tháp Hạo Thiên sống lại. Để hóa giải phong ấn chú thuật trên người cũng như hồi sinh kẻ thù lớn nhất, lần này Đông Phương Thanh Thương cần phải hy sinh hồn thần nữ của Hoa Lan Nhỏ. Tuy nhiên trong quá trình đó, đại ma đầu đã dần yêu tiểu tiên nữ ranh ma đáng yêu.`,
		},
		{
			index: 2,
			imgSrc: Images.PrimaryTest3,
			bgSrc: Images.BgTest3,
			titleSrc: 'https://pic6.iqiyipic.com/hamster/20230327/d1/9d/f66fac5fe1_xxx.webp',
			rank: (
				<div className="focus-item focus-item-labels">
					<span className="focus-item-label-top">
						<span className="focus-item-label-rank">TOP 8</span>Top Phim Thịnh Hành
					</span>
					<span className="focus-item-label-original">PHJMDINH sản xuất</span>
				</div>
			),
			info: (
				<div className="focus-item focus-item-info">
					<span className="focus-item-score">
						<svg
							width="16px"
							height="16px"
							viewBox="0 0 28 27"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								id="V1.12.0_UI_4391_Watch-Page-Add-Rating"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="4391-6_1920_info"
									transform="translate(-948.000000, -906.000000)"
									fill="#1CC749"
									fillRule="nonzero"
								>
									<g
										id="Group-10-Copy-10"
										transform="translate(906.000000, 880.000000)"
									>
										<g
											id="ic/star_green"
											transform="translate(40.000000, 24.000000)"
										>
											<path
												d="M16.7983826,2.56356746 L19.7968803,11.2875241 L29.1657516,11.3941138 C29.9719564,11.4033379 30.3057022,12.4128653 29.6590696,12.8853446 L22.1424877,18.3829131 L24.9344802,27.1724634 C25.17436,27.9288402 24.3014061,28.55198 23.643301,28.0938493 L16.0005215,22.7674392 L8.35669898,28.0928244 C7.69963687,28.5509551 6.82563997,27.9267904 7.06551979,27.1714385 L9.85751226,18.3818882 L2.34093036,12.8843197 C1.69429781,12.4118404 2.02804364,11.402313 2.83424842,11.3930889 L12.2031197,11.2864992 L15.2016174,2.56254256 C15.4602704,1.81231509 16.5407725,1.81231509 16.7983826,2.56356746 Z"
												id="Star"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
						9.7
					</span>
					<span className="focus-item-year">2022</span>
					<span className="focus-item-rating">T13</span>
					<span className="focus-item-update">Trọn bộ 36 tập</span>
				</div>
			),
			tags: (
				<div className="focus-item focus-item-tags">
					<span>Trung Quốc đại lục</span>
					<span>Viễn Tưởng</span>
					<span>Tình Yêu Ngọt Ngào</span>
					<span>Tiếng Phổ Thông</span>
					<span>Cổ Đại</span>
					<span>Lãng Mạn</span>
					<span>Hư Cấu</span>
					<span>Cổ Trang</span>
				</div>
			),
			desc: `"Thương Lan Quyết" do Y Tranh đạo diễn với sự tham gia của các diễn viên Ngu Thư Hân, Vương Hạc Đệ, Từ Hải Kiều, Phó Bạch Hàm, Quách Hiểu Đình, Trương Lăng Hác, Lâm Bá Duệ. Là một bộ phim truyền hình Trung Quốc, được chuyển thể từ tiểu thuyết Ma tôn của tác giả Cửu Lộ Phi Hương. Câu chuyện kể về mối lương duyên ngang trái giữa Thần nữ thuộc tộc Phách Tâm và Ma tôn Phương Đông Thanh Thương.Thần nữ Phách Tâm tộc bị Ma tôn Đông Phương Thanh Thương diệt tộc, vạn năm sau sống lại trở thành thần tiên cấp thấp ở tiên giới Hoa Lan Nhỏ, vô tình làm cho Ma tôn đang bị nhốt trong tháp Hạo Thiên sống lại. Để hóa giải phong ấn chú thuật trên người cũng như hồi sinh kẻ thù lớn nhất, lần này Đông Phương Thanh Thương cần phải hy sinh hồn thần nữ của Hoa Lan Nhỏ. Tuy nhiên trong quá trình đó, đại ma đầu đã dần yêu tiểu tiên nữ ranh ma đáng yêu.`,
		},
		{
			index: 3,
			imgSrc: Images.PrimaryTest4,
			bgSrc: Images.BgTest4,
			titleSrc: 'https://pic7.iqiyipic.com/hamster/20230307/1f/26/c96adc8a2d_xxx.webp',
			rank: (
				<div className="focus-item focus-item-labels">
					<span className="focus-item-label-top">
						<span className="focus-item-label-rank">TOP 8</span>Top Phim Thịnh Hành
					</span>
					<span className="focus-item-label-original">PHJMDINH sản xuất</span>
				</div>
			),
			info: (
				<div className="focus-item focus-item-info">
					<span className="focus-item-score">
						<svg
							width="16px"
							height="16px"
							viewBox="0 0 28 27"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								id="V1.12.0_UI_4391_Watch-Page-Add-Rating"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="4391-6_1920_info"
									transform="translate(-948.000000, -906.000000)"
									fill="#1CC749"
									fillRule="nonzero"
								>
									<g
										id="Group-10-Copy-10"
										transform="translate(906.000000, 880.000000)"
									>
										<g
											id="ic/star_green"
											transform="translate(40.000000, 24.000000)"
										>
											<path
												d="M16.7983826,2.56356746 L19.7968803,11.2875241 L29.1657516,11.3941138 C29.9719564,11.4033379 30.3057022,12.4128653 29.6590696,12.8853446 L22.1424877,18.3829131 L24.9344802,27.1724634 C25.17436,27.9288402 24.3014061,28.55198 23.643301,28.0938493 L16.0005215,22.7674392 L8.35669898,28.0928244 C7.69963687,28.5509551 6.82563997,27.9267904 7.06551979,27.1714385 L9.85751226,18.3818882 L2.34093036,12.8843197 C1.69429781,12.4118404 2.02804364,11.402313 2.83424842,11.3930889 L12.2031197,11.2864992 L15.2016174,2.56254256 C15.4602704,1.81231509 16.5407725,1.81231509 16.7983826,2.56356746 Z"
												id="Star"
											></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
						9.7
					</span>
					<span className="focus-item-year">2022</span>
					<span className="focus-item-rating">T13</span>
					<span className="focus-item-update">Trọn bộ 36 tập</span>
				</div>
			),
			tags: (
				<div className="focus-item focus-item-tags">
					<span>Trung Quốc đại lục</span>
					<span>Viễn Tưởng</span>
					<span>Tình Yêu Ngọt Ngào</span>
					<span>Tiếng Phổ Thông</span>
					<span>Cổ Đại</span>
					<span>Lãng Mạn</span>
					<span>Hư Cấu</span>
					<span>Cổ Trang</span>
				</div>
			),
			desc: `"Thương Lan Quyết" do Y Tranh đạo diễn với sự tham gia của các diễn viên Ngu Thư Hân, Vương Hạc Đệ, Từ Hải Kiều, Phó Bạch Hàm, Quách Hiểu Đình, Trương Lăng Hác, Lâm Bá Duệ. Là một bộ phim truyền hình Trung Quốc, được chuyển thể từ tiểu thuyết Ma tôn của tác giả Cửu Lộ Phi Hương. Câu chuyện kể về mối lương duyên ngang trái giữa Thần nữ thuộc tộc Phách Tâm và Ma tôn Phương Đông Thanh Thương.Thần nữ Phách Tâm tộc bị Ma tôn Đông Phương Thanh Thương diệt tộc, vạn năm sau sống lại trở thành thần tiên cấp thấp ở tiên giới Hoa Lan Nhỏ, vô tình làm cho Ma tôn đang bị nhốt trong tháp Hạo Thiên sống lại. Để hóa giải phong ấn chú thuật trên người cũng như hồi sinh kẻ thù lớn nhất, lần này Đông Phương Thanh Thương cần phải hy sinh hồn thần nữ của Hoa Lan Nhỏ. Tuy nhiên trong quá trình đó, đại ma đầu đã dần yêu tiểu tiên nữ ranh ma đáng yêu.`,
		},
	];
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
				<$.Row>
					<Label
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}

						// leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
						// iconsize={'20px'}
					>
						Đề xuất hot
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
								type="multi"
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={[
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
								]}
								type="multi"
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>
				<$.Row>
					<$.TitleLabel
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						rightIcons={
							<>
								<$.ExtendIcon className="extend-icon">
									<span style={{ flexShrink: '0' }}>xem thêm</span>
								</$.ExtendIcon>
								<FontAwesomeIcon
									icon={faChevronRight}
									style={{ color: 'var(--text-color-search)' }}
								/>
							</>
						}
						iconsize={'20px'}
					>
						TRENDING
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
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={[
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
								]}
								type="multi"
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)}
					</$.ItemsWrapper>
				</$.Row>

				<$.Row>
					<$.TitleLabel
						type={'h3'}
						fontSize="30px"
						fontWeight="700"
						className={'primary'}
						rightIcons={
							<>
								<$.ExtendIcon className="extend-icon">
									<span style={{ flexShrink: '0' }}>xem thêm</span>
								</$.ExtendIcon>
								<FontAwesomeIcon
									icon={faChevronRight}
									style={{ color: 'var(--text-color-search)' }}
								/>
							</>
						}
						iconsize={'20px'}
					>
						UPCOMING
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
								step={'5'}
								isLoadingCurrent={isLoaded}
							/>
						)) || (
							<Carousel
								CarouselItems={[
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
									{ bgSrc: '' },
								]}
								type="multi"
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
				document.querySelector('div.App')
			)}
		</>
	);
}

export default Home;
