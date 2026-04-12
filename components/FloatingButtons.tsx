'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Twitter } from 'lucide-react';

export default function FloatingButtons() {
  const shareText = encodeURIComponent(
    '🇪🇸 Me he comprometido a votar VOX en las próximas elecciones. ¿Y tú? España no se negocia. #VotaVOX'
  );

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en WhatsApp"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ background: '#25D366' }}
      >
        <MessageCircle size={22} aria-hidden="true" />
      </motion.a>

      <motion.a
        href={`https://twitter.com/intent/tweet?text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartir en X"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ background: '#111827' }}
      >
        <Twitter size={20} aria-hidden="true" />
      </motion.a>
    </div>
  );
}
