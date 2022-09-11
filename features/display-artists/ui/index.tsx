import { useStore } from 'effector-react';
import ArtistCard from '../../../entities/artist-card';
import { store } from '../../../entities/artist-card/model/artists';

const DisplayArtists = () => {
  const artists = useStore(store.artists);

  return (
    <div>
      {artists.map((artist) => {
        return <ArtistCard key={artist.id} artist={artist} />;
      })}
    </div>
  );
};

export default DisplayArtists;
