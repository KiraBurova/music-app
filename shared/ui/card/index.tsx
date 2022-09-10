import { Artist } from '../../api/models/index';
import formatNumber from '../../lib/formatNumber';

import styles from './styles.module.scss';

type CardProps = {
  artist: Artist;
};

const Card = ({ artist }: CardProps) => {
  const { name, picture_medium, nb_album, nb_fan } = artist;
  // const { name, picture_medium, nb_album, nb_fan } = {
  //   id: '13',
  //   name: 'Eminem',
  //   link: 'https://www.deezer.com/artist/13',
  //   picture: 'https://api.deezer.com/artist/13/image',
  //   picture_small:
  //     'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
  //   picture_medium:
  //     'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
  //   picture_big:
  //     'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
  //   picture_xl:
  //     'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
  //   nb_album: 59,
  //   nb_fan: 15677230,
  //   radio: true,
  //   tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
  //   type: 'artist',
  // } as Artist;
  return (
    <div className={styles.card}>
      <img src={picture_medium} className={styles.cardImage} />
      <div className={styles.cardText}>
        <span className={styles.cardName}>{name}</span>
        <span>{formatNumber(nb_fan)} </span>
        <span>{formatNumber(nb_album)} albums</span>
      </div>
    </div>
  );
};

export default Card;
