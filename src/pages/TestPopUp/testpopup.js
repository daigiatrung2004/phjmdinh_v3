import * as $ from './Styles';
import PopUp from '~/components/PopUp';
import { PUSettings } from '~/utils/StylesBase';

function Testpopup() {
	let config = {
		shape: PUSettings['shape']['square'],
		isFooter: true,
		isHeader: true,
		content: 'Whoops !!',
	};
	return (
		<$.Modal>
			<PopUp settings={config} />
		</$.Modal>
	);
}

export default Testpopup;
