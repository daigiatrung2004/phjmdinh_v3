import { useEffect, useState } from 'react';

import Background from '~/components/Background';
import Item from '~/components/Item';
import Label from '~/components/Label';
import { getItemFilm } from '~/services/moviesService';
import * as $ from './Styles';

function ReviewFilm() {
	const [item, setItem] = useState(null);
	useEffect(() => {
		getItemFilm(663712)
			.then(data => {
				setItem(data);
			})
			.catch(error => console.log(error));
	}, []);
	return (
		<>
			<Background
				minHeight="740px"
				src={item && item.backdropPath}
			>
				<$.Wrapped minHeight="740px">
					{item ? (
						<>
							<Item
								h="100%"
								w="auto"
								hImage="400px"
								wImage="300px"
								margin="0px"
								isHideTitle
								src="/reviewfilm/"
								data={item}
								type={'VERTICAL_DISPLAY_TYPE'}
							/>
							<$.InfoFilm>
								<Label fontSize="26px">{item.title}</Label>
								<Label>THỜI GIAN: {item.runtime} phút</Label>
								<Label>ĐẠO DIỄN: N/A</Label>
								<Label>Ngày công chiếu: {item.releaseDate}</Label>
								<Label>Thể loại phim: {item.genres.map(genre => genre.name).join(' , ')}</Label>
							</$.InfoFilm>
						</>
					) : (
						'NOT DATA'
					)}
				</$.Wrapped>
			</Background>
		</>
	);
}

export default ReviewFilm;
