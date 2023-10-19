import { forwardRef } from 'react';
import * as $ from './Styles';

const Background = forwardRef(function ({ children, src, className, ...propsDefault }, ref) {
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
