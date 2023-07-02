import { useEffect } from 'react';
import { useRef } from 'react';
import Video from './Video';

function Watch() {
	let videoRef = useRef();

	console.log('videoref:', videoRef);
	return (
		<>
			<Video ref={videoRef} />
			<button onClick={() => videoRef.current.play()}>play</button>
			<button onClick={() => videoRef.current.pause()}>pause</button>
		</>
	);
}

export default Watch;
