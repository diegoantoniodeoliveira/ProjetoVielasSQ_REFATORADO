import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Search1 } from '../../components/Search1';
import styles from './styles.module.css';

const Menu = () => (
  <div className={styles.containerMenu}>
    <ul className={styles.barraMenu}>
      <li><a href="#">#Paraisopolis</a></li>
      <li><a href="#">#Saúde</a></li>
      <li><a href="#">#Hospitais</a></li>
      <li><a href="#">#Coperifa</a></li>
      <li><a href="#">#CasaDeCultura</a></li>
      <li><a href="#">#Hospitais</a></li>
      <li><a href="#">#Eleições2022</a></li>
      <li><a href="#">#Urnas</a></li>
    </ul>
  </div>
);

const Content = () => (
  <div className={styles.container}>
    <div className={styles.contentWrapper}>
      <div className={styles.textos}>
        <h3>VIELAS</h3>
        <p>Um banco de imagens pensado para mostrar a diversidade das periferias de São Paulo.
        Nascido nas quebradas e fomentado por quem vive e pensa nelas.</p> 
      </div> 
      <div className={styles.foto1}>
        <img src="foto1.jpeg" alt="Foto1"/>
      </div>
    </div>
  </div>
);

const Colecoes = () => (
  <div className={styles.container_colecoes}>
    <h3>COLEÇÕES</h3>
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src="foto4.png" alt="foto4"/>
        <div className={styles.subtextos}>
          <h4>Eleições 2022</h4>
          <p>Como estão as eleições nas periferias e Grande São Paulo</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src="foto5.png" alt="foto5"/>
        <div className={styles.subtextos}>
          <h4>Arte de Rua</h4>
          <p>Grafites que enfeitam as ruas das quebradas</p>
        </div>
      </div>
      <div className={styles.card}>
        <img src="foto6.png" alt="foto6"/>
        <div className={styles.subtextos}>
          <h4>Crise Financeira</h4>
          <p>Como a alta dos preços impacta as famílias das periferias</p>
        </div>
      </div>
    </div>
  </div>
);

const MaisFotos = () => (
  <div className={styles.container_maisfotos}>
    <h3>Mais Fotos</h3>
    <div className={styles.card1Wrapper}>
      <div className={styles.card1}>
        <img src="foto7.png" alt="foto7"/>
      </div>
      <div className={styles.card1}>
        <img src="foto8.png" alt="foto8"/>
      </div>
      <div className={styles.card1}>
        <img src="foto9.png" alt="foto9"/>
      </div>
    </div>
    <div className={styles.card1Wrapper}>
      <div className={styles.card1}>
        <img src="foto10.png" alt="foto10"/>
      </div>
      <div className={styles.card1}>
        <img src="foto11.png" alt="foto11"/>
      </div>
      <div className={styles.card1}>
        <img src="foto12.png" alt="foto12"/>
      </div>
    </div>
  </div>
);

export const Home = () => (
  <>
    <Header />
    <Search1 />
    <Menu />
    <Content />
    <Colecoes />
    <hr />
    <MaisFotos />
    <Footer />
  </>
);

export default Home;
