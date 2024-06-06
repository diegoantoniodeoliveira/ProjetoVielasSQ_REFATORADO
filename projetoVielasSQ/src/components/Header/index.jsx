import React from 'react';
import styles from './styles.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <nav>
          <div className={styles.menuicon}>
            <GiHamburgerMenu className={styles.menu} />
            <h3>VIELAS</h3>
          </div>
        </nav>
        <div className={styles.textocontainer}>
          <h2 className={styles.login}>login</h2>
          <FaCircle />
        </div>
      </div>
    </header>
  );
}

export default Header;
