import { useEffect, useState } from 'react';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getPopular, getTrending, getUpComing } from '~/services/moviesService';
import Label from '~/components/Label';
import Items from '~/components/FilmItems';
import * as $ from './Styles';

function Home() {
	const [itemsPopular, setItemsPopular] = useState([]);
	const [itemsTrending, setItemsTrending] = useState([]);
	const [itemsUpComing, setItemsUpComing] = useState([]);
	const [itemsLastest, setItemsLastest] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function getData() {
			try {
				let dataPopular = await getPopular({ page: 1, adults: false });
				let dataTrending = await getTrending({ page: 1, adults: false });
				let dataUpComing = await getUpComing({ page: 1, adults: false });
				let dataLastest = await getUpComing({ page: 1, adults: false });
				setItemsPopular(dataPopular);
				setItemsTrending(dataTrending);
				setItemsUpComing(dataUpComing);
				setItemsLastest(dataLastest);
			} catch (error) {
				console.log(error);
			}
		}

		getData();

		// setTimeout(() => {
		// 	setTitle('test asfdsadfasdfas');
		// }, 10000);
	}, []);

	return (
		<>
			<$.Wrapper>
				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					POPULAR
				</Label>
				{loading ? (
					Array(3).map(() => (
						<>
							Skeleton baseColor="#1F4662" highlightColor="#537187" height={'225px'}
							width={'155px'}> Skeleton baseColor="#1F4662" highlightColor="#537187" width={'155px'}
							count={1.5}>
						</>
					))
				) : (
					<$.ItemsWrapper>
						<Items
							src="/reviewfilm/"
							items={itemsPopular}
							type="VERTICAL_DISPLAY_TYPE"
						/>
					</$.ItemsWrapper>
				)}

				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					TRENDING
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsTrending}
						type="VERTICAL_DISPLAY_TYPE"
					/>
				</$.ItemsWrapper>

				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					UPCOMING
				</Label>
				<$.ItemsWrapper>
					<Items
						src="/reviewfilm/"
						items={itemsUpComing}
						type="VERTICAL_DISPLAY_TYPE"
					/>
				</$.ItemsWrapper>
				<Label
					type={'h3'}
					fontSize="30px"
					fontWeight="700"
					className={'primary'}
					leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
					iconsize={'20px'}
				>
					LASTEST TRAILERS
				</Label>
			</$.Wrapper>
			<$.Trailer>
				<Items
					src="/reviewfilm/"
					items={itemsLastest}
					type={'HORIZON_DISPLAY_TYPE'}
					icon={<$.PlayIcon />}
				/>
			</$.Trailer>
		</>
	);
}

export default Home;
