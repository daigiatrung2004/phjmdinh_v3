import * as $ from './Styles';

function Input({ type = 'text', value, labelText, ...attrs }) {
	let In = function () {
		switch (type) {
			case 'text':
				return (
					<$.StyleGeneral>
						<$.LabelText>{labelText}</$.LabelText>
						<$.InputText
							{...attrs}
							type={type}
							value={value}
						/>
					</$.StyleGeneral>
				);
			case 'radio':
				return (
					<$.StyleGeneral>
						<$.InputRadio
							{...attrs}
							type={type}
							value={value}
						/>
						<$.LabelRadio>{labelText}</$.LabelRadio>
					</$.StyleGeneral>
				);
			default:
				return '';
		}
	};
	return <In />;
}

export default Input;
