import * as $ from './Styles';

function PopUp({ shape, isHeader, isFooter, borderHeader, borderFooter }) {
	console.log(
		'isHeader;',
		<$.ModalGeneral>
			{isHeader && <$.Header>header</$.Header>}
			{isFooter && <$.Footer>footer</$.Footer>}
		</$.ModalGeneral>
	);
	return (
		<$.ModalGeneral>
			{isHeader && <$.Header>header</$.Header>}
			{isFooter && <$.Footer>header</$.Footer>}
		</$.ModalGeneral>
	);
}
console.log('function component:', PopUp);
export default PopUp;
