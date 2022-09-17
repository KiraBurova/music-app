import formatNumber from '../../../shared/lib/formatNumber';
import { Artist } from '../../../shared/models';
import BigCard from '../../../shared/ui/big-card';
import styles from './styles.module.scss';

type ArtistBigCardProps = {
  artist: Artist;
};

const ArtistBigCard = ({ artist }: ArtistBigCardProps) => {
  const { name, picture_big, nb_album, nb_fan } = artist;
  return (
    <BigCard>
      <img src={picture_big} className={styles.cardImage} />
      <div className={styles.cardText}>
        <span className={styles.cardName}>{name}</span>
        <span>{formatNumber(nb_fan)} fans</span>
        <span>{formatNumber(nb_album)} albums</span>
      </div>
    </BigCard>
  );
};

export default ArtistBigCard;
