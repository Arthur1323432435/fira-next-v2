'use client';
import './patrocinadores.css'; // Importe o CSS do footer se tiver um específico na mesma pasta

export default function Patrociandores() {
    // Lista com os nomes dos arquivos das logos
    const sponsorLogos = [
        "BLACKSWAN.webp",
        "BOM PASTOR.webp",
        "CIEP.webp",
        "CITIG.webp",
        "EDUCACIONAL.webp",
        "ELSHADAI.webp",
        "EV3_ROBOTICA.webp",
        "FAPEMA.webp",
        "GOLDEN_SHOP.webp",
        "IEMA.webp",
        "IFMA.webp",
        "NA_MOCHILA.webp",
        "ROBO_CITY.webp",
        "ROBOEDUC.webp",
        "ROOBOT.webp",
        "SESI_SENAI.webp",
        "STEAM[.webp"
    ];

    return (
        <section className="sponsors-section" id="sponsors">
            <div className="sponsors-container">
                <h2 className="heading-2 text-white">Obrigadão a nossos patrocinadores</h2>

                <div className="sponsors-grid">
                    {/* O React vai percorrer a lista e gerar o HTML para cada imagem automaticamente */}
                    {sponsorLogos.map((logo, index) => (
                        <div className="sponsor-logo" key={index}>
                            <span>
                                <img
                                    src={`/logos/patrocinadores/${logo}`}
                                    alt={`Sponsor ${index + 1}`}
                                />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}