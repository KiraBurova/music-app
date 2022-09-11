import { AxiosResponse } from 'axios';
import { createEffect, createStore } from 'effector-next';
import { artists } from '../../../shared/api';
import { Artist } from '../../../shared/models';

const getArtistsListFx = createEffect(async (params: string) => {
  const response: AxiosResponse<{ data: Artist[] }> =
    await artists.getArtistsByQuery(params);
  return response.data.data;
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
