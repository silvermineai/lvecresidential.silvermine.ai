'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import WhySection from '@/components/WhySection'
import TechSection from '@/components/TechSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyLVECSection from '@/components/WhyLVECSection'
import PricingSection from '@/components/PricingSection'
import ContactFormModal from '@/components/ContactFormModal'
import Footer from '@/components/Footer'

const WebVitals = dynamic(() => import('@/components/WebVitals'), { ssr: false })

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
      <WebVitals />
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