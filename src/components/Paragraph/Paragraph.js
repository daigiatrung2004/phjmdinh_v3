import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Paragraph({
	children,
	className,
	isTextOverFlow = false,
	numLine,
	moreTitle = 'more',
	linkMore,
	isToggleFlag = false,
	moreTitleDetail,
	...attrs
}) {
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
		setIsTextOverFlowSt(isTextOverFlow);
	}, [isTextOverFlow]);

	return (
		<$.ParagraphSheet
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
							icon={faChevronRight}
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
}

Paragraph.propTypes = {
	children: PropTypes.string,
	className: PropTypes.string,
	isTextOverFlow: PropTypes.bool,
	numLine: PropTypes.number,
	moreTitle: PropTypes.string,
	linkMore: PropTypes.string,
};

export default Paragraph;
