"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Facebook } from "lucide-react"

export function Footer() {
	const [isVisible, setIsVisible] = useState(false)
	const footerRef = useRef(null)

	// --- SENSOR DE ANIMACIÓN ---
	// Detecta cuando el footer entra en la pantalla para activar la animación
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 } // Se activa apenas el 10% del footer sea visible
		)

		if (footerRef.current) {
			observer.observe(footerRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<footer 
			ref={footerRef} 
			className="relative bg-zinc-950 text-zinc-400 py-16 overflow-hidden border-t border-zinc-900"
		>
			{/* --- LUZ DE NEÓN ANIMADA --- */}
			<div 
				className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-[1500ms] ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
			/>

			<div className="container mx-auto max-w-5xl px-6">
				{/* Contenedor a 2 columnas (Izquierda: Logo/Bio/Redes | Derecha: Contacto) */}
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

					{/* 1. Lado Izquierdo: Logo, Bio y Facebook */}
					<div 
						className={`flex flex-col items-center md:items-start text-center md:text-left transform transition-all duration-[1000ms] ease-out ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
					}`}
					>
						<Link href="/" className="flex items-center gap-3 mb-5 group transition-transform duration-300 hover:scale-105">
							<Image 
								src="/images/logo.png" 
								alt="MDVR Logo" 
								width={48} 
								height={48} 
								className="h-12 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
							/>
							<span className="text-3xl font-extrabold text-white tracking-tight">MDVR</span>
						</Link>
						
						<p className="text-base leading-relaxed max-w-sm mb-8 text-zinc-500">
							Una familia en la fe dedicada a transformar vidas a traves del amor de Dios.
						</p>
						
						{/* Botón de Facebook Único y Creativo */}
						<a 
							href="https://www.facebook.com/profile.php?id=61576170148168" 
							target="_blank" 
							rel="noopener noreferrer"
							className="group relative flex items-center gap-3 rounded-full bg-zinc-900/80 px-6 py-3 border border-zinc-800 transition-all duration-300 hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]"
						>
							<Facebook className="w-5 h-5 text-zinc-400 group-hover:text-[#1877F2] transition-colors" />
							<span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
								Síguenos en Facebook
							</span>
						</a>
					</div>

					{/* 2. Lado Derecho: Contacto */}
					<div 
						className={`flex flex-col items-center md:items-start text-center md:text-left transform transition-all duration-[1000ms] ease-out delay-200 ${
							isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
						}`}
					>
						<h3 className="text-white font-bold tracking-widest uppercase text-xs mb-8 opacity-80 flex items-center gap-2">
							<span className="w-8 h-px bg-primary/50 hidden md:block"></span>
							Contacto Directo
						</h3>
						
						<ul className="space-y-6">
							<li className="flex items-start gap-4 group cursor-pointer justify-center md:justify-start">
								<div className="p-3 rounded-full bg-zinc-900 group-hover:bg-primary/20 transition-colors shrink-0">
									<MapPin className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
								</div>
								<div className="flex flex-col mt-1">
									<span className="text-xs text-zinc-600 font-bold uppercase tracking-wider mb-1">Ubicación</span>
									<span className="text-sm group-hover:text-white transition-colors max-w-[200px]">
										Del parque de Sabana Grande 200 mts al sur, Rivas
									</span>
								</div>
							</li>
							
							<li className="flex items-start gap-4 group cursor-pointer justify-center md:justify-start">
								<div className="p-3 rounded-full bg-zinc-900 group-hover:bg-primary/20 transition-colors shrink-0">
									<Phone className="w-5 h-5 text-zinc-500 group-hover:text-primary transition-colors" />
								</div>
								<div className="flex flex-col mt-1">
									<span className="text-xs text-zinc-600 font-bold uppercase tracking-wider mb-1">Teléfono</span>
									<span className="text-sm group-hover:text-white transition-colors">
										(505) 8691-9735
									</span>
								</div>
							</li>
						</ul>
					</div>

				</div>

				{/* --- COPYRIGHT (Aparece al final) --- */}
				<div 
					className={`mt-20 pt-8 border-t border-zinc-900/70 flex flex-col items-center justify-center gap-2 transform transition-all duration-[1000ms] ease-out delay-500 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
				>
					<p className="text-xs text-zinc-600 text-center">
						© {new Date().getFullYear()} Jesucristo Manantial de Vida Rivas. Todos los derechos reservados.
					</p>
				</div>
				
			</div>
		</footer>
	)
}