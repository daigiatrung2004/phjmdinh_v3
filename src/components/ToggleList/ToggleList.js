import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useRef, useState } from 'react';
import * as $ from './Styles';

function ToggleList({ children, subListItems = [], transparentFlag, underlineFlag, colorLabel, ...attrs }) {
	const [isShow, setIsShow] = useState(false);
	const ref = useRef();

	const height = useMemo(() => {
		if (isShow && ref.current) {
			let style = ref.current.currentStyle || window.getComputedStyle(ref.current);
			return (ref.current.offsetHeight + parseInt(style.marginTop)) * subListItems.length + 40 + 'px';
		} else {
			return '0px';
		}
	}, [isShow, subListItems.length]);

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
			{/* {isShow && ( */}
			<$.SubListUlSheet subListUlHeight={height}>
				<$.SubListUl
					transparentFlag={transparentFlag}
					underlineFlag={underlineFlag}
				>
					{subListItems &&
						subListItems.map((content, index) => {
							return (
								<li
									ref={ref}
									key={`sublist-${index}`}
								>
									{content}
								</li>
							);
						})}
				</$.SubListUl>
			</$.SubListUlSheet>
			{/* )} */}
		</$.TipSheet>
	);
}

export default ToggleList;
