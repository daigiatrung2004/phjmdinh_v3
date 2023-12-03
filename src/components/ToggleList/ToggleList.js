import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as $ from './Styles';

function ToggleList({ children, subListItems, transparentFlag, underlineFlag, colorLabel, ...attrs }) {
	const [isShow, setIsShow] = useState(false);

	return (
		<$.TipSheet
			{...attrs}
			transparentFlag={transparentFlag}
			underlineFlag={underlineFlag}
		>
			<$.Tip
				className="tip"
				onClick={() => setIsShow(!isShow)}
				transparentFlag={transparentFlag}
				underlineFlag={underlineFlag}
			>
				<$.Label colorLabel={colorLabel}>{children}</$.Label>
				{(isShow && (
					<FontAwesomeIcon
						icon={faChevronUp}
						style={{ color: '#ccc' }}
					/>
				)) || (
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{ color: '#ccc' }}
					/>
				)}
			</$.Tip>
			{isShow && (
				<$.SubListUl
					transparentFlag={transparentFlag}
					underlineFlag={underlineFlag}
				>
					{subListItems &&
						subListItems.map((content, index) => {
							return <li key={`sublist-${index}`}>{content}</li>;
						})}
				</$.SubListUl>
			)}
		</$.TipSheet>
	);
}

export default ToggleList;
