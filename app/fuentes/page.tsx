import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Fuentes y Referencias',
  description:
    'Documentación y fuentes públicas que respaldan el contenido de VotaVOX: programas electorales, datos oficiales y referencias verificables.',
};

interface Source {
  category: string;
  items: Array<{ title: string; description: string; url?: string; note?: string }>;
}

const SOURCES: Source[] = [
  {
    category: 'Programa Electoral',
    items: [
      {
        title: 'Programa Electoral de VOX — Elecciones Generales',
        description:
          'Documento oficial con todas las propuestas del partido para las elecciones generales. Fuente primaria para las razones expuestas en esta web.',
        url: 'https://www.voxespana.es',
        note: 'Accesible en el sitio web oficial del partido.',
      },
    ],
  },
  {
    category: 'Datos Electorales Oficiales',
    items: [
      {
        title: 'Resultados Electorales — Ministerio del Interior',
        description:
          'Portal oficial del Gobierno de España con los resultados históricos y actuales de todas las elecciones generales, autonómicas y municipales.',
        url: 'https://infoelectoral.interior.gob.es',
      },
      {
        title: 'Boletín Oficial del Estado (BOE)',
        description:
          'Publicación oficial donde se recogen decretos, leyes y convocatorias electorales. Referencia para cualquier dato normativo.',
        url: 'https://www.boe.es',
      },
    ],
  },
  {
    category: 'Estudios y Estadísticas',
    items: [
      {
        title: 'Centro de Investigaciones Sociológicas (CIS)',
        description:
          'Organismo público que realiza barómetros y encuestas de opinión política en España. Fuente oficial para tendencias electorales.',
        url: 'https://www.cis.es',
      },
      {
        title: 'Instituto Nacional de Estadística (INE)',
        description:
          'Datos demográficos, económicos y sociales oficiales de España. Referencia para afirmaciones sobre economía, población e inmigración.',
        url: 'https://www.ine.es',
      },
      {
        title: 'Banco de España',
        description:
          'Estadísticas macroeconómicas, informes de deuda pública, inflación y análisis del sistema financiero español.',
        url: 'https://www.bde.es',
      },
    ],
  },
  {
    category: 'Documentación Parlamentaria',
    items: [
      {
        title: 'Congreso de los Diputados — Iniciativas Parlamentarias',
        description:
          'Base de datos de proposiciones de ley, preguntas, interpelaciones y enmiendas presentadas por todos los grupos parlamentarios.',
        url: 'https://www.congreso.es',
      },
      {
        title: 'Senado de España',
        description:
          'Archivo de sesiones plenarias, comisiones y votaciones del Senado. Fuente para verificar posiciones políticas históricas.',
        url: 'https://www.senado.es',
      },
    ],
  },
  {
    category: 'Medios de Referencia',
    items: [
      {
        title: 'EFE — Agencia de Noticias',
        description:
          'Principal agencia de noticias española. Para verificar afirmaciones sobre declaraciones políticas o hechos recientes.',
        url: 'https://www.efe.com',
      },
      {
        title: 'Europa Press',
        description:
          'Agencia de noticias de referencia en España para cobertura política nacional.',
        url: 'https://www.europapress.es',
      },
    ],
  },
  {
    category: 'Marco Legal',
    items: [
      {
        title: 'Ley Orgánica del Régimen Electoral General (LOREG)',
        description:
          'Marco normativo que regula las elecciones en España. Referencia para la explicación del proceso electoral.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672',
      },
      {
        title: 'Constitución Española',
        description:
          'Texto constitucional vigente, fundamental para entender los derechos, libertades y sistema de gobierno de España.',
        url: 'https://www.boe.es/biblioteca_juridica/abrir_pdf.php?id=PUB-LF-2023-111',
      },
    ],
  },
];

export default function Fuentes() {
  return (
    <PageLayout
      title="Fuentes y Referencias"
      subtitle="Todas las afirmaciones de esta web deben poder verificarse con fuentes públicas y oficiales. Aquí las encontrarás."
      breadcrumbs={[{ label: 'Fuentes y Referencias' }]}
    >
      <div className="space-y-10">
        <div className="p-4 rounded-lg text-sm text-gray-600" style={{ background: 'rgba(27,94,32,0.05)', border: '1px solid rgba(27,94,32,0.1)' }}>
          Esta página recoge las fuentes públicas que fundamentan el contenido de VotaVOX. No vinculamos a ninguna fuente de desinformación. Si detectas una afirmación sin respaldo verificable, puedes notificárnoslo a través de la{' '}
          <a href="/contacto-prensa" className="underline hover:text-green-700" style={{ color: '#1B5E20' }}>
            página de contacto
          </a>
          .
        </div>

        {SOURCES.map((source) => (
          <section key={source.category}>
            <h2
              className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100"
              style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
              {source.category}
            </h2>
            <div className="space-y-4">
              {source.items.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg border border-gray-100 hover:border-green-200 transition-colors"
                  style={{ background: '#FAFAFA' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug">{item.title}</h3>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-1 text-xs font-medium px-2 py-1 rounded transition-colors"
                        style={{ color: '#1B5E20', background: 'rgba(27,94,32,0.08)' }}
                        aria-label={`Abrir ${item.title} en nueva pestaña`}
                      >
                        Abrir <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.description}</p>
                  {item.note && (
                    <p className="text-gray-400 text-xs mt-2 italic">{item.note}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
