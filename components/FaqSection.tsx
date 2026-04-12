'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Preguntas frecuentes
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Resolvemos tus dudas
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;
            return (
              <div key={index} className="faq-item">
                <h3 className="m-0 text-base font-normal">
                  <button
                    id={triggerId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-green-700"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span
                      className="font-semibold text-gray-800 text-sm sm:text-base"
                      style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-300 text-gray-400"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isOpen ? '#1B5E20' : undefined,
                      }}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
