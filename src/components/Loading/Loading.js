import { forwardRef } from 'react';
import * as $ from './Styles';

const Loading = forwardRef(function (props, ref) {
	return (
		<$.Wrapper ref={ref}>
			<div
				className="right1"
				style={{
					position: 'relative',
					background: 'rgba(0, 255, 233, 0.5)',
					borderRadius: '50%',
					height: '15px',
					width: '15px',
					left: '5px',
				}}
			></div>
			<div
				className="left1"
				style={{
					position: 'relative',
					background: 'rgba(255, 0, 38, 0.5)',
					borderRadius: '50%',
					height: '15px',
					width: '15px',
					right: '3px',
				}}
			></div>
		</$.Wrapper>
	);
});

export default Loading;
