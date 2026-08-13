'use client'; 

import React from 'react';

// Import dos componentes globais
import Navbar from '@/components/navbar/navbar';
import FAQs from '@/components/FAQs/faqs';
import Patrocinadores from '@/components/Patrocinadores/patrocinadores';
import Footer from '@/components/footer/footer';
import Carrinho from '@/components/cart/cart';

import '@/css/mundial/locais_mundial.css'; // CSS específico indicado no HTML

// Array com os dados da Etapa Nacional
const etapaNacionalData = [
  {
    id: 1,
    estado: 'PARAÍBA',
    cidade: 'Conde',
    bgImage: 'https://framerusercontent.com/images/1n5ARKV5tNIOe4vP7yqmpQqPhI.png', //[cite: 19]
    organizador: 'Profesor: Alexandre Amancio', //[cite: 19]
    professores: ['https://framerusercontent.com/images/DbG9Vzab0pV2d4J06bWf9oo.webp'], //[cite: 19]
    localData: 'STEM TECNOLOGIA EDUCACIONAL | 20/05 - 31/08', //[cite: 19]
  }
];

export default function EtapaNacional() {
  return (
    <main className="pagina-nacional">
      {/* Componente Navbar[cite: 19] */}
      <Navbar />

      {/* Seção Schedule[cite: 19] */}
      <section className="schedule-section" id="schedule">
        <div className="schedule-container">

          {/* Cabeçalho[cite: 19] */}
          <header className="schedule-header">
            <span className="label-text">ETAPA NACIONAL</span>
            <h2 className="heading-2 text-color">ETAPA NACIONAL NA PARAÍBA</h2>
            <p className="body-1 text-transparency">Inscreva a sua equipe e conquiste a vitória.</p>
          </header>

          {/* Lista de Dias (Cards)[cite: 19] */}
          <div className="schedule-list">
            {etapaNacionalData.map((etapa) => (
              <article key={etapa.id} className="schedule-card">
                
                {/* Coluna Esquerda: Imagem e Data[cite: 19] */}
                <div
                  className="card-image-col"
                  style={{ backgroundImage: `url('${etapa.bgImage}')` }}
                >
                  <div className="image-overlay"></div>
                  <div className="date-location">
                    <h4 className="heading-2">{etapa.estado}</h4>
                    <p className="body-2 text-transparency">{etapa.cidade}</p>
                  </div>
                </div>

                {/* Coluna Direita: Cronograma[cite: 19] */}
                <div className="card-content-col">
                  
                  <div className="schedule-item">
                    <div className="item-details">
                      <p className="body-1-sb text-transparency">Organizador</p>
                    </div>
                  </div>

                  <div className="schedule-item">
                    <div className="item-details">
                      <p className="body-2 text-transparency">{etapa.organizador}</p>
                      <div className="bandeira">
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
                      
                      {/* Botões específicos da Etapa Nacional[cite: 19] */}
                      <div className="bandeira button-container">
                        <button type="button" className="cta-btn body-2-sb">Solicitar Carta Convite</button>
                        <button type="button" className="cta-btn body-2-sb">Inscrever-se</button>
                        <button type="button" className="cta-btn body-2-sb">Pagamento</button>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Componentes Globais na mesma ordem do HTML original[cite: 19] */}
      <Carrinho />
      <FAQs />
      <Patrocinadores />
      <Footer />
    </main>
  );
}