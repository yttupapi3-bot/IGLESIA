"use client"

import { useEffect, useRef } from "react"
import { MapPin, Navigation, Clock, Phone, Home } from "lucide-react"

export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const items = sectionRef.current?.querySelectorAll(".fade-up")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ubicacion"
      className="relative overflow-hidden bg-secondary/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="fade-up mx-auto max-w-2xl text-center opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
            Encuéntranos
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Nuestra Ubicación
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Te esperamos con los brazos abiertos. Ven a visitarnos y sé parte de nuestra familia.
          </p>
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-5">
          {/* Map placeholder */}
          <div className="fade-up overflow-hidden rounded-2xl border border-border/50 bg-card opacity-0 transition-all duration-700 translate-y-8 lg:col-span-3 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100">
            <div className="relative h-full min-h-[350px] sm:min-h-[420px]">
              <iframe
								title="Ubicación de la iglesia"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4851.942428852234!2d-85.85696712412593!3d11.475246245913597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f74496d85c356f7%3A0x7da14bf10a344978!2sMinisterio%20internacional%20Jesucristo%20manantial%20de%20vida%20-%20Rivas!5e1!3m2!1sen!2sni!4v1772607069345!5m2!1sen!2sni"
								className="absolute inset-0 h-full w-full border-0"
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
              {/* Fallback gradient if iframe doesn't load */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-muted to-accent/5" />
            </div>
          </div>

          {/* Info panel */}
          <div
            className="fade-up flex flex-col gap-6 opacity-0 transition-all duration-700 translate-y-8 lg:col-span-2 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100"
            style={{ transitionDelay: "150ms" }}
          >
            {/* Address card */}
            <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Dirección</h3>
              <p className="leading-relaxed text-muted-foreground">
                Rivas, Nicaragua
                <br />
                Del parque de sabana grande 200 mts al sur
              </p>
            </div>

            {/* Schedule card */}
            <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Horarios</h3>
              <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                <li>Lun: 6:30 PM</li>
                <li>Mié: 6:30 PM</li>
                <li>Dom: 9:00 AM</li>
              </ul>
            </div>

            {/* Casas de Paz card */}
			<div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
				<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
					<Home className="h-6 w-6" />
				</div>
				<h3 className="mb-2 text-lg font-bold text-foreground">Horario Casas de Paz</h3>
				<ul className="flex flex-col gap-1 text-sm text-muted-foreground">
					<li>Mar: 6:00 PM</li>
					<li>Vie: 6:00 PM</li>
				</ul>
			</div>

            {/* Contact card */}
            <div className="flex-1 rounded-2xl border border-border/50 bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Contacto</h3>
              <p className="text-sm text-muted-foreground">+505 8691-9735</p>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Jesucristo+Manantial+de+Vida+Rivas+Nicaragua"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25"
            >
              {/* Shimmer / pulse glow */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <Navigation className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              <span className="relative z-10">Cómo llegar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
