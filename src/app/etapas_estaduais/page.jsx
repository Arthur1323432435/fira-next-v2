'use client';

import React from 'react';

// Import dos componentes globais
import Navbar from '@/components/navbar/navbar';
import FAQs from '@/components/FAQs/faqs';
import Patrocinadores from '@/components/Patrocinadores/patrocinadores';
import Footer from '@/components/footerComponent/footer';
import Carrinho from '@/components/cart/cart';

// 1. IMPORT MODULARIZADO (O segredo está aqui)
import styles from '@/css/estaduais/locais_estaduais.module.css';

const etapasData = [
  {
    id: 1,
    estado: 'RIO DE JANEIRO',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/4UoxD5jphkYtlrnPz9UQdvwNyOU.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/2lui8Q4vbQL0EXGBn8CP9rNDi8.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 2,
    estado: 'Maranhão',
    cidade: 'São Luís',
    bgImage: 'https://framerusercontent.com/images/4UoxD5jphkYtlrnPz9UQdvwNyOU.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/2lui8Q4vbQL0EXGBn8CP9rNDi8.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  // ... mantendo o restante dos seus dados
];

export default function EtapasEstaduais() {
  return (
    <main>
      <Navbar />

      {/* Usamos styles['nome-da-classe'] para aplicar a classe isolada */}
      <section className={styles['schedule-section']} id="schedule">
        <div className={styles['schedule-container']}>

          {/* Cabeçalho */}
          <header className={styles['schedule-header']}>
            <span className={`body-2-sb ${styles['label-text']}`}>ETAPAS ESTADUAIS</span>
            <h2 className={`heading-2 ${styles['text-color']}`}>ETAPAS ESTADUAIS PELO BRASIL</h2>
            <p className={`body-2-sb ${styles['label-text']}`}>
              Inscreva a sua equipe e conquiste a vitória.
            </p>
          </header>

          {/* Lista de Cards */}
          <div className={styles['schedule-list']}>
            {etapasData.map((etapa) => (
              <article key={etapa.id} className={styles['schedule-card']}>

                {/* Coluna Esquerda: Imagem e Data */}
                <div
                  className={styles['card-image-col']}
                  style={{ backgroundImage: `url('${etapa.bgImage}')` }}
                >
                  <div className={styles['image-overlay']}></div>

                  <div className="date-location">
                    <h4 className= {`heading-3 ${styles['text-transparency']}`}>{etapa.estado}</h4>
                    {/* Aplique o styles na transparência e no body */}
                    <p className={`body-2 ${styles['text-transparency']}`}>{etapa.cidade}</p>
                  </div>
                </div>

                {/* Coluna Direita: Cronograma */}
                <div className={styles['card-content-col']}>
                  <div className={styles['schedule-item']}>
                    <div className={styles['item-details']}>
                      <p className="body-1-sb text-transparency">Organizador</p>
                    </div>
                  </div>

                  <div className={styles['schedule-item']}>
                    <div className={styles['item-details']}>
                      <p className="body-2 text-transparency">{etapa.organizador}</p>
                      <div className={styles['bandeiras']}>
                        {etapa.professores.map((imgUrl, idx) => (
                          <img key={idx} src={imgUrl} alt="Speaker" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles['schedule-item']}>
                    <div className={styles['item-details']}>
                      <p className="body-1-sb text-transparency">Local e Data do Evento</p>
                      <p className="body-2 text-transparency">{etapa.localData}</p>

                      <div className={`${styles['bandeiras']} ${styles['button-container']}`}>
                        <button
                          type="button"
                          className="cta-btn body-2-sb"
                          id="ticketBtn"
                          onClick={() => alert('Inscrição para a etapa estadual!')}
                        >
                          Inscreva-se
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQs />
      <Patrocinadores />
      <Footer />
      <Carrinho />
    </main>
  );
}