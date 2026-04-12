'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  open: boolean;
  onClose: () => void;
}

const MODAL_TITLE_ID = 'legal-modal-title';

export default function LegalModal({ open, onClose }: LegalModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const lastUpdate = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }
    if (e.key !== 'Tab') return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            style={{ backdropFilter: 'blur(8px)' }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={MODAL_TITLE_ID}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onKeyDown={handleKeyDown}
          >
            <div
              className="h-1.5"
              style={{ background: 'linear-gradient(90deg, #1B5E20, #4CAF50, #AA151B)' }}
              aria-hidden="true"
            />

            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              <X size={16} aria-hidden="true" />
            </button>

            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              <h2
                id={MODAL_TITLE_ID}
                className="text-2xl font-extrabold text-gray-900 mb-1"
                style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
              >
                Aviso Legal y Condiciones de Uso
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                <strong>Fecha de última actualización:</strong> {lastUpdate}
              </p>

              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">1. Identificación de la Iniciativa</h3>
                  <p>Esta página web es una iniciativa ciudadana de carácter independiente, promovida por un grupo de simpatizantes anónimos que ejercen su derecho a la libertad de expresión y participación política. No constituye una persona jurídica ni tiene domicilio social a efectos legales. Para cualquier comunicación, puede contactar a través del formulario simulado de esta misma página (sin compromiso de respuesta).</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">2. Naturaleza no oficial y desvinculación absoluta</h3>
                  <p><strong>Esta página NO pertenece a VOX, ni a ningún partido político, institución oficial, administración pública, fundación o entidad vinculada al partido.</strong> Es una iniciativa independiente de simpatizantes que apoyan libremente las ideas de VOX. No existe relación contractual, orgánica, financiera ni de ningún tipo con VOX o sus representantes. El uso de nombres, marcas o símbolos de VOX se realiza en contexto de cita, comentario político o crítica, amparado por el derecho a la libertad de expresión (art. 20 CE) y no supone ningún tipo de patrocinio, endorsamiento o afiliación.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">3. Exención de responsabilidad sobre contenidos</h3>
                  <p>Los textos, opiniones, análisis y llamadas a la acción reflejados en esta página son responsabilidad exclusiva de los creadores de la iniciativa y no representan la posición oficial de VOX. La iniciativa no garantiza la exactitud, integridad o actualidad de la información, aunque se esfuerza por mantenerla veraz. El usuario es responsable de contrastar los datos con fuentes oficiales antes de tomar decisiones.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">4. Propiedad intelectual y derechos de autor</h3>
                  <p>Todo el contenido original (textos, diseño, código, imágenes generadas o editadas por la iniciativa) está protegido por derechos de autor. No se permite la reproducción total o parcial sin autorización expresa. Las imágenes utilizadas provienen de bancos de imágenes libres (Unsplash, Pixabay) o son de elaboración propia. Los logotipos y nombres de VOX son marcas registradas por el partido; su uso aquí se limita a fines informativos y de comentario político, sin ánimo comercial, y se ampara en el artículo 32 de la Ley de Propiedad Intelectual (cita e ilustración con fines de análisis político). Cualquier titular de derechos que considere vulnerados sus intereses puede contactar a través de los mecanismos simulados y se retirará el contenido de inmediato.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">5. Protección de datos (sin recogida de datos personales)</h3>
                  <p className="mb-3">Esta página <strong>NO recoge ni almacena ningún dato personal</strong> en servidor ni en navegador. No existen campos de nombre, email, provincia ni ningún otro formulario que solicite información identificable.</p>
                  <p className="mb-3">El único botón de "Comprométete a votar VOX" incrementa un contador simbólico que se guarda exclusivamente en el almacenamiento local (<code className="bg-gray-100 px-1 rounded text-xs">localStorage</code>) de tu dispositivo. Ese contador no contiene ningún dato personal (solo un número), no se transmite a ningún servidor, y no permite identificar al usuario. Cada visitante ve su propio contador independiente.</p>
                  <p className="mb-3">No se utilizan cookies de rastreo, Google Analytics, ni sistemas de analítica. Las únicas conexiones externas son a CDNs de fuentes y estilos (Tailwind, FontAwesome, Google Fonts), que pueden registrar direcciones IP de forma temporal por razones técnicas, pero no se utilizan para perfilado ni cesión de datos.</p>
                  <p>Al no tratar datos personales, esta iniciativa no está sujeta a la LOPDGDD ni al RGPD más allá de la obligación de transparencia que aquí se cumple. Si por error se llegara a almacenar algún dato personal, se eliminaría de inmediato.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">6. Ausencia de transacciones económicas y captación de fondos</h3>
                  <p><strong>Esta iniciativa NO solicita donaciones, crowdfunding, suscripciones de pago ni ningún tipo de contraprestación económica.</strong> No hay tienda, ni botones de "donar", ni cuentas bancarias asociadas. Cualquier intento de fraude que suplante esta página debe ser denunciado a las autoridades.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">7. Enlaces a terceros</h3>
                  <p>Esta página puede contener enlaces a sitios web externos (por ejemplo, noticias, redes sociales). La iniciativa no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">8. Legislación aplicable y jurisdicción</h3>
                  <p>Esta página se rige por la legislación española. Cualquier controversia derivada del uso de este sitio será competencia de los juzgados y tribunales de la ciudad de residencia del usuario o, a elección de la iniciativa, los de Madrid (España), siempre que el usuario sea consumidor.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">9. Modificaciones del aviso legal</h3>
                  <p>Nos reservamos el derecho de actualizar este aviso legal en cualquier momento. La versión vigente es la publicada en este modal. Se recomienda revisarlo periódicamente.</p>
                </div>

                <p className="pt-2 border-t border-gray-100 font-semibold text-gray-800">
                  Al utilizar esta página, el usuario acepta íntegramente las condiciones aquí expuestas.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="btn-primary text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
