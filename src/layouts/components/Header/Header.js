import { faCircleXmark, faMagnifyingGlass, faSpinner, faPlus, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import Images from '~/assets/images';
import Button from '~/components/Button';
import Popper from '~/components/popper';
import FilmItems from '~/components/FilmItems';
import useDebounced from '~/hooks/useDebounced';
import { search } from '~/services/searchService';
import StylesBase from '~/utils/StylesBase';
import * as $ from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
	const [items, setItems] = useState([]);
	const [textSearch, setTextSearch] = useState('');
	const [toggle, setToggle] = useState(false);
	const [showResults, setShowResults] = useState(false);

	const inputRef = useRef('');

	const timeDebounced = 1000; // 1 second
	let textDebouncedCurrent = useDebounced(textSearch, timeDebounced);

	const user = false;

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
		<$.Header>
			<$.Image
				src={Images.logo}
				alt="logo"
				href={'/'}
			/>
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
							<Popper>
								<FilmItems items={items} />
							</Popper>
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
			</$.User>
		</$.Header>
	);
}

export default Header;
