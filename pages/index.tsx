import DisplayArtists from '../features/display-artists/index';
import SearchArtists from '../features/search-artists/index';

import styles from './styles.module.scss';

export default function SearchArtistsPage() {
  return (
    <div className={styles.root}>
      <SearchArtists />
      <DisplayArtists />
    </div>
  );
}
