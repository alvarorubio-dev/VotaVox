import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import FaqPageContent from '@/components/FaqPageContent';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes',
  description:
    'Resolvemos todas tus dudas sobre VotaVOX: qué es esta iniciativa, si es oficial, cómo se tratan tus datos y qué significa el compromiso de voto.',
};

export default function FaqPage() {
  return (
    <PageLayout
      title="Preguntas Frecuentes"
      subtitle="Transparencia total. Si tienes alguna duda que no aparece aquí, escríbenos."
      breadcrumbs={[{ label: 'FAQ' }]}
    >
      <FaqPageContent />
    </PageLayout>
  );
}
