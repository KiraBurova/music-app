import React from 'react';
import { render } from '@testing-library/react';

import DisplayArtists from '@features/display-artists';

import { effects, store } from '@entities/artist-card/model/artists';
import { createEvent } from 'effector';

describe('<DisplayArtists/>', () => {
  const artists = [
    {
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
    },
    {
      id: 2,
      name: 'The Onions',
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
    },
  ];
  let currentHandler;

  const resetResults = createEvent();

  beforeAll(() => {
    store.artists.reset(resetResults);
  });

  afterAll(() => {
    store.artists.off(resetResults);
  });

  beforeEach(() => {
    currentHandler = effects.getArtistsListFx.use.getCurrent();
  });

  afterEach(() => {
    effects.getArtistsListFx.use(currentHandler);
  });

  it('Call api endpoint for artists', async () => {
    resetResults();
    effects.getArtistsListFx.use(() => artists);
    await effects.getArtistsListFx('the');
    expect(store.artists.getState()).toEqual(artists);
  });
  it('Render artists', async () => {
    resetResults();
    effects.getArtistsListFx.use(() => artists);
    await effects.getArtistsListFx('the');
    expect(store.artists.getState()).toEqual(artists);

    const { getByText } = render(<DisplayArtists />);
    expect(getByText('The Who')).toBeTruthy();
  });
  it('Render loader', async () => {
    resetResults();
    effects.getArtistsListFx('the');

    const { queryByTestId } = render(<DisplayArtists />);
    expect(queryByTestId('loader')).toBeTruthy();
  });
});
