export const ELECTION_DATE = new Date('2027-07-23T08:00:00');
export const COUNTER_STORAGE_KEY = 'vox_compromisos_total';
export const COUNTER_BASE_KEY = 'vox_compromisos_base';

export function getCounterBase(): number {
  if (typeof window === 'undefined') return 9241;
  const stored = localStorage.getItem(COUNTER_BASE_KEY);
  if (stored) return parseInt(stored, 10);
  const base = Math.floor(Math.random() * (10500 - 8800 + 1)) + 8800;
  localStorage.setItem(COUNTER_BASE_KEY, String(base));
  return base;
}

export const SITE_CONFIG = {
  name: 'VotaVOX España',
  url: 'https://votavox.es',
  description:
    'Iniciativa ciudadana independiente de simpatizantes de VOX en España.',
  disclaimer:
    'Esta página no pertenece a VOX ni a ninguna institución oficial. Es una iniciativa independiente de simpatizantes financiada con fondos propios.',
};

export const REASONS = [
  {
    id: 1,
    title: 'Soberanía Nacional',
    description:
      'Consideramos que la unidad territorial es un bien jurídico que debe protegerse dentro del marco constitucional, sin ambigüedades ni negociaciones que pongan en cuestión la igualdad de todos los españoles.',
    icon: 'Shield',
  },
  {
    id: 2,
    title: 'Seguridad Real',
    description:
      'Basándonos en datos del Ministerio del Interior, apoyamos políticas de seguridad ciudadana más firmes, con más recursos para las fuerzas del orden y cumplimiento efectivo de las penas.',
    icon: 'Lock',
  },
  {
    id: 3,
    title: 'Bajada de Impuestos',
    description:
      'La presión fiscal actual presenta una estructura que penaliza desproporcionadamente a los autónomos y clases medias. Apoyamos una reforma que permita a los ciudadanos disponer de más renta.',
    icon: 'TrendingUp',
  },
  {
    id: 4,
    title: 'Defensa de la Vida',
    description:
      'Apoyamos un debate serio sobre políticas que incentiven la natalidad frente al invierno demográfico, con ayudas concretas a familias y una reflexión honesta sobre el valor de la vida.',
    icon: 'Heart',
  },
  {
    id: 5,
    title: 'Libertad Educativa',
    description:
      'Creemos en la pluralidad y rechazamos la imposición de visiones unilaterales en las aulas. Los padres deben poder elegir el modelo educativo para sus hijos.',
    icon: 'Megaphone',
  },
  {
    id: 6,
    title: 'España Rural',
    description:
      'Defendemos la protección del sector primario frente a regulaciones europeas desconectadas de la realidad agrícola española, y apoyamos la viabilidad económica del mundo rural.',
    icon: 'Sprout',
  },
  {
    id: 7,
    title: 'Vivienda y Juventud',
    description:
      'Priorizamos soluciones que faciliten el acceso a la primera vivienda sin distorsionar el mercado de alquiler, con garantías públicas para jóvenes y persecución efectiva de la ocupación ilegal.',
    icon: 'Home',
  },
  {
    id: 8,
    title: 'Eficiencia del Gasto',
    description:
      'Exigimos auditorías rigurosas para reducir el gasto político improductivo, eliminar duplicidades administrativas y garantizar que el dinero público se destine a servicios esenciales.',
    icon: 'BookOpen',
  },
  {
    id: 9,
    title: 'Inmigración Ordenada',
    description:
      'Defendemos un modelo migratorio legal y vinculado a las necesidades del mercado laboral y la capacidad real de integración, sin criminalizar a nadie pero con criterios claros y objetivos.',
    icon: 'Ban',
  },
  {
    id: 10,
    title: 'Orgullo Histórico',
    description:
      'Reivindicamos una memoria histórica que asuma nuestras luces y sombras sin complejos, que no sea instrumento de división política y que reconozca el valor de nuestra cultura común.',
    icon: 'Star',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Francisco L.',
    location: '58 años, electricista autónomo',
    text: 'Voté al PP toda la vida pero estoy harto de que me prometan bajar impuestos y luego suban el IVA. VOX me convence en algunas cosas. En otras no tanto, como en su postura sobre el clima. Pero al menos dicen lo que piensan.',
  },
  {
    id: 2,
    name: 'Carmen M.',
    location: '41 años, profesora de instituto',
    text: 'No me considero de derechas, pero me preocupa que en mi centro se traten ciertos temas de forma unilateral. Eso me ha acercado a sus posiciones sobre educación, aunque no comparto todo su programa.',
  },
  {
    id: 3,
    name: 'Javier O.',
    location: '34 años, autónomo de hostelería',
    text: 'Lo que me convenció fue su postura fiscal. Soy autónomo y cada mes es una guerra con Hacienda. No comparto todo lo que dicen en materia social, pero en economía me parece lo más sensato que hay.',
  },
  {
    id: 4,
    name: 'Rosa F.',
    location: '52 años, funcionaria',
    text: 'Nunca había votado a la derecha. Pero cuando vi cómo se gestionó la crisis territorial y la impunidad con la que se actuó, decidí que necesitaba un partido que pusiera límites claros. VOX los pone, aunque a veces con más estridencia de la necesaria.',
  },
  {
    id: 5,
    name: 'Marcos B.',
    location: '27 años, estudiante de ingeniería',
    text: 'En mi facultad están mal vistos si dices que te planteas votar a VOX. Eso solo me hizo querer informarme más por mi cuenta. Al final comparto sus posiciones en soberanía y gasto público, aunque en otros temas preferiría un tono más moderado.',
  },
  {
    id: 6,
    name: 'Elena V.',
    location: '45 años, agricultora en Extremadura',
    text: 'Lo que el Pacto Verde europeo nos está haciendo en el campo es una catástrofe. VOX es el único que lo dice alto y claro. En otras cosas no estoy tan de acuerdo, pero en lo que me afecta directamente me representan.',
  },
];

