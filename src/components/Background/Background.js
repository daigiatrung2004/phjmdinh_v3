import PropTypes from 'prop-types';

import * as $ from './Styles';
import { forwardRef } from 'react';

const Background = forwardRef(function ({ children, src, ...propsDefault }, ref) {
	return (
		<$.Background
			src={src}
			{...propsDefault}
			ref={ref}
		>
			<$.Overlay>
				<$.Content
					className="content"
					{...propsDefault}
				>
					{children}
				</$.Content>
			</$.Overlay>
		</$.Background>
	);
});

Background.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Background;
