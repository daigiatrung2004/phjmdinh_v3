import PropTypes from 'prop-types';
import * as $ from './Styles';

function Button({
	children,
	className,
	theme = { type: 'default', size: 'medium' },
	leftIcon,
	rightIcon,
	handle,
	...propsDefault
}) {
	for (let key in theme) {
		className += ' ' + theme[key];
	}

	return (
		<$.Button
			className={className}
			onClick={handle}
			{...propsDefault}
		>
			{leftIcon && <span className="icon iconLeft">{leftIcon}</span>}
			<span className="content">{children}</span>
			{rightIcon && <span className="icon iconRight">{rightIcon}</span>}
		</$.Button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	theme: PropTypes.object,
	leftIcons: PropTypes.node,
	rightIcons: PropTypes.node,
	handle: PropTypes.func,
};

export default Button;
