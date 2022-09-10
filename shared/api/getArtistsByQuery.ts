import axios from 'axios';
import { BASE_URI } from './index';

export const getArtistsByQuery = (query: string) => {
  return axios.get(`${BASE_URI}/search/artist?q=${query}`);
};
