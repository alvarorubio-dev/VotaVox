'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import IntroSection from '@/components/IntroSection';
import ReasonsSection from '@/components/ReasonsSection';
import BenefitsSection from '@/components/BenefitsSection';
import RealitySection from '@/components/RealitySection';
import CounterSection from '@/components/CounterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import EditorialSection from '@/components/EditorialSection';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import CommitmentModal from '@/components/CommitmentModal';
import LegalModal from '@/components/LegalModal';
import PrivacyModal from '@/components/PrivacyModal';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [counterRefresh, setCounterRefresh] = useState(0);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const openLegal = useCallback(() => setLegalOpen(true), []);
  const closeLegal = useCallback(() => setLegalOpen(false), []);
  const openPrivacy = useCallback(() => setPrivacyOpen(true), []);
  const closePrivacy = useCallback(() => setPrivacyOpen(false), []);
  const handleCommitted = useCallback(() => {
    setCounterRefresh((n) => n + 1);
  }, []);

  return (
    <>
      <Header onCommitClick={openModal} />
      <main id="main-content">
        <HeroSection onCommitClick={openModal} />
        <DisclaimerBanner />
        <IntroSection />
        <ReasonsSection />
        <BenefitsSection onCommitClick={openModal} />
        <RealitySection />
        <CounterSection onCommitClick={openModal} refreshTrigger={counterRefresh} />
        <TestimonialsSection />
        <FaqSection />
        <EditorialSection />
        <ClosingCTA onCommitClick={openModal} />
      </main>
      <Footer onLegalClick={openLegal} onPrivacyClick={openPrivacy} />
      <FloatingButtons />
      <CommitmentModal
        open={modalOpen}
        onClose={closeModal}
        onCommitted={handleCommitted}
      />
      <LegalModal open={legalOpen} onClose={closeLegal} />
      <PrivacyModal open={privacyOpen} onClose={closePrivacy} />
    </>
  );
}
