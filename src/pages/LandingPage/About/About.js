import Paragraph from '~/components/Paragraph';
import * as $ from './Styles';
import Image from '~/components/Image';
import { createContext, useState, useEffect } from 'react';

const List = ({ children, scale }) => {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				paddingLeft: '37rem',
			}}
		>
			{children}
		</div>
	);
};

const Cardo = ({ src, scale, className, onAnimationEnd }) => (
	<div
		className={className}
		onAnimationEnd={onAnimationEnd}
		style={{
			transform: `scale(${scale})`,
		}}
	>
		<Image
			src={src}
			style={{
				height: '300px',
				width: '200px',
				borderRadius: '5px',
				margin: '0px 5px 0px 5px',
				// transform: `scale(${scale})`,
				// animation: `${(scale == 1.1 && 'scaleItem') || 'scaleItemNormal'} 0.2s ease-out forwards`,
				// transition: 'all 0.2s linear',
				boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
				imageRendering: 'auto',
			}}
		/>
	</div>
);

const dataCards = [
	{
		index: 0,
		imageURL:
			'https://upload.wikimedia.org/wikipedia/ru/thumb/1/1a/Microsoft_Flight_Simulator_2020_cover.jpeg/533px-Microsoft_Flight_Simulator_2020_cover.jpeg',
	},
	{
		index: 1,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg',
	},
	{
		index: 2,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/4/43/Star_Wars_Jedi_Survivor.jpg',
	},
	{
		index: 3,
		imageURL: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Hogwarts-Legacy-cover.jpg',
	},
	{
		index: 4,
		imageURL: 'https://www.theloadout.com/wp-content/sites/theloadout/2022/07/nba-2k23-cover-athletes-10.jpg',
	},
];

