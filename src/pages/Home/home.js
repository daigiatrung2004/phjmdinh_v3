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
import * as $ from './Styles';

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
				console.log('lastestData:', latestData);
			})
			.catch(error => console.log(error));

		window.addEventListener('scroll', handleToggleBackTop);

		return () => window.removeEventListener('scroll', handleToggleBackTop);
	}, []);

	const ListItems = [
		{
			index: 0,
			imgSrc: 'https://media.istockphoto.com/id/1466755525/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%81%AE%E9%A3%BE%E3%82%8A%E3%82%92%E3%81%98%E3%81%A3%E3%81%8F%E3%82%8A%E8%A6%8B%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E3%81%AE%E5%AD%90.jpg?s=1024x1024&w=is&k=20&c=3VqBgbjC2cr4EWurSutMUBNM9IXs83jrAFuOKcQNlqE=',
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
			imgSrc: 'https://media.istockphoto.com/id/1318144940/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%AE%E8%B5%A4%E3%83%A9%E3%83%B3%E3%83%97%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E5%86%99%E7%9C%9F%E7%81%AB%E7%81%BD%E5%A0%B1%E7%9F%A5%E5%99%A8%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%83%9C%E3%82%BF%E3%83%B3.jpg?s=1024x1024&w=is&k=20&c=0k38Q0UgtkcmnIO-y_mHsfh0hzPeZqOodCAIhtG0WXA=',
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
			imgSrc: 'https://media.istockphoto.com/id/1280885379/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%86%AC%E4%BC%91%E3%81%BF%E7%A5%9D%E3%81%86%E5%B9%B8%E3%81%9B%E3%81%AA%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E7%B3%BB%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E4%BA%BA%E3%81%AE%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB.jpg?s=1024x1024&w=is&k=20&c=19IAt8pLCRIFKCByUCAcC4Sf-xuRpYvesCGCcYStY0Y=',
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
			imgSrc: 'https://media.istockphoto.com/id/1442033196/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%BB%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E7%9D%80%E3%81%A6%E3%83%99%E3%83%83%E3%83%89%E3%81%AB%E5%BA%A7%E3%82%8A%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%E8%BF%91%E3%81%8F%E3%81%A7%E6%8A%B1%E3%81%8D%E3%81%97%E3%82%81%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%81%A8%E7%94%B7%E6%80%A7.jpg?s=1024x1024&w=is&k=20&c=RcPBhV3TsZIqt4p_nMuf98UTvksciduCkEeP3NXlAl0=',
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
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsPopular}
						type="VERTICAL_DISPLAY_TYPE"
						hImage={'25.35rem'}
						wImage={'19.0167rem'}
					/>
				</$.ItemsWrapper>
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
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsTrending}
						type="VERTICAL_DISPLAY_TYPE"
						hImage={'25.35rem'}
						wImage={'19.0167rem'}
					/>
				</$.ItemsWrapper>

				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					rightIcons={
						<FontAwesomeIcon
							icon={faChevronRight}
							style={{ color: 'var(--text-color-search)' }}
						/>
					}
					iconsize={'20px'}
				>
					UPCOMING
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsUpComing}
						type="VERTICAL_DISPLAY_TYPE"
						hImage={'25.35rem'}
						wImage={'19.0167rem'}
					/>
				</$.ItemsWrapper>
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
