import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import * as $ from './Styles';
import Label from '~/components/Label';
import { faExpand, faGear, faPause, faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MiniPlayer } from '~/components/Icons';

function Video({ src, height, width }, ref) {
	const videoRef = useRef();
	const [isPlay, setIsplay] = useState(true);
	const [widthProgress, setWidthProgress] = useState(0);
	const controlRef = useRef();
	const [duration, setDuration] = useState('00:00:00');
	const [currentTime, setCurrentTime] = useState('00:00');
	useImperativeHandle(
		ref,
		() => ({
			play: () => videoRef.current.play(),
			pause: () => videoRef.current.pause(),
		}),
		[]
	);

	function togglePlayHandle() {
		if (isPlay) {
			setIsplay(false);
			videoRef.current.play();
		} else {
			setIsplay(true);
			videoRef.current.pause();
		}
	}

	function timeUpdateHandle(event) {
		let { currentTime, duration } = event.target;
		let percent = (currentTime / duration) * 100;
		setWidthProgress(percent);
		// process current time

		// process duration
		setCurrentTime(timingHandle(currentTime));
		setDuration(timingHandle(videoRef.current.duration));
	}

	function timingHandle(time) {
		if (time) {
			let hours = Math.floor(time / 3600);
			let minute = Math.floor((time - hours) / 60);
			let second = Math.round(time - (hours * 3600 + minute * 60));
			let str = '';
			let seperate = ':';
			if (hours > 0) {
				if (hours < 10) {
					str += '0' + hours;
				} else {
					str += hours;
				}
				str += seperate;
			}

			if (minute >= 0) {
				if (minute < 10) {
					str += '0' + minute;
				} else {
					str += minute + ':';
				}
				str += seperate;
			}

			if (second < 10) {
				str += '0' + second;
			} else {
				str += second;
			}
			return str;
		} else {
			return '00:00';
		}
	}

	function mouseHandle(e) {
		if (e.target.closest('.control')) {
			return;
		} else {
			return controlRef.current.classList.remove('control');
		}
	}

	function durationLoadedHandle(e) {
		if (e.currentTarget) {
			setDuration(timingHandle(e.currentTarget.duration));
		}
	}

	return (
		<$.Area
			onMouseEnter={() => controlRef.current.classList.add('control')}
			onMouseOver={() => controlRef.current.classList.add('control')}
			onMouseOut={mouseHandle}
		>
			<$.PresentVideo
				ref={videoRef}
				src={src}
				width={width}
				height={height}
				onTimeUpdate={timeUpdateHandle}
				onLoadedMetadata={durationLoadedHandle}
			/>
			<$.ControlArea ref={controlRef}>
				<$.ProgressBar>
					<$.ProgressActive
						className="active"
						width={widthProgress}
					/>
				</$.ProgressBar>
				<$.ControlsArea>
					<$.ControlsLeft>
						{isPlay ? (
							<$.ControlItem onClick={togglePlayHandle}>
								<FontAwesomeIcon icon={faPlay} />
							</$.ControlItem>
						) : (
							<$.ControlItem onClick={togglePlayHandle}>
								<FontAwesomeIcon icon={faPause} />
							</$.ControlItem>
						)}
						<$.ControlItem>
							<FontAwesomeIcon icon={faVolumeHigh} />
							<$.VolumeRangeArea>
								<input type="range" />
							</$.VolumeRangeArea>
						</$.ControlItem>
						<$.ControlItem>
							<Label style={{ color: 'var(--white)' }}>
								<span>{currentTime}</span> / <span>{duration}</span>
							</Label>
						</$.ControlItem>
					</$.ControlsLeft>
					<$.ControlsRight>
						<$.ControlItem>
							<MiniPlayer />
						</$.ControlItem>
						<$.ControlItem>
							<FontAwesomeIcon icon={faGear} />
						</$.ControlItem>
						<$.ControlItem>
							<FontAwesomeIcon icon={faExpand} />
						</$.ControlItem>
					</$.ControlsRight>
				</$.ControlsArea>
			</$.ControlArea>
		</$.Area>
	);
}

export default forwardRef(Video);