function About() {
	const ListItems = [
		'https://media.istockphoto.com/id/1466755525/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%81%AE%E9%A3%BE%E3%82%8A%E3%82%92%E3%81%98%E3%81%A3%E3%81%8F%E3%82%8A%E8%A6%8B%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E3%81%AE%E5%AD%90.jpg?s=1024x1024&w=is&k=20&c=3VqBgbjC2cr4EWurSutMUBNM9IXs83jrAFuOKcQNlqE=',
		'https://media.istockphoto.com/id/1318144940/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%AE%E8%B5%A4%E3%83%A9%E3%83%B3%E3%83%97%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E5%86%99%E7%9C%9F%E7%81%AB%E7%81%BD%E5%A0%B1%E7%9F%A5%E5%99%A8%E3%82%A2%E3%83%A9%E3%83%BC%E3%83%A0%E3%83%9C%E3%82%BF%E3%83%B3.jpg?s=1024x1024&w=is&k=20&c=0k38Q0UgtkcmnIO-y_mHsfh0hzPeZqOodCAIhtG0WXA=',
		'https://media.istockphoto.com/id/1280885379/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%86%AC%E4%BC%91%E3%81%BF%E7%A5%9D%E3%81%86%E5%B9%B8%E3%81%9B%E3%81%AA%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E7%B3%BB%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E4%BA%BA%E3%81%AE%E3%82%AB%E3%83%83%E3%83%97%E3%83%AB.jpg?s=1024x1024&w=is&k=20&c=19IAt8pLCRIFKCByUCAcC4Sf-xuRpYvesCGCcYStY0Y=',
		'https://media.istockphoto.com/id/1442033196/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%BB%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E7%9D%80%E3%81%A6%E3%83%99%E3%83%83%E3%83%89%E3%81%AB%E5%BA%A7%E3%82%8A%E3%82%AF%E3%83%AA%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%84%E3%83%AA%E3%83%BC%E3%81%AE%E8%BF%91%E3%81%8F%E3%81%A7%E6%8A%B1%E3%81%8D%E3%81%97%E3%82%81%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7%E3%81%A8%E7%94%B7%E6%80%A7.jpg?s=1024x1024&w=is&k=20&c=RcPBhV3TsZIqt4p_nMuf98UTvksciduCkEeP3NXlAl0=',
	];

	const [list, setList] = useState([dataCards[0], dataCards[1], dataCards[2]]);
	const [dataOri, setDataOri] = useState(dataCards);
	const [index, setIndex] = useState(0);

	function handleDisplay(index) {
		// const arrDelete = currentArr.splice(0, index + 1);
		// currentArr.push(...arrDelete);
		let dataTmp;
		setDataOri(dataOriPrev => {
			dataTmp = dataOriPrev;
			return dataOriPrev;
		});
		return dataTmp.slice(0, 4);
	}

	const [moveClass, setMoveClass] = useState('');
	// const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			let indexTmp;
			setIndex(index => {
				indexTmp = index;
				if (indexTmp + 1 > 5) {
					return (indexTmp = 0);
				} else {
					return (indexTmp = indexTmp + 1);
				}
			});
			setList(handleDisplay(indexTmp));
			setMoveClass('center');
		}, 4000);
	}, []);

	function handleAnimationEnd() {
		if (moveClass != '') {
			const currentArr = [...dataOri];
			const arrDelete = currentArr.splice(0, 1);
			currentArr.push(...arrDelete);
			console.log('animationEnd:', currentArr);
			setList(currentArr.slice(0, 3));
			setDataOri(currentArr);
			setMoveClass('');
		}
	}

	return (
		<>
			<$.Summary>
				<$.Title>Thông tin công ty</$.Title>
				<$.ContentSheet>
					<$.Title>Về iQiyi International</$.Title>
					<Paragraph
						className="flex-center"
						style={{
							color: 'var(--white)',
							width: '75.2rem',
							lineHeight: '1.9rem',
							fontSize: '1.4rem',
							margin: '1.6rem auto 0px',
						}}
					>
						Có trụ sở chính tại Singapore, iQiyi International là đơn vị cung cấp dịch vụ phát video trực
						tuyến theo yêu cầu, và là dịch vụ cung cấp nội dung giải trí từ châu Á cho người dùng quốc tế.
						iQiyi International cung cấp dịch vụ xem video theo yêu cầu có quảng cáo (AVOD) và xem video
						theo yêu cầu có đăng ký thành viên VIP (SVOD). Với việc sử dụng những công nghệ tiên tiến nhất,
						iQiyi International mang đến cho người dùng nội dung đa dạng với các bộ phim truyền hình dài
						tập, phim điện ảnh, TV Show và các bộ phim hoạt hình anime với chất lượng cao cùng phụ đề ngôn
						ngữ địa phương. iQiyi International cũng đã thiết lập quan hệ đối tác SaaS với một số công ty
						giải trí và chia sẻ công nghệ của mình với các đối tác. Người dùng có thể thưởng thức nội dung
						cung cấp bởi iQiyi International trên mọi thiết bị thông qua iQ.com và ứng dụng. iQIYI
						International thuộc sở hữu của iQIYI, Inc. (Nasdaq: IQ)
					</Paragraph>
					<Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></Image>
				</$.ContentSheet>
			</$.Summary>
			<$.TrendSheet>
				<$.Title>Trending Phim</$.Title>
				<$.TrendSlide>
					<List>
						{list.map((item, index) => {
							let className;
							if (moveClass == '') {
								className = '';
							} else if (index == 1) {
								className = 'center';
							} else if (index == 2) {
								className = 'right';
							} else if (index == 3) {
								className = 'hidden';
							} else {
								className = 'left';
							}

							console.log('className:', className);

							return (
								<Cardo
									key={`card-${index}`}
									src={item.imageURL}
									scale={index % 2 != 0 && index % 3 != 0 ? 1.1 : 0.8}
									className={className}
									onAnimationEnd={handleAnimationEnd}
								/>
							);
						})}
					</List>
				</$.TrendSlide>
				<$.Contact>
					<Paragraph>
						Liên hệ tại Việt Nam: Công ty TNHH Khải Phong Media. Địa chỉ: Số 3, hẻm 146/11/8 Ngõ 146 Phố
						Vương Thừa Vũ, Phường Khương Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam. Điện thoại:
						+842432007015
					</Paragraph>
				</$.Contact>
				<$.Line></$.Line>
				<$.Culture>
					<$.CultureItem>
						<$.CultureTitle>
							<i>• </i>Sứ Mệnh
						</$.CultureTitle>
						<$.CultureDesc>Sức sáng tạo đưa ước mơ thăng hoa</$.CultureDesc>
					</$.CultureItem>
					<$.CultureItem>
						<$.CultureTitle>
							<i>• </i>Tầm Nhìn
						</$.CultureTitle>
						<$.CultureDesc>
							Trở thành người khổng lồ trong lĩnh vực giải trí thúc đẩy bởi sự đổi mới công nghệ
						</$.CultureDesc>
					</$.CultureItem>
					<$.CultureItem>
						<$.CultureTitle>
							<i>• </i>Văn Hóa
						</$.CultureTitle>
						<$.CultureDesc>Nghĩ đơn giản, Làm đơn giản</$.CultureDesc>
					</$.CultureItem>
				</$.Culture>
			</$.TrendSheet>
		</>
	);
}

export default About;
