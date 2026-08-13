import './footer.css';

export default function Footer() {
    return (
        <footer className="footer-section" id="footer">
            {/* Overlay escuro para leitura */}
            <div className="footer-overlay"></div>

            <div className="footer-container">
                {/* Conteúdo Principal */}
                <div className="footer-main">
                    {/* Esquerda: Título e CTA */}
                    <div className="footer-cta">
                        <h2 className="heading-1 text-white">
                            JOIN THE EVENT THAT'LL<br />SHAPE YOUR FUTURE
                        </h2>
                        <button
                            type="button"
                            className="cta-btn body-2-sb"
                            id="ticketBtn"
                            onClick={() => alert('Você será redirecionado para a página de ingressos!')}
                        >
                            Inscreva-se
                        </button>
                    </div>

                    {/* Direita: Data e Calendário */}
                    <div className="footer-date-info">
                        <div className="date-text">
                            <p className="body-1-sb text-white">18th September, 2026</p>
                            <p className="body-1-sb text-white time-text">9:00 AM</p>
                        </div>

                        {/* Ícone de Calendário Customizado */}
                        <div className="calendar-badge">
                            <div className="calendar-top">SEP</div>
                            <div className="calendar-bottom">
                                <span className="calendar-day">18</span>
                                <span className="calendar-weekday">FRI</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid de Informações */}
                <div className="footer-info-grid">
                    <div className="info-col">
                        <h4 className="info-title">Contato</h4>
                        <p className="info-desc">Email: firabrasilrobotica@gmail.com</p>
                        <p className="info-desc">Contato: (98) 991208005</p>
                        <p className="info-desc">Atendimento: Seg. a Sex., 9h às 18h</p>
                    </div>

                    <div className="info-col">
                        <h4 className="info-title">Endereço e CNPJ</h4>
                        <p className="info-desc">Rua 1100, q12, c29, Parque Aurora–Cohatrac</p>
                        <p className="info-desc">São Luís-MA , cep: 65.052-879</p>
                        <p className="info-desc">CNPJ: 22.548.904/0001-99</p>
                    </div>

                    <div className="info-col">
                        <h4 className="info-title">Redes sociais</h4>
                        <p className="info-desc">Instagram: @robo_cityslz</p>
                        <p className="info-desc">YouTube: ROBO CITY</p>
                    </div>
                </div>

                {/* Seção Política de Venda */}
                <div className="footer-policy-section">
                    <h4 className="policy-title heading-3">Nossa política de venda</h4>
                    <div className="policy-buttons">
                        <button type="button" className="policy-btn">Entrega e confirmação de pagamento</button>
                        <button type="button" className="policy-btn">Cancelamento / Devolução e valores</button>
                    </div>
                </div>

                {/* Barra de Direitos Autorais / Meta */}
                <div className="footer-bottom">
                    <p className="body-3 text-transparent">© Conclave 2026. All rights reserved.</p>
                    <p className="body-3 text-transparent">Created by a.a.santoss</p>
                </div>
            </div>
        </footer>
    );
}