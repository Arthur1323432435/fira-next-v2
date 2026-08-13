'use client';

import React from 'react';

// Importações dos componentes reutilizáveis do seu projeto
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footer/footer';
import Products from '@/components/products/products';

// Importação do CSS específico da página
import '@/components/products/products.css'; // Caminho absoluto para o CSS, se necessário

export default function LojaPage() {
    return (
        <>
            {/* Componente Navbar */}
            <Navbar />

            <main>
                <Products />
            </main>

            {/* Componentes Fixos do Final da Página */}
            <Carrinho />
            <Faq />
            <Sponsors />
            <Footer />
        </>
    );
}