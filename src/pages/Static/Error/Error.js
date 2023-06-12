import * as $ from './ErrorStyles';
function Error({ message }) {
	return (
		<$.Content>
			<$.Message>{message}</$.Message>
		</$.Content>
	);
}

export default Error;
