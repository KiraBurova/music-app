import React from 'react';
import { render } from '@testing-library/react';

import TrackCard from '@entities/track-card';

describe('<TrackCard/>', () => {
  it('Render card', () => {
    const track = {
      id: '3135556',
      readable: true,
      title: 'Harder, Better, Faster, Stronger',
      title_short: 'Harder, Better, Faster, Stronger',
      title_version: '',
      isrc: 'GBDUW0000059',
      link: 'https://www.deezer.com/track/3135556',
      share:
        'https://www.deezer.com/track/3135556?utm_source=deezer&utm_content=track-3135556&utm_term=0_1665234265&utm_medium=web',
      duration: '224',
      track_position: 4,
      disk_number: 1,
      rank: '770049',
      release_date: '2005-01-24',
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3',
      bpm: 123.4,
      gain: -12.4,
      available_countries: ['AE', 'AF'],
      contributors: [
        {
          id: 27,
          name: 'Daft Punk',
          link: 'https://www.deezer.com/artist/27',
          share:
            'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1665234265&utm_medium=web',
          picture: 'https://api.deezer.com/artist/27/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: '2e018122cb56986277102d2041a592c8',
      artist: {
        id: '27',
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1665234265&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
      },
      album: {
        id: '302127',
        title: 'Discovery',
        link: 'https://www.deezer.com/album/302127',
        cover: 'https://api.deezer.com/album/302127/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
        md5_image: '2e018122cb56986277102d2041a592c8',
        release_date: '2001-03-07',
        tracklist: 'https://api.deezer.com/album/302127/tracks',
        type: 'album',
      },
      type: 'track',
    };
    const { getByText, getByTestId } = render(<TrackCard track={track} />);

    expect(getByTestId('audio-player')).toBeTruthy();
    expect(
      getByText('Harder, Better, Faster, Stronger (Discovery)')
    ).toBeTruthy();
  });
  it('Render card with explicit text', () => {
    const track = {
      id: '3135556',
      readable: true,
      title: 'Harder, Better, Faster, Stronger',
      title_short: 'Harder, Better, Faster, Stronger',
      title_version: '',
      isrc: 'GBDUW0000059',
      link: 'https://www.deezer.com/track/3135556',
      share:
        'https://www.deezer.com/track/3135556?utm_source=deezer&utm_content=track-3135556&utm_term=0_1665234265&utm_medium=web',
      duration: '224',
      track_position: 4,
      disk_number: 1,
      rank: '770049',
      release_date: '2005-01-24',
      explicit_lyrics: true,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        'https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3',
      bpm: 123.4,
      gain: -12.4,
      available_countries: ['AE', 'AF'],
      contributors: [
        {
          id: 27,
          name: 'Daft Punk',
          link: 'https://www.deezer.com/artist/27',
          share:
            'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1665234265&utm_medium=web',
          picture: 'https://api.deezer.com/artist/27/image',
          picture_small:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
          picture_medium:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
          picture_big:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
          picture_xl:
            'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
          radio: true,
          tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
          type: 'artist',
          role: 'Main',
        },
      ],
      md5_image: '2e018122cb56986277102d2041a592c8',
      artist: {
        id: '27',
        name: 'Daft Punk',
        link: 'https://www.deezer.com/artist/27',
        share:
          'https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1665234265&utm_medium=web',
        picture: 'https://api.deezer.com/artist/27/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/27/top?limit=50',
        type: 'artist',
      },
      album: {
        id: '302127',
        title: 'Discovery',
        link: 'https://www.deezer.com/album/302127',
        cover: 'https://api.deezer.com/album/302127/image',
        cover_small:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg',
        cover_medium:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg',
        cover_big:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg',
        cover_xl:
          'https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg',
        md5_image: '2e018122cb56986277102d2041a592c8',
        release_date: '2001-03-07',
        tracklist: 'https://api.deezer.com/album/302127/tracks',
        type: 'album',
      },
      type: 'track',
    };
    const { getByText } = render(<TrackCard track={track} />);

    expect(getByText('E')).toBeTruthy();
  });
});
