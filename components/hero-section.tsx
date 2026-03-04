"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current || !contentRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height))

      const translateY = scrollProgress * 120
      const scale = 1 + scrollProgress * 0.15
      const blur = scrollProgress * 12
      imageRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
      imageRef.current.style.filter = `blur(${blur}px)`

      const contentOpacity = 1 - scrollProgress * 2.5
      const contentBlur = scrollProgress * 20
      const contentY = scrollProgress * -80
      contentRef.current.style.opacity = `${Math.max(0, contentOpacity)}`
      contentRef.current.style.filter = `blur(${Math.max(0, contentBlur)}px)`
      contentRef.current.style.transform = `translate3d(0, ${contentY}px, 0)`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0,0,0) scale(1)" }}
      >
        <img
						src="/images/hero.jpg"
						alt=""
						className="h-full w-full object-cover object-[65%_20%]"
					/>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/70" />
      </div>

      {/* --- CONTENEDOR DE TEXTOS (Arribita) --- */}
      <div
        ref={contentRef}
        className="absolute top-24 left-0 right-0 z-10 mx-auto flex max-w-[90%] md:max-w-4xl flex-col items-center text-center will-change-transform"
      >
					<div className="mb-4 flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm">
						<span className="text-[10px] sm:text-xs font-medium text-primary-foreground/90">
							MDVR
						</span>
					</div>
					<h1 className="mb-4 text-2xl font-extrabold tracking-tighter text-white sm:text-4xl md:text-5xl">
						Llamados a traer el poder sobrenatural de Dios a esta generación
					</h1>
					<p className="max-w-2xl text-base leading-relaxed text-primary-foreground/80 text-pretty sm:text-xl">
						
					</p>
				</div>

				{/* --- CONTENEDOR DE BOTONES (A los lados, abajo) --- */}
				<div className="absolute bottom-32 left-0 right-0 z-10 flex w-full flex-row items-center justify-center gap-3 px-4 sm:gap-6">
					<a
						
					
						href="#horarios"
						className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-primary-foreground/20 hover:-translate-y-1 sm:px-8 sm:py-4 sm:text-base w-full sm:w-auto"
					>
						Ver Horarios
					</a>
				</div>
       <div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#horarios" aria-label="Desplazarse hacia abajo">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </a>
      </div>
    </section>
  )
}
