import React, { useEffect, useState } from 'react';

import debounce from 'lodash/debounce';

import { getArtistsByQuery } from '../../../shared/api/index';
import Search from '../../../shared/ui/input/index';

const SearchArtists = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      getArtistsByQuery(query);
    }
  }, [query]);

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
  }, 1000);

  return (
    <div>
      <Search
        large
        placeholder="Search for an artist..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchArtists;
