import React from 'react';
// Importe seu arquivo CSS correspondente aqui
import './products.css';
// import '@/css/products.css'; 

export default function Products() {
    return (
        <section className="products-section" id="products">

            {/* Faixa do Cabeçalho (Herda heading-1 e alinhamento centralizado) */}
            <header className="products-header">
                <h1 className="heading-1">PRODUCTS</h1>
            </header>

            <div className="products-container">

                {/* Grid de Produtos (4 Colunas no Desktop) */}
                <div className="products-grid">

                    {/* Produto 1 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 2 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 3 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 4 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 1 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 2 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                    {/* Produto 3 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>
                    
                    {/* Produto 4 */}
                    <article className="product-card">
                        <div className="product-image-wrapper">
                            {/* O ideal no Next.js seria usar <Link href="...">, mas mantive a tag <a> para ser exato ao original */}
                            <a href="./produto">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"
                                    alt="A Young Woman in Colorful Jacket" 
                                />
                            </a>
                            
                            {/* Botão de Carrinho */}
                            <button className="product-cart-btn js-cart-btn" aria-label="Adicionar ao carrinho">
                                <svg 
                                    width="18" 
                                    height="18" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeWidth="1.5" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="product-info">
                            <h3 className="body-2-sb">
                                <a href="./produto">A Young Woman in Colorful Jacket</a>
                            </h3>
                            <div className="product-price">
                                <span className="price-current">R$0</span>
                            </div>
                        </div>
                    </article>

                </div>

                {/* Rodapé da Seção (Carregamento + Botão) */}
                <div className="products-footer">
                    <div className="loading-spinner"></div>
                    <button className="btn-see-all">See all products</button>
                </div>

            </div>

        </section>
    );
}