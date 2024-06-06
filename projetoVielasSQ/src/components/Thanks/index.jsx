import React from 'react';
import styles from './styles.module.css';

const Thanks = () => {
  return (
    <div className={styles.container_laranja}>
      <div className={styles.fundoAzul}>
        {/* <div className={styles.icone}> */}
        <img src="iconeThanks.png" alt="iconeThanks" />
      </div>
      <div className={styles.valeu}>
        <h1>VALEU;)</h1>
      </div>
      <div className={styles.mural}>
        <h1>MURAL</h1>
        <div className={styles.vielas}>
          <p>Vielas</p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
