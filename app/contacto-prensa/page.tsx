import type { Metadata } from 'next';
import { Mail, Clock, CircleAlert as AlertCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Contacto y Prensa',
  description:
    'Contacta con el equipo de VotaVOX para dudas, correcciones o consultas de prensa. Iniciativa ciudadana independiente.',
};

export default function ContactoPrensa() {
  return (
    <PageLayout
      title="Contacto y Prensa"
      subtitle="Estamos disponibles para resolver dudas, atender correcciones y responder a consultas de medios de comunicación."
      breadcrumbs={[{ label: 'Contacto y Prensa' }]}
    >
      <div className="space-y-10 text-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: Mail,
              title: 'Email de contacto',
              value: 'contacto@votavox.es',
              note: 'Para consultas generales y correcciones',
            },
            {
              icon: Clock,
              title: 'Tiempo de respuesta',
              value: '3–5 días hábiles',
              note: 'Respondemos lo antes posible',
            },
            {
              icon: AlertCircle,
              title: 'Correcciones urgentes',
              value: 'Indica "CORRECCIÓN" en el asunto',
              note: 'Las priorizamos sobre el resto',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-gray-100 text-center"
              style={{ background: '#FAFAFA' }}
            >
              <item.icon size={22} className="mx-auto mb-3" style={{ color: '#1B5E20' }} />
              <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
              <p className="font-bold text-gray-900 text-sm mb-1">{item.value}</p>
              <p className="text-gray-400 text-xs">{item.note}</p>
            </div>
          ))}
        </div>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Motivos de contacto
          </h2>
          <ul className="space-y-3">
            {[
              {
                title: 'Correcciones de contenido',
                text: 'Si detectas un error factual, una afirmación sin fuente o información desactualizada, escríbenos indicando la sección y el problema.',
              },
              {
                title: 'Consultas de prensa',
                text: 'Periodistas o medios que deseen información sobre esta iniciativa son bienvenidos. Responderemos con la máxima transparencia posible.',
              },
              {
                title: 'Derechos RGPD',
                text: 'Aunque no procesamos datos en ningún servidor, si tienes alguna duda sobre la gestión de datos, escríbenos con el asunto "RGPD".',
              },
              {
                title: 'Propuestas y colaboraciones',
                text: 'Si quieres proponer mejoras, aportar testimonios verificados o colaborar de cualquier otra forma con la iniciativa.',
              },
              {
                title: 'Incidencias técnicas',
                text: 'Si encuentras un error en la web (enlace roto, formulario que no funciona, etc.), escríbenos con el asunto "BUG".',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex gap-4 p-4 rounded-lg border border-gray-100"
                style={{ background: '#FAFAFA' }}
              >
                <div
                  className="w-2 h-2 rounded-full mt-2 shrink-0"
                  style={{ background: '#1B5E20' }}
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Nota para medios
          </h2>
          <div
            className="p-5 rounded-xl text-sm text-gray-600 leading-relaxed"
            style={{ background: 'rgba(27,94,32,0.04)', border: '1px solid rgba(27,94,32,0.12)' }}
          >
            <p className="mb-3">
              VotaVOX es una iniciativa ciudadana independiente, sin vinculación oficial con el partido VOX. Si vais a publicar información sobre esta web, os pedimos que lo indiquéis claramente en vuestros artículos para evitar confusión con los canales oficiales del partido.
            </p>
            <p>
              Estamos disponibles para ofrecer declaraciones, aclarar puntos concretos y facilitar información sobre el funcionamiento técnico y editorial de este sitio.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
