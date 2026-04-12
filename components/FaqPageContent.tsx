'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FULL_FAQS: FaqItem[] = [
  {
    category: 'Sobre esta web',
    question: '¿Quién gestiona esta web?',
    answer:
      'Esta web es creada y mantenida por un grupo de ciudadanos particulares, simpatizantes de VOX, sin ánimo de lucro. No existe una persona jurídica formal ni un responsable editorial acreditado detrás de esta iniciativa.',
  },
  {
    category: 'Sobre esta web',
    question: '¿Es una página oficial de VOX?',
    answer:
      'No. Esta es una iniciativa ciudadana completamente independiente de simpatizantes. No tenemos ninguna vinculación oficial, contractual ni orgánica con el partido VOX, sus candidatos ni ninguna institución relacionada.',
  },
  {
    category: 'Sobre esta web',
    question: '¿Qué relación tiene con VOX?',
    answer:
      'Ninguna relación formal. Los creadores de esta web son simpatizantes del partido, pero actúan a título personal. VOX no ha encargado, supervisado ni avalado el contenido de este sitio.',
  },
  {
    category: 'El compromiso de voto',
    question: '¿Qué significa comprometerse?',
    answer:
      'Comprometerte es una declaración personal, simbólica y completamente no vinculante de tu intención de voto. No tiene validez legal, no implica afiliación al partido y no te obliga a nada. Es simplemente una forma de expresar tu apoyo y unirte a una comunidad de ciudadanos que comparten esta visión.',
  },
  {
    category: 'El compromiso de voto',
    question: '¿Puedo revocar mi compromiso?',
    answer:
      'Sí. Puedes eliminar tu compromiso en cualquier momento borrando los datos del sitio web desde la configuración de privacidad de tu navegador (Ajustes → Privacidad → Datos del sitio).',
  },
  {
    category: 'El compromiso de voto',
    question: '¿El compromiso implica afiliación a VOX?',
    answer:
      'No. Comprometerse en esta web no te afilia al partido, no te incluye en ninguna lista de militantes y no tiene ninguna consecuencia para tu relación con VOX como organización.',
  },
  {
    category: 'Privacidad y datos',
    question: '¿Es seguro comprometerse aquí?',
    answer:
      'Sí. No enviamos ningún dato a ningún servidor externo.',
  },
  {
    category: 'Privacidad y datos',
    question: '¿Dónde se guardan mis datos?',
    answer:
      'Exclusivamente en tu dispositivo, en el almacenamiento local del navegador (localStorage). No existe ningún servidor que recopile o procese esta información.',
  },
  {
    category: 'Privacidad y datos',
    question: '¿Podéis acceder a mi nombre o email?',
    answer:
      'No. Al no tener ningún servidor ni backend, técnicamente es imposible que accedamos a los datos.',
  },
  {
    category: 'Privacidad y datos',
    question: '¿Se comparten mis datos con terceros?',
    answer:
      'No. No cedemos datos a terceros, no usamos Google Analytics, Meta Pixel ni ninguna herramienta de rastreo. No hay publicidad basada en comportamiento en este sitio.',
  },
  {
    category: 'Privacidad y datos',
    question: '¿Cómo puedo eliminar mi información?',
    answer:
      'Ve a la configuración de privacidad de tu navegador → Datos del sitio → Busca el dominio de esta web y elimínalo. Esto borrará todos los datos guardados localmente.',
  },
  {
    category: 'El contador',
    question: '¿Cómo se verifica el contador?',
    answer:
      'El contador no es auditable por terceros porque los datos son locales. El número que ves es una cifra simbólica que combina un valor inicial representativo con el acumulado de compromisos en tu dispositivo. No representa un dato estadístico verificado.',
  },
  {
    category: 'El contador',
    question: '¿Es real el número de compromisos?',
    answer:
      'Es un dato simbólico, no verificado externamente. No podemos asegurar que represente exactamente el número de personas distintas comprometidas, ya que el sistema es local y sin autenticación.',
  },
  {
    category: 'Participación',
    question: '¿Puedo compartir mi compromiso?',
    answer:
      'Sí. Tras comprometerte, puedes compartir un mensaje personalizado en X (Twitter), WhatsApp o Telegram para invitar a otros ciudadanos a unirse.',
  },
  {
    category: 'Participación',
    question: '¿Cómo puedo colaborar con esta iniciativa?',
    answer:
      'La forma más directa es compartir esta web con personas de tu entorno que compartan estos valores. Si quieres colaborar de otra forma, escríbenos a través de la página de contacto.',
  },
  {
    category: 'Legal',
    question: '¿Esta web cumple el RGPD?',
    answer:
      'Al no recopilar datos en ningún servidor, consideramos que no somos responsables del tratamiento de datos personales en el sentido del RGPD. Los datos se quedan en tu dispositivo bajo tu control exclusivo. No obstante, si tienes dudas legales específicas, consulta con un asesor especializado.',
  },
  {
    category: 'Legal',
    question: '¿Cómo contactar con los responsables?',
    answer:
      'Puedes contactarnos a través de nuestra página de contacto con el email disponible. Respondemos en un plazo de 3-5 días hábiles.',
  },
];

const categories = Array.from(new Set(FULL_FAQS.map((f) => f.category)));

export default function FaqPageContent() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? FULL_FAQS.filter((f) => f.category === activeCategory)
    : FULL_FAQS;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            !activeCategory
              ? 'text-white'
              : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
          }`}
          style={!activeCategory ? { background: '#1B5E20' } : {}}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'text-white'
                : 'text-gray-500 bg-gray-100 hover:bg-gray-200'
            }`}
            style={activeCategory === cat ? { background: '#1B5E20' } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        {filtered.map((faq, index) => {
          const globalIndex = FULL_FAQS.indexOf(faq);
          const isOpen = open === globalIndex;
          return (
            <div key={globalIndex} className="faq-item">
              <button
                onClick={() => setOpen(isOpen ? null : globalIndex)}
                className="w-full flex items-start justify-between px-5 py-4 text-left gap-4 transition-colors"
                aria-expanded={isOpen}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider mr-2" style={{ color: '#AA151B' }}>
                    {faq.category}
                  </span>
                  <span className="font-semibold text-gray-800 text-sm block mt-0.5">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className="shrink-0 mt-0.5 text-gray-400 transition-transform duration-300"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: isOpen ? '#1B5E20' : undefined }}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
