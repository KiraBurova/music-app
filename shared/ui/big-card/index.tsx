import styles from './styles.module.scss';

type BigCardProps = {
  children: React.ReactNode;
};

const BigCard = ({ children }: BigCardProps) => {
  return <div className={styles.bigCard}>{children}</div>;
};

export default BigCard;
