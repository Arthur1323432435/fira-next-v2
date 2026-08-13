'use client';

import React from 'react';

// Importações dos componentes globais
import Navbar from '@/components/navbar/navbar';
import Carrinho from '@/components/cart/cart';
import Faq from '@/components/faqs/faqs';
import Footer from '@/components/footer/footer';
import Products from '@/components/products/products'; // Ajuste o caminho conforme a estrutura da sua pasta

// Importe o seu componente de Detalhes do Produto 
// (Atenção: Ajuste o caminho abaixo para a pasta exata onde você salvou o ProductDetails.jsx)
import ProductDetails from '@/components/detalhes_produto/detalhes_produto'; 

// Importação do CSS específico se você estiver importando na página
// import '@/css/detalhes_produto.css'; 

export default function ProdutoPage() {
    return (
        <>
            {/* Componente do Topo */}
            <Navbar />

            {/* Conteúdo Principal da Página */}
            <main>
                {/* Aqui você inclui o componente que acabamos de adaptar */}
                <ProductDetails />

                <Products />
            </main>

            {/* Componentes Fixos do Final da Página */}
            <Carrinho />
            <Faq />
            <Footer />
        </>
    );
}