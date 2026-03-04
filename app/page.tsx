"use client"

import { MissionVisionSection } from "@/components/mission-vision-section"
import { useState } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScheduleSection } from "@/components/schedule-section"
import { ServicesSection } from "@/components/services-section"
import { LaptopSection } from "@/components/laptop-section"
import { PastorsSection } from "@/components/pastors-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <main
        style={{
          opacity: showSplash ? 0 : 1,
          transition: "opacity 0.5s ease-in",
        }}
      >
        <Navbar />
        <HeroSection />
        <MissionVisionSection />
        <ScheduleSection />
        <ServicesSection />
        <LaptopSection />
        <PastorsSection />
        <LocationSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  )
}
