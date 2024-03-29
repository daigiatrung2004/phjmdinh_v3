import { useState, useEffect } from 'react';
import * as $ from './Styles';
import Items from '~/components/FilmItems';
import { getUpComing } from '~/services/moviesService';
import handleError from '~/utils/handleError';
import { useTranslation } from 'react-i18next';
import Tippy from '@tippyjs/react/headless';
import Label from '~/components/Label';
import Popper from '~/components/popper';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Tabs({ type = 'normal', tabList = [] }) {
	const [selected, setSelected] = useState();
	const [itemsLastest, setItemsLastest] = useState([]);

	useEffect(() => {
		Promise.all([handleError(getUpComing({ page: 1, adults: false }))])
			.then(([latestData]) => {
				setItemsLastest(latestData);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	const { t } = useTranslation();
	const Test = [
		{
			id: 'eposide',
			header: t('eposide'),
			content: (
				<$.Trailer>
					<Items
						src="/reviewfilm/"
						items={itemsLastest}
						type={'HORIZON_DISPLAY_TYPE'}
						icon={<$.PlayIcon />}
						isLoadingCurrent={true}
					/>
				</$.Trailer>
			),
		},
		{
			id: 'unique-content',
			header: t('uniqueContent'),
			content: 'Tab unique-content',
		},
		{
			id: 'performer',
			header: t('performer'),
			content: 'Tab performer',
		},
		{
			id: 'collection-film',
			header: t('collectionFilm'),
			content: 'Tab Film and television collection',
		},
		{
			id: 'recommend-for-u',
			header: t('recommendForU'),
			content: 'Tab Recommended for you',
		},
	];

	tabList = Test;

	function handleClickTab(id) {
		setSelected(id);
	}

	switch (type) {
		case 'special':
			break;

		default:
			if (tabList.length > 0) {
				return (
					<$.Container>
						<$.Header className="header-tabList">
							<$.List>
								{tabList.map((item, index) => {
									return (
										<$.ListItemHeader
											className={
												selected && item['id'] === selected
													? 'selected'
													: index === 0 && !selected && 'selected'
											}
											onClick={() => handleClickTab(item['id'])}
										>
											{item['header']}
										</$.ListItemHeader>
									);
								})}
							</$.List>
						</$.Header>
						<$.HeaderMB>
							<Tippy
								interactive
								placement={'bottom-start'}
								offset={[-1, 13]}
								render={() => {
									return (
										<Popper>
											<$.List>
												{tabList.map((item, index) => {
													return (
														<$.ListItemHeader
															className={
																selected && item['id'] === selected
																	? 'selected'
																	: index === 0 && !selected && 'selected'
															}
															onClick={() => handleClickTab(item['id'])}
														>
															{item['header']}
														</$.ListItemHeader>
													);
												})}
											</$.List>
										</Popper>
									);
								}}
							>
								<Label
									type={'label'}
									className={'channel hover-text-color pointer'}
									rightIcons={<FontAwesomeIcon icon={faCaretDown} />}
									style={{ marginBottom: '1rem' }}
								>
									{t('categoryTabLists')}
								</Label>
							</Tippy>
						</$.HeaderMB>
						<$.Line />
						<$.Body>
							{tabList.map((item, index) => {
								return (
									<$.Content
										id={item['id']}
										className={
											(index === 0 && !selected) || selected === item['id']
												? 'show content'
												: 'content'
										}
									>
										{item['content']}
									</$.Content>
								);
							})}
						</$.Body>
					</$.Container>
				);
			} else {
				return;
			}
	}
}

export default Tabs;
