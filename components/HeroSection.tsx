'use client';

import { useState, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useCountdown } from '@/hooks/useCountdown';
import { ELECTION_DATE } from '@/lib/constants';
import { ChevronDown, CircleAlert as AlertCircle } from 'lucide-react';

interface HeroSectionProps {
  onCommitClick: () => void;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-inner"
        style={{
          background: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.2)',
          fontFamily: 'Montserrat Alternates, sans-serif',
        }}
      >
        {mounted ? String(value).padStart(2, '0') : '00'}
      </div>
      <span className="text-white/70 text-xs mt-1.5 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection({ onCommitClick }: HeroSectionProps) {
  const { displayed, done } = useTypewriter('VOTAVOX 2027: UNA REFLEXIÓN CIUDADANA', 55, 600);
  const { days, hours, minutes, seconds } = useCountdown(ELECTION_DATE);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/archivo/images/espana_unida_con_vox.jpg)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,18,10,0.85) 0%, rgba(10,18,10,0.70) 60%, rgba(27,94,32,0.45) 100%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 flex flex-col items-center text-center">
        <div
          className="float-badge inline-flex items-center gap-2 text-white/90 text-xs font-semibold tracking-widest uppercase mb-8 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#4CAF50' }}
          />
          Iniciativa ciudadana independiente · España 2027
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 ${!done ? 'typewriter-cursor' : ''}`}
          style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
        >
          {displayed}
        </h1>

        <p className="text-lg sm:text-xl text-white max-w-2xl mb-8 leading-relaxed font-normal" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>
          No somos víctimas ni estamos perseguidos. Simplemente somos ciudadanos que discrepamos del consenso mediático en ciertos temas. No pretendemos tener razón en todo, pero creemos que estas propuestas merecen ser defendidas. Estamos abiertos al debate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#manifiesto"
            className="flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-lg text-base transition-all hover:bg-white/15"
            style={{ border: '2px solid rgba(255,255,255,0.45)' }}
          >
            Leer el manifiesto completo
            <ChevronDown size={18} aria-hidden="true" />
          </a>
          <button
            onClick={onCommitClick}
            className="btn-primary text-white font-bold px-8 py-4 rounded-lg text-base tracking-wide shadow-lg"
          >
            ¡Me comprometo con España!
          </button>
        </div>

        <div
          className="flex items-start gap-3 max-w-xl bg-black/30 border border-yellow-400/30 rounded-xl px-5 py-4 mb-12 text-left backdrop-blur-sm"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5 text-yellow-300" aria-hidden="true" />
          <p className="text-white/80 text-sm leading-relaxed">
            <strong className="text-white font-semibold">Aviso importante:</strong>{' '}
            Esta página no pertenece a VOX ni a ninguna institución oficial. Es una iniciativa independiente de simpatizantes.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-white/65 text-sm tracking-widest uppercase font-medium">
            Cada compromiso suma... {days} días para las elecciones
          </p>
          <div className="flex gap-3 sm:gap-5">
            <CountdownUnit value={days} label="días" />
            <div className="text-white/50 text-2xl font-light self-start mt-4">:</div>
            <CountdownUnit value={hours} label="horas" />
            <div className="text-white/50 text-2xl font-light self-start mt-4">:</div>
            <CountdownUnit value={minutes} label="min" />
            <div className="text-white/50 text-2xl font-light self-start mt-4">:</div>
            <CountdownUnit value={seconds} label="seg" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#disclaimer" className="text-white/40 hover:text-white/70 transition-colors">
          <ChevronDown size={28} aria-hidden="true" className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
