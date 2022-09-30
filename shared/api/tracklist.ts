import fetchJsonp from 'fetch-jsonp';

export const getTracklist = async (url: string) => {
  // https://api.deezer.com/artist/14181947/top?limit=50
  const response = await fetchJsonp(`${url}&output=jsonp`);
  return await response.json();
};
