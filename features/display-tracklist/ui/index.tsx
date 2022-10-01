import { useStore } from 'effector-react';
import Link from 'next/link';
import ArtistCard from '@entities/artist-card';
import { effects, store } from '@entities/artist-card/model/artists';
import Loader from '@shared/ui/loader';

import styles from './styles.module.scss';
import { Track } from '@shared/models';
import TrackCard from '@entities/track-card';

type DisplayTracklistProps = {
  tracklist: Track[];
  loadingTracklist: boolean;
};

const DisplayTracklist = ({
  tracklist,
  loadingTracklist,
}: DisplayTracklistProps) => {
  return (
    <>
      {loadingTracklist ? (
        <Loader />
      ) : (
        <div className={styles.artists}>
          {tracklist &&
            tracklist.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
        </div>
      )}
    </>
  );
};

export default DisplayTracklist;
