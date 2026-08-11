'use client'; 

import React from 'react';

// Import dos componentes globais
import Navbar from '@/components/navbar';
import FAQs from '@/components/FAQs/faqs';
import Patrocinadores from '@/components/Patrocinadores/patrocinadores';
import Footer from '@/components/footerComponent/footer';
import Carrinho from '@/components/carrinho/carrinho';

import '@/css/estaduais/locais_estaduais.css';

// Array com os dados das Etapas
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
    estado: 'PARAÍBA',
    cidade: 'João Pessoa',
    bgImage: 'https://framerusercontent.com/images/YwiMVkUJf66XfR6sIz20SRlvNrI.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/65yEPnG6oocqmkcRD8EixPphdk.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 3,
    estado: 'PARAÍBA',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/VP7IE6vUdYuvQMJQHdOl5kXjc.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/34TIDN8YfUWzOxhNrXlrKJiKhXs.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 4,
    estado: 'Goiás',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/BPoJCUEHi2MZ7zW6hFDCZ2A0ATE.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/50lnWM8bBXyV8084ORyZazhTRbU.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 5,
    estado: 'Ceará',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/5r0cjBADwZafkEnKWMDVoCfHrM.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: [
      'https://framerusercontent.com/images/qCIlWfkKWLiC3Lk0LCug26jfe18.png',
      'https://framerusercontent.com/images/PtywK5NTvlL7e1zFIkdhVfYro.png',
      'https://framerusercontent.com/images/NqhSebu43b5UNXhAW39ejVEpg.png',
    ],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 6,
    estado: 'Etapa Sul',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/f9OGrvJ6CovHKmjhqdZhI6Y6p0I.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/PfOIZVhhrvekxQbpSJJ3zUBGI.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 7,
    estado: 'Amapá',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/j3UhBjACDNSikKCJe5UcDyIaAo.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/11TJJPD3Xw5ra2HWdvkWfNUglU.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 8,
    estado: 'Minas Gerais',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/YDccYGI1zMHVLPtf9LqpB4WiCPk.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/HCAliAfsokpUC7yzXmwjqQY42Q.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 9,
    estado: 'São Paulo',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/nmDTI9cBu3qeiaOsAEjpqd6qTLQ.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/MY37K3JiLNSIWHSxurfYiYDoY.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
  {
    id: 10,
    estado: 'Maranhão',
    cidade: 'Maracanã',
    bgImage: 'https://framerusercontent.com/images/1zZylHVRqZtXxy9NFXmQKa1vw.jpg',
    organizador: 'Profesor: Alexandre Amancio',
    professores: ['https://framerusercontent.com/images/bDhbj4TCpbAkwKGs2HwpPIjVSw.png'],
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08',
  },
];

export default function EtapasEstaduais() {
  return (
    <main>
      <Navbar />

      <section className="schedule-section" id="schedule">
        <div className="schedule-container">
          {/* Cabeçalho */}
          <header className="schedule-header">
            <span className="label-text">ETAPAS ESTADUAIS</span>
            <h2 className="heading-2 text-color">ETAPAS ESTADUAIS PELO BRASIL</h2>
            <p className="body-1 text-transparency">
              Inscreva a sua equipe e conquiste a vitória.
            </p>
          </header>

          {/* Lista de Cards */}
          <div className="schedule-list">
            {etapasData.map((etapa) => (
              <article key={etapa.id} className="schedule-card">
                
                {/* Coluna Esquerda: Imagem e Data */}
                <div
                  className="card-image-col"
                  style={{ backgroundImage: `url('${etapa.bgImage}')` }}
                >
                  <div className="image-overlay"></div>
                  
                  {/* Título do Estado de volta à div date-location (idêntico ao HTML original) */}
                  <div className="date-location">
                    <h4 className="heading-3">{etapa.estado}</h4>
                    <p className="body-2 text-transparency">{etapa.cidade}</p>
                  </div>
                </div>

                {/* Coluna Direita: Cronograma */}
                <div className="card-content-col">
                  <div className="schedule-item">
                    <div className="item-details">
                      <p className="body-1-sb text-transparency">Organizador</p>
                    </div>
                  </div>

                  <div className="schedule-item">
                    <div className="item-details">
                      <p className="body-2 text-transparency">{etapa.organizador}</p>
                      <div className="bandeiras">
                        {etapa.professores.map((imgUrl, idx) => (
                          <img key={idx} src={imgUrl} alt="Speaker" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="schedule-item">
                    <div className="item-details">
                      <p className="body-1-sb text-transparency">Local e Data do Evento</p>
                      <p className="body-2 text-transparency">{etapa.localData}</p>
                      
                      <div className="bandeiras button-container">
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