import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
// import PropTypes from 'prop-types';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useEffect, useState } from 'react';

const calback = () => {
	return;
};
const Paragraph = forwardRef(function Paragraph(
	{
		children,
		className,
		isTextOverFlow = false,
		numLine,
		moreTitle = 'more',
		linkMore,
		isToggleFlag = false,
		moreTitleDetail,
		handleSizeParagh = calback,
		...attrs
	},
	ref
) {
	const [isTextOverFlowSt, setIsTextOverFlowSt] = useState(isTextOverFlow);
	// not use when textoverflow
	if (!isTextOverFlowSt) {
		numLine = 'unset';
	}

	function moreHandleClick() {
		if (isToggleFlag) {
			setIsTextOverFlowSt(!isTextOverFlowSt);
		}
	}

	useEffect(() => {
		if (ref && ref.current) {
			let style = ref.current.currentStyle || window.getComputedStyle(ref.current);
			handleSizeParagh(ref.current.offsetHeight + parseInt(style.marginTop) + 'px');
		} else {
			handleSizeParagh && handleSizeParagh('0px');
		}
	}, [isTextOverFlowSt, handleSizeParagh, ref]);

	useEffect(() => {
		setIsTextOverFlowSt(isTextOverFlow);
	}, [isTextOverFlow]);

	return (
		<$.ParagraphSheet
			ref={ref}
			className={className}
			isTextOverFlow={isTextOverFlowSt}
			numLine={numLine}
			{...attrs}
		>
			<span>{children}</span>
			{isTextOverFlowSt && (
				<$.More
					className={'primary flex-center'}
					rightIcons={
						<FontAwesomeIcon
							icon={faChevronDown}
							style={{ marginLeft: '0rem' }}
							src={linkMore}
						/>
					}
					onClick={moreHandleClick}
				>
					{moreTitle}
				</$.More>
			)}

			{moreTitleDetail && isTextOverFlowSt === false && (
				<$.More
					className={'primary flex-center'}
					rightIcons={
						<FontAwesomeIcon
							icon={faChevronRight}
							style={{ marginLeft: '0rem' }}
							src={linkMore}
						/>
					}
					onClick={moreHandleClick}
				>
					{moreTitleDetail}
				</$.More>
			)}
		</$.ParagraphSheet>
	);
});

// Paragraph.propTypes = {
// 	children: PropTypes.string,
// 	className: PropTypes.string,
// 	isTextOverFlow: PropTypes.bool,
// 	numLine: PropTypes.number,
// 	moreTitle: PropTypes.string,
// 	linkMore: PropTypes.string,
// };

export default Paragraph;
