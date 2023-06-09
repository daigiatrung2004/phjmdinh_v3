import PropTypes from 'prop-types';

import * as $ from './Styles';

function Background({ children, ...propsDefault }) {
	return (
		<$.Background>
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
