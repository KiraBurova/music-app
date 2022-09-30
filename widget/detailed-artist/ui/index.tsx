import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from 'effector-react';

import ArtistBigCard from '@entities/artist-big-card';
import { effects, store } from '@entities/artist-card/model/artists';
import Loader from '@shared/ui/loader';
import DisplayTracklist from '@features/display-tracklist';

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
  const loading = useStore(effects.getArtistFx.pending);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {artist && (
            <>
              <ArtistBigCard artist={artist} />
              <DisplayTracklist />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailedArtist;
