"use client"

import { useEffect, useRef } from "react"
import { Clock } from "lucide-react"

const schedules = [
  {
    image: "/images/casa de oracion.jpg",
    title: "Casa de Oracion",
    day: "Lunes",
    time: "6:30 PM",
    description:
      "Orando por su pueblo - Escuela de Liderazgo ",
  },
  {
    image: "/images/Nocheavivamiento.jpg",
    title: "Noche de Avivamiento",
    day: "Miércoles",
    time: "6:30 PM",
    description:
      "Servicio de Fuego y Poder",
  },
  {
    image: "/images/domingofamily.jpg",
    title: "Servicio en Familia",
    day: "Domingo",
    time: "9:30 AM",
    description:
      "Sanidad, Liberación y Ministracion",
  },
]

export function ScheduleSection() {
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
      id="horarios"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="fade-up mx-auto max-w-2xl text-center opacity-0 transition-all duration-700 translate-y-8 [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
            Nuestros Horarios
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            Te esperamos cada semana
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Cada servicio es una oportunidad para encontrarte con Dios y Fortalecer tu relacion con El
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {schedules.map((item, index) => (
            <div
              key={item.title}
              className="fade-up group cursor-default overflow-hidden rounded-2xl border border-border/50 bg-card opacity-0 transition-all duration-500 ease-out translate-y-8 hover:-translate-y-3 hover:shadow-[0_20px_50px_-12px_rgba(43,106,138,0.25)] [&.animate-in]:translate-y-0 [&.animate-in]:opacity-100"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-122 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
                  <Clock className="h-3.5 w-3.5" />
                  {item.time}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
                  {item.day}
                </span>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
