import React, { useState, useEffect, FC } from 'react';
import styles from './VideoPlayer.module.scss';
import { MaterialIcon } from '../icons/MaterialIcon';
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder';
import cn from 'classnames';
import { useAuth } from '@/hooks/useAuth';
import { useVideo } from './useVideo';
import QualitySelector from './QualitySelector';

interface IVideoPlayerProps {
	videoUrls: string[];
	videoSource: string;
	slug: string;
}

const VideoPlayer: FC<IVideoPlayerProps> = ({ videoUrls, videoSource, slug }) => {
	const [currentQuality, setCurrentQuality] = useState(0);
	const [videoUrl, setVideoUrl] = useState(videoUrls?.[0] || '');
	const { actions, videoRef, video } = useVideo();
	const { user } = useAuth();

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.src = videoUrl;
		}
	}, [videoUrl]);

	const handleQualityChange = (quality: number) => {
		setCurrentQuality(quality);
		setVideoUrl(videoUrls[quality]);
	};

	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=8`}
						preload="metadata"
					/>

					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={styles.progressBar}
						/>
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>

							<button
								onClick={actions.toggleVideo}
								className={styles.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.fastForward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div className={styles.rightControls}>
							<QualitySelector
								currentQuality={currentQuality}
								videoUrls={videoUrls}
								onQualityChange={handleQualityChange}
							/>

							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	);
};

export default VideoPlayer;
