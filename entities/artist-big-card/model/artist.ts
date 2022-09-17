import { AxiosResponse } from 'axios';
import { createEffect, createStore } from 'effector-next';
import { artists } from '../../../shared/api';
import { Artist } from '../../../shared/models';

const getArtistFx = createEffect(async (id: number) => {
  const response: AxiosResponse<{ data: Artist[] }> = await artists.getArtist(
    id
  );
  return response.data.data;
});

const $artists = createStore<Artist[]>([]).on(
  getArtistFx.doneData,
  (_state, payload) => payload
);

export const effects = {
  getArtistFx,
};

export const store = {
  artists: $artists,
};
