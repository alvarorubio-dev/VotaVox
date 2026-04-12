'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CircleCheck as CheckCircle } from 'lucide-react';
import { COUNTER_STORAGE_KEY } from '@/lib/constants';

interface CommitmentModalProps {
  open: boolean;
  onClose: () => void;
  onCommitted: () => void;
}

const ALREADY_COMMITTED_KEY = 'vox_ya_comprometido';
const MODAL_TITLE_ID = 'commitment-modal-title';

export default function CommitmentModal({ open, onClose, onCommitted }: CommitmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [alreadyDone, setAlreadyDone] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement;
      setAlreadyDone(!!localStorage.getItem(ALREADY_COMMITTED_KEY));
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
      setTimeout(() => { buttonRef.current?.focus(); }, 100);
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
        'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

  const handleCommit = async () => {
    const current = parseInt(localStorage.getItem(COUNTER_STORAGE_KEY) || '0', 10);
    localStorage.setItem(COUNTER_STORAGE_KEY, String(current + 1));
    localStorage.setItem(ALREADY_COMMITTED_KEY, '1');

    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1B5E20', '#4CAF50', '#ffffff', '#AA151B'],
    });

    setSubmitted(true);
    onCommitted();
  };

  const shareText = encodeURIComponent(
    '🇪🇸 Me he comprometido a votar VOX en las próximas elecciones. ¿Y tú? España no se negocia. #VotaVOX'
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
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

            <div className="p-6 sm:p-8">
              {submitted || alreadyDone ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle size={60} className="mx-auto mb-5" style={{ color: '#1B5E20' }} aria-hidden="true" />
                  <h3
                    id={MODAL_TITLE_ID}
                    className="text-2xl font-extrabold text-gray-900 mb-3"
                    style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                  >
                    {alreadyDone && !submitted ? '¡Ya estás comprometido!' : '¡Gracias por tu compromiso!'}
                  </h3>
                  <p className="text-gray-500 mb-2">
                    {alreadyDone && !submitted
                      ? 'Ya registramos tu compromiso simbólico. Comparte el mensaje para multiplicar el impacto.'
                      : 'Gracias por tu compromiso simbólico. ¡España te necesita!'}
                  </p>
                  <p className="text-gray-400 text-xs mb-8">
                    Tu gesto cuenta. Comparte y anima a más españoles a unirse.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-white font-semibold px-6 py-3 rounded-lg text-sm inline-flex items-center justify-center gap-2"
                    >
                      Compartir en X
                    </a>
                    <a
                      href={`https://wa.me/?text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold px-6 py-3 rounded-lg text-sm inline-flex items-center justify-center gap-2"
                      style={{ background: '#25D366' }}
                    >
                      Compartir en WhatsApp
                    </a>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'linear-gradient(135deg, #1B5E20, #4CAF50)' }}
                    aria-hidden="true"
                  >
                    <span className="text-white text-2xl font-black">🇪🇸</span>
                  </div>

                  <h3
                    id={MODAL_TITLE_ID}
                    className="text-2xl font-extrabold text-gray-900 mb-2"
                    style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}
                  >
                    Comprométete con España
                  </h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    No necesitamos tus datos personales. Tu gesto simbólico cuenta.
                  </p>

                  <button
                    ref={buttonRef}
                    onClick={handleCommit}
                    className="w-full text-white font-extrabold py-4 rounded-xl text-sm tracking-wide shadow-lg transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 mb-4"
                    style={{
                      background: 'linear-gradient(135deg, #AA151B 0%, #cc1e26 100%)',
                      boxShadow: '0 8px 30px rgba(170,21,27,0.4)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    SÍ, ME COMPROMETO A VOTAR VOX
                  </button>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    ⚠️ Este compromiso es simbólico y se almacena solo en tu navegador. No recogemos datos reales ni te enviaremos correos.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
