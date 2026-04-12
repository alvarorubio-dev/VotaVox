import Link from 'next/link';
import { Youtube, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface FooterProps {
  onLegalClick: () => void;
  onPrivacyClick: () => void;
}

export default function Footer({ onLegalClick, onPrivacyClick }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src="/mapa_peninsula_iberica_espana.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
              >
                VotaVOX
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Iniciativa ciudadana independiente de simpatizantes de VOX en España.
            </p>
          </div>

          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              Inicio
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Razones para votar VOX', href: '/#razones' },
                { label: 'Compromisos', href: '/#compromisos' },
                { label: 'Testimonios', href: '/#testimonios' },
                { label: 'FAQ rápida', href: '/#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              Información
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Quiénes Somos', href: '/quienes-somos' },
                { label: 'Transparencia', href: '/transparencia' },
                { label: 'Fuentes y Referencias', href: '/fuentes' },
                { label: 'FAQ completa', href: '/faq' },
                { label: 'Contacto y Prensa', href: '/contacto-prensa' },
                { label: 'Política Editorial', href: '/politica-editorial' },
                { label: 'Accesibilidad', href: '/accesibilidad' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@votavox"
                target="_blank"
                rel="nofollow noopener"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t border-white/10 pt-8"
          style={{ borderLeftColor: '#AA151B' }}
        >
          <div
            className="bg-white/5 rounded-lg p-4 mb-6 border-l-4"
            style={{ borderLeftColor: '#AA151B' }}
          >
            <p className="text-gray-300 text-xs leading-relaxed">
              <strong className="text-white">Aviso legal: </strong>
              {SITE_CONFIG.disclaimer}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {year} VotaVOX — Hecho por españoles, para España.
            </p>
            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={onLegalClick}
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                Aviso Legal completo
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={onPrivacyClick}
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                Política de Privacidad
              </button>
              <span className="text-gray-600">|</span>
              <a
                href="#top"
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors underline underline-offset-2"
                aria-label="Volver arriba"
              >
                <ArrowUp size={12} />
                Volver arriba
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
