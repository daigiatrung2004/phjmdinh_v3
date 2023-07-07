import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import Image from '~/components/Image';
import * as $ from './Styles';
import { useState } from 'react';

function TabList({ settings }) {
	const [isActive, setIsActive] = useState(0);
	const config = [
		{
			header: {
				title: 'Exposide',
				icon: {
					position: 'left',
					srcIcon: <FontAwesomeIcon icon={faHippo} />,
				},
			},
			detail: {
				type: 'Seperate',
				sizeSupply: 24,
				sizeReal: 12,
			},
		},
		{
			header: {
				title: 'Description',
				icon: {
					position: 'left',
					srcIcon: <FontAwesomeIcon icon={faHippo} />,
				},
			},
			detail: {
				type: 'Full',
				content:
					'Sau M?ng Hoang K?, Th?n Ph? Tinh Kh?ng, C?u ??nh K?, B?n Long, Tinh Th?n Bi?n, Th?n Mang, Tinh Phong Truy?n Thuy?t, th? ??y l? t?c ph?m th? 8 c?a C? Chua. C?ng nh?n t?c gi? Ng? C?t T?y H?ng Th? c? l?c b?t kh?ng kh?p th?t.',
				img: {
					position: 'left',
					src: (
						<Image
							src={Images.BGerror}
							width={'80px'}
							height={'120px'}
						/>
					),
				},
			},
		},
	];
	return (
		<$.Tabs>
			<$.Header>
				{config.map((item, index) => {
					return (
						<$.Tab
							key={'menu-' + index}
							isActive={index == isActive ? 1 : 0}
							onClick={() => setIsActive(index)}
						>
							{item['header']['position'] == 'left' && <span>{item['header']['srcIcon']}</span>}
							<span>{item['header']['title']}</span>
							{item['header']['position'] == 'right' && <span>{item['header']['srcIcon']}</span>}
						</$.Tab>
					);
				})}
			</$.Header>
			{config.map((item, index) => {
				if (item['detail']['type'] == 'Seperate') {
					return (
						index == isActive && (
							<$.Detail key={'menu-' + index}>
								{Array(item['detail']['sizeSupply'])
									.fill(0)
									.map((item2, index) => {
										return index <= item['detail']['sizeReal'] ? (
											<$.Item
												className="active"
												key={'list-' + index}
											>
												{index}
											</$.Item>
										) : (
											<$.Item key={'list-' + index}>{index}</$.Item>
										);
									})}
							</$.Detail>
						)
					);
				} else {
					return index == isActive && <$.Detail>{item['detail']['content']}</$.Detail>;
				}
			})}
		</$.Tabs>
	);
}

export default TabList;
