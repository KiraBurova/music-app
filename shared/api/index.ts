import axios from 'axios';

const BASE_URI = 'https://api.deezer.com';

export const getArtistsByQuery = (query: string) => {
  return axios.get(`${BASE_URI}/search/artist?q=${query}`);
};
