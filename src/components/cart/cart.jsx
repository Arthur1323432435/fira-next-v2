'use client';

import { useState, useEffect } from 'react';
import './cart.css';

// Lista inicial de produtos (simulação dos dados)
const INITIAL_ITEMS = [
  {
    id: 1,
    title: "A Young Woman in Colorful Jacket",
    price: 180.00,
    qty: 1,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200"
  },
  {
    id: 2,
    title: "Young Man in Vibrant Jacket",
    price: 247.00,
    qty: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
  }
];

export default function Carrinho() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(INITIAL_ITEMS);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  // Escuta cliques globais em botões com .js-cart-btn e a tecla ESC
  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (event.target.closest('.js-cart-btn')) {
        event.preventDefault();
        openCart();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    document.addEventListener('click', handleGlobalClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Bloqueia a rolagem do corpo da página quando o carrinho estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Aumentar (+) ou Diminuir (-) quantidade
  const updateQuantity = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return { ...item, qty: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  // Remover produto da lista
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Cálculos dinâmicos de quantidade total e subtotal
  const totalCount = items.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const formatCurrency = (value) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <>
      {/* Overlay Escuro */}
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Gaveta do Carrinho */}
      <aside
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        aria-label="Carrinho de Compras"
      >
        {/* 1. CABEÇALHO DO CARRINHO */}
        <div className="cart-header">
          <div className="cart-title-group">
            <h3>Seu Carrinho</h3>
            <span className="cart-count-badge">{totalCount}</span>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Fechar Carrinho"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* 2. CORPO / LISTA DE PRODUTOS */}
        <div className="cart-body">
          {items.length === 0 ? (
            /* Mensagem de Carrinho Vazio */
            <div className="cart-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <p>Seu carrinho está vazio no momento.</p>
              <button
                type="button"
                className="btn-continue-shopping"
                onClick={closeCart}
              >
                Explorar Produtos
              </button>
            </div>
          ) : (
            /* Lista de Itens */
            <div className="cart-items-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.title}</h4>
                    <span className="cart-item-price">{formatCurrency(item.price)}</span>

                    {/* Ações: Quantidade e Lixeira */}
                    <div className="cart-item-actions">
                      <div className="quantity-selector">
                        <button
                          type="button"
                          className="qty-btn minus"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Diminuir quantidade"
                        >
                          -
                        </button>
                        <span className="qty-value">{item.qty}</span>
                        <button
                          type="button"
                          className="qty-btn plus"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Aumentar quantidade"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="btn-remove-item"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remover produto da sacola"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* 3. RODAPÉ FIXO */}
        <div className="cart-footer">
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <strong className="cart-subtotal">{formatCurrency(subtotal)}</strong>
            </div>
            <p className="shipping-note">Frete e impostos calculados na finalização.</p>
          </div>

          <button type="button" className="btn-checkout">
            Finalizar Compra
          </button>
        </div>
      </aside>
    </>
  );
}