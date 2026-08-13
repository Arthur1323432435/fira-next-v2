'use client';

import React from 'react';

// Importações dos componentes reutilizáveis do seu projeto
import Navbar from '@/components/navbar/navbar';
import Products from '@/components/products/Products'; // Ajuste o caminho conforme a estrutura da sua pasta
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Sponsors from '@/components/patrocinadores/patrocinadores';
import Footer from '@/components/footerComponent/footer';


export default function LojaPage() {
    return (
        <>
            {/* Componente Navbar */}
            <Navbar />

            <main>
                {/* Componente de Produtos que criamos anteriormente */}
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