'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import TechSection from '@/components/TechSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyLVECSection from '@/components/WhyLVECSection'
import PricingSection from '@/components/PricingSection'
import ContactFormModal from '@/components/ContactFormModal'
import Footer from '@/components/Footer'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleBuyNowClick = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhySection />
      <TechSection />
      <HowItWorksSection />
      <WhyLVECSection />
      <PricingSection onBuyNowClick={handleBuyNowClick} />
      <Footer />
      <ContactFormModal isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  )
}