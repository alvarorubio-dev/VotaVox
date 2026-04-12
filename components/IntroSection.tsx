'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const RESTO_MANIFIESTO = [
  'Estos años me han enseñado que la política es más compleja que los eslóganes y que ninguna opción es perfecta. En la facultad convivo con compañeros de todas las sensibilidades, y eso me ha enriquecido. He aprendido a escuchar antes de opinar.',
  'También he aprendido que hay una diferencia entre informarse y ser adoctrinado. Durante años consumí los mismos medios, los mismos marcos de análisis. Hasta que decidí ampliar mi espectro y leer a autores con los que no estaba de acuerdo. Eso cambió mi forma de ver muchas cosas.',
  'No llegué a VOX por rabia ni por exclusión. Llegué después de analizar los programas electorales, de comparar propuestas sobre soberanía fiscal, gestión migratoria y defensa del Estado de Derecho. Y tras esa comparación, concluí que las posiciones de VOX en esos ámbitos concretos son las que mejor responden a lo que yo considero urgente.',
  '¿Estoy de acuerdo con todo su programa? No. Hay aspectos de su discurso que preferiría más matizados. Hay posiciones en materia medioambiental o de política internacional donde creo que el debate merece más profundidad. Pero en las cuestiones que para mí son nucleares, encuentro más coherencia en ellos que en otras opciones.',
  'Lo que me resulta inaceptable es la descalificación automática. Que por apoyar una posición de control migratorio me llamen xenófobo. Que por defender la unidad constitucional me llamen fascista. Ese tipo de debate no aporta nada. Y, paradójicamente, es lo que más me ha convencido de que hay que hacer oír esta voz con calma, con argumentos y sin complejos.',
  'Los ciudadanos que compartimos estas preocupaciones tenemos derecho a organizarnos y hacer oír nuestra voz. Esta iniciativa no es propaganda. Es el intento honesto de varios ciudadanos de articular un apoyo reflexivo a unas posiciones políticas que creemos merecen estar en el centro del debate.',
  'Si al leer esto no estás de acuerdo, me parece bien. Pero si al menos te ha hecho pensar, este manifiesto ha cumplido su función.',
];

export default function IntroSection() {
  return (
    <section id="manifiesto" className="bg-white py-20 sm:py-24 lg:py-28 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
        >
          <div className="flex-1 min-w-0">
            <span
              className="text-xs font-bold tracking-widest uppercase mb-4 block"
              style={{ color: '#AA151B' }}
            >
              Manifiesto
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              El manifiesto de la generación que reflexiona
            </h2>
            <p
              className="text-xl sm:text-2xl font-semibold mb-6"
              style={{ color: '#1B5E20', fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              Por qué apoyamos esta alternativa sin renunciar a la crítica
            </p>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-2">
              <p className="font-semibold text-gray-800">
                Una voz ciudadana, no un aparato de propaganda
              </p>
              <p>
                Soy estudiante de último año de Ciencias Políticas. Estos años me han enseñado que la política es más compleja que los eslóganes y que ninguna opción es perfecta. En la facultad convivo con compañeros de todas las sensibilidades. Después de años de lectura, debate y observación, he llegado a una conclusión personal.
              </p>
              <p>
                Las cuestiones que considero más urgentes —la defensa del Estado de Derecho, la gestión racional de la inmigración y la reducción de la carga fiscal— son las que VOX ha puesto en el centro del debate con mayor coherencia. No digo que sus soluciones sean las únicas posibles, pero los ciudadanos que compartimos estas preocupaciones tenemos derecho a organizarnos y hacer oír nuestra voz.
              </p>
              <p
                className="text-gray-900 font-semibold text-xl border-l-4 pl-5 py-1"
                style={{ borderColor: '#AA151B' }}
              >
                Un apoyo argumentado, no un seguidismo acrítico
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="resto" className="border-b border-gray-100">
                <AccordionTrigger
                  className="text-left text-base font-semibold text-gray-800 hover:text-gray-900 py-4 [&>svg]:shrink-0"
                  style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                >
                  Leer el manifiesto completo
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                    {RESTO_MANIFIESTO.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="w-full lg:w-[400px] shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/archivo/images/estudiante_de_ciencias_politicas.jpg"
                alt="Estudiante de Ciencias Políticas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(27,94,32,0.4) 0%, transparent 55%)' }}
              />
              <div className="absolute bottom-4 left-4">
                <span
                  className="inline-block text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(170,21,27,0.85)', backdropFilter: 'blur(4px)' }}
                >
                  Iniciativa ciudadana
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
