import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Quiénes Somos',
  description:
    'Gente normal que ha decidido hablar. Conoce quiénes somos y qué nos mueve. Una iniciativa ciudadana independiente de simpatizantes de VOX.',
};

export default function QuienesSomos() {
  return (
    <PageLayout
      title="QUIÉNES SOMOS"
      subtitle="Gente normal que ha decidido hablar."
      breadcrumbs={[{ label: 'Quiénes Somos' }]}
    >
      <div className="space-y-12 text-gray-700 leading-relaxed">

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            El origen
          </h2>
          <div className="space-y-4">
            <p>
              Esta web no nació en una reunión de partido ni en una asamblea de militantes. Nació del encuentro paulatino de 12 ciudadanos que, como tantos españoles, sentían que su voz independiente no estaba representada.
            </p>
            <p>
              Entre estos 12 fundadores hay una arquitecta que ve cómo la burocracia asfixia su trabajo. Un estudiante de Derecho que no quiere avergonzarse de su bandera. Una profesora que se preocupa por lo que enseñan a sus alumnos. Un autónomo que está harto de trabajar para pagar impuestos que siente que se gastan en propaganda política.
            </p>
            <p>
              Nos conocimos debatiendo. A veces estamos de acuerdo, a veces no. Pero compartimos una convicción profunda: España está en un momento crítico y VOX es, hoy por hoy, la fuerza política que plantea con mayor claridad las soluciones que necesitamos.
            </p>
          </div>
        </section>

        <section>
          <blockquote
            className="border-l-4 pl-6 py-1 space-y-0"
            style={{ borderColor: '#1B5E20' }}
          >
            <p
              className="text-gray-800 text-base sm:text-lg leading-relaxed italic"
              style={{ background: 'rgba(27,94,32,0.04)', borderRadius: '0 8px 8px 0', padding: '1.25rem 1.5rem' }}
            >
              "Eso no significa que seamos seguidores acríticos. Entre nosotros hay quien critica la gestión del partido en algunos ayuntamientos. Hay quien echa de menos propuestas más ambiciosas en medio ambiente. Hay quien cree que el tono debería ser más conciliador. Pero también compartimos la certeza de que, ante la alternativa actual, la opción es clara."
            </p>
          </blockquote>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            Cómo funcionamos
          </h2>
          <div className="space-y-4">
            <p>
              No somos una organización. Somos una red de 12 contactos iniciales que se ha ido ampliando. Cada uno aporta lo que sabe. Algunos redactan los textos (desde la experiencia en Ciencias Políticas o Derecho). Otros gestionan la tecnología. Otros traducen los datos económicos a un lenguaje humano. Otros simplemente contactan con gente de su entorno.
            </p>
            <p>
              No cobramos por esto. No tenemos presupuesto institucional. Solo tenemos convencimiento.
            </p>
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-gray-900 mb-5"
            style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
          >
            ¿Por qué hacemos esta web?
          </h2>
          <div className="space-y-4">
            <p className="font-semibold text-gray-800">
              Porque sentíamos que faltaba una voz como la nuestra.
            </p>
            <p>
              Si entras en la web de VOX, encontrarás el programa oficial. Si escuchas sus discursos, oirás las consignas. Todo eso es legítimo. Pero nos preguntamos: ¿dónde está la voz del votante independiente que piensa por sí mismo? Esa voz intentamos ser nosotros.
            </p>
            <p>
              Hacemos esta web porque creemos que hay miles de españoles que piensan como nosotros. Que a veces tienen reparos en decirlo en su entorno porque creen que defender ciertas ideas les convertirá en el blanco de prejuicios. Queremos demostrarles que no están solos. Que hay gente normal, como tú y como yo, que comparte sus preocupaciones.
            </p>
            <p>
              Hacemos esta web porque queremos un debate basado en la realidad. Hablamos de la economía de quien no llega a fin de mes, de la gestión migratoria en los barrios, y del orgullo de pertenencia a nuestro país sin complejos. Y queremos hablar de ello con datos, argumentos y honestidad, sin insultos.
            </p>
          </div>
        </section>

        <section>
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'rgba(27,94,32,0.05)', border: '1px solid rgba(27,94,32,0.12)' }}
          >
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
              Hacemos esto por una razón muy sencilla: porque nos importa España. Nos importa lo suficiente como para dedicarle nuestro tiempo libre y recursos propios.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Si tú también te sientes así, esta web es tuya. Únete. Comparte. Debate.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg text-sm tracking-wide transition-all hover:opacity-90"
              style={{ background: '#AA151B' }}
            >
              Volver al inicio y firmar el compromiso
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
