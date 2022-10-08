import Label from '~/components/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import Background from '~/components/Background';
import * as $ from './Styles';

function Footer() {
	return (
		<Background
			// src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hreiLoPysWG79TsyQgMzFKaOTF5.jpg"
			minHeight="200px"
		>
			<Label
				fontSize="40px"
				fontWeight="700"
				className={'primary hover-underline'}
				type="h1"
				src="/reviewfilm/"
				leftIcons={<FontAwesomeIcon icon={faPaperclip} />}
				iconsize="25px"
			>
				Whereas
			</Label>
		</Background>
	);
}

export default Footer;
