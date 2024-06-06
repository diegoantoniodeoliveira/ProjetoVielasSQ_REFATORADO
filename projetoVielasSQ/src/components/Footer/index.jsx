import React from 'react';
import styles from './styles.module.css';
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.containerFooter}>
        <div className={styles.containerItens}>
          <h3>VIELAS</h3>
          <div className={styles.icon}>
            <TiSocialFacebookCircular className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaWhatsapp className={styles.icon} />
            <FaLinkedinIn className={styles.icon} />
          </div>
        </div>
        <div className={styles.finalText}>
          <p>Quem Somos</p>
          <p>Equipe</p>
          <p>Apoie</p>
          <p>Fale Conosco</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
