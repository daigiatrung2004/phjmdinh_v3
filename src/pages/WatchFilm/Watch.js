import { useRef } from 'react';
import Video from './Video';
import * as $ from './Styles';

function Watch() {
	let videoRef = useRef();
	return (
		<$.WatchArea>
			<$.WatchContainer>
				<$.PresentationFilmArea>
					<Video ref={videoRef} />
					<button onClick={() => videoRef.current.play()}>play</button>
					<button onClick={() => videoRef.current.pause()}>pause</button>
				</$.PresentationFilmArea>
				<$.EposideArea></$.EposideArea>
			</$.WatchContainer>
		</$.WatchArea>
	);
}

export default Watch;
