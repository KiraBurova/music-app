import styles from './styles.module.scss';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
