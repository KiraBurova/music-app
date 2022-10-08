import { Track } from '@shared/models';

import { secondsToMinutes } from '@shared/lib';

import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

type TracklistCardProps = {
  track: Track;
};

const TracklistCard = ({ track }: TracklistCardProps) => {
  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    audioRef.current.volume = 0.1;
  }, []);

  return (
    <div className={styles.card}>
      <img src={track.album.cover_medium} />
      <div className={styles.tackInfo}>
        {track.title} ({track.album.title})
        {track.explicit_lyrics && <span className={styles.explicit}>E</span>}
        <div>{secondsToMinutes(track.duration)}</div>
        <audio
          data-testid="audio-player"
          controls
          ref={audioRef}
          className={styles.audioPlayer}
        >
          <source src={track.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default TracklistCard;
