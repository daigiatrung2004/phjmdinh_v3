import * as $ from './Styles';

function TextArea({ children, title, ...attrs }) {
	return (
		<$.StyleGeneral>
			<h1>{title}</h1>
			<$.TextArea {...attrs}>{children}</$.TextArea>
		</$.StyleGeneral>
	);
}

export default TextArea;
