import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Transparencia',
  description:
    'Información transparente sobre cómo funciona VotaVOX: financiación, metodología del contador, almacenamiento de datos y equipo editorial.',
};

interface InfoBlockProps {
  title: string;
  items: Array<{ label: string; value: string }>;
}

function InfoBlock({ title, items }: InfoBlockProps) {
  return (
    <div className="rounded-xl border border-gray-100 overflow-hidden mb-6">
      <div
        className="px-5 py-3 text-sm font-bold text-white"
        style={{ background: '#1B5E20', fontFamily: 'Montserrat Alternates, sans-serif' }}
      >
        {title}
      </div>
      <div className="divide-y divide-gray-50">
        {items.map((item) => (
          <div key={item.label} className="px-5 py-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider sm:w-40 shrink-0 pt-0.5">
              {item.label}
            </span>
            <span className="text-gray-700 text-sm leading-relaxed">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Transparencia() {
  return (
    <PageLayout
      title="Transparencia"
      subtitle="Explicamos con total claridad cómo funciona esta iniciativa, quién la financia y cómo tratamos los datos."
      breadcrumbs={[{ label: 'Transparencia' }]}
    >
      <div className="space-y-8 text-gray-700">
        <InfoBlock
          title="Financiación"
          items={[
            { label: 'Fuente de ingresos', value: 'Ninguna. Esta web no genera ingresos ni recibe donaciones.' },
            { label: 'Costes', value: 'Los costes de hosting y dominio son asumidos personalmente por los creadores de la iniciativa.' },
            { label: 'Partidos políticos', value: 'No recibimos financiación de ningún partido político, institución pública ni empresa privada.' },
            { label: 'Publicidad', value: 'No existe publicidad ni monetización en este sitio.' },
          ]}
        />

        <InfoBlock
          title="Metodología del Contador"
          items={[
            {
              label: 'Qué mide',
              value:
                'El contador refleja el número de veces que un usuario ha completado su compromiso de voto simbólico en este sitio web.',
            },
            {
              label: 'Cómo funciona',
              value:
                'Cada compromiso suma +1 al contador almacenado en el localStorage del navegador del usuario. El total que ves es el acumulado de tu dispositivo más el valor base inicial (simbólico).',
            },
            {
              label: 'Servidor',
              value:
                'No existe ningún servidor que acumule compromisos globales en tiempo real. El número total visible es una estimación simbólica, no un dato verificado externamente.',
            },
            {
              label: 'Verificación',
              value:
                'Los datos no son auditables por terceros al estar almacenados localmente. No se puede garantizar su exactitud como estadística real.',
            },
            {
              label: 'Duplicados',
              value:
                'Técnicamente, un mismo usuario puede comprometerse más de una vez borrando los datos del navegador. No existe verificación de identidad.',
            },
          ]}
        />

        <InfoBlock
          title="Almacenamiento de Datos"
          items={[
            {
              label: 'Dónde se guardan',
              value:
                'Exclusivamente en el localStorage de tu navegador, en tu dispositivo. Nosotros no tenemos acceso a estos datos.',
            },
            {
              label: 'Qué se guarda',
              value:
                'NINGUNO. En esta página no hay formularios que pidan nombre, correo electrónico, teléfono, dirección, provincia ni ningún otro dato      personal. El único botón de "Comprométete a votar VOX" no solicita ningún dato; simplemente incrementa un contador simbólico que se guarda en el almacenamiento local de tu propio navegador (localStorage).',
            },
            {
              label: 'Servidores externos',
              value: 'Ninguno. No enviamos datos a servidores propios ni de terceros.',
            },
            {
              label: 'Cookies',
              value:
                'No usamos cookies propias de rastreo. Pueden existir cookies técnicas del proveedor de hosting.',
            },
            {
              label: 'Analytics',
              value:
                'No se utiliza Google Analytics, Meta Pixel ni ninguna herramienta de análisis que recopile datos personales.',
            },
            {
              label: 'Borrado',
              value:
                'Puedes eliminar todos tus datos en cualquier momento borrando los datos del sitio desde la configuración de privacidad de tu navegador.',
            },
          ]}
        />

        <InfoBlock
          title="Equipo Editorial"
          items={[
            {
              label: 'Autoría',
              value:
                'El contenido es redactado por los fundadores de la iniciativa, ciudadanos particulares sin credenciales periodísticas formales.',
            },
            {
              label: 'Revisión',
              value: 'No existe un proceso de revisión editorial formal. El contenido refleja la opinión de los autores.',
            },
            {
              label: 'Correcciones',
              value:
                'Corregimos errores cuando nos son notificados. Consulta nuestra política editorial para el proceso detallado.',
            },
            {
              label: 'Actualización',
              value: 'El contenido se actualiza sin periodicidad fija según la evolución del contexto político.',
            },
          ]}
        />

        <InfoBlock
          title="Testimonios"
          items={[
            {
              label: 'Origen',
              value:
                'Los testimonios incluidos en la web son ejemplos representativos, no testimonios verificados individualmente con consentimiento explícito documentado.',
            },
            {
              label: 'Moderación',
              value: 'No existe actualmente un sistema de testimonios enviados por usuarios.',
            },
          ]}
        />

        <div className="mt-8 p-5 rounded-xl text-sm text-gray-600 leading-relaxed" style={{ background: 'rgba(27,94,32,0.04)', border: '1px solid rgba(27,94,32,0.12)' }}>
          <strong className="text-gray-800 block mb-2" style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
            Nota sobre RGPD y datos políticos
          </strong>
          Los datos de opinión política son considerados datos sensibles según el Reglamento General de Protección de Datos (RGPD) de la UE. Dado que todos los datos se almacenan localmente y no los procesamos en ningún servidor, consideramos que no somos responsables del tratamiento de esos datos. No obstante, si tienes dudas legales específicas, te recomendamos consultar con un asesor jurídico especializado en protección de datos.
        </div>
      </div>
    </PageLayout>
  );
}
