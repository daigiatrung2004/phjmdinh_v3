import { useImperativeHandle } from 'react';
import { useRef } from 'react';
import { forwardRef } from 'react';
import video from '~/assets/videos/a.mp4';

function Video(props, ref) {
	const videoRef = useRef();
	useImperativeHandle(ref, () => ({
		play: () => videoRef.current.play(),
		pause: () => videoRef.current.pause(),
	}));

	return (
		<video
			ref={videoRef}
			src={video}
			width={250}
		/>
	);
}

export default forwardRef(Video);
