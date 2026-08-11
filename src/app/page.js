'use client';
import { useEffect, useRef } from 'react'; // ← 1. useRef Importado

import Navbar from '@/components/navbar';
import Carrinho from '@/components/cart/carrinho';
import Statitics from '@/components/statitics/statitics';
import Footer from '@/components/footerComponent/footer';
import Patrociandores from '@/components/Patrocinadores/patrocinadores';
import FAQs from '@/components/FAQs/faqs'

import './globals.css';
import '@/css/hero.css'; // ← Garanta que o CSS da hero está sendo importado!
import '@/css/about.css';
import '@/css/highlight.css';
import '@/css/who-for.css';
import '@/css/speakers.css';
import '@/css/schedule.css';
import '@/css/pricing.css';
import '@/css/privilege.css';
import '@/css/feature.css';

export default function Home() {
  const heroRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    /* ========================================================
       1. REVELAR SEÇÕES NO SCROLL (.reveal-bottom)
       ======================================================== */
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal-bottom');
    revealElements.forEach((el) => observer.observe(el));

    /* ========================================================
       2. ZOOM REVERSO NO SCROLL (Hero)
       ======================================================== */
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollY <= heroHeight) {
        const scrollPercent = scrollY / heroHeight;
        const newScale = 1.1 + scrollPercent * 0.9;
        heroRef.current.style.setProperty('--scroll-zoom', newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ========================================================
       3. CARROSEL INFINITO DRAGGABLE (Logos)
       ======================================================== */
    const carousel = carouselRef.current;
    let animationFrameId;

    if (carousel) {
      const originalHTML = carousel.innerHTML;
      carousel.innerHTML = originalHTML;
      const singleSetWidth = carousel.scrollWidth;
      carousel.innerHTML = originalHTML.repeat(6);
      carousel.scrollLeft = singleSetWidth * 2;

      let isDown = false;
      let startX;
      let scrollLeft;
      let isDragging = false;
      let virtualScrollLeft = carousel.scrollLeft;
      const scrollSpeed = 0.8;

      const resetBounds = () => {
        if (virtualScrollLeft >= singleSetWidth * 3) {
          virtualScrollLeft -= singleSetWidth;
        } else if (virtualScrollLeft <= singleSetWidth) {
          virtualScrollLeft += singleSetWidth;
        }
        carousel.scrollLeft = virtualScrollLeft;
      };

      const autoScroll = () => {
        if (!isDragging) {
          virtualScrollLeft += scrollSpeed;
          resetBounds();
        } else {
          virtualScrollLeft = carousel.scrollLeft;
        }
        animationFrameId = requestAnimationFrame(autoScroll);
      };

      autoScroll();

      const startDrag = (e) => {
        isDown = true;
        isDragging = true;
        startX = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      };

      const stopDrag = () => {
        if (!isDown) return;
        isDown = false;
        setTimeout(() => {
          isDragging = false;
          virtualScrollLeft = carousel.scrollLeft;
        }, 50);
      };

      const moveDrag = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
        virtualScrollLeft = carousel.scrollLeft;
        resetBounds();
      };

      carousel.addEventListener('mousedown', startDrag);
      carousel.addEventListener('mouseleave', stopDrag);
      carousel.addEventListener('mouseup', stopDrag);
      carousel.addEventListener('mousemove', moveDrag);
      carousel.addEventListener('touchstart', startDrag, { passive: true });
      carousel.addEventListener('touchend', stopDrag);
      carousel.addEventListener('touchmove', moveDrag, { passive: false });
    }

    // Limpeza dos eventos ao desmontar
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main>

      {/* Navbar */}
      <Navbar />

      {/* 2. Classe corrigida para "hero" */}
      <section id="hero" ref={heroRef} className="hero">
        <header className="hero-top">
          <div className="info-left heading-4">CONDE, PA</div>
          <div className="logo">
            <img src="/images/LogoFiraBrasil.png" alt="Logo Fira Brasil" />
          </div>
          <div className="info-right heading-4">18 - 20 SEPTEMBER</div>
        </header>

        <div className="hero-main">
          <h1 className="title">FIRA NACIONAL '26</h1>
          {/* 4. Evento onClick adicionado */}
          <button
            className="cta-btn body-2-sb"
            id="ticketBtn"
            onClick={() => alert('Você será redirecionado para a página de ingressos!')}
          >
            Inscreva-se
          </button>
        </div>

        <footer className="hero-sponsors">
          <p className="label-text">Nossos Patrocinadores E Apoiadores:</p>
          {/* 3. ref={carouselRef} adicionada */}
          <div className="logos-container" ref={carouselRef}>
            <img src="/logos/patrocinadores/ROBOEDUC.webp" alt="Robo Educ" />
            <img src="/logos/patrocinadores/SESI_SENAI.webp" alt="Sesi Senai" />
            <img src="/logos/patrocinadores/ROOBOT.webp" alt="Roobot" />
            <img src="/logos/patrocinadores/IFMA.webp" alt="Instituto Federal" />
            <img src="/logos/patrocinadores/IEMA.webp" alt="Iema" />
            <img src="/logos/patrocinadores/BLACKSWAN.webp" alt="Black Swan" />
            <img src="/logos/patrocinadores/BOM PASTOR.webp" alt="Bom Pastor" />
            <img src="/logos/patrocinadores/CIEP.webp" alt="CIEP" />
            <img src="/logos/patrocinadores/CITIG.webp" alt="CITIG" />
            <img src="/logos/patrocinadores/EDUCACIONAL.webp" alt="Educacional" />
            <img src="/logos/patrocinadores/ROBO_CITY.webp" alt="Robo City" />
            <img src="/logos/patrocinadores/ELSHADAI.webp" alt="Elshadai" />
            <img src="/logos/patrocinadores/EV3_ROBOTICA.webp" alt="EV3 Robótica" />
            <img src="/logos/patrocinadores/FAPEMA.webp" alt="FAPEMA" />
            <img src="/logos/patrocinadores/GOLDEN_SHOP.webp" alt="Golden Shop" />
            <img src="/logos/patrocinadores/NA_MOCHILA.webp" alt="Na Mochila" />
            <img src="/logos/patrocinadores/STEAM[.webp" alt="STEAM" />
          </div>
        </footer>
      </section>

      {/* Seção Statitics */}
      <Statitics />

      {/* Seção About */}
      <section className="about-section" id="about">
        <div className="about-container reveal-bottom">
          <div className="about-left">
            <span className="overline label-text">About The Summit</span>
            <h2 className="section-title about-left heading-2">72-HORAS DE IMERSÃO EM ROBÓTICA E IA</h2>
          </div>

          <div className="about-right body-2">
            <p>
              Conclave '26 brings the brightest minds to the San Francisco frontier to master the Trinity:
              Artificial Intelligence as the brain, Robotics as the body, and Space as the destination.
            </p>
            <p>We are here to ensure that the builders of today become the architects of tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Seção Highlights */}
      <section className="highlight-section" id="highlights">
        <div className="highlight-container reveal-bottom">
          <div className="highlight-header">
            <span className="overline label-text">MODALIDADES</span>
            <h2 className="heading-2">grupos da competição fira</h2>
            <p className="label-text">Escolha em qual modalidade o seu grupo se encaixa</p>
          </div>

          <div className="highlight-grid">
            <div className="card featured-card">
              <div
                className="card-bg"
                style={{ backgroundImage: "url('/images/cards_highlight/nave.webp')" }}
              ></div>
              <div className="featured-content">
                <h3 className="heading-3">EQUIPES DE 02 A 04 INTEGRANTES</h3>
              </div>
            </div>

            <div className="card standard-card">
              <div
                className="card-img"
                style={{ backgroundImage: "url('/images/cards_highlight/pessoa.webp')" }}
              ></div>
              <div className="card-content">
                <h4 className="heading-5">KIDS</h4>
                <p className="body-2 text-transparency">
                  DE 06 A 09 ANOS EQUIPES DE 02 A 04 INTEGRANTES | TEMA: AGRO
                </p>
              </div>
            </div>

            <div className="card standard-card">
              <div
                className="card-img"
                style={{ backgroundImage: "url('/images/cards_highlight/robo.webp')" }}
              ></div>
              <div className="card-content">
                <h4 className="heading-5">LIGA JUVENIL</h4>
                <p className="body-2 text-transparency">
                  U14 - DE 09 A 14 ANOS U19 - DE 15 A 19 ANOS EQUIPES DE 02 A 04 INTEGRANTES
                </p>
              </div>
            </div>

            <div className="card standard-card">
              <div
                className="card-img"
                style={{ backgroundImage: "url('/images/peoples.webp')" }}
              ></div>
              <div className="card-content">
                <h4 className="heading-5">LIGA UNIVERSITÁRIA</h4>
                <p className="body-2 text-transparency">
                  NÃO POSSUÍ LIMITE DE IDADE EQUIPES DE 02 A 04 INTEGRANTES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Who For */}
      <section className="who-for-section" id="who-for">
        <div
          className="who-for-bg"
          style={{ backgroundImage: "url('/images/peoples.webp')" }}
        ></div>
        <div className="who-for-gradient"></div>

        <div className="who-for-container reveal-bottom">
          <header className="who-for-header">
            <span className="label-text">The Group</span>
            <h2 className="heading-2">Who Should Join</h2>
            <p className="body-1 text-transparency">Clarifying who belongs at this summit</p>
          </header>

          <div className="audience-grid">
            <div className="audience-item">
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="body-1-sb">Next-Gen Builders</h3>
              <p className="body-2 text-transparency">Young entrepreneurs 18-26 juggling studies and startups.</p>
            </div>

            <div className="audience-item">
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="body-1-sb">International Innovators</h3>
              <p className="body-2 text-transparency">International delegates from any continent in the world.</p>
            </div>

            <div className="audience-item">
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="body-1-sb">Elite University Scholars</h3>
              <p className="body-2 text-transparency">Top university students from leading global institutions.</p>
            </div>

            <div className="audience-item">
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h3 className="body-1-sb">Ethical Visionaries</h3>
              <p className="body-2 text-transparency">Future leaders who wants to build humanity's future in deep tech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Speakers */}
      <section className="speakers-section" id="speakers">
        <div className="speakers-container">
          <header className="speakers-header">
            <div className="header-main">
              <span className="label-text">Nossa Equipe</span>
              <h2 className="heading-2">Equipe fira brasil'26</h2>
            </div>
            <div className="header-support">
              <p className="body-1 text-transparency">
                Atrás de cada grande aprendizado, existe um professor apaixonado pelo que faz.
              </p>
            </div>
          </header>

          <div className="speakers-masonry">
            <div className="speaker-card">
              <img src="/images/apoiadores/FABIO.webp" alt="Ilya Savko" />
              <div className="speaker-info">
                <h4 className="heading-5">Ilya Savko</h4>
                <p className="speaker-title text-transparency">Professor, Harvard</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/andré.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="speaker-title text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/bahia.webp" alt="Ilya Savko" />
              <div className="speaker-info">
                <h4 className="heading-5">Ilya Savko</h4>
                <p className="speaker-title text-transparency">Professor, Harvard</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/charles.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="speaker-title text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/dutra.webp" alt="Ilya Savko" />
              <div className="speaker-info">
                <h4 className="heading-5">Ilya Savko</h4>
                <p className="speaker-title text-transparency">Professor, Harvard</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/fb1f15_c380314fb05549c191f62cdfc5dd0572~mv2.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/FLAVIO SENAC.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/janaina.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/JHONATAN.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/Na Mochila (61).webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/representante CEARÁ 2024.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/REPRESENTANTE ETAPAGOIÁS.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/SEBASTIÃO ENIAC.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/WhatsApp Image 2021-11-23 at 06_56_06.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/WhatsApp Image 2022-01-12 at 15_12_00.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/WhatsApp Image 2022-05-09 at 21_33_10.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/WhatsApp Image 2024-09-19 at 10_20_27 (1).webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/WhatsApp Image 2024-09-19 at 10_20_27.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>

            <div className="speaker-card">
              <img src="/images/apoiadores/Aquiles2.webp" alt="Dr. Aris Thorne" />
              <div className="speaker-info">
                <h4 className="heading-5">Dr. Aris Thorne</h4>
                <p className="body-2 text-transparency">Scientist, Neural Horizon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Schedule */}
      <section className="schedule-section" id="schedule">
        <div className="schedule-container">
          <header className="schedule-header">
            <span className="label-text">PROGRAMAÇÃO</span>
            <h2 className="heading-2">ESTES 3 DIAS PODEM MUDAR A SUA REALIDADE</h2>
            <p className="body-1 text-transparency">Where intellect meets culture and chaos.</p>
          </header>

          <div className="schedule-list">

            {/* DAY 1 */}
            <article className="schedule-card">
              <div
                className="card-image-col"
                style={{ backgroundImage: "url('/images/cards_schedule/Lk97YmyWM4Iwb5OKKEdw0kDyC8.png_2K_202607161434.jpeg')" }}
              >
                <div className="image-overlay"></div>
                <h3 className="heading-2 day-title">Day 1</h3>
                <div className="date-location">
                  <h4 className="heading-3">18th Sep</h4>
                  <p className="body-2 text-transparency">Hayes Valley</p>
                </div>
              </div>

              <div className="card-content-col">
                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">09:00</p>
                    <p className="body-2 text-transparency">10:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Opening Keynote: The Post-Prompt Era</p>
                    <p className="body-2 text-transparency">
                      Exploring the transition from chatbots to autonomous agentic systems that think and act independently.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">11:00</p>
                    <p className="body-2 text-transparency">12:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Workshop: Multi-Agent Swarms</p>
                    <p className="body-2 text-transparency">
                      A deep dive into orchestration layers for scaling AI agents across complex enterprise environments.
                    </p>
                    <div className="avatars">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                    </div>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">18:30</p>
                    <p className="body-2 text-transparency">20:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Mixers: Founders & LLM Researchers</p>
                    <p className="body-2 text-transparency">
                      An evening of high-bandwidth networking in the heart of San Francisco's AI district.
                    </p>
                    <div className="avatars">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* DAY 2 */}
            <article className="schedule-card">
              <div
                className="card-image-col"
                style={{ backgroundImage: "url('/images/cards_schedule/ibDT02O8QChYK5BBVTrXbSehRHU.png_2K_202607161437.webp')" }}
              >
                <div className="image-overlay"></div>
                <h3 className="heading-2 day-title">Day 2</h3>
                <div className="date-location">
                  <h4 className="heading-3">19th Sep</h4>
                  <p className="body-2 text-transparency">Soma Tech District</p>
                </div>
              </div>

              <div className="card-content-col">
                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">09:00</p>
                    <p className="body-2 text-transparency">10:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Keynote: Giving Code a Body</p>
                    <p className="body-2 text-transparency">
                      A look at the humanoid race and the engineering challenges of bringing AI into the physical world.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">11:00</p>
                    <p className="body-2 text-transparency">12:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Workshop: Single-AI Operations</p>
                    <p className="body-2 text-transparency">
                      Witnessing live training of robotic actuators in high-fidelity simulations before deploying.
                    </p>
                    <div className="avatars">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                    </div>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">14:00</p>
                    <p className="body-2 text-transparency">16:30</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Actuators and Kinetic Design</p>
                    <p className="body-2 text-transparency">
                      Understanding the hardware constraints of the next generation of industrial and consumer robotics.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* DAY 3 */}
            <article className="schedule-card">
              <div
                className="card-image-col"
                style={{ backgroundImage: "url('/images/cards_schedule/Yq2fnFgNNsUXGeJA3RiyheF4xM.png_2K_202607161436.jpeg')" }}
              >
                <div className="image-overlay"></div>
                <h3 className="heading-2 day-title">Day 3</h3>
                <div className="date-location">
                  <h4 className="heading-3">20th Sep</h4>
                  <p className="body-2 text-transparency">Civic Center</p>
                </div>
              </div>

              <div className="card-content-col">
                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">09:00</p>
                    <p className="body-2 text-transparency">12:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Session: Software-Defined Satellites</p>
                    <p className="body-2 text-transparency">
                      How modular software is revolutionizing orbital infrastructure and satellite communication.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">14:00</p>
                    <p className="body-2 text-transparency">18:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Launchpad: Global Student Pitch</p>
                    <p className="body-2 text-transparency">
                      The top 10 student-led deep-tech startups pitch their vision to Tier-1 Silicon Valley VCs.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">20:00</p>
                    <p className="body-2 text-transparency">22:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Closing Gala: Architects Award</p>
                    <p className="body-2 text-transparency">
                      Final ceremony at the Palace of Fine Arts celebrating the most innovative builds of Conclave '26.
                    </p>
                    <div className="avatars">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* DAY 4 */}
            <article className="schedule-card">
              <div
                className="card-image-col"
                style={{ backgroundImage: "url('/images/cards_schedule/Yq2fnFgNNsUXGeJA3RiyheF4xM.png_2K_202607161439.jpeg')" }}
              >
                <div className="image-overlay"></div>
                <h3 className="heading-2 day-title">Day 4</h3>
                <div className="date-location">
                  <h4 className="heading-3">20th Sep</h4>
                  <p className="body-2 text-transparency">Civic Center</p>
                </div>
              </div>

              <div className="card-content-col">
                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">09:00</p>
                    <p className="body-2 text-transparency">12:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Session: Software-Defined Satellites</p>
                    <p className="body-2 text-transparency">
                      How modular software is revolutionizing orbital infrastructure and satellite communication.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">14:00</p>
                    <p className="body-2 text-transparency">18:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Launchpad: Global Student Pitch</p>
                    <p className="body-2 text-transparency">
                      The top 10 student-led deep-tech startups pitch their vision to Tier-1 Silicon Valley VCs.
                    </p>
                  </div>
                </div>

                <div className="schedule-item">
                  <div className="item-time">
                    <p className="body-2-sb">20:00</p>
                    <p className="body-2 text-transparency">22:00</p>
                  </div>
                  <div className="item-details">
                    <p className="body-2-sb">Closing Gala: Architects Award</p>
                    <p className="body-2 text-transparency">
                      Final ceremony at the Palace of Fine Arts celebrating the most innovative builds of Conclave '26.
                    </p>
                    <div className="avatars">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Speaker" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Pricing */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-container reveal-bottom">
          <header className="pricing-header">
            <span className="label-text text-black">Pricing</span>
            <h2 className="heading-2 text-black">Ticket Prices</h2>
            <p className="body-1 text-black">
              Secure your place at the world's<br />premier summit on AI governance
            </p>
          </header>

          <div className="pricing-cards">
            {/* TICKET 1: General Pass */}
            <article className="ticket-card">
              <div className="ticket-texture">
                <video autoPlay loop muted playsInline className="texture-video">
                  <source src="/gifs/gradient-animation_edit1.webm" type="video/webm" />
                </video>
                <img src="/gifs/gradient-animation.webm" alt="Gradiente Animado" className="texture-video" />
              </div>

              <div className="ticket-content">
                <h3 className="heading-4 ticket-title">General Pass</h3>
                <div className="ticket-price heading-1">$49</div>

                <div className="ticket-includes">
                  <p className="body-2-sb">Includes:</p>
                  <ul className="includes-list">
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Complete Transportation
                    </li>
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Access To 5 Summit Sessions
                    </li>
                  </ul>
                </div>

                <button className="cta-btn body-2-sb" id="ticketBtn">Inscreva-se</button>
              </div>

              <div className="ticket-footer">
                <div className="barcode"></div>
                <div className="ticket-meta">
                  <span className="meta-text">SAN FRANCISCO, CA</span>
                  <span className="meta-text">12 - 15 SEP</span>
                </div>
              </div>
            </article>

            {/* TICKET 2: VIP Pass */}
            <article className="ticket-card">
              <div className="ticket-texture">
                <video autoPlay loop muted playsInline className="texture-video">
                  <source src="/gifs/gradient-animation_2.webm" type="video/webm" />
                </video>
              </div>

              <div className="ticket-content">
                <h3 className="heading-4 ticket-title">VIP Pass</h3>
                <div className="ticket-price heading-1">$149</div>

                <div className="ticket-includes">
                  <p className="body-2-sb">Includes:</p>
                  <ul className="includes-list">
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Complete Transportation
                    </li>
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Access To All Summit Sessions
                    </li>
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Government Certification
                    </li>
                    <li className="body-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Innovation Showcase Slot
                    </li>
                  </ul>
                </div>

                <button className="cta-btn body-2-sb" id="ticketBtn">Inscreva-se</button>
              </div>

              <div className="ticket-footer">
                <div className="barcode"></div>
                <div className="ticket-meta">
                  <span className="meta-text">SAN FRANCISCO, CA</span>
                  <span className="meta-text">12 - 15 SEP</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Seção Privilege */}
      <section className="privilege-section" id="privileges">
        <div className="privilege-container">
          <div className="privilege-left">
            <span className="label-text eyebrow-text">Nossa História</span>
            <h2 className="heading-2 text-white">conheça o fira robótica brasil!!!</h2>
            <p className="body-1 text-transparent">
              Conectar estudantes e pesquisadores de diversas disciplinas, como mecatrônica, computação e inteligência artificial.
            </p>
          </div>

          <div className="privilege-divider"></div>

          <div className="privilege-right">
            <ul className="privilege-list">
              <li className="privilege-item">
                <div className="privilege-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="privilege-text">
                  <h4 className="heading-4 text-white">QUEM SOMOS?</h4>
                  <p className="body-2 text-transparent">
                    O FIRA BRASIL é um evento de robótica que tem a finalidade de classificar equipes de todo Brasil para participar anualmente do FIRA ROBO WORLD CUP (COPA DO MUNDO DE ROBÓTICA).
                  </p>
                </div>
              </li>

              <li className="privilege-item">
                <div className="privilege-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="privilege-text">
                  <h4 className="heading-4 text-white">QUANDO SURGIMOS?</h4>
                  <p className="body-2 text-transparent">
                    O FIRA BRASIL é um capítulo regional do FIRA ROBO WORLD CUP no Brasil, foi licenciado em 01 de janeiro de 2019 pelo professor JACKY BALTES – Presidente da FIRA.
                  </p>
                </div>
              </li>

              <li className="privilege-item">
                <div className="privilege-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="privilege-text">
                  <h4 className="heading-4 text-white">OBJETIVOS</h4>
                  <p className="body-2 text-transparent">
                    Nossa missão é levar o espírito da ciência e da tecnologia aos jovens e ao público leigo. Desenvolvemos sistemas robóticos autônomos cooperativos de ponta e reunimos estudantes e pesquisadores de diversas áreas tecnológicas para impulsionar este campo interdisciplinar.
                  </p>
                </div>
              </li>

              <li className="privilege-item">
                <div className="privilege-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="privilege-text">
                  <h4 className="heading-4 text-white">LOGÍSTICA</h4>
                  <p className="body-2 text-transparent">
                    O FIRA BRASIL é uma competição composta por Etapas Estaduais e uma Final Nacional que classifica anualmente 32 equipes do Brasil para o FIRA ROBO WORLD CUP.
                  </p>
                </div>
              </li>

              <li className="privilege-item">
                <div className="privilege-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className="privilege-text">
                  <h4 className="heading-4 text-white">Participe</h4>
                  <p className="body-2 text-transparent">
                    Se você quer transformar a ciência e a tecnologia ao lado dos melhores especialistas, o seu lugar é aqui. Participe do nosso evento!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção Feature */}
      <section className="feature-section" id="features">
        <div className="feature-container">
          <header className="feature-header-box">
            <span className="label-text">WHAT'S IN IT FOR YOU</span>
            <h2 className="heading-2">WHY SHOULD YOU ATTEND?</h2>
            <p className="body-1">
              Connect with global leaders, showcase your innovation,<br />and earn recognition that opens doors worldwide
            </p>
          </header>

          <div className="feature-grid">
            <div className="grid-row-2">
              <article className="feature-card">
                <div className="card-image img-1"></div>
                <div className="card-content">
                  <h3 className="heading-5">Frontier Access</h3>
                  <p className="body-2 text-transparent">
                    Sit across the table from AI founders, robotics engineers, and space-tech builders who are shaping the industries you want to break into.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <div className="card-image img-2"></div>
                <div className="card-content">
                  <h3 className="heading-5">Live Demos</h3>
                  <p className="body-2 text-transparent">
                    Pitch your project, research, or startup to investors and founders on stage real feedback, real stakes, real opportunity that shapes your future and trajectory.
                  </p>
                </div>
              </article>
            </div>

            <div className="grid-row-3">
              <article className="feature-card">
                <div className="card-image img-3"></div>
                <div className="card-content">
                  <h3 className="heading-5">Networking Opportunity</h3>
                  <p className="body-2 text-transparent">
                    300 hand-picked builders from 25+ countries. The people you meet here become lifelong allies.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <div className="card-image img-4"></div>
                <div className="card-content">
                  <h3 className="heading-5">Build Sessions</h3>
                  <p className="body-2 text-transparent">
                    Skip the theory. Join workshops where you actually ship an AI agent and a hardware prototype in a day.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <div className="card-image img-5"></div>
                <div className="card-content">
                  <h3 className="heading-5">Official Recognition</h3>
                  <p className="body-2 text-transparent">
                    Walk away with credentials and showcase wins that stand out on every application you write.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <FAQs />

      {/* Seção de Patrocinadores */}
      <Patrociandores />

      {/* Seção Footer */}
      <Footer />

      {/* Carrinho */}
      <Carrinho />

    </main>
  );
}