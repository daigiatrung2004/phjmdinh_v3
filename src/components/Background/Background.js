import PropTypes from 'prop-types';

import * as $ from './Styles';

function Background({ children, src, ...propsDefault }) {
	return (
		<$.Background
			src={src}
			{...propsDefault}
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
}

Background.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Background;
