'use client';

import React from 'react';

// Importações dos componentes reutilizáveis do seu projeto
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footer/footer';

// Importação do CSS específico (ajuste o caminho se necessário)
import '@/css/mundial/locais_mundial.css';

export default function UniversitariaPage() {
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
                            <span className="label-text">Liga Universitária</span>
                            <h2 className="heading-2 text-color">provas da liga universitária</h2>
                            <p className="body-1 text-transparency">Inscreva a sua equipe e conquiste a vitória.</p>
                        </header>

                        {/* Lista de Dias (Cards) */}
                        <div className="schedule-list">
                            {/* DAY 1 */}
                            <article className="schedule-card">
                                {/* Coluna Esquerda: Imagem e Data */}
                                <div 
                                    className="card-image-col"
                                    style={{ backgroundImage: "url('https://framerusercontent.com/images/qzPHNJfmq9SLF5kB1k1nzuZU.png')" }}
                                >
                                    <div className="image-overlay"></div>
                                    <div className="date-location">
                                        <h4 className="heading-2">CARROS AUTÔNOMOS</h4>
                                    </div>
                                </div>

                                {/* Coluna Direita: Cronograma */}
                                <div className="card-content-col">

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-1-sb text-transparency">Desafio FIRA – Carros Autônomos</p>
                                        </div>
                                    </div>

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-2 text-transparency">
                                                O foco da competição FIRA Autonomous Cars é
                                                incentivar pesquisadores a desenvolver carros autônomos. Na FIRA Autonomous
                                                Cars, são projetados dois ambientes para que os carros compitam entre si: o
                                                primeiro é um circuito de corrida e o segundo é um ambiente urbano. Cada
                                                ambiente possui sua própria pontuação, e a pontuação total dos competidores será
                                                a soma de ambas.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="schedule-item">
                                        <div className="item-details">
                                            <p className="body-1-sb text-transparency">A equipe deve ser composta de 2 a 5 membros.</p>
                                            <div className="avatars button-container">
                                                <button className="cta-btn body-2-sb" id="ticketBtn">Regras</button>
                                                <button className="cta-btn body-2-sb" id="ticketBtn">Baixar Arena</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            {/* Componentes Fixos do Final da Página */}
            <Carrinho />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}