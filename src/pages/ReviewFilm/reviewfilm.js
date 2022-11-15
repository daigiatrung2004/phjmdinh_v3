import { useEffect, useState } from 'react';

import Background from '~/components/Background';
import Item from '~/components/Item';
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
				minHeight="500px"
				src={item && item.backdropPath}
			>
				<$.Wrapped>
					{item ? (
						<Item
							hImage="400px"
							wImage="300px"
							isHideTitle
							src="/reviewfilm/"
							data={item}
							type={'VERTICAL_DISPLAY_TYPE'}
						/>
					) : (
						'NOT DATA'
					)}
				</$.Wrapped>
			</Background>
		</>
	);
}

export default ReviewFilm;
