import { useImperativeHandle } from 'react';
import { useRef } from 'react';
import { forwardRef } from 'react';
import video from '~/assets/videos/a.mp4';

function Video({ width }, ref) {
	const videoRef = useRef();
	useImperativeHandle(ref, () => ({
		play: () => videoRef.current.play(),
		pause: () => videoRef.current.pause(),
	}));

	return (
		<video
			ref={videoRef}
			src={video}
			width={'100%'}
		/>
	);
}

export default forwardRef(Video);
