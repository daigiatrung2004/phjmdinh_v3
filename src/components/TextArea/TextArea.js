import * as $ from './Styles';

function TextArea({ children, title, styleLabel, ...attrs }) {
	return (
		<$.StyleGeneral>
			<h1 style={styleLabel}>{title}</h1>
			<$.TextArea {...attrs}>{children}</$.TextArea>
		</$.StyleGeneral>
	);
}

export default TextArea;
