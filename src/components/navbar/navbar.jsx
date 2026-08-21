'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const navbarRef = useRef(null);

    // Fechar a navbar ao clicar fora dela
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Abrir / Fechar menu principal
    const toggleMenu = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setIsMenuOpen((prev) => !prev);
    };

    // Controlar submenus no mobile
    const handleSubmenuClick = (event, submenuName) => {
        const isTouchDevice = window.matchMedia("(max-width: 768px)").matches;
        if (isTouchDevice) {
            event.preventDefault();
            event.stopPropagation();
            setOpenSubmenu((prev) => (prev === submenuName ? null : submenuName));
        }
    };

    const handleNormalLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header 
            ref={navbarRef} 
            /* Adicionamos 'expanded', 'menu-open' e 'active' para bater com qualquer regra do CSS */
            className={`navbar-fixed ${isMenuOpen ? 'expanded menu-open active' : ''}`} 
            id="main-navbar"
        >

            {/* Barra Principal */}
            <div className="navbar-container">

                {/* Botão Menu (Hamburger e Close) */}
                <button
                    type="button"
                    className="nav-btn menu-toggle-btn"
                    id="menuToggleBtn"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
                >
                    {!isMenuOpen ? (
                        /* Ícone Hamburger (padrão) */
                        <svg className="icon-hamburger" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    ) : (
                        /* Ícone Fechar (X) */
                        <svg className="icon-close" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    )}
                </button>

                {/* Logo Central */}
                <div className="nav-logo">
                    <img src="/images/LogoFiraBrasil.png" alt="FIRA BRASIL" />
                </div>

                {/* Ícones da Direita (Busca e Carrinho) */}
                <div className="nav-actions">
                    <button type="button" className="nav-btn search-btn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>

                    <button type="button" className="nav-btn js-cart-btn" aria-label="Abrir Carrinho">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown (Mega Menu Expandido) */}
            <div className={`nav-dropdown ${isMenuOpen ? 'active expanded open' : ''}`}>
                <div className="nav-dropdown-content">

                    {/* Coluna Esquerda: Links de Info */}
                    <div className="nav-info-links">
                        <h3 className="dropdown-title">Info</h3>
                        <ul>
                            <li><Link href="/" onClick={handleNormalLinkClick}>Início</Link></li>
                            <li><Link href="/#privileges" onClick={handleNormalLinkClick}>Nossa História</Link></li>
                            <li><Link href="/#speakers" onClick={handleNormalLinkClick}>Nossa Equipe</Link></li>
                            <li><Link href="/etapas_estaduais" onClick={handleNormalLinkClick}>Etapas Estaduais</Link></li>
                            <li><Link href="/etapa_nacional" onClick={handleNormalLinkClick}>Etapa Nacional</Link></li>
                            <li><Link href="/etapa_mundial" onClick={handleNormalLinkClick}>Etapa Mundial</Link></li>
                            <li><Link href="/resultados" onClick={handleNormalLinkClick}>Resultados</Link></li>
                            
                            {/* Submenu de Modalidades */}
                            <li className={`has-submenu ${openSubmenu === 'modalidades' ? 'open active' : ''}`}>
                                <a onClick={(e) => handleSubmenuClick(e, 'modalidades')}>
                                    Modalidades
                                    <span className="submenu-arrow">›</span>
                                </a>
                                <ul className="submenu">
                                    <li><Link href="/modalidades/kids" onClick={handleNormalLinkClick}>Kids</Link></li>
                                    <li><Link href="/modalidades/juvenil" onClick={handleNormalLinkClick}>Juvenil</Link></li>
                                    <li><Link href="/modalidades/universitaria" onClick={handleNormalLinkClick}>Universitária</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/loja" onClick={handleNormalLinkClick}>Loja</Link></li>
                            <li><a href="/contato" onClick={handleNormalLinkClick}>Contato</a></li>
                            <li><a href="#faq" onClick={handleNormalLinkClick}>FAQ</a></li>
                        </ul>
                    </div>

                    {/* Coluna Direita: Loja / Banner */}
                    <div className="nav-store-promo">
                        <h3 className="dropdown-title body-1">FIRA Nacional 2026</h3>
                        <div className="promo-banner-container">
                            <img src="/images/FINAL-NACIONAL-2026.webp" alt="Nacional 2026" className="promo-img" />
                        </div>
                        <Link href="/etapa_nacional" className="discover-link" onClick={handleNormalLinkClick}>Descobrir Nacional 2026</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}