import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Política Editorial',
  description:
    'Cómo se redacta, revisa y corrige el contenido de VotaVOX. Criterios editoriales y proceso de actualización.',
};

export default function PoliticaEditorial() {
  return (
    <PageLayout
      title="Política Editorial"
      subtitle="Explicamos cómo se crea, revisa y actualiza el contenido de esta web y qué criterios seguimos."
      breadcrumbs={[{ label: 'Política Editorial' }]}
    >
      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Naturaleza del contenido
          </h2>
          <p className="mb-3">
            El contenido de VotaVOX es de carácter <strong>opinativo y político</strong>. Refleja el punto de vista de los ciudadanos que impulsan esta iniciativa, que son simpatizantes de VOX.
          </p>
          <p className="mb-3">
            No pretendemos ser un medio de comunicación neutral ni un órgano informativo imparcial. Somos una plataforma de movilización ciudadana que expresa de forma abierta su afinidad con un proyecto político concreto.
          </p>
          <p>
            Toda persona que visita esta web debe entender este contexto antes de interpretar el contenido.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Proceso de redacción
          </h2>
          <ol className="space-y-4 list-none">
            {[
              {
                step: '01',
                title: 'Redacción inicial',
                text: 'El contenido es redactado por los fundadores de la iniciativa. No existen redactores externos ni periodistas contratados.',
              },
              {
                step: '02',
                title: 'Verificación de datos',
                text: 'Los datos y estadísticas que se incluyen deben estar respaldados por fuentes públicas y verificables, que se enlazán en la página de Fuentes.',
              },
              {
                step: '03',
                title: 'Revisión interna',
                text: 'Otro miembro del equipo revisa el contenido antes de su publicación para detectar errores evidentes.',
              },
              {
                step: '04',
                title: 'Publicación',
                text: 'El contenido se publica sin periodicidad fija, en función de la relevancia política del momento.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span
                  className="text-2xl font-extrabold shrink-0 w-10 leading-none"
                  style={{ color: 'rgba(27,94,32,0.2)', fontFamily: 'Montserrat Alternates, sans-serif' }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Política de correcciones
          </h2>
          <p className="mb-4">
            Nos comprometemos a corregir cualquier error factual cuando nos sea notificado con evidencias. El proceso es el siguiente:
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Notificación',
                text: 'El usuario nos notifica el error a través de la página de contacto, indicando la sección afectada, la afirmación incorrecta y la fuente que lo contradice.',
              },
              {
                title: 'Evaluación',
                text: 'Evaluamos la notificación en un plazo máximo de 5 días hábiles.',
              },
              {
                title: 'Corrección',
                text: 'Si el error se confirma, lo corregimos e indicamos la fecha de actualización al pie de la sección afectada.',
              },
              {
                title: 'Respuesta',
                text: 'Informamos al usuario que notificó el error sobre la resolución.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg border-l-4"
                style={{ borderLeftColor: '#1B5E20', background: 'rgba(27,94,32,0.03)' }}
              >
                <p className="font-semibold text-gray-800 text-sm mb-1">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Actualización del contenido
          </h2>
          <p className="mb-3">
            El contenido se actualiza cuando hay cambios relevantes en el contexto político o cuando se convocan nuevas elecciones. No existe una fecha de actualización programada.
          </p>
          <p>
            Cuando una sección se actualiza de forma significativa, se indica la fecha de última modificación al pie de la misma.
          </p>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Lo que no publicamos
          </h2>
          <ul className="space-y-2">
            {[
              'Desinformación o datos fabricados.',
              'Contenido que incite al odio, la violencia o la discriminación.',
              'Afirmaciones sobre personas privadas sin su consentimiento.',
              'Información personal de terceros.',
              'Contenido que viole las leyes españolas o de la UE.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white text-xs"
                  style={{ background: '#AA151B', fontSize: '10px' }}
                >
                  ✕
                </span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}
