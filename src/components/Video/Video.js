import {
	faBackward,
	faCompress,
	faExpand,
	faForward,
	faGear,
	faPause,
	faPlay,
	faPlayCircle,
	faSliders,
	faVolumeHigh,
	faVolumeLow,
	faVolumeOff,
	faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { MiniPlayer } from '~/components/Icons';
import Label from '~/components/Label';
import Popper from '~/components/popper';
import ToggleList from '../ToggleList/ToggleList';
import * as $ from './Styles';

function Video({ src, height, width }, ref) {
	const videoRef = useRef();
	const controlRef = useRef();
	const areaRef = useRef();
	const progressRef = useRef();
	const inputRef = useRef();
	const delayId = useRef();

	const [stateVolume, setStateVolume] = useState(faVolumeHigh);
	const [stateVolumeClass, setStateVolumeClass] = useState('volume-high');
	const [isPlay, setIsplay] = useState(true);
	const [animationPlay, setAnimationPlay] = useState('');
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [widthProgress, setWidthProgress] = useState(0);
	const [duration, setDuration] = useState('00:00:00');
	const [currentTime, setCurrentTime] = useState('00:00');
	const [transitionSetting, setTransitionSetting] = useState('');
	const [isExpandSetting, setIsExpandSetting] = useState(false);
	const [widthActiveVolume, setWidthActiveVolume] = useState(100);
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

	function skipForWardHandle() {
		videoRef.current.currentTime += 5;
	}

	function skipBackWardHandle() {
		videoRef.current.currentTime -= 5;
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
		if (e.target.closest('.control') || e.target.closest('.area')) {
			return;
		} else {
			setIsExpandSetting(false);
			return controlRef.current.classList.remove('control');
		}
	}

	function durationLoadedHandle(e) {
		if (e.currentTarget) {
			setDuration(timingHandle(e.currentTarget.duration));
		}
	}

	function changeTimeVideo(event) {
		if (event) {
			let offsetX = event.nativeEvent.offsetX;
			let width = progressRef.current.clientWidth;
			let percent = (offsetX / width) * 100;
			let duration = videoRef.current.duration;
			let currentTime = (percent * duration) / 100;

			setWidthProgress(percent);
			if (currentTime) {
				videoRef.current.currentTime = parseFloat(currentTime) ?? 0;
			}
			setCurrentTime(timingHandle(currentTime));
		}
	}

	function togglePictureInPicture() {
		if (document.pictureInPictureElement) {
			document.exitPictureInPicture();
		} else if (document.pictureInPictureEnabled && videoRef.current) {
			videoRef.current.requestPictureInPicture();
		}
	}

	function toggleFullScreen() {
		let elem = areaRef.current;
		if (isFullScreen && document.fullscreenElement) {
			document.exitFullscreen();
			return;
		}

		if (elem && elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem && elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem && elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen();
		} else if (elem && elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		}
	}

	function toggleSettings() {
		if (transitionSetting === '' || transitionSetting === 'transformDefault') {
			setTransitionSetting('transformLeft');
			setIsExpandSetting(true);
		} else {
			setTransitionSetting('transformDefault');
			setIsExpandSetting(false);
		}
	}

	function checkFullScreenChange(e) {
		if (document.fullscreenElement && e.target === document.fullscreenElement) {
			// controlRef.current.classList.remove('control');
			// controlRef.current.classList.remove('vjs-fade-out');
			setIsFullScreen(true);
		} else {
			setIsFullScreen(false);
		}
	}

	function volumneClickHandle(e) {
		let dataOld = videoRef.current.dataset.dataOld ?? 0.9;
		if (
			e.target.closest('.volume').classList.contains('volume-off') ||
			e.target.closest('.volume').classList.contains('volume-high') ||
			e.target.closest('.volume').classList.contains('volume-low')
		) {
			setStateVolume(faVolumeXmark);
			setStateVolumeClass('volume-xmark');
			inputRef.current.value = 0.0;
			videoRef.current.dataset.dataOld = videoRef.current.volume;
			videoRef.current.volume = 0.0;
		} else if (dataOld > 0.8) {
			setStateVolume(faVolumeHigh);
			setStateVolumeClass('volume-high');
			videoRef.current.dataset.dataOld = 0.0;
			videoRef.current.volume = dataOld;
		} else if (dataOld < 0.5 && dataOld > 0.3) {
			setStateVolume(faVolumeLow);
			setStateVolumeClass('volume-low');
			videoRef.current.dataset.dataOld = 0.0;
			videoRef.current.volume = dataOld;
		} else if (dataOld < 0.3 && dataOld > 0.0) {
			setStateVolume(faVolumeOff);
			setStateVolumeClass('volume-off');
			videoRef.current.dataset.dataOld = 0.0;
			videoRef.current.volume = dataOld;
		}
		inputRef.current.value = videoRef.current.volume;
		changeWidthVolumeActive();
	}

	function volumeChangeInputHandle(e) {
		let volume = inputRef.current.value;
		if (volume < 0.1) {
			setStateVolume(faVolumeXmark);
			setStateVolumeClass('volume-xmark');
		} else if (volume > 0.8) {
			setStateVolume(faVolumeHigh);
			setStateVolumeClass('volume-high');
		} else if (volume < 0.5 && volume > 0.3) {
			setStateVolume(faVolumeLow);
			setStateVolumeClass('volume-low');
		} else if (volume < 0.3 && volume > 0.0) {
			setStateVolume(faVolumeOff);
			setStateVolumeClass('volume-off');
		}
		videoRef.current.volume = volume;

		changeWidthVolumeActive();
	}

	function changeWidthVolumeActive() {
		const slide = inputRef.current;
		const value = slide.value;
		slide.setAttribute('length', value * 100);
		setWidthActiveVolume(value * 100);
	}

	useEffect(() => {
		document.body.onkeyup = e => {
			if (e.keyCode === 37) {
				skipBackWardHandle();
			} else if (e.keyCode === 39) {
				skipForWardHandle();
			}
		};
		var element;
		if (areaRef.current) {
			element = areaRef.current;
			element.addEventListener('fullscreenchange', checkFullScreenChange);
		}
		return () => {
			if (element) {
				element.removeEventListener('fullscreenchange', checkFullScreenChange);
			}
		};
	}, []);

	function clickAreaHandle(e) {
		if (isPlay) {
			setAnimationPlay('animation');
			setIsplay(false);
			videoRef.current.play();
		} else {
			setAnimationPlay('');
			setIsplay(true);
			videoRef.current.pause();
		}
	}

	function delayHideControlHandle(e) {
		if (e.target.closest('.control') || e.target.closest('.area')) {
			console.log('delay value=====: ', delayId);
			if (delayId.current) {
				clearTimeout(delayId.current);
			}

			let id = setTimeout(() => {
				controlRef.current.classList.remove('control');
				controlRef.current.classList.remove('vjs-fade-out');
			}, 1500);
			delayId.current = id;
		}
	}

	return (
		<$.Area
			onMouseEnter={() => {
				controlRef.current.classList.add('control');
				controlRef.current.classList.add('vjs-fade-out');
			}}
			onMouseMove={e => {
				controlRef.current.classList.add('control');
				controlRef.current.classList.remove('vjs-fade-out');
				delayHideControlHandle(e);
			}}
			onMouseOut={mouseHandle}
			ref={areaRef}
			className="area"
		>
			<$.VideoArea onClick={clickAreaHandle}>
				<$.PresentVideo
					ref={videoRef}
					src={src}
					width={width}
					height={height}
					onTimeUpdate={timeUpdateHandle}
					onLoadedMetadata={durationLoadedHandle}
				></$.PresentVideo>
				<$.Overlay className={animationPlay || isPlay ? '' : 'hide'}>
					{isPlay ? (
						<$.ControlLarge
							className={animationPlay}
							onAnimationEnd={() => setAnimationPlay('')}
						>
							<FontAwesomeIcon
								icon={faPlayCircle}
								style={{ fontSize: '4.8rem', color: 'var(--white)' }}
							/>
						</$.ControlLarge>
					) : (
						animationPlay && (
							<$.ControlLarge
								className={animationPlay}
								onAnimationEnd={() => setAnimationPlay('')}
							>
								<FontAwesomeIcon
									icon={faPause}
									style={{ fontSize: '4.8rem', color: 'var(--white)' }}
								/>
							</$.ControlLarge>
						)
					)}
				</$.Overlay>
			</$.VideoArea>
			<$.ControlArea ref={controlRef}>
				<$.ProgressBar
					ref={progressRef}
					onClick={event => changeTimeVideo(event)}
				>
					<$.ProgressActive
						className="active"
						width={widthProgress}
					/>
				</$.ProgressBar>
				<$.ControlsArea>
					<$.ControlsLeft>
						<$.ControlItem onClick={skipBackWardHandle}>
							<FontAwesomeIcon icon={faBackward} />
						</$.ControlItem>
						{isPlay ? (
							<$.ControlItem onClick={togglePlayHandle}>
								<FontAwesomeIcon icon={faPlay} />
							</$.ControlItem>
						) : (
							<$.ControlItem onClick={togglePlayHandle}>
								<FontAwesomeIcon icon={faPause} />
							</$.ControlItem>
						)}
						<$.ControlItem onClick={skipForWardHandle}>
							<FontAwesomeIcon icon={faForward} />
						</$.ControlItem>
						<$.ControlItem className={`volume ${stateVolumeClass}`}>
							<FontAwesomeIcon
								className={stateVolumeClass}
								icon={stateVolume}
								onClick={volumneClickHandle}
								style={{ width: '2.5rem' }}
							/>
							<$.VolumeRangeArea>
								<input
									type="range"
									onInput={volumeChangeInputHandle}
									ref={inputRef}
									min={'0'}
									max={'1'}
									step={'any'}
								/>
								<$.ActiveVolume width={widthActiveVolume} />
							</$.VolumeRangeArea>
						</$.ControlItem>
						<$.ControlItem>
							<Label style={{ color: 'var(--white)' }}>
								<span>{currentTime}</span> / <span>{duration}</span>
							</Label>
						</$.ControlItem>
					</$.ControlsLeft>
					<$.ControlsRight>
						<$.ControlItem onClick={togglePictureInPicture}>
							<MiniPlayer />
						</$.ControlItem>
						<$.ControlItem
							className={`${transitionSetting}`}
							onClick={toggleSettings}
						>
							<FontAwesomeIcon icon={faGear} />
						</$.ControlItem>
						{isFullScreen ? (
							<$.ControlItem onClick={toggleFullScreen}>
								<FontAwesomeIcon icon={faCompress} />
							</$.ControlItem>
						) : (
							<$.ControlItem onClick={toggleFullScreen}>
								<FontAwesomeIcon icon={faExpand} />
							</$.ControlItem>
						)}
					</$.ControlsRight>
				</$.ControlsArea>
			</$.ControlArea>
			{isExpandSetting && (
				<$.SettingsExpandArea>
					<Popper transparentFlag>
						<ul>
							<li>
								<ToggleList
									colorLabel={'var(--white)'}
									transparentFlag
									underlineFlag
									subListItems={['0.25x', '0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x']}
								>
									<Label
										style={{ color: 'var(--white)' }}
										leftIcons={<FontAwesomeIcon icon={faPlayCircle} />}
									>
										Tốc độ phát
									</Label>
								</ToggleList>
								<ToggleList
									colorLabel={'var(--white)'}
									transparentFlag
									underlineFlag
									subListItems={['720p', '480p', '360p', '240p', '144p', 'Tự động']}
								>
									<Label
										style={{ color: 'var(--white)' }}
										leftIcons={<FontAwesomeIcon icon={faSliders} />}
									>
										Chất lượng
									</Label>
								</ToggleList>
							</li>
						</ul>
					</Popper>
				</$.SettingsExpandArea>
			)}
		</$.Area>
	);
}

export default forwardRef(Video);
