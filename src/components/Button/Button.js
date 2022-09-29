import PropTypes from 'prop-types';

function Button({ children, className, theme, leftIcon, rightIcon, handle, ...propsDefault }) {
	return (
		<button
			className={className}
			onClick={handle}
			{...propsDefault}
		>
			{leftIcon && <span className="iconLeft">{leftIcon}</span>}
			<span>{children}</span>
			{rightIcon && <span className="iconRight">{rightIcon}</span>}
		</button>
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
