import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type SearchProps = {
  placeholder?: string;
  large?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
};

const Search = ({ large, placeholder, onChange }: SearchProps) => {
  return (
    <input
      placeholder={placeholder}
      className={classNames(styles.searchInput, { [styles.large]: large })}
      onChange={onChange}
    />
  );
};

export default Search;
