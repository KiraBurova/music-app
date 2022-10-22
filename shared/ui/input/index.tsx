import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.scss';

type SearchProps = {
  placeholder?: string;
  large?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  dataTestId?: string;
};

const Search = ({ large, placeholder, onChange, dataTestId }: SearchProps) => {
  return (
    <input
      placeholder={placeholder}
      className={classNames(styles.searchInput, { [styles.large]: large })}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
};

export default Search;
