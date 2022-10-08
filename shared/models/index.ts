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

export type Track = {
  album: {
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
    id: string;
    md5_image: string;
    title: string;
    tracklist: string;
    type: string;
  };
  artist: {
    id: string;
    name: string;
    tracklist: string;
    type: string;
  };
  contributors: {
    id: number;
    name: string;
    link: string;
    share: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
  }[];
  duration: string;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: string;
  link: string;
  md5_image: string;
  preview: string;
  rank: string;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
};
