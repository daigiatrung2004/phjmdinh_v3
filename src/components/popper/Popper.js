import { forwardRef } from 'react';
import * as $ from './Styles';

const Popper = forwardRef(function Popper({ children, ...attrs }, ref) {
	return (
		<$.Popper
			ref={ref}
			{...attrs}
		>
			{children}
		</$.Popper>
	);
});

export default Popper;
