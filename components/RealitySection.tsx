'use client';

import { motion, type Variants } from 'framer-motion';
import { Users, PiggyBank, BookOpen, MapPin, BarChart2, Landmark, type LucideIcon } from 'lucide-react';

const ITEMS = [
  {
    icon: 'Users',
    text: 'La política migratoria y su gestión basada en datos objetivos.',
  },
  {
    icon: 'PiggyBank',
    text: 'El impacto real de la burocracia y la carga fiscal sobre las familias trabajadoras.',
  },
  {
    icon: 'MapPin',
    text: 'La cuestión territorial debatida sin tabúes ni cesiones unilaterales.',
  },
  {
    icon: 'BarChart2',
    text: 'El gasto en estructuras políticas frente a las necesidades de los servicios esenciales.',
  },
  {
    icon: 'BookOpen',
    text: 'La pluralidad de enfoques en la educación pública y la libertad de los padres para elegir.',
  },
  {
    icon: 'Landmark',
    text: 'El modelo de financiación autonómica y su impacto en la cohesión territorial.',
  },
];

const iconMap: Record<string, LucideIcon> = {
  Users,
  PiggyBank,
  BookOpen,
  MapPin,
  BarChart2,
  Landmark,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function RealitySection() {
  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ background: '#0d1a0d' }}
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 50%, rgba(170,21,27,0.6) 0%, transparent 55%), radial-gradient(circle at 90% 50%, rgba(27,94,32,0.4) 0%, transparent 55%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase mb-3 block"
            style={{ color: '#AA151B' }}
          >
            Debate necesario
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Lo que creemos que el debate político debería abordar con más honestidad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ciertos temas merecen un tratamiento más serio y menos partidista.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-2xl overflow-hidden mb-14 shadow-2xl"
          style={{ height: '340px' }}
        >
          <img
            src="/archivo/images/el_rescate_de_espana copy.jpg"
            alt="Debate ciudadano sobre España"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(13,26,13,0.3) 0%, rgba(13,26,13,0.70) 100%)' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-white text-2xl sm:text-3xl font-extrabold text-center px-6 max-w-2xl"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif', textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}
            >
              Estos temas merecen un debate honesto, sin descalificaciones automáticas.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(170,21,27,0.15)' }}
                >
                  <Icon size={18} aria-hidden="true" style={{ color: '#f87171' }} />
                </div>
                <p className="text-gray-300 text-base leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p
            className="text-xl sm:text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Creemos que VOX es la fuerza política que ha puesto estos temas en el centro del debate con mayor coherencia.
          </p>
          <p className="text-gray-400 text-base">
            No porque tenga todas las respuestas, sino porque al menos plantea las preguntas correctas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
