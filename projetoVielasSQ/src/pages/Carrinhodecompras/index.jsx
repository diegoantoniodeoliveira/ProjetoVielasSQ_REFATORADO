import React from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

const CarrinhoDeCompras = () => {
  return (
    <>
      <Header />
      <div className={styles.containerCarCompras}>
        <div className={styles.titulo}>
          <h1>Carrinho de compras</h1>
          <p>Itens selecionados para compra: 1</p>
        </div>
        <div className={styles.carCompras}>
          <div className={styles.carImagem}>
            <img src="casaraocambuci.png" alt="casaraocambuci" />
          </div>
          <div className={styles.textoMeio}>
            <p>Tipo de mídia:</p>
            <p>Resolução:</p>
            <br />
            <p>Tipo de licença:</p>
            <br />
            <p>Como posso Utilizar:</p>
          </div>
          <div className={styles.textoDireita}>
            <p>Imagem do Creative</p>
            <p>Resolução 4000x6000 - 300 dpi - RGB</p>
            <br />
            <p>Royalty-free | Ver resumo das licenças</p>
            <br />
            <p>
              Disponível para todas as utilizações permitidas ao abrigo dos
              nossos <span>Termos de licença</span>
            </p>
            <div className={styles.textoDireitaInf}>
              <input type="checkbox" />
              <a>Selecionar para compra</a>
            </div>
          </div>
        </div>
        <div className={styles.textoInf}>
          <p>Subtotal: Rs xx.xx</p>
          <div className={styles.botaoProsseguir}>
            <button>
              <h3>PROSSEGUIR COM A COMPRA</h3>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CarrinhoDeCompras;
