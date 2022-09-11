import { combine, createEffect, createStore } from 'effector-next';
import { artists } from '../../../shared/api';
import { Artist } from '../../../shared/models';

const getArtistsListFx = createEffect((params: string) => {
  return artists.getArtistsByQuery(params).then((response) => response.data);
});

const $artists = createStore<Artist[]>([]).on(
  getArtistsListFx.doneData,
  (_state, payload) => payload
);

export const effects = {
  getArtistsListFx,
};

export const store = {
  artists: $artists,
};
