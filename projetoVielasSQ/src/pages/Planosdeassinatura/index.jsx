import React from 'react';
import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Button from '@mui/material/Button';

const PlanCard = ({ tipo, qt, valor, texto, texto1, texto2, texto3, buttonText }) => (
  <div className={styles.cardplano}>
    <div className={styles.nomeplano1}>
      <h2>{tipo}</h2>
      {qt && <p>{qt}</p>}
    </div>
    <div className={styles.detalhes1}>
      <div className={styles.valor1}>
        <h3>{valor}</h3>
      </div>
      <div className={styles.detalhes2}>
        <p>{texto}</p>
        <p>{texto1}</p>
        <p>{texto2}</p>
        <p>{texto3}</p>
      </div>
      <div className={styles.buttoncompra1}>
        <Button variant="contained" size="large">{buttonText}</Button>
      </div>
    </div>
  </div>
);

const PlanosDeAssinatura = () => {
  return (
    <>
      <Header />
      <div className={styles.containerPlanodeAssinatura}>
        <div className={styles.texto}>
          <h1>Planos de Assinatura:</h1>
        </div>
        <div className={styles.cards}>
          <PlanCard
            tipo="GRATUITO"
            qt="SUJEITO A APROVAÇÃO DE CADASTRO"
            valor="R$00,00"
            texto="Uma excelente opção para novos usuários que desejam experimentar o serviço antes de se comprometerem financeiramente."
            texto1="• O plano está sujeito a solicitação e aprovação de cadastro."
            texto2="• Limitações específicas de uso podem ser aplicadas conforme os termos e condições."
            buttonText="SOLICITAR ANÁLISE"
          />
          <PlanCard
            tipo="MENSAL"
            qt="10 FOTOS"
            valor="R$50,00"
            texto="Ideal para usuários que necessitam de um número moderado de fotos mensalmente."
            texto1="• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte."
            texto2="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada."
            buttonText="SELECIONAR"
          />
          <PlanCard
            tipo="MENSAL"
            qt="30 FOTOS"
            valor="R$99,00"
            texto="Perfeito para usuários com maior demanda de fotos mensais."
            texto1="• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte."
            texto2="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada."
            buttonText="SOLICITAR ANÁLISE"
          />
          <PlanCard
            tipo="PERSONALIZADO"
            valor="SOB CONSULTA"
            texto="Ideal para grandes empresas e profissionais que necessitam de um volume elevado de fotos."
            texto1="• Oferece downloads ilimitados de fotos."
            texto2="• Plano altamente flexível, adaptado às necessidades específicas de cada cliente."
            texto3="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada."
            buttonText="SOLICITAR ANÁLISE"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlanosDeAssinatura;
