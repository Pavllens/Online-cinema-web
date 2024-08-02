import React, { FC } from 'react';
import { MaterialIcon } from '../icons/MaterialIcon';
import styles from './QualitySelector.module.scss';

interface IQualitySelectorProps {
	currentQuality: number;
	videoUrls: string[];
	onQualityChange: (quality: number) => void;
}

const getQualityFromUrl = (url: string) => {
	const match = url.match(/(\d+p)\.mp4$/)
	return match ? match[1] : 'Unknown'
};

const QualitySelector: FC<IQualitySelectorProps> = ({ currentQuality, videoUrls, onQualityChange }) => {
	return (
		<div className={styles.qualitySelector}>
			<button className={styles.qualityButton}>
				<MaterialIcon name="MdSettings" />
				<div className={styles.dropdown}>
					{videoUrls.map((url, index) => (
						<div
							key={index}
							className={styles.dropdownItem}
							onClick={() => onQualityChange(index)}
						>
							{getQualityFromUrl(url)}
						</div>
					))}
				</div>
			</button>
		</div>
	);
};

export default QualitySelector;
