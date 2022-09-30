import fetchJsonp from 'fetch-jsonp';
import { BASE_URI } from './index';

export const getArtistsByQuery = async (query: string) => {
  const response = await fetchJsonp(
    `${BASE_URI}/search/artist?q=${query}&output=jsonp`
  );
  return await response.json();
};

export const getArtist = async (id: string) => {
  const response = await fetchJsonp(`${BASE_URI}/artist/${id}&output=jsonp`);
  return await response.json();
};
