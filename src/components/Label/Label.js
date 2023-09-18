import PropTypes from 'prop-types';
import { Anchor } from './Styles';
import { forwardRef } from 'react';

const Label = forwardRef(function (
	{ type = 'label', src, children, className, leftIcons, rightIcons, ...propsDefaults },
	ref
) {
	return (
		<Anchor
			type={type}
			to={src}
			ref={ref}
			className={className}
			{...propsDefaults}
		>
			{leftIcons && <span className="icon leftIcon">{leftIcons}</span>}
			<span className="content">{children}</span>
			{rightIcons && <span className="icon rightIcon">{rightIcons}</span>}
		</Anchor>
	);
});

Label.propTypes = {
	type: PropTypes.string,
	src: PropTypes.string,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	leftIcons: PropTypes.node,
	rightIcons: PropTypes.node,
};

export default Label;
