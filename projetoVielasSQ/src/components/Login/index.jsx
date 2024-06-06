import React from 'react';
import styles from './styles.module.css';

export const Login = () => {
  return (
    <div className={styles.tela_login}>
      <div className={styles.container}>
        <h1>Bem Vindo!</h1>
        <input type="text" placeholder="Email" aria-label="Email" />
        <input type="password" placeholder="Senha" aria-label="Senha" />
        <label>
          <input type="checkbox" name="informe" value="me" />
          me mantenha informado
        </label>
        <div className={styles.button}>
          <button>ENTRAR</button>
        </div>
        <div className={styles.esqueceu_senha}>
          <a href="#Esqe" id="forgot-pass">Clique aqui</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
