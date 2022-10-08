import PropTypes from 'prop-types';

import * as $ from './Styles';

function Background({ children, ...propsDefault }) {
	return (
		<$.Background
			className="background"
			{...propsDefault}
		>
			{children}
		</$.Background>
	);
}

Background.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Background;
