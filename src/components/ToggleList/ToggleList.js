import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import * as $ from './Styles';

function ToggleList({ children, subListItems }) {
	const [isShow, setIsShow] = useState(false);

	return (
		<$.TipSheet>
			<$.Tip
				className="tip"
				onClick={() => setIsShow(!isShow)}
			>
				<span style={{ color: '#666', cursor: 'pointer' }}>{children}</span>
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
				<$.SubListUl>
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
