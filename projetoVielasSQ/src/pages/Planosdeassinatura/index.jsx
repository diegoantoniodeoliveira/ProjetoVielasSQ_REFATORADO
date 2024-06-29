import React from 'react';
import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


export  const PlanosDeAssinatura = () => {
  return ( 
   <>
      <Header />
       <div className={styles.containerPlanodeAssinatura}>
            <div className={styles.texto}>
            <h1>Planos de Assinatura:</h1>
        </div>

        <div className={styles.tipoplano} >
            <div className={styles.gratuito}>
                <div className={styles.nomeplano}>
                    <h2>GRATUITO</h2>
                    <h8>SUJEITO A APROVAÇÃO DE CADASTRO</h8>
                </div>
              <a>R$00,00</a>
              <p>Uma excelente opção para novos usuários que desejam experimentar o serviço antes de se comprometerem financeiramente.</p>
              <p>O plano está sujeito a solicitação e aprovação de cadastro.</p>
              <p>Limitações  específicas de uso podem ser aplicadas conforme os termos e condições</p>
              <button>SOLICITAR ANÁLISE</button>
            </div>

            <div className={styles.mensal10}>
                <a>MENSAL</a>
                <p>10 FOTOS</p>
                <a>R$50,00</a>
                <p>Ideal para usuários que necessitam de um número moderado de fotos mensalmente. </p>
                <p>Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte.</p>
                <p>A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                <br></br>
                <button>SELECIONAR</button>
            </div>

            <div className={styles.mensal30}>
                <a>MENSAL</a>
                <p>30 FOTOS</p>
                <a>R$99,00</a>
                <p>Perfeito para usuários com maior demanda de fotos mensais. </p>
                <p>Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte.</p>
                <p>A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                <button>SELECIONAR</button>
            </div>            
            
            <div className={styles.personalizado}>
                <a>PERSONALIZADO</a>
                <a>SOB CONSULTA</a>
                <p>Ideal para grandes empresas e profissionais que necessitam de um volume eleavado de fotos. </p>
                <p>Oferece download ilimitados de fotos.</p>
                <p>Plano altamente flexível, adaptado às necessidades específicas de cada cliente.</p>
                <p>A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                <button>SOLICITAR ANÁLISE</button>
            </div>
        </div>
      </div>



    <Footer />
    </>
  );

}
  
  export default PlanosDeAssinatura;