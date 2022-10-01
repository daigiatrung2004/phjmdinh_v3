import { faCircleXmark, faMagnifyingGlass, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import axios from 'axios';

import Button from '~/components/Button';
import Popper from '~/components/popper';
import FilmItems from '~/components/FilmItems';
import useDebounced from '~/hooks/useDebounced';
import * as $ from './Styles';

function Header() {
	const [items, setItems] = useState([]);
	const [textSearch, setTextSearch] = useState('');
	const [toggle, setToggle] = useState(true);
	const timeDebounced = 1000; // 1 second

	const inputRef = useRef('');

	let textDebounced = useDebounced(textSearch, timeDebounced);

	console.log(textSearch.length);

	useEffect(() => {
		if (textDebounced) {
			const instance = axios.create({
				baseURL: process.env.REACT_APP_API_URL,
				params: {
					api_key: process.env.REACT_APP_API_KEY,
					language: 'en-US',
					page: 2,
				},
				timeout: 1000,
			});

			instance
				.get('/popular', {
					transformResponse: [
						function (data) {
							let regexList = data.match(/_\w/gim);
							let regexUniList = new Set(regexList);
							for (let regex of regexUniList) {
								data = data.replace(regex, regex.replace('_', '').toUpperCase());
							}
							return data;
						},
					],
				})
				.then(function (response) {
					try {
						let data = JSON.parse(response.data);
						if (data.results) {
							setItems(data.results);
						}
					} catch (error) {
						console.log('error happened!');
					}
				})
				.catch(err => console.log(err));
		}
	}, [textDebounced]);

	function resetSearchHandle() {
		setTextSearch('');
		setItems([]);
		setToggle(true);
		inputRef.current.value = '';
		inputRef.current.focus();
	}

	return (
		<$.Header>
			<$.Image
				src="logo192.png"
				alt="logo"
			/>
			<Tippy
				interactive
				placement={'bottom-start'}
				offset={[20, 5]}
				onClickOutside={() => setToggle(false)}
				trigger={'click'}
				render={() =>
					items.length > 0 &&
					textDebounced.length > 0 &&
					toggle && (
						<Popper>
							<FilmItems items={items} />
						</Popper>
					)
				}
			>
				<$.Search>
					<$.Input
						ref={inputRef}
						type={'text'}
						placeholder="Search"
						onChange={() => {
							setTextSearch(inputRef.current.value);
							if (inputRef.current.value == '') {
								resetSearchHandle();
							}
						}}
						onFocus={() => setToggle(true)}
					/>
					{textSearch.length > 0 && items.length === 0 && <$.Loading icon={faSpinner} />}
					{textSearch.length > 0 && textDebounced.length > 0 && items.length > 0 && (
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
				<Button theme={{ type: 'primary', size: 'medium' }}>Log in</Button>
				<Button
					theme={{ type: 'primary', size: 'medium' }}
					rightIcon={<$.SignUpIcon icon={faPlus} />}
				>
					Sign in
				</Button>
			</$.User>
		</$.Header>
	);
}

export default Header;
