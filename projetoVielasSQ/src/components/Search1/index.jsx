import React from 'react';
import styles from './styles.module.css';

export const Search1 = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.pesquisa}>
        <input
          type='text'
          placeholder="BUSCA"
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default Search1;
