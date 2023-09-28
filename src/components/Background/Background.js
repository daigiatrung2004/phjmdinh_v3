import PropTypes from 'prop-types';

import * as $ from './Styles';
import { forwardRef } from 'react';

const Background = forwardRef(function ({ children, src, className, ...propsDefault }, ref) {
	{
		console.log('children background:', children);
	}
	return (
		<$.Background
			src={src}
			ref={ref}
			className={`${className} background`}
			{...propsDefault}
		>
			<$.Overlay className="overlay">
				<$.Content
					className={`${className} content`}
					{...propsDefault}
				>
					{children}
				</$.Content>
			</$.Overlay>
		</$.Background>
	);
});

// Background.propTypes = {
// 	children: PropTypes.node.isRequired,
// };

export default Background;
