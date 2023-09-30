import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Paragraph({ children, className, isTextOverFlow = false, numLine, moreTitle = 'more', linkMore, ...attrs }) {
	// not use when textoverflow
	if (!isTextOverFlow) {
		numLine = 'unset';
	}

	return (
		<$.ParagraphSheet
			className={className}
			isTextOverFlow={isTextOverFlow}
			numLine={numLine}
			{...attrs}
		>
			<span>{children}</span>
			{isTextOverFlow && (
				<$.More
					className={'primary flex-center'}
					rightIcons={
						<FontAwesomeIcon
							icon={faChevronRight}
							style={{ marginLeft: '0rem' }}
							src={linkMore}
						/>
					}
				>
					{moreTitle}
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
