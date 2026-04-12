'use client';

import { motion, type Variants } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-gray-50 py-20 sm:py-24 lg:py-28">
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
            Voces reales
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Lo que dicen los españoles (con matices)
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Testimonios reales de ciudadanos que apoyan posiciones concretas, sin renunciar a su independencia de criterio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Quote
                size={28}
                aria-hidden="true"
                className="mb-4 opacity-15"
                style={{ color: '#1B5E20' }}
              />
              <p className="text-gray-700 text-base leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div>
                  <p
                    className="font-bold text-gray-900 text-sm"
                    style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
