import React from 'react';
import { render } from '@testing-library/react';

import ArtistCard from '@entities/artist-card';

describe('<ArtistCard/>', () => {
  it('Render card', () => {
    const artist = {
      id: 1,
      name: 'The Who',
      link: '',
      picture: '',
      picture_small: '',
      picture_medium: '',
      picture_big: '',
      picture_xl: '',
      nb_album: 123,
      nb_fan: 100000,
      radio: false,
      tracklist: '',
      type: 'artist',
    };
    const { getByText } = render(<ArtistCard artist={artist} />);

    expect(getByText('The Who')).toBeTruthy();
  });
});
