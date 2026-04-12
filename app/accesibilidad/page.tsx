import type { Metadata } from 'next';
import { Eye, Keyboard, Type, Contrast } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Accesibilidad',
  description:
    'Declaración de accesibilidad de VotaVOX. Medidas implementadas para garantizar una experiencia accesible para todos los usuarios.',
};

export default function Accesibilidad() {
  const measures = [
    {
      icon: Contrast,
      title: 'Contraste de color',
      text: 'Los textos principales sobre fondo claro cumplen el ratio mínimo de 4.5:1 recomendado por las WCAG 2.1. Los textos sobre fondos oscuros han sido validados manualmente.',
    },
    {
      icon: Keyboard,
      title: 'Navegación por teclado',
      text: 'Los elementos interactivos (botones, enlaces, formularios) son accesibles mediante navegación por teclado con la tecla Tab y activables con Enter o Espacio.',
    },
    {
      icon: Type,
      title: 'Tamaño de tipografía',
      text: 'El texto base es de al menos 16px. El interlineado es de 1.5 para el cuerpo del texto. Los usuarios pueden ampliar el texto hasta un 200% sin pérdida de contenido.',
    },
    {
      icon: Eye,
      title: 'Textos alternativos',
      text: 'Las imágenes con contenido informativo tienen atributos alt descriptivos. Las imágenes decorativas tienen alt vacío para ser ignoradas por los lectores de pantalla.',
    },
  ];

  return (
    <PageLayout
      title="Accesibilidad"
      subtitle="Nos comprometemos a que esta web sea usable por el mayor número de personas posible, independientemente de sus capacidades."
      breadcrumbs={[{ label: 'Accesibilidad' }]}
    >
      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Declaración de accesibilidad
          </h2>
          <p className="mb-3">
            VotaVOX está comprometida con la accesibilidad digital. Nos esforzamos por cumplir los criterios de conformidad del nivel AA de las{' '}
            <strong>Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1</strong>.
          </p>
          <p>
            Esta declaración ha sido preparada en base a una autoevaluación interna. No ha sido auditada por terceros especializados. Si encuentras barreras de accesibilidad, escríbenos para que podamos mejorar.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Medidas implementadas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {measures.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-gray-100"
                style={{ background: '#FAFAFA' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(27,94,32,0.08)' }}
                  >
                    <item.icon size={18} style={{ color: '#1B5E20' }} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Áreas de mejora conocidas
          </h2>
          <p className="mb-4">
            Reconocemos que hay aspectos que pueden mejorarse. Estamos trabajando en:
          </p>
          <ul className="space-y-2">
            {[
              'Añadir roles ARIA en componentes interactivos complejos (carrusel, modal).',
              'Mejorar los mensajes de error en formularios para lectores de pantalla.',
              'Validar la navegación completa por teclado en todos los dispositivos.',
              'Mejorar el foco visible en los botones durante la navegación por teclado.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                  style={{ background: '#1B5E20' }}
                />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Reportar un problema de accesibilidad
          </h2>
          <div
            className="p-5 rounded-xl text-sm text-gray-600"
            style={{ background: 'rgba(27,94,32,0.04)', border: '1px solid rgba(27,94,32,0.12)' }}
          >
            <p className="mb-3">
              Si encuentras alguna barrera de accesibilidad en esta web, puedes reportarla a través de nuestra{' '}
              <a href="/contacto-prensa" className="underline hover:text-green-700" style={{ color: '#1B5E20' }}>
                página de contacto
              </a>
              {' '}indicando en el asunto "ACCESIBILIDAD".
            </p>
            <p>
              Describe el problema encontrado, la sección o elemento afectado y el dispositivo o tecnología de asistencia que utilizas. Intentaremos resolverlo en el menor tiempo posible.
            </p>
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Tecnologías empleadas
          </h2>
          <p className="text-sm text-gray-600">
            Esta web está construida con Next.js y React, utilizando HTML semántico, ARIA labels donde es necesario y CSS responsivo. La compatibilidad ha sido probada en los principales navegadores (Chrome, Firefox, Safari, Edge) y dispositivos móviles (iOS y Android).
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
