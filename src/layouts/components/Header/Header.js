import { faCaretDown, faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Suspense, useEffect, useRef, useState } from 'react';

import Images from '~/assets/images';
import FilmItems from '~/components/FilmItems';
import { Account, History, Language, Promote } from '~/components/Icons';
import Label from '~/components/Label';
import Popper from '~/components/popper';
import useDebounced from '~/hooks/useDebounced';
import { search } from '~/services/searchService';
import * as $ from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import Button from '~/components/Button';

function Header({ layout = 'default' }) {
	const [items, setItems] = useState([]);
	const [textSearch, setTextSearch] = useState('');
	const [toggle, setToggle] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [kindFilms, setKindFilms] = useState(['Phim Bộ', 'Phim Hàn', 'Phim Lẻ', 'Hoạt Hình']);
	const [lang, setLang] = useState(['Tiếng Việt', 'English']);
	const [background, setBackground] = useState(false);
	const kindFilmsRef = useRef();
	const historyRef = useRef();
	const languageRef = useRef();
	const accountRef = useRef();
	const headerRef = useRef();

	const inputRef = useRef('');

	const timeDebounced = 1000; // 1 second
	let textDebouncedCurrent = useDebounced(textSearch, timeDebounced);

	const user = false;

	function handleScroll() {
		let headerEle = headerRef.current;
		if (headerEle && headerEle.style) {
			if (window.scrollY > headerEle.clientHeight) {
				headerEle.style.backgroundColor = 'var(--bg-color-override)';
			} else if (window.scrollY == '0') {
				headerEle.style.backgroundColor = 'var(--color-transparent)';
			}
		}
	}

	useEffect(() => {
		if (textDebouncedCurrent) {
			setToggle(true);
			search(encodeURIComponent(textDebouncedCurrent), 1)
				.then(function (data) {
					if (data) {
						if (data) {
							setItems(data);
						} else {
							setShowResults(false);
						}
					}
				})
				.catch(err => console.log(err));
		}
		window.addEventListener('scroll', function () {
			handleScroll();
		});
		return window.removeEventListener('scroll', function () {
			handleScroll();
		});
	}, [textDebouncedCurrent]);

	function resetSearchHandle() {
		setItems([]);
		setTextSearch('');
		setToggle(false);
		setShowResults(false);
		inputRef.current.value = '';
		inputRef.current.focus();
	}

	function changeHandle() {
		setShowResults(true);
		setToggle(false);
		console.log('textDebouncedCurrent = ', textDebouncedCurrent, 'textSearch =', textSearch);
		if (textDebouncedCurrent === inputRef.current.value) {
			setToggle(true);
		}
		if (inputRef.current.value.trim().length === 0 || inputRef.current.value === '') {
			resetSearchHandle();
			return;
		}

		setTextSearch(inputRef.current.value);
	}

	return (
		<$.Header
			ref={headerRef}
			style={
				layout == 'landing' ? { top: '0', background: 'var(--bg-color-override)', justifyContent: 'start' } : {}
			}
		>
			<$.Image
				src={Images.logo}
				alt="logo"
				href={'http://localhost:5000/'}
			/>

			{layout == 'landing' ? (
				''
			) : (
				<>
					<$.KindRecommend>
						<Label
							type={'label'}
							className={'channel hover-text-color pointer'}
							style={{ color: 'var(--white)' }}
						>
							Đề xuất
						</Label>
						<Label
							type={'label'}
							className={'channel hover-text-color pointer'}
						>
							Vân Chi Vũ
						</Label>
						<Tippy
							interactive
							placement={'bottom-start'}
							offset={[-60, 25]}
							render={() => {
								return (
									<Popper>
										{kindFilms.map((item, index) => {
											return (
												<$.MenuItem key={`channel-${index}`}>
													<Label
														type="label"
														src="/recommend"
														className="channel hover-text-color pointer"
													>
														{item}
													</Label>
												</$.MenuItem>
											);
										})}
									</Popper>
								);
							}}
						>
							<Label
								ref={kindFilmsRef}
								type={'label'}
								className={'channel hover-text-color pointer'}
								rightIcons={<FontAwesomeIcon icon={faCaretDown} />}
							>
								Khác
							</Label>
						</Tippy>
					</$.KindRecommend>
					<Tippy
						interactive
						placement={'bottom-start'}
						offset={[20, 5]}
						onClickOutside={() => {
							setToggle(true);
							setShowResults(false);
							console.log('outside =', showResults);
						}}
						trigger={'click'}
						hideOnClick={false}
						render={() => {
							console.log('inside =', showResults, 'items = ', items);
							return (
								showResults && (
									<Suspense fallback={<h2>loading...</h2>}>
										<Popper>
											<FilmItems items={items} />
										</Popper>
									</Suspense>
								)
							);
						}}
					>
						<$.Search>
							<$.Input
								ref={inputRef}
								type={'text'}
								placeholder="Search"
								onChange={changeHandle}
								onFocus={() => setShowResults(true)}
							/>
							{textSearch.length > 0 && !toggle && <$.Loading icon={faSpinner} />}
							{textSearch.length > 0 && toggle && (
								<$.Close
									icon={faCircleXmark}
									onClick={resetSearchHandle}
								/>
							)}
							<$.Spacer />
							<$.Button icon={faMagnifyingGlass} />
						</$.Search>
					</Tippy>
					<$.User>
						<Tippy
							id="history"
							interactive
							placement={'bottom-start'}
							offset={[-140, 25]}
							render={() => {
								return (
									<Popper>
										<$.ListPage>
											<Image
												src={Images.blank}
												width="80px"
												height="80px"
											/>
											<Label
												type="label"
												className="list-page-title"
											>
												Đăng nhập để quản lý lịch sử xem nội dung trên các thiết bị khác nhau
											</Label>
											<Button theme={{ type: 'primary', size: 'mini-small' }}>Đăng nhập</Button>
										</$.ListPage>
									</Popper>
								);
							}}
						>
							<Label
								type={'label'}
								className={'channel hover-text-color pointer vertical flex-center text-italic'}
								leftIcons={<History />}
								style={{
									height: '40px',
									fontSize: '12px',
									marginLeft: '16px',
									color: 'var(--white)',
								}}
							>
								Lịch sử xem
							</Label>
						</Tippy>
						<Tippy
							id="language"
							interactive
							placement={'bottom-start'}
							offset={[-85, 25]}
							render={() => {
								return (
									<Popper>
										<$.LanguageArea>
											{lang.map((item, index) => {
												return (
													<Label
														key={`language-${index}`}
														type="label"
														src="/recommend"
														className="language hover-text-color pointer"
													>
														{item}
													</Label>
												);
											})}
										</$.LanguageArea>
									</Popper>
								);
							}}
						>
							<Label
								type={'label'}
								className={'channel hover-text-color pointer vertical flex-center text-italic'}
								leftIcons={<Language />}
								style={{
									height: '40px',
									fontSize: '12px',
									marginLeft: '16px',
									color: 'var(--white)',
								}}
							>
								Ngôn ngữ
							</Label>
						</Tippy>
						<Tippy
							id="account"
							interactive
							placement={'bottom-start'}
							offset={[-90, 25]}
							render={() => {
								return (
									<Popper>
										<$.Account>
											<Label
												type="label"
												className="list-page-title"
												style={{
													marginBottom: '20px',
													fontWeight: 'normal',
													fontSize: '1.2rem',
													color: 'var(--white)',
												}}
											>
												Đăng nhập để theo dõi các nội dung mới nhất
											</Label>
											<Button theme={{ type: 'primary', size: 'mini-small' }}>Đăng nhập</Button>
										</$.Account>
									</Popper>
								);
							}}
						>
							<Label
								type={'label'}
								className={'channel hover-text-color pointer vertical flex-center text-italic'}
								leftIcons={<Account />}
								style={{
									height: '40px',
									fontSize: '12px',
									marginLeft: '16px',
									color: 'var(--white)',
								}}
							>
								Tài Khoản của tôi
							</Label>
						</Tippy>
						<Label
							type={'label'}
							className={'channel pointer flex-center vertical'}
							rightIcons={<Promote />}
							style={{
								height: '40px',
								fontSize: '12px',
								marginLeft: '16px',
								marginTop: '15px',
								position: 'relative',
							}}
						>
							<$.TitlePremote>Khuyên mãi có thời hạn</$.TitlePremote>
						</Label>
					</$.User>
				</>
			)}
			{/* <$.User>
				{user ? (
					<FontAwesomeIcon icon={faSackDollar} />
				) : (
					<>
						<Button
							stylesCustom={StylesBase.colors.backgroundColor}
							// theme={{ type: 'primary', size: 'medium' }}
						>
							Log in
						</Button>
						<Button
							theme={{ type: 'primary', size: 'medium' }}
							rightIcon={<$.SignUpIcon icon={faPlus} />}
						>
							Sign in
						</Button>
					</>
				)}
			</$.User> */}
		</$.Header>
	);
}

export default Header;
