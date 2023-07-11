import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '~/assets/images';
import Image from '~/components/Image';
import * as $ from './Styles';
import { useState } from 'react';

function TabList({ settings }) {
	const [isActive, setIsActive] = useState(0);
	const [liveNum, setLiveNum] = useState(1);
	const config = [
		{
			header: {
				title: 'Exposide',
				icon: {
					position: 'left',
					srcIcon: (
						<Image
							src={Images.music}
							width={'20px'}
							height={'20px'}
						/>
					),
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
					'Theo WSJ, nhiều người dùng Twitter tỏ ra mệt mỏi sau hơn nửa năm bất ổn của nền tảng dưới thời Elon Musk. Họ nhanh chóng đăng ký dùng Threads ngay khi ứng dụng được tung ra thị trường ngày 5/7, bất chấp những lo ngại về quyền riêng tư trên các dịch vụ của Meta. Những lo ngại này từng biến Zuckerberg, CEO Meta, bị công chúng ghét bỏ. Người dùng mạng xã hội của Meta phải đối mặt với thực tế là bài viết, hình ảnh của họ bị sử dụng cho hoạt động quảng cáo.',
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
							{item['header']['icon']['position'] == 'left' && (
								<span className="icon">{item['header']['icon']['srcIcon']}</span>
							)}
							<span>{item['header']['title']}</span>
							{item['header']['icon']['position'] == 'right' && (
								<span className="icon">{item['header']['icon']['srcIcon']}</span>
							)}
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
										var i = index + 1;
										return i <= item['detail']['sizeReal'] ? (
											<$.Item
												className={`active ${liveNum > 0 && liveNum == i ? 'live' : ''}`}
												key={'list-' + i}
												onClick={() => setLiveNum(i)}
											>
												{i}
											</$.Item>
										) : (
											<$.Item key={'list-' + i}>{i}</$.Item>
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
