import { Track } from '@shared/models';

import { secondsToMinutes } from '@shared/lib';

import styles from './styles.module.scss';

type TracklistCardProps = {
  track: Track;
};

const TracklistCard = ({ track }: TracklistCardProps) => {
  return (
    <div className={styles.card}>
      <img src={track.album.cover_medium} />
      <div className={styles.tackInfo}>
        {track.title} ({track.album.title})
        {track.explicit_lyrics && <span className={styles.explicit}>E</span>}
        <div>{secondsToMinutes(track.duration)}</div>
      </div>
    </div>
  );
};

export default TracklistCard;
