'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { COUNTER_STORAGE_KEY, getCounterBase } from '@/lib/constants';
import { useAnimatedCount } from '@/hooks/useAnimatedCount';

interface ClosingCTAProps {
  onCommitClick: () => void;
}

export default function ClosingCTA({ onCommitClick }: ClosingCTAProps) {
  const [total, setTotal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const animatedCount = isInView ? total : 0;
  const displayCount = useAnimatedCount(animatedCount, 2000);
  const formatted = displayCount.toLocaleString('es-ES');

  useEffect(() => {
    const base = getCounterBase();
    const stored = parseInt(localStorage.getItem(COUNTER_STORAGE_KEY) || '0', 10);
    setTotal(base + stored);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden bg-gray-900"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(27,94,32,0.8) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(170,21,27,0.6) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            className="text-xs font-bold tracking-widest uppercase mb-6 block"
            style={{ color: '#4CAF50' }}
          >
            El momento de decidir
          </span>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            El momento de decidir{' '}
            <span style={{ color: '#4CAF50' }}>de forma informada</span>
          </h2>

          <div className="space-y-3 mb-8">
            <p className="text-xl sm:text-2xl text-white/65 font-light leading-relaxed">
              No votes por inercia ni por descarte.
            </p>
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed">
              Vota después de leer, de comparar, de debatir.
            </p>
            <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed">
              Vota con convicción. Vota con criterio.
            </p>
          </div>

          <p
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-12"
            style={{
              fontFamily: 'Montserrat Alternates, sans-serif',
              background: 'linear-gradient(135deg, #4CAF50 0%, #ffffff 50%, #AA151B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            VOTA VOX 2027
          </p>

          <motion.button
            onClick={onCommitClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 text-white font-extrabold px-12 py-5 rounded-xl text-lg sm:text-xl tracking-wide shadow-2xl transition-all"
            style={{
              background: '#AA151B',
              boxShadow: '0 10px 50px rgba(170,21,27,0.5)',
            }}
          >
            ¡Me comprometo con España!
            <span
              className="text-2xl font-black px-2 py-0.5 rounded-md"
              style={{ background: 'rgba(255,255,255,0.2)' }}
            >
              +1
            </span>
          </motion.button>

          <div className="mt-8">
            <p className="text-white/45 text-xs italic mb-2">
              Dato simbólico almacenado localmente en tu navegador. No vinculante. Sin envío de datos a terceros.
            </p>
            <p className="text-green-300 text-base font-semibold">
              +{formatted} ciudadanos ya han dicho <span className="text-white">SÍ</span>. ¿Y tú?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
