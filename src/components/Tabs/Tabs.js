import { useState } from 'react';
import * as $ from './Styles';

function Tabs({ type = 'normal', tabList = [] }) {
	const [selected, setSelected] = useState();
	const Test = [
		{
			id: 'eposide',
			header: 'Chọn tập',
			content: 'Tab eposide',
		},
		{
			id: 'unique-content',
			header: 'Nội dung đặc sắc',
			content: 'Tab unique-content',
		},
		{
			id: 'performer',
			header: 'Diễn viên',
			content: 'Tab performer',
		},
		{
			id: 'collection-film',
			header: 'Tuyển tập phim và truyền hình',
			content: 'Tab Film and television collection',
		},
		{
			id: 'recommend-for-u',
			header: 'Đề xuất cho bạn',
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
						<$.Header>
							<$.List>
								{tabList.map((item, index) => {
									return (
										<$.ListItemHeader
											className={
												selected && item['id'] == selected
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
						<$.Line />
						<$.Body>
							{tabList.map((item, index) => {
								return (
									<$.Content
										id={item['id']}
										className={(index === 0 && !selected) || selected == item['id'] ? '' : 'hidden'}
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
