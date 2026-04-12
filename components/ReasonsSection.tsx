'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Shield, Lock, TrendingUp, Heart, Megaphone, Sprout, Chrome as Home, BookOpen, Ban, Star, ChevronDown } from 'lucide-react';
import { REASONS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Lock,
  TrendingUp,
  Heart,
  Megaphone,
  Sprout,
  Home,
  BookOpen,
  Ban,
  Star,
};

const EXTRA_DETAIL: Record<number, string> = {
  1: 'VOX es el único partido que defiende la unidad territorial de España sin ambigüedades, plantando cara al separatismo catalán y vasco y exigiendo la aplicación plena del artículo 155. La soberanía nacional no es negociable.',
  2: 'Incremento inmediato de efectivos policiales y de la Guardia Civil, endurecimiento de penas para reincidentes y cumplimiento íntegro de las condenas. La seguridad de los ciudadanos es la primera obligación del Estado.',
  3: 'Eliminación del impuesto de sucesiones y donaciones, reducción del IRPF para rentas bajas y medias, y supresión de trabas burocráticas que asfixian a los autónomos y pequeñas empresas españolas.',
  4: 'Deducciones fiscales directas por hijo a cargo, plan de ayudas a familias numerosas y monoparentales, y defensa de la objeción de conciencia de los profesionales sanitarios.',
  5: 'Derogación de la Ley de Memoria Democrática que criminaliza la historia, fin a las multas por opinar en redes sociales y protección real del derecho a la información veraz y plural.',
  6: 'Revisión del Pacto Verde Europeo para proteger al sector primario español, ayudas directas ante la competencia desleal de terceros países y defensa del uso responsable del agua en el campo.',
  7: 'Plan de acceso a vivienda para jóvenes españoles con garantías públicas de alquiler, persecución efectiva de la ocupación ilegal y fin a la regulación que paraliza la construcción de nueva vivienda asequible.',
  8: 'El castellano como lengua vehicular en todo el territorio nacional, cheque escolar para que las familias elijan libremente el centro educativo y revisión de los contenidos curriculares ideologizados.',
  9: 'Auditoría pública de todas las subvenciones a ONGs, partidos y medios de comunicación afines al Gobierno, eliminación de asesores y cargos de libre designación innecesarios y reducción del gasto político.',
  10: 'La tauromaquia, la caza y las tradiciones locales son patrimonio cultural de España. VOX las defiende frente a quienes quieren eliminar nuestra identidad por imposición ideológica.',
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ReasonsSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="razones" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: '#AA151B' }}
          >
            Por qué importa
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            10 Razones de Peso para Votar VOX en 2027
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Estas son las razones por las que esta iniciativa ciudadana apoya las posiciones de VOX.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="flex flex-col gap-3"
        >
          {REASONS.map((reason) => {
            const Icon = ICON_MAP[reason.icon] ?? Shield;
            const isOpen = openId === reason.id;

            return (
              <motion.div
                key={reason.id}
                variants={cardVariants}
                className={`rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-red-200 bg-red-50'
                    : 'border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-gray-100'
                }`}
              >
                <button
                  onClick={() => toggle(reason.id)}
                  className="w-full flex items-center gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-red-600' : 'bg-red-100'
                    }`}
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className={isOpen ? 'text-white' : 'text-red-700'}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span
                      className="text-xs font-bold tabular-nums shrink-0"
                      style={{ color: '#AA151B' }}
                    >
                      {String(reason.id).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-base font-bold text-gray-900 leading-snug"
                      style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                    >
                      {reason.title}
                    </h3>
                  </div>

                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[4.75rem]">
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                          {reason.description}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed border-t border-red-100 pt-3 mt-1">
                          {EXTRA_DETAIL[reason.id]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
