"use client"

import { useEffect, useRef, useState } from "react"

export function LaptopSection() {
	const sectionRef = useRef(null)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		// Creamos el "sensor" que vigila cuándo la sección aparece en pantalla
		const observer = new IntersectionObserver(
			([entry]) => {
				// Si al menos el 20% de la sección es visible en la pantalla, se abre
				if (entry.isIntersecting) {
					setIsOpen(true)
				} else {
					// Si quieres que se vuelva a cerrar cuando subes, dejamos esto.
					// Si quieres que se quede abierta para siempre, puedes borrar la línea de abajo:
					setIsOpen(false)
				}
			},
			{ threshold: 0.2 } // 20% de visibilidad
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<section ref={sectionRef} id="inscripcion" className="relative bg-background py-24 md:py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-5xl flex flex-col items-center">

				{/* --- TEXTOS ELEGANTES --- */}
				<div className="mb-16 text-center max-w-3xl">
					<span className="text-sm font-bold tracking-wider text-primary uppercase mb-3 block">
						Únete al Movimiento
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
						Sé parte de lo que Dios está haciendo en esta generación
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						Tu propósito te espera. Escanea el código que aparece en la pantalla para inscribirte, conectar con nuestra visión y dar el siguiente paso en tu crecimiento espiritual.
					</p>
				</div>

				{/* --- LAPTOP CON ANIMACIÓN AUTOMÁTICA 3D --- */}
				<div 
					className="relative mt-8 flex flex-col items-center"
					style={{ perspective: "1500px" }} // Le da la profundidad 3D al espacio
				>

					{/* PANTALLA DE LA LAPTOP (Tapa) */}
					<div
						className="relative w-[300px] h-[190px] sm:w-[500px] sm:h-[310px] md:w-[800px] md:h-[500px] bg-zinc-900 rounded-t-2xl sm:rounded-t-3xl border-4 sm:border-8 border-zinc-800 overflow-hidden shadow-2xl transition-transform duration-[1500ms] ease-in-out will-change-transform"
						style={{
							transform: isOpen ? "rotateX(0deg)" : "rotateX(-90deg)", // 0 es abierta, -90 es cerrada
							transformStyle: "preserve-3d",
							transformOrigin: "bottom" // Para que gire desde la bisagra de abajo
						}}
					>
						{/* Brillo oscuro de la pantalla cuando está apagada/cerrada */}
						<div
							className={`absolute inset-0 bg-black z-20 pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
								isOpen ? "opacity-0" : "opacity-80"
							}`}
						/>

						{/* --- CONTENIDO DE LA PANTALLA (Código QR) --- */}
						<div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-8">
							<div className={`bg-white p-4 sm:p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center transition-all duration-[2000ms] ${
								isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
							}`}>
								{/* Aquí va la imagen del QR */}
								<img
									src="/images/qr-inscripcion.png"
									alt="Código QR para Inscribirse"
									className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain"
								/>
								<p className="mt-4 sm:mt-6 text-sm sm:text-lg font-bold text-slate-800 tracking-tight text-center uppercase">
									Escanéame
								</p>
							</div>
						</div>
					</div>

					{/* BASE DE LA LAPTOP (Teclado estático) */}
					<div className="relative w-[340px] h-[12px] sm:w-[560px] sm:h-[16px] md:w-[900px] md:h-[22px] bg-zinc-300 rounded-b-xl sm:rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10 flex justify-center">
						{/* Hendidura para abrir la laptop */}
						<div className="absolute top-0 w-16 sm:w-24 md:w-32 h-1 sm:h-2 bg-zinc-400 rounded-b-md"></div>
					</div>

				</div>
			</div>
		</section>
	)
}