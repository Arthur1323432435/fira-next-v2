'use client'; // Necessário pois a página possui interatividade do lado do cliente (eventos de submit)

import React from 'react';

// Importações dos componentes globais (Ajuste os caminhos conforme sua estrutura)[cite: 16]
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs'; 
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footer/footer';

import '@/css/contato.css';

export default function ContatoPage() {
    
    // Lógica para o formulário de Email adaptada do contato.js[cite: 17]
    const handleEmailSubmit = (e) => {
        e.preventDefault(); 
        // Captura dos dados pode ser feita aqui
        alert("Solicitação de email enviada com sucesso!");
    };

    // Lógica para o formulário de WhatsApp adaptada do contato.js[cite: 17]
    const handleWhatsappSubmit = (e) => {
        e.preventDefault();
        // Aqui futuramente você pode montar o link da API do WhatsApp
        // Ex: window.open(`https://wa.me/SEUNUMERO?text=Olá...`)
        alert("Redirecionando para o WhatsApp...");
    };

    return (
        <>
            {/* Componente Navbar[cite: 16] */}
            <Navbar />

            <main>
                <section className="contact-section">
                    
                    {/* Card de Contato via Email[cite: 16] */}
                    <div className="contact-card">
                        <h1 className="heading-1">CONTATO VIA EMAIL</h1>
                        <form id="form-email" onSubmit={handleEmailSubmit}>
                            <div className="form-group">
                                <label htmlFor="email-nome" className="body-3-sb">Nome</label>
                                <input type="text" id="email-nome" className="form-input" placeholder="Jane Smith" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email-email" className="body-3-sb">Email</label>
                                <input type="email" id="email-email" className="form-input" placeholder="jane@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email-assunto" className="body-3-sb">Quero falar sobre</label>
                                <input type="text" id="email-assunto" className="form-input" placeholder="assunto do contato" required />
                            </div>
                            <button type="submit" className="btn-submit">Enviar</button>
                        </form>
                    </div>

                    {/* Card de Contato via WhatsApp[cite: 16] */}
                    <div className="contact-card">
                        <h1 className="heading-1">CONTATO VIA WHATSAPP</h1>
                        <form id="form-whatsapp" onSubmit={handleWhatsappSubmit}>
                            <div className="form-group">
                                <label htmlFor="wpp-nome" className="body-3-sb">Nome</label>
                                <input type="text" id="wpp-nome" className="form-input" placeholder="Jane Smith" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="wpp-numero" className="body-3-sb">Número</label>
                                <input type="tel" id="wpp-numero" className="form-input" placeholder="(98) 0000-0000" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="wpp-assunto" className="body-3-sb">Quero falar sobre</label>
                                <input type="text" id="wpp-assunto" className="form-input" placeholder="assunto do contato" required />
                            </div>
                            <button type="submit" className="btn-submit">Enviar</button>
                        </form>
                    </div>

                </section>
            </main>

            {/* Componentes Fixos do Final da Página[cite: 16] */}
            <Carrinho />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}