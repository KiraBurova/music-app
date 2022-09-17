import { useStore } from 'effector-react';
import Link from 'next/link';
import ArtistCard from '@entities/artist-card';
import { effects, store } from '@entities/artist-card/model/artists';
import Loader from '@shared/ui/loader';

import styles from './styles.module.scss';

const DisplayArtists = () => {
  const artists = useStore(store.artists);
  const loading = useStore(effects.getArtistsListFx.pending);

  return (
    <div className={styles.artists}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {artists.map((artist) => {
            return (
              <Link href={`artists/${artist.id}`}>
                <a>
                  <ArtistCard key={artist.id} artist={artist} />
                </a>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayArtists;
