'use client';

import React from 'react';

// Importações dos componentes reutilizáveis do seu projeto
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footerComponent/footer';

// Importação do CSS específico de etapas/locais
import '@/css/mundial/locais_mundial.css';

export default function KidsPage() {
    return (
        <>
            {/* Componente Navbar */}
            <Navbar />

            <main>
                {/* Seção Schedule */}
                <section className="schedule-section" id="schedule">
                    <div className="schedule-container">

                        {/* Cabeçalho */}
                        <header className="schedule-header">
                            <span className="label-text">Liga Kids</span>
                            <h2 className="heading-2 text-color">Liga Kids</h2>
                            <p className="body-1 text-transparency">Inscreva a sua equipe e conquiste a vitória.</p>
                        </header>

                        {/* Lista de Dias (Cards) */}
                        <div className="schedule-list">
                            {/* DAY 1 */}
                            <article className="schedule-card">
                                {/* Coluna Esquerda: Imagem e Data */}
                                <div 
                                    className="card-image-col"
                                    style={{ backgroundImage: "url('https://framerusercontent.com/images/FrZPnGXfEKhg2WfWnB9Y0N72I.png')" }}
                                >
                                    <div className="image-overlay"></div>
                                    <div className="date-location">
                                        <h4 className="heading-2">PROVA KIDS</h4>
                                    </div>
                                </div>

                                {/* Coluna Direita: Cronograma */}
                                <div className="card-content-col">

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-1-sb text-transparency">TEMA DA TEMPORADA 25/36 | AGRO</p>
                                        </div>
                                    </div>

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-2 text-transparency">
                                                Nesta prova, cada missão representa um desafio
                                                do mundo real. Os competidores precisam programar seus robôs para resgatar
                                                animais, colher frutos, restaurar a comunicação erguendo antenas e organizar a
                                                colheita, tudo isso em poucos minutos.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-1-sb text-transparency">
                                                Prova disputada exclusivamente com o Kit LEGO SPIKE ESSENTIAL
                                            </p>
                                            <div className="avatars button-container">
                                                <button className="cta-btn body-2-sb" id="ticketBtn">Regras</button>
                                                <button className="cta-btn body-2-sb" id="ticketBtn">Modelo da Pista</button>
                                                <button className="cta-btn body-2-sb" id="ticketBtn">Acesse nossa loja</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            {/* Componentes inferiores */}
            <Carrinho />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}