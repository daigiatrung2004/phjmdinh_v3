import * as $ from './Styles';

function TextArea({ children, ...attrs }) {
	return (
		<$.StyleGeneral>
			<$.TextArea {...attrs}>{children}</$.TextArea>
		</$.StyleGeneral>
	);
}

export default TextArea;
