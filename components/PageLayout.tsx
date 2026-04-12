import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  children: React.ReactNode;
}

export default function PageLayout({ title, subtitle, breadcrumbs = [], children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <header
        className="border-b border-gray-100 bg-white/95 sticky top-0 z-50"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div
              className="w-7 h-7 rounded-sm flex items-center justify-center"
              style={{ background: '#1B5E20' }}
            >
              <span
                className="text-white font-bold text-xs"
                style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
              >
                V
              </span>
            </div>
            <span
              className="text-gray-900 font-bold text-sm group-hover:text-green-800 transition-colors"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              VotaVOX
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-gray-500 hover:text-green-700 transition-colors font-medium"
          >
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-xs text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-green-700 transition-colors">
              Inicio
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-green-700 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="mb-10 pb-8 border-b border-gray-100">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          <div
            className="mt-4 text-xs text-gray-400 flex items-center gap-2 px-3 py-2 rounded-md w-fit"
            style={{ background: 'rgba(170,21,27,0.05)', borderLeft: '3px solid #AA151B' }}
          >
            <span>{SITE_CONFIG.disclaimer}</span>
          </div>
        </div>

        <div className="prose-like">{children}</div>
      </div>

      <footer className="mt-16 border-t border-gray-100 bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} VotaVOX — Iniciativa ciudadana independiente.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { label: 'Inicio', href: '/' },
              { label: 'Quiénes Somos', href: '/quienes-somos' },
              { label: 'Transparencia', href: '/transparencia' },
              { label: 'Fuentes', href: '/fuentes' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contacto', href: '/contacto-prensa' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-green-700 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
