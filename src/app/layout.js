import './globals.css';
import '@/css/about.css';
import '@/css/feature.css';
import '@/css/hero.css';
import '@/css/highlight.css';
import '@/css/pricing.css';
import '@/css/privilege.css';
import '@/css/reset.css';
import '@/css/resultados.css';
import '@/css/schedule.css';
import '@/css/speakers.css';
import '@/css/stats.css';
import '@/css/who-for.css';

export const metadata = {
  title: 'FIRA Brasil',
  description: 'FIRA Nacional 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@500;700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}