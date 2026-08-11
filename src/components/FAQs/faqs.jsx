'use client';
import { useState } from 'react';
import './faqs.css'; // Importe o CSS da FAQ aqui se ele estiver em uma pasta específica

const faqData = [
    {
        question: "Who can attend the Students Global Summit 2025?",
        answer: "The summit is open to university students, recent graduates, and young professionals worldwide who are actively building projects, startups, or conducting research in deep tech fields."
    },
    {
        question: "What is included in the participation fee?",
        answer: "The fee includes full access to all three venue stages, investor office hours, showcase slots, daily meals, networking dinners, and private inter-venue transport."
    },
    {
        question: "How long will each days go for?",
        answer: "Programming begins at 9:00 AM and concludes around 6:00 PM, followed by evening networking events and private dinners that run until 10:00 PM."
    },
    {
        question: "Will there be an opportunity to meet the speakers?",
        answer: "Yes. Our investor office hours and dedicated build sessions are designed specifically to put you face-to-face with our speakers in small, interactive groups."
    },
    {
        question: "How many attendees will be at the summit?",
        answer: "We strictly cap attendance at 300 hand-picked builders to ensure high-quality networking and meaningful interactions with peers and investors."
    }
];

export default function Faq() {
    // Estado para controlar qual pergunta está aberta (null se nenhuma estiver)
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        // Se clicar na pergunta que já está aberta, ela fecha (null). Senão, abre a clicada.
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">

                {/* Cabeçalho da Seção */}
                <header className="faq-header">
                    <span className="label-text text-white">FAQ's</span>
                    <h2 className="heading-2 text-white">GOT QUESTIONS?</h2>
                    <p className="body-1 text-transparent">We've got all the answers ready for you</p>
                </header>

                {/* Lista de Perguntas (Accordion) */}
                <div className="faq-accordion">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'active' : ''}`}
                            >
                                <button
                                    type="button"
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="body-1 text-white">{item.question}</span>
                                    <svg
                                        className="faq-icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <div
                                    className="faq-answer"
                                    style={{
                                        maxHeight: isOpen ? '1000px' : '0', // Um valor alto o suficiente para caber o texto, ou você pode usar useRef para pegar o scrollHeight exato
                                        overflow: 'hidden',
                                        transition: 'max-height 0.3s ease-in-out'
                                    }}
                                >
                                    <div className="faq-answer-inner">
                                        <p className="body-2 text-transparent">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}