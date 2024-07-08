import React from 'react';
import styles from './styles.module.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


import Button from '@mui/material/Button';
import Tipoplanoassinatura from '../../components/tipoplanoassinatura';

export const PlanosDeAssinatura = () => {
    return (
        <>
            <Header />
            <div className={styles.containerPlanodeAssinatura}>
                <div className={styles.texto}>
                    <h1>Planos de Assinatura:</h1>
                </div>

                 <div className={styles.cards}>
                    <div className={styles.cardplano}>
                      <div className={styles.nomeplano1}>       
                        <Tipoplanoassinatura
                        tipo='GRATUITO'
                        qt='SUJEITO A APROVAÇÃO DE CADASTRO' />
                        </div>

                        <div className={styles.detalhes1}>
                        <div className={styles.valor1}>  
                        <Tipoplanoassinatura
                        valor="R$00,00"  />
                        </div>
                        
                        <div className={styles.detalhes2}>  
                        <Tipoplanoassinatura
                        texto="Uma excelente opção para novos usuários que desejam experimentar o serviço antes de se comprometerem financeiramente."
                        texto1="• O plano está sujeito a solicitação e aprovação de cadastro."
                        texto2="• Limitações específicas de uso podem ser aplicadas conforme os termos e condições."
                        texto3=""  />
                        </div>

                        <div className={styles.buttoncompra1}>
                        <Button variant="contained" size="large"> SOLICITAR ANÁLISE </Button>
                        </div>

                      </div>
                    
                    </div>

                    <div className={styles.cardplano}>
                      <div className={styles.nomeplano1}>       
                        <Tipoplanoassinatura
                        tipo='MENSAL'
                        qt='10 FOTOS' />
                        </div>

                        <div className={styles.detalhes1}>
                        <div className={styles.valor1}>  
                        <Tipoplanoassinatura
                        valor="R$50,00"  />
                        </div>
                        
                        <div className={styles.detalhes2}>  
                        <Tipoplanoassinatura
                        texto="Ideal para usuários que necessitam de um número moderado de fotos mensalmente."
                        texto1="• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte."
                        texto2="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada.."
                        texto3=""  />
                        </div>

                        <div className={styles.buttoncompra1}>
                        <Button variant="contained" size="large"> SELECIONAR </Button>
                        </div>

                      </div>
                    
                    </div>

                    <div className={styles.cardplano}>
                      <div className={styles.nomeplano1}>       
                        <Tipoplanoassinatura
                        tipo='MENSAL'
                        qt='30 FOTOS' />
                        </div>

                        <div className={styles.detalhes1}>
                        <div className={styles.valor1}>  
                        <Tipoplanoassinatura
                        valor="R$99,00"  />
                        </div>
                        
                        <div className={styles.detalhes2}>  
                        <Tipoplanoassinatura
                        texto="Perfeito para usuários com maior demanda de fotos mensais."
                        texto1="• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte."
                        texto2="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada.."
                        texto3=""  />
                        </div>

                        <div className={styles.buttoncompra1}>
                        <Button variant="contained" size="large"> SOLICITAR ANÁLISE </Button>
                        </div>

                      </div>
                    
                    </div>

                    <div className={styles.cardplano}>
                      <div className={styles.nomeplano1}>       
                        
                          <Tipoplanoassinatura
                          tipo='PERSONALIZADO'
                                               
                          />
                        
                        </div>

                        <div className={styles.detalhes1}>
                        <div className={styles.valor1}>  
                        <Tipoplanoassinatura
                        valor="SOB CONSULTA"  />
                        </div>
                        
                        <div className={styles.detalhes2}>  
                        <Tipoplanoassinatura
                        texto="Ideal para grandes empresas e profissionais que necessitam de um volume elevado de fotos."
                        texto1="• Oferece downloads ilimitados de fotos."
                        texto2="• Plano altamente flexível, adaptado às necessidades específicas de cada cliente"
                        texto3="• A assinatura é renovada automaticamente a cada mês, a menos que cancelada."  />
                        </div>

                        <div className={styles.buttoncompra1}>
                        <Button variant="contained" size="large"> SOLICITAR ANÁLISE </Button>
                        </div>

                      </div>
                     </div>                    
                    </div>
















                <div>
             


                </div>

                <div className={styles.tipoplano}>
                    <div className={styles.gratuito}>
                        <div className={styles.nomeplano}>
                            <h2>GRATUITO</h2>
                            <p>SUJEITO A APROVAÇÃO DE CADASTRO</p>
                        </div>
                            <div className={styles.detalhesplano}>
                               <div className={styles.valorplano}>
                                    <h2>R$00,00</h2>
                                </div>
                             <p>Uma excelente opção para novos usuários que desejam experimentar o serviço antes de se comprometerem financeiramente.</p>
                             <p>• O plano está sujeito a solicitação e aprovação de cadastro.</p>
                             <p>• Limitações específicas de uso podem ser aplicadas conforme os termos e condições.</p>
                                <div className={styles.buttoncompra}>
                                    <Button variant="contained" size="large"> SOLICITAR ANÁLISE </Button>
                                </div>
                            </div>
                        
                    </div>

                    <div className={styles.mensal10}>
                        <div className={styles.nomeplano}>
                            <h2>MENSAL</h2>
                            <p>10 FOTOS</p>
                        </div>
                            <div className={styles.valorplano}>
                               <h2>R$50,00</h2>
                            </div>
                               <div className={styles.detalhesplano}>
                                <p>Ideal para usuários que necessitam de um número moderado de fotos mensalmente.</p>
                                <p>• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte.</p>
                                <p>• A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                            <Button variant="contained" size="large"> SELECIONAR </Button>
                            </div>
                    </div>

                    <div className={styles.mensal30}>
                        <div className={styles.nomeplano}>
                            <h2>MENSAL</h2>
                            <p>30 FOTOS</p>
                        </div>
                        <h4>R$99,00</h4>
                        <p>Perfeito para usuários com maior demanda de fotos mensais.</p>
                        <p>• Fotos não utilizadas dentro do mês não são acumuláveis para o mês seguinte.</p>
                        <p>• A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                        <Button variant="contained" size="large"> SELECIONAR </Button>
                    </div>

                    <div className={styles.personalizado}>
                        <div className={styles.nomeplano}>
                            <h2>PERSONALIZADO</h2>
                        </div>

                        <h2>SOB CONSULTA</h2>
                        <p>Ideal para grandes empresas e profissionais que necessitam de um volume elevado de fotos.</p>
                        <p>• Oferece downloads ilimitados de fotos.</p>
                        <p>• Plano altamente flexível, adaptado às necessidades específicas de cada cliente.</p>
                        <p>• A assinatura é renovada automaticamente a cada mês, a menos que cancelada.</p>
                        <Button variant="contained" size="large"> SOLICITAR ANÁLISE </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PlanosDeAssinatura;