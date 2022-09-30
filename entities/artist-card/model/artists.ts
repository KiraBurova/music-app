import { createEffect, createStore } from 'effector-next';
import { artists, tracklist } from '@shared/api';
import { Artist, Tracklist } from '@shared/models';

const getArtistsListFx = createEffect(async (params: string) => {
  const response: { data: Artist[] } = await artists.getArtistsByQuery(params);
  return response.data;
});

const getArtistFx = createEffect(async (id: string) => {
  const response: Artist = await artists.getArtist(id);
  return response;
});

const getTracklistFx = createEffect(async (url: string) => {
  const response: Tracklist = await tracklist.getTracklist(url);
  return response;
});

const $artists = createStore<Artist[]>([]).on(
  getArtistsListFx.doneData,
  (_state, payload) => payload
);

const $artist = createStore<Artist>(null).on(
  getArtistFx.doneData,
  (_state, payload) => payload
);

const $tracklist = createStore<Tracklist>(null).on(
  getTracklistFx.doneData,
  (_state, payload) => payload
);

export const effects = {
  getArtistsListFx,
  getArtistFx,
  getTracklistFx,
};

export const store = {
  artists: $artists,
  artist: $artist,
  tracklist: $tracklist,
};
