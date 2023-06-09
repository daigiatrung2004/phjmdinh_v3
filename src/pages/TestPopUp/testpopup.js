import * as $ from './Styles';
import PopUp from '~/components/PopUp';

function Testpopup() {
	return (
		<$.Modal>
			<PopUp
				shape="square"
				isFooter={true}
				isHeader={true}
			/>
			{console.log('react components:', <PopUp shape="square" />)}
		</$.Modal>
	);
}

export default Testpopup;