export const FAQS = [
  {
    question: '¿Esta página es oficial de VOX?',
    answer:
      'No. Es una iniciativa 100% independiente financiada por 12 ciudadanos con fondos propios. No tenemos ninguna vinculación oficial con el partido, sus candidatos ni sus instituciones.',
  },
  {
    question: '¿Por qué hacéis críticas al partido si lo apoyáis?',
    answer:
      'Porque somos ciudadanos libres, no un aparato de propaganda. Creemos que el apoyo más leal es el que se hace con espíritu crítico. Apoyamos posiciones concretas que compartimos, no una ideología ciega.',
  },
  {
    question: '¿Qué significa "comprometerse"?',
    answer:
      'Es una declaración personal de intención de voto. No es vinculante ni legal. Es simplemente una forma de sumar tu voz a la de otros ciudadanos que comparten preocupaciones similares.',
  },
  {
    question: '¿Qué datos personales recogéis?',
    answer:
      'Esta web no recoge ningún dato personal. No hay formularios, no hay registros y no enviamos ningún dato a servidores externos. Puedes navegar con total privacidad.',
  },
  {
    question: '¿Cómo puedo colaborar con esta iniciativa?',
    answer:
      'Puedes compartir la página con personas de tu entorno, difundir el manifiesto en redes sociales o escribirnos a través de la sección de contacto si quieres sumarte al grupo de ciudadanos que la mantiene.',
  },
  {
    question: '¿Cedéis mis datos a terceros?',
    answer:
      'No. Esta iniciativa no tiene relación comercial con ningún partido, empresa ni organización. Los datos que introduces en el formulario no se comparten con nadie ni se usan con fines publicitarios o electorales.',
  },
];

export const PROVINCES = [
  'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz',
  'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real',
  'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva',
  'Huesca', 'Islas Baleares', 'Jaén', 'La Coruña', 'La Rioja', 'Las Palmas',
  'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra',
  'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife',
  'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia',
  'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza', 'Ceuta',
];
