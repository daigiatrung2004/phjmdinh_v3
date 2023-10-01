import * as $ from './Styles';
import { useEffect, useState } from 'react';

function DropDown({ options = [], name = 'dropdown', id = 'dropdown', defaultText = '', labelText = '', ...attrs }) {
	const [options_, setOptions_] = useState(options);

	useEffect(() => {
		if (defaultText) {
			options.push({ text: defaultText, value: 'default' });
			setOptions_(options);
		}
		// return () => {
		// 	options.shift();
		// };
	}, []);

	return (
		<$.StyleGeneral>
			<$.LabelText>{labelText}</$.LabelText>
			<$.Select
				name={name}
				id={id}
				{...attrs}
			>
				{options_.map(({ text, value }, index) => {
					return (
						<option
							value={value}
							selected={value == 'default' ? 'selected' : ''}
						>
							{text}
						</option>
					);
				})}
			</$.Select>
		</$.StyleGeneral>
	);
}

export default DropDown;
