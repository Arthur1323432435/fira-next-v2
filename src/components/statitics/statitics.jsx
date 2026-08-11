import React, { useEffect, useRef } from 'react';
// Lembre-se de importar o seu CSS aqui, por exemplo:
// import './stats.css'; 

export default function Stats() {
  // Referências para conectar o JS aos elementos na tela
  const textContainerRef = useRef(null);
  const statsGridRef = useRef(null);

  // O texto que será fatiado para o efeito de fade
  const fadedText = "CONSTRUTORES. UMA MISSÃO: UNIFICAR A INTELIGÊNCIA DA IA, A CAPACIDADE DE AÇÃO DA ROBÓTICA E A EXPLORAÇÃO ESPACIAL.";
  const words = fadedText.split(/\s+/);

  useEffect(() => {
    /* ========================================================
       1. SCROLL HIGHLIGHT TEXT (Texto da Missão)
       ======================================================== */
    const textContainer = textContainerRef.current;
    
    if (textContainer) {
      const wordSpans = textContainer.querySelectorAll('.word');

      const handleScroll = () => {
        const rect = textContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Trigger no centro da tela (metade da altura)
        const triggerPoint = viewportHeight / 2;
        const scrollRange = 350; // Distância para completar a animação[cite: 13]

        let progress = 0;
        const elementTop = rect.top;

        if (elementTop <= triggerPoint && elementTop >= (triggerPoint - scrollRange)) {
          progress = (triggerPoint - elementTop) / scrollRange;
        } else if (elementTop < (triggerPoint - scrollRange)) {
          progress = 1;
        }

        // Aplica a cor baseada no progresso[cite: 13]
        wordSpans.forEach((span, index) => {
          const wordProgress = index / wordSpans.length;
          if (progress >= wordProgress) {
            span.style.color = '#FFFFFF';
          } else {
            span.style.color = 'rgba(255, 255, 255, 0.2)'; 
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Roda uma vez no carregamento[cite: 13]

      // Limpeza do evento ao desmontar o componente
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    /* ========================================================
       2. NUMBER COUNTER (Grid de Estatísticas)[cite: 13]
       ======================================================== */
    if (!statsGridRef.current) return;

    const statNumbers = statsGridRef.current.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 segundos de animação[cite: 13]

    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerText = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Inicia quando 50% estiver visível[cite: 13]
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target;
          // Pega o número do data-target[cite: 13]
          const targetValue = parseInt(targetElement.getAttribute('data-target'), 10);
          
          animateValue(targetElement, 0, targetValue, animationDuration);
          observer.unobserve(targetElement); // Anima apenas uma vez[cite: 13]
        }
      });
    }, observerOptions);

    statNumbers.forEach(num => {
      statsObserver.observe(num);
    });

    // Limpeza do observador
    return () => statsObserver.disconnect();
  }, []);

  return (
    <section className="stats-section" id="stats">
      <div className="mission-statement">
        <h2>
          <span className="text-highlight">3 DIAS. 300 </span>
          {/* O React cria as tags span automaticamente de forma limpa */}
          <span className="text-faded" ref={textContainerRef}>
            {words.map((word, index) => (
              <span key={index} className="word">
                {word}{' '}
              </span>
            ))}
          </span>
        </h2>
      </div>

      <div className="stats-grid" ref={statsGridRef}>
        <div className="stat-item">
          <div className="stat-number-wrapper">
            <span className="stat-number" data-target="300">0</span>
            <span className="stat-plus">+</span>
          </div>
          <span className="stat-label">Elite Builders</span>
        </div>

        <div className="stat-item">
          <div className="stat-number-wrapper">
            <span className="stat-number" data-target="110">0</span>
            <span className="stat-plus">+</span>
          </div>
          <span className="stat-label">Countries Represented</span>
        </div>

        <div className="stat-item">
          <div className="stat-number-wrapper">
            <span className="stat-number" data-target="56">0</span>
            <span className="stat-plus">+</span>
          </div>
          <span className="stat-label">Keynote Speakers</span>
        </div>

        <div className="stat-item">
          <div className="stat-number-wrapper">
            <span className="stat-number" data-target="25">0</span>
            <span className="stat-plus">+</span>
          </div>
          <span className="stat-label">Unicorn Founders</span>
        </div>
      </div>
    </section>
  );
}