import formatNumber from '@shared/lib/formatNumber';
import { Artist } from '@shared/models';
import Card from '@shared/ui/card';
import styles from './styles.module.scss';

type ArtistCardProps = {
  artist: Artist;
};

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const { name, picture_medium, nb_album, nb_fan } = artist;
  return (
    <Card>
      <img src={picture_medium} className={styles.cardImage} />
      <div className={styles.cardText}>
        <span className={styles.cardName}>{name}</span>
        <span>{formatNumber(nb_fan)} fans</span>
        <span>{formatNumber(nb_album)} albums</span>
      </div>
    </Card>
  );
};

export default ArtistCard;
