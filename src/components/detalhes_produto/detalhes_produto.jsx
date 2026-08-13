'use client'; // Necessário se estiver usando Next.js App Router

import React, { useState } from 'react';

import './detalhes_produto.css'; // Importe o CSS correspondente
import '@/components/products/products.css'; // Caminho absoluto para o CSS, se necessário

export default function ProductDetails() {
    // Array com as imagens da galeria
    const images = [
        "/images/products/3056_1_H.webp",
        "/images/products/3056_2_H.webp",
        "/images/products/3056_3_H.webp",
        "/images/products/3056_4_H.webp"
    ];

    // Estados do React para controlar a imagem atual e a opacidade
    const [mainImgSrc, setMainImgSrc] = useState(images[0]);
    const [isFading, setIsFading] = useState(false);

    // Função que substitui o evento de clique do JS vanilla
    const handleThumbClick = (newImgSrc) => {
        if (newImgSrc === mainImgSrc) return;

        setIsFading(true); // Reduz a opacidade (30%)
        
        setTimeout(() => {
            setMainImgSrc(newImgSrc); // Troca a foto
            setIsFading(false); // Volta a opacidade para 100%
        }, 150);
    };

    return (
        <section className="C">
            <div className="product-container">

                {/* 1. COLUNA DA ESQUERDA: GALERIA DE IMAGENS */}
                <div className="product-gallery-col">
                    <div className="thumbnails-list">
                        {images.map((imgSrc, index) => (
                            <button
                                key={index}
                                className={`thumb-btn ${mainImgSrc === imgSrc ? 'active' : ''}`}
                                onClick={() => handleThumbClick(imgSrc)}
                                type="button"
                            >
                                <img src={imgSrc} alt={`Miniatura ${index + 1}`} />
                            </button>
                        ))}
                    </div>

                    <div className="main-image-wrapper">
                        <img 
                            id="mainProductImg" 
                            src={mainImgSrc}
                            alt="CONJUNTO LEGO SPIKE PRIME SET 45678"
                            style={{ 
                                opacity: isFading ? 0.3 : 1, 
                                transition: 'opacity 0.15s ease' 
                            }}
                        />
                    </div>
                </div>

                {/* 2. COLUNA DA DIREITA: INFORMAÇÕES DO PRODUTO */}
                <div className="product-info-col">

                    {/* Cabeçalho & Preço */}
                    <div className="product-header">
                        <span className="body-1-sb">LEGO® Education • STEAM</span>
                        <h1 className="heading-2">CONJUNTO LEGO SPIKE PRIME SET 45678</h1>
                        <div className="price-stock-group">
                            <span className="product-price">$108</span>
                            <span className="product-stock">10 em estoque</span>
                        </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="buy-box">
                        <div className="qty-selector">
                            <button type="button" className="qty-btn minus">-</button>
                            <span className="qty-value">1</span>
                            <button type="button" className="qty-btn plus">+</button>
                        </div>

                        <button 
                            type="button" 
                            className="btn-add-cart js-cart-btn" 
                            data-id="45678"
                            data-name="CONJUNTO LEGO SPIKE PRIME SET 45678" 
                            data-price="108.00"
                        >
                            Add to Cart
                        </button>
                    </div>

                    {/* Informações de Frete */}
                    <div className="shipping-info">
                        <div className="shipping-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                                <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                <line x1="12" y1="22" x2="12" y2="12"></line>
                            </svg>
                            <span className="label-text"><strong>Estimated Delivery:</strong> Within 3 days</span>
                        </div>
                        <div className="shipping-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span className="label-text"><strong>Delivery date:</strong> January 7-11</span>
                        </div>
                    </div>

                    {/* Descrição Detalhada */}
                    <div className="product-description">
                        <h2 className="body-1"> <strong>Description</strong></h2>
                        <p className="label-text">
                            O <strong>Conjunto SPIKE Prime Lego Education</strong> é uma ferramenta de aprendizado STEAM para
                            alunos acima de 10 anos (Fundamental II e Médio). Combinando peças LEGO de várias cores, hardware de
                            fácil utilização e linguagem de programação intuitiva do tipo arraste-e-solte (baseada em Scratch),
                            o SPIKE Prime estimula continuamente os alunos a pensarem criticamente e a resolverem problemas
                            complexos.
                        </p>
                        <p className="label-text">
                            Desde projetos de fácil entrada até possibilidades ilimitadas de design criativo, incluindo a opção
                            de explorar programação em texto com Python, o SPIKE Prime ajuda os alunos a desenvolverem as
                            habilidades essenciais do século XXI.
                        </p>

                        <div className="specs-box label-text">
                            <p><strong>QUANTIDADE DE PEÇAS:</strong> 528</p>
                            <p><strong>CONJUNTO E APP:</strong> Conjunto SPIKE Prime LEGO Education + App</p>
                            <p><strong>PLANOS DE UNIDADE:</strong> Esquadrão da Invenção, Inicie um Negócio, Hacks da Vida, Rastreadores de Treinamentos</p>
                        </div>
                    </div>

                    {/* Trocas e Devoluções */}
                    <div className="product-returns">
                        <h2 className="body-1"><strong>Returns</strong></h2>
                        <p className="label-text">Free standard shipping on orders $50+ and free 60-day returns for Minna Members.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}