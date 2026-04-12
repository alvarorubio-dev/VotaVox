'use client';

import { useState, useEffect } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onCommitClick: () => void;
}

export default function Header({ onCommitClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Razones', href: '#razones' },
    { label: 'Compromisos', href: '#compromisos' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Quiénes somos', href: '/quienes-somos' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #AA151B, #4CAF50)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-14' : 'h-20'
            }`}
          >
            <a href="#" className="flex items-center gap-2 group">
              <div
                className={`transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-9 h-9'} flex items-center justify-center`}
              >
                <img
                  src="/mapa_peninsula_iberica_espana.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`font-bold tracking-tight transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-900 text-base'
                    : 'text-white text-lg drop-shadow-sm'
                }`}
                style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
              >
                VotaVOX
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-green-700 ${
                    scrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contacto-prensa"
                className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-md inline-block"
              >
                Contacto
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contacto-prensa"
                onClick={() => setMenuOpen(false)}
                className="btn-primary block text-center w-full text-white text-sm font-semibold px-4 py-2.5 rounded-md mt-2"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
