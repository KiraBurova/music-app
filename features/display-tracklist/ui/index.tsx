import { useStore } from 'effector-react';
import Link from 'next/link';
import ArtistCard from '@entities/artist-card';
import { effects, store } from '@entities/artist-card/model/artists';
import Loader from '@shared/ui/loader';

import styles from './styles.module.scss';

const DisplayTracklist = () => {
  return <div className={styles.artists}>123</div>;
};

export default DisplayTracklist;
