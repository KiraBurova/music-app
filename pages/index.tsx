import DisplayArtists from '../features/display-artists/ui';
import SearchArtists from '../features/search-artists/index';

export default function SearchArtistsPage() {
  return (
    <div>
      <SearchArtists />
      <DisplayArtists />
    </div>
  );
}
