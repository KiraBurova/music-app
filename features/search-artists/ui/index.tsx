import React, { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

import Search from '../../../shared/ui/input/index';
import { artistsModel } from '../../../entities/artist-card/model';

import styles from './styles.module.scss';

const SearchArtists = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      artistsModel.effects.getArtistsListFx(query);
    }
  }, [query]);

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
  }, 500);

  return (
    <div className={styles.searchInputHolder}>
      <Search
        large
        placeholder="Search for an artist..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchArtists;
