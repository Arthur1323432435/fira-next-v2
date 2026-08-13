'use client'; 

import React, { useEffect } from 'react';

// Importe seus componentes
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footer/footer';

// Estilos originais que controlam as classes "expanded", "open", etc.
import '@/css/resultados.css'; 

export default function ResultadosPage() {
    
    // O JavaScript original colocado dentro do useEffect, com a devida limpeza
    useEffect(() => {
        // 1. DADOS SIMULADOS (Intocados do seu JS original)
        const dataResultadosEstaduais = {
            maranhao: [
                { year: "2026", url: "#ma-2026" },
                { year: "2025", url: "#ma-2025" },
                { year: "2024", url: "#ma-2024" }
            ],
            rio: [
                { year: "2026", url: "#rj-2026" }
            ],
            saopaulo: [],
            paraiba: [],
            ceara: []
        };

        const dataResultadosNacionais = [
            { year: "2026", url: "#nac-2026" },
            { year: "2025", url: "#nac-2025" },
            { year: "2024", url: "#nac-2024" },
            { year: "2023", url: "#nac-2023" }
        ];

        const dataResultadosMundiais = [
            { year: "2026", url: "#mun-2026" },
            { year: "2025", url: "#mun-2025" }
        ];

        // --- FUNÇÃO GENÉRICA DE RENDERIZAÇÃO ---
        function renderYearsList(dataArray, targetGrid) {
            targetGrid.innerHTML = ""; 

            if (!dataArray || dataArray.length === 0) {
                targetGrid.innerHTML = `<span style="color: #888; font-size: 13px;">Nenhum resultado disponível.</span>`;
                return;
            }

            dataArray.forEach((item) => {
                const btn = document.createElement("a");
                btn.href = item.url;
                btn.className = "year-btn";
                btn.textContent = item.year;
                btn.setAttribute("download", "");
                targetGrid.appendChild(btn);
            });
        }

        // ELEMENTOS DO DOM
        const cardEstadual = document.getElementById("estaduaisCard");
        const btnEstadual = document.getElementById("btnToggleResults");
        const gridEstadual = document.getElementById("yearsGrid");
        
        const dropdown = document.getElementById("stateDropdown");
        const trigger = document.getElementById("dropdownTrigger");
        const selectedText = document.getElementById("selectedStateText");
        const items = document.querySelectorAll(".dropdown-item");
        
        let currentState = "maranhao"; 

        const cardNacional = document.getElementById("nacionaisCard");
        const btnNacional = document.getElementById("btnToggleNacionais");
        const gridNacional = document.getElementById("yearsGridNacionais");

        const cardMundial = document.getElementById("mundiaisCard");
        const btnMundial = document.getElementById("btnToggleMundiais");
        const gridMundial = document.getElementById("yearsGridMundiais");

        // FUNÇÕES HANDLER PARA OS EVENT LISTENERS
        // Precisamos declará-las para conseguir remover depois (cleanup)
        
        const handleBtnEstadualClick = () => {
            cardEstadual.classList.add("expanded");
            renderYearsList(dataResultadosEstaduais[currentState], gridEstadual);
        };

        const handleTriggerClick = (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle("open");
            trigger.setAttribute("aria-expanded", isOpen);
        };

        const handleDocumentClick = () => {
            if(dropdown) dropdown.classList.remove("open");
            if(trigger) trigger.setAttribute("aria-expanded", "false");
        };

        const handleBtnNacionalClick = () => {
            cardNacional.classList.add("expanded");
            renderYearsList(dataResultadosNacionais, gridNacional);
        };

        const handleBtnMundialClick = () => {
            cardMundial.classList.add("expanded");
            renderYearsList(dataResultadosMundiais, gridMundial);
        };

        // ADICIONAR EVENT LISTENERS
        if (btnEstadual) btnEstadual.addEventListener("click", handleBtnEstadualClick);
        if (trigger) trigger.addEventListener("click", handleTriggerClick);
        document.addEventListener("click", handleDocumentClick);

        items.forEach(item => {
            // Usa função inline para os itens porque a referência já está atrelada ao loop
            item.onclick = () => {
                items.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
                
                currentState = item.getAttribute("data-value");
                selectedText.textContent = item.textContent;
                dropdown.classList.remove("open");

                if (cardEstadual.classList.contains("expanded")) {
                    renderYearsList(dataResultadosEstaduais[currentState], gridEstadual);
                }
            };
        });

        if (btnNacional) btnNacional.addEventListener("click", handleBtnNacionalClick);
        if (btnMundial) btnMundial.addEventListener("click", handleBtnMundialClick);

        // CLEANUP (ESSENCIAL PARA O NEXT.JS)
        // Isso evita que o Next duplique as ações se a página recarregar a seco
        return () => {
            if (btnEstadual) btnEstadual.removeEventListener("click", handleBtnEstadualClick);
            if (trigger) trigger.removeEventListener("click", handleTriggerClick);
            document.removeEventListener("click", handleDocumentClick);
            
            items.forEach(item => { item.onclick = null; });

            if (btnNacional) btnNacional.removeEventListener("click", handleBtnNacionalClick);
            if (btnMundial) btnMundial.removeEventListener("click", handleBtnMundialClick);
        };

    }, []); // Array vazio = roda só 1 vez quando o componente surge na tela

    return (
        <>
            <Navbar />

            <main>
                {/* Seção ESTADUAIS */}
                <section className="estaduais-results-section">
                    <div className="estaduais-container">
                        <article className="estaduais-card" id="estaduaisCard">
                            <div className="estaduais-banner">
                                <img src="https://framerusercontent.com/images/4UoxD5jphkYtlrnPz9UQdvwNyOU.jpg" alt="Etapas Estaduais" className="banner-img" />
                                <div className="banner-overlay"></div>
                                <h2 className="heading-1">ESTADUAIS</h2>
                            </div>

                            <div className="estaduais-content">
                                <div className="content-header">
                                    <h3 className="body-1-sb">Resultados Estaduais</h3>
                                    
                                    {/* O DROPDOWN ORIGINAL */}
                                    <div className="custom-dropdown" id="stateDropdown">
                                        <button type="button" className="dropdown-trigger" id="dropdownTrigger" aria-expanded="false">
                                            <span id="selectedStateText">Maranhão</span>
                                            <svg className="dropdown-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                        <ul className="dropdown-menu" id="dropdownMenu">
                                            <li className="dropdown-item active" data-value="maranhao">Maranhão</li>
                                            <li className="dropdown-item" data-value="rio">Rio de Janeiro</li>
                                            <li className="dropdown-item" data-value="saopaulo">São Paulo</li>
                                            <li className="dropdown-item" data-value="paraiba">Paraíba</li>
                                            <li className="dropdown-item" data-value="ceara">Ceará</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="content-action">
                                    <button type="button" className="btn-toggle-results" id="btnToggleResults">Resultados</button>
                                    <div className="years-download-container" id="yearsContainer">
                                        <div className="years-grid" id="yearsGrid"></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Seção NACIONAIS */}
                <section className="estaduais-results-section">
                    <div className="estaduais-container">
                        <article className="estaduais-card" id="nacionaisCard">
                            <div className="estaduais-banner">
                                <img src="https://framerusercontent.com/images/4UoxD5jphkYtlrnPz9UQdvwNyOU.jpg" alt="Etapas Nacionais" className="banner-img" />
                                <div className="banner-overlay"></div>
                                <h2 className="heading-1">NACIONAIS</h2>
                            </div>

                            <div className="estaduais-content">
                                <div className="content-header">
                                    <h3 className="body-1-sb">Resultados Nacionais</h3>
                                </div>

                                <div className="content-action">
                                    <button type="button" className="btn-toggle-results" id="btnToggleNacionais">Resultados</button>
                                    <div className="years-download-container">
                                        <div className="years-grid" id="yearsGridNacionais"></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Seção MUNDIAIS */}
                <section className="estaduais-results-section">
                    <div className="estaduais-container">
                        <article className="estaduais-card" id="mundiaisCard">
                            <div className="estaduais-banner">
                                <img src="https://framerusercontent.com/images/4UoxD5jphkYtlrnPz9UQdvwNyOU.jpg" alt="Etapas Mundiais" className="banner-img" />
                                <div className="banner-overlay"></div>
                                <h2 className="heading-1">MUNDIAIS</h2>
                            </div>

                            <div className="estaduais-content">
                                <div className="content-header">
                                    <h3 className="body-1-sb">Resultados Mundiais</h3>
                                </div>

                                <div className="content-action">
                                    <button type="button" className="btn-toggle-results" id="btnToggleMundiais">Resultados</button>
                                    <div className="years-download-container">
                                        <div className="years-grid" id="yearsGridMundiais"></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <Carrinho />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}