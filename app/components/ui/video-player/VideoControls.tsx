import React, { useEffect, useState } from 'react'

interface IVideoControlsProps {
	isPlaying: boolean;
	currentTime: number;
	duration: number;
	volume: number;
	onPlay: () => void;
	onPause: () => void;
	onTime: (time: number) => void;
	onProgress: (time: number) => void;
	onVolume: (volume: number) => void;
	onMute: () => void;
	onFullscreen: () => void;
}

const VideoControls: React.FC<IVideoControlsProps> = ({
  isPlaying, currentTime, duration, onPlay,
  onPause, onTime, onProgress, onVolume, onMute, onFullscreen,
 }) => {
	const [volume, setVolume] = useState(1);
	const [muted, setMuted] = useState(false);

	useEffect(() => {
		setVolume(volume);
	}, [volume]);

	useEffect(() => {
		setMuted(muted);
	}, [muted]);

	const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(e.target.value);
		setVolume(value);
		onVolume(value);
	};

	const handleMute = () => {
		setMuted(!muted);
		onMute();
	};

	return (
		<div className="video-controls">
			<button onClick={isPlaying ? onPause : onPlay}>
				{isPlaying ? 'Pause' : 'Play'}
			</button>
			<input
				type="range"
				min="0"
				max={duration}
				value={currentTime}
				onChange={(e) => onTime(parseFloat(e.target.value))}
			/>
			<button onClick={onFullscreen}>Fullscreen</button>
			<input
				type="range"
				min="0"
				max="1"
				step="0.01"
				value={volume}
				onChange={handleVolume}
			/>
			<button onClick={handleMute}>{muted ? 'Unmute' : 'Mute'}</button>
		</div>
	);
};

export default VideoControls;
