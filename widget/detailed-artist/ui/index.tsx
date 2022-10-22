import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'effector-react';

import ArtistBigCard from '@entities/artist-big-card';
import { effects, store } from '@entities/artist-card/model/artists';
import Loader from '@shared/ui/loader';
import DisplayTracklist from '@features/display-tracklist';

import styles from './styles.module.scss';

const DetailedArtist = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      effects.getArtistFx(id as string).then((atrist) => {
        effects.getTracklistFx(atrist.tracklist);
      });
    }
  }, [id]);

  const artist = useStore(store.artist);
  const tracklist = useStore(store.tracklist);
  const loadingArtist = useStore(effects.getArtistFx.pending);
  const loadingTracklist = useStore(effects.getTracklistFx.pending);

  return (
    <div className={styles.detailedArtist} data-testid="detailed-artist">
      {loadingArtist ? (
        <Loader className={styles.loader} />
      ) : (
        <>
          {artist && (
            <>
              <ArtistBigCard artist={artist} />
              <DisplayTracklist
                tracklist={tracklist}
                loadingTracklist={loadingTracklist}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailedArtist;
