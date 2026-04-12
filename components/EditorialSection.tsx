'use client';

import { motion } from 'framer-motion';

const PARAGRAPHS = [
  'No es una página de partido, ni una plataforma institucional, ni una campaña lanzada desde un gabinete de comunicación. Es una iniciativa ciudadana e independiente, promovida por personas anónimas que comparten una posición política concreta y han querido expresarla de manera pública, sencilla y sin intermediarios. La web nace con una intención clara: defender una opción electoral —VOX— desde fuera de su organización formal y hacerlo con transparencia.',
  'Su funcionamiento responde a esa misma lógica. Aquí no se pide afiliación, no se recaudan donaciones y no se obliga al visitante a identificarse. El contador que aparece en pantalla no pretende certificar apoyos reales, sino actuar como un recurso simbólico de participación individual. En otras palabras: esta página no organiza, no recluta y no registra; simplemente expresa una toma de posición política.',
  'Esa distinción es importante. Esta web no está vinculada orgánica ni financieramente a VOX, ni representa al partido en ningún sentido. Sus contenidos responden exclusivamente a la opinión de sus autores y deben entenderse como una manifestación de libertad ideológica y de expresión dentro del debate público. Las referencias al partido se producen en ese marco: el del comentario político y la adhesión ciudadana no oficial.',
  'En un tiempo dominado por la propaganda disfrazada y los mensajes calculados, esta iniciativa aspira precisamente a lo contrario: decir con claridad quién habla, desde dónde habla y por qué lo hace. Y a partir de ahí, dejar al lector ante lo esencial. Informarse, comparar y votar. Nada más. Pero tampoco nada menos.',
];

export default function EditorialSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-28 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span
            className="text-xs font-bold tracking-widest uppercase mb-4 block"
            style={{ color: '#AA151B' }}
          >
            Sobre esta iniciativa
          </span>

          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Qué es esta iniciativa
          </h2>

          <p
            className="text-lg font-semibold mb-10"
            style={{ color: '#1B5E20', fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Una web de apoyo político nacida fuera de las estructuras oficiales
          </p>

          <div className="space-y-6 text-gray-600 text-[1.05rem] leading-[1.85]">
            {PARAGRAPHS.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div
            className="mt-10 pt-8 border-t border-gray-200 flex items-center gap-3"
          >
            <div
              className="w-1 h-10 rounded-full shrink-0"
              style={{ background: '#AA151B' }}
            />
            <p className="text-sm text-gray-500 italic leading-relaxed">
              Este texto ha sido redactado por los promotores de la iniciativa y no representa la posición oficial de VOX ni de ninguno de sus órganos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
