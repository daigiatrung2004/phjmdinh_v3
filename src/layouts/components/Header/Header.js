import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import * as $ from './Styles';
import Button from '~/components/Button';
import Popper from '~/components/popper';
import FilmItems from '~/components/FilmItems';

const itemsArr = [
	{
		src: 'https://toastlog.com/img/logos/cssscan.svg',
		title: 'test1',
		description: 'test1',
	},
	{
		src: 'https://toastlog.com/img/logos/cssscan.svg',
		title: 'test2',
		description: 'test2',
	},
	{
		src: 'https://toastlog.com/img/logos/cssscan.svg',
		title: 'test3',
		description: 'test3',
	},
	{
		src: 'https://toastlog.com/img/logos/cssscan.svg',
		title: 'test4',
		description: 'test4',
	},
];

function Header() {
	const [items, setItems] = useState([]);
	const [textSearch, setTextSearch] = useState('');
	const [toggle, setToggle] = useState(true);

	const inputRef = useRef('');

	useEffect(() => {
		let id = setTimeout(() => {
			setItems(itemsArr);
		}, 2000);

		return clearTimeout(id);
	}, []);

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
				render={() =>
					items.length > 0 &&
					textSearch.length > 0 &&
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
						onChange={() => setTextSearch(() => ref.value)}
						onFocus={() => setToggle(true)}
					/>
					{textSearch.length > 0 && <$.Loading icon={faSpinner} />}
					<$.Spacer />
					<$.Button icon={faMagnifyingGlass} />
				</$.Search>
			</Tippy>
			<$.User>
				<Button>Log in</Button>
				<Button>Sign in</Button>
			</$.User>
		</$.Header>
	);
}

export default Header;
