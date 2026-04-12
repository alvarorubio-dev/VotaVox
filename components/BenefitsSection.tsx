'use client';

import { motion, type Variants } from 'framer-motion';

const BENEFITS = [
  {
    id: 1,
    title: 'Seguridad ciudadana',
    description: 'Mayor dotación de efectivos policiales, cumplimiento efectivo de penas y medidas basadas en evidencia para reducir la reincidencia.',
  },
  {
    id: 2,
    title: 'Reforma fiscal',
    description: 'Reducción de la carga tributaria sobre autónomos y rentas medias, simplificación administrativa y menos trabas para emprender.',
  },
  {
    id: 3,
    title: 'Acceso a vivienda',
    description: 'Garantías públicas para el primer alquiler de jóvenes, persecución de la ocupación ilegal y fomento de la construcción de vivienda asequible.',
  },
  {
    id: 4,
    title: 'Identidad y cultura',
    description: 'Reconocimiento del patrimonio histórico y cultural español sin instrumentalización política, desde una perspectiva crítica y equilibrada.',
  },
  {
    id: 5,
    title: 'Política familiar',
    description: 'Incentivos fiscales por hijo a cargo, conciliación laboral real y debate serio sobre el invierno demográfico que afecta al país.',
  },
  {
    id: 6,
    title: 'Tejido productivo',
    description: 'Protección del sector primario, reducción de la burocracia para pymes y revisión de regulaciones europeas que perjudican la competitividad española.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BenefitsSection({ onCommitClick }: { onCommitClick: () => void }) {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Propuestas concretas
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            ¿Qué propone VOX para tu día a día?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Políticas enfocadas en resolver problemas cotidianos reales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              className="reason-card bg-white rounded-xl border border-gray-100 p-6 hover:border-gray-200 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-bold text-gray-900 mb-2 leading-snug"
                  style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <button
            onClick={onCommitClick}
            className="btn-primary text-white font-extrabold px-10 py-4 rounded-xl text-base tracking-wide shadow-lg"
          >
            ¡Me comprometo con España!
          </button>
        </motion.div>
      </div>
    </section>
  );
}
