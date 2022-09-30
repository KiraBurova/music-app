export type Artist = {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
};

export type Tracklist = {
  album: {
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
    id: number;
    md5_image: string;
    title: string;
    tracklist: string;
    type: string;
  };
  artist: {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  };
  contributors: Artist[];
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: '';
  type: string;
};
