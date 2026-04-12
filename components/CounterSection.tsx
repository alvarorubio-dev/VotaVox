'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { COUNTER_STORAGE_KEY, getCounterBase } from '@/lib/constants';
import { useAnimatedCount } from '@/hooks/useAnimatedCount';

interface CounterSectionProps {
  onCommitClick: () => void;
  refreshTrigger?: number;
}

export default function CounterSection({ onCommitClick, refreshTrigger }: CounterSectionProps) {
  const [total, setTotal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const animatedCount = isInView ? total : 0;
  const displayCount = useAnimatedCount(animatedCount, 2200);

  useEffect(() => {
    const base = getCounterBase();
    const stored = parseInt(localStorage.getItem(COUNTER_STORAGE_KEY) || '0', 10);
    setTotal(base + stored);
  }, [refreshTrigger]);

  const formatted = displayCount.toLocaleString('es-ES');

  return (
    <section
      id="compromisos"
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: '#1B5E20' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #4CAF50 0%, transparent 50%), radial-gradient(circle at 80% 50%, #AA151B 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            className="text-xs font-bold tracking-widest uppercase mb-4 block text-green-300"
          >
            Compromisos ciudadanos
          </span>

          <div
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-2 tabular-nums"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            +{formatted}
          </div>

          <p className="text-green-200 text-xl sm:text-2xl font-medium mb-3">
            ciudadanos ya han dicho <span className="text-white font-bold">SÍ</span>. ¿Y tú?
          </p>
          <p className="text-green-400/60 text-xs mb-10 max-w-md mx-auto italic">
            Dato simbólico agregado localmente en tu navegador. No vinculante. Sin almacenamiento en servidor ni envío de datos a terceros.
          </p>

          <motion.button
            onClick={onCommitClick}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 text-white font-bold px-10 py-4 rounded-lg text-base tracking-wide shadow-xl transition-all"
            style={{
              background: '#AA151B',
              boxShadow: '0 8px 40px rgba(170,21,27,0.5)',
            }}
          >
            ¡Me comprometo con España!
            <span className="text-xl font-bold">+1</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
