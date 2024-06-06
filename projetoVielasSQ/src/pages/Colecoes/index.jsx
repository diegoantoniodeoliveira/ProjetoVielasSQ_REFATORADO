import React from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Search1 } from '../../components/Search1';

const Colecoes = () => {
  const results = [
    { id: 1, src: "semelhantes1.png", alt: "semelhantes1" },
    { id: 2, src: "semelhantes2.png", alt: "semelhantes2" },
    { id: 3, src: "semelhantes3.png", alt: "semelhantes3" },
    { id: 4, src: "semelhantes4.png", alt: "semelhantes4" },
    { id: 5, src: "semelhantes5.png", alt: "semelhantes5" },
    { id: 6, src: "semelhantes6.png", alt: "semelhantes6" },
    { id: 7, src: "semelhantes7.png", alt: "semelhantes7" },
    { id: 8, src: "semelhantes8.png", alt: "semelhantes8" },
    { id: 9, src: "semelhantes9.png", alt: "semelhantes9" }
  ];

  return (
    <>
      <Header />
      <Search1 />

      <div className={styles.containerResults}>
        <h1>Resultado em Coleções</h1>
        <div className={styles.result}>
          <img src="casaraocambuci.png" alt="casaraocambuci" />
          <div className={styles.texto2}>
            <h2>Crise Financeira</h2>
            <p>Como a alta dos preços impacta as famílias das periferias</p>
          </div>
        </div>

        <div className={styles.outros}>
          <div className={styles.title}>
            <h1>Outros Resultados</h1>
          </div>
          <div className={styles.containerFotosSemelhantes}>
            {results.map((result) => (
              <div key={result.id} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img src={result.src} alt={result.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Colecoes;
