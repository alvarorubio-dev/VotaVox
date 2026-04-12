'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const MODAL_TITLE_ID = 'privacy-modal-title';

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
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
                Política de Privacidad
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                <strong>Fecha de última actualización:</strong> {lastUpdate}
              </p>
              <p className="text-gray-500 text-sm italic mb-6">
                Esta política de privacidad es clara y transparente: no recogemos tus datos personales.
              </p>

              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">1. Responsable del tratamiento</h3>
                  <p>Esta página web es una iniciativa ciudadana independiente, sin personalidad jurídica, promovida por simpatizantes anónimos de VOX. <strong>No recogemos, almacenamos ni procesamos ningún dato personal.</strong> No existe ningún servidor, base de datos ni sistema de almacenamiento externo.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">2. ¿Qué datos recogemos?</h3>
                  <p><strong>NINGUNO.</strong> En esta página no hay formularios que pidan nombre, correo electrónico, teléfono, dirección, provincia ni ningún otro dato personal. El único botón de "Comprométete a votar VOX" no solicita ningún dato; simplemente incrementa un contador simbólico que se guarda en el almacenamiento local de tu propio navegador (localStorage).</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">3. El contador de apoyos (simulado y local)</h3>
                  <p className="mb-3">Al hacer clic en el botón de compromiso, se incrementa en 1 un número que se almacena exclusivamente en tu dispositivo (localStorage). Ese número no se envía a ningún servidor, no se comparte con otros usuarios, y solo es visible para ti. Cada visitante ve su propio contador independiente. No se utiliza para identificar a nadie, ni para enviar comunicaciones, ni para ningún otro fin.</p>
                  <p>Puedes borrar este contador en cualquier momento eliminando los datos de localStorage de tu navegador (Herramientas de desarrollador → Aplicación → Almacenamiento local).</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">4. Cookies y tecnologías de seguimiento</h3>
                  <p>Esta página no utiliza cookies de rastreo, Google Analytics, píxeles de Facebook ni ningún otro sistema de análisis de audiencia. Solo se cargan fuentes externas (Google Fonts, Tailwind CSS, FontAwesome) que pueden registrar direcciones IP de forma temporal por razones técnicas, pero no se utilizan para perfilado. No tenemos control sobre esas CDNs, pero no les cedemos ningún dato personal adicional.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">5. Cesión de datos a terceros</h3>
                  <p>Al no recoger datos, no se ceden a terceros bajo ningún concepto.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">6. Derechos de los usuarios (ARCO)</h3>
                  <p>Dado que no almacenamos datos personales, no es posible ejercer derechos de acceso, rectificación, cancelación u oposición sobre datos que no existen. Si consideras que por error hemos podido recoger algún dato, contacta a través de la dirección ficticia <code className="bg-gray-100 px-1 rounded text-xs">privacidad@apoyovox.iniciativa</code> y revisaremos el caso. (Esta dirección no está monitorizada de forma activa, pero se incluye por transparencia.)</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">7. Menores de edad</h3>
                  <p>Esta página no está dirigida a menores de 14 años. Al no recoger datos, no hay riesgo de tratamiento de datos de menores.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">8. Seguridad</h3>
                  <p>Al no existir servidor, no hay riesgo de brechas de datos externas. El contador almacenado en tu navegador es seguro mientras tu dispositivo esté libre de malware. Se recomienda no introducir información personal en ningún lugar de la página (no hay campos para hacerlo).</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">9. Cambios en esta política</h3>
                  <p>Podemos actualizar esta política para reflejar cambios legales o funcionales. La versión vigente es la que se muestra en este modal. Te recomendamos revisarla periódicamente.</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">10. Legislación aplicable</h3>
                  <p>Esta política se redacta en cumplimiento informativo de la LOPDGDD y el RGPD, aunque al no tratar datos personales, no le son de aplicación la mayoría de las obligaciones. Cualquier controversia se regirá por la legislación española.</p>
                </div>

                <p className="pt-2 border-t border-gray-100 font-semibold text-gray-800">
                  Al utilizar esta página, aceptas que el contador de apoyos es simbólico y local, y que no se recogen datos personales reales.
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
