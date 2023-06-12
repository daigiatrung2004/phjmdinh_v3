import { useEffect, useState } from 'react';
import { Button } from '../Button/Styles';
import * as $ from './Styles';
import { PUSettings } from '~/utils/StylesBase';

function PopUp({ settings }) {
	const [num, setNum] = useState(0);
	const config = {
		shape: PUSettings['shape']['square'],
		isFooter: true,
		isHeader: true,
		content: 'Whoops !!',
		contrast: PUSettings['contrast']['dark'],
		border: '5px',
	};

	Object.assign(config, settings);

	useEffect(() => {
		// setNum(num + 1);
	}, [num]);

	return (
		<$.ModalGeneral
			shape={config.shape}
			contrast={config.contrast}
			{...config}
		>
			{config.isHeader && <$.Header>header</$.Header>}
			<$.Content>{num}</$.Content>
			{config.isFooter && (
				<$.Footer>
					<Button
						theme={{ type: 'primary', size: 'large' }}
						onClick={() => setNum(num + 1)}
					>
						OK
					</Button>
				</$.Footer>
			)}
		</$.ModalGeneral>
	);
}
export default PopUp;
