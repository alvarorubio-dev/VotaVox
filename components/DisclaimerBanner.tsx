import { TriangleAlert as AlertTriangle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function DisclaimerBanner() {
  return (
    <div
      id="disclaimer"
      className="bg-gray-50 border-l-4 py-4 px-4 sm:px-6 lg:px-8"
      style={{ borderLeftColor: '#AA151B' }}
    >
      <div className="max-w-5xl mx-auto flex items-start gap-3">
        <AlertTriangle
          size={18}
          aria-hidden="true"
          className="shrink-0 mt-0.5"
          style={{ color: '#AA151B' }}
        />
        <p className="text-gray-600 text-sm leading-relaxed">
          <strong className="text-gray-800 font-semibold">Aviso importante: </strong>
          {SITE_CONFIG.disclaimer}
        </p>
      </div>
    </div>
  );
}
