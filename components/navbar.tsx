"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
	{ name: "Inicio", href: "#hero" },
	{ name: "Ministerios", href: "#ministerios" },
	{ name: "Pastores", href: "#pastores" },
	{ name: "Inscripción", href: "#inscripcion" },
	{ name: "Ubicación", href: "#ubicacion" },
]

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	// --- MAGIA PARA DETECTAR EL SCROLL ---
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	// Bloquear scroll de la página cuando el menú móvil está abierto
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [isMenuOpen])

	return (
		<header 
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
				isScrolled || isMenuOpen
					? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-0" // <-- Aquí está el nuevo efecto cristal más notable
					: "bg-transparent border-transparent py-2" 
			}`}
		>
			<nav className={`container mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
				isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
			}`}>
				
				{/* --- LOGO Y NOMBRE --- */}
				<Link href="/" className="flex items-center gap-2.5 z-50">
					{/* Ya te dejé el logo.png puesto aquí 👇 */}
					<Image 
						src="/images/logo.png" 
						alt=" Logo" 
						width={40} 
						height={40} 
						className="h-9 w-auto md:h-11"
					/>
					<span className={`text-xl font-bold tracking-tighter sm:text-2xl transition-colors duration-300 ${
						isScrolled || isMenuOpen ? "text-foreground" : "text-white"
					}`}>
						Manantial de Vida Rivas
					</span>
				</Link>

				{/* --- MENÚ DE ESCRITORIO (Oculto en móvil) --- */}
				<div className="hidden items-center gap-6 md:flex">
					{navLinks.map((link) => (
						<Link 
							key={link.href} 
							href={link.href} 
							className={`text-sm font-medium transition-colors ${
								isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
							}`}
						>
							{link.name}
						</Link>
					))}
					<Link 
						href="#inscripcion" 
						className={`rounded-full px-5 py-2 text-sm font-semibold transition-all hover:scale-105 ${
							isScrolled 
								? "bg-primary text-primary-foreground hover:bg-primary/90" 
								: "bg-white text-black hover:bg-white/90"
						}`}
					>
						Unirse
					</Link>
				</div>

				{/* --- BOTÓN HAMBURGUESA QUE SE CONVIERTE EN X (Móvil) --- */}
				<button
					className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Alternar menú"
				>
					{/* Línea Superior */}
					<span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
						isMenuOpen 
							? "bg-foreground rotate-45 translate-y-2" 
							: isScrolled ? "bg-foreground" : "bg-white"
					}`}></span>
					
					{/* Línea En Medio */}
					<span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
						isMenuOpen 
							? "opacity-0" 
							: isScrolled ? "bg-foreground" : "bg-white"
					}`}></span>
					
					{/* Línea Inferior */}
					<span className={`h-0.5 w-6 rounded-full transition-all duration-300 ease-in-out ${
						isMenuOpen 
							? "bg-foreground -rotate-45 -translate-y-2" 
							: isScrolled ? "bg-foreground" : "bg-white"
					}`}></span>
				</button>

				{/* --- EL MENÚ FULL ESTÉTICO (Overlay) --- */}
				<div 
					className={`fixed inset-0 z-40 h-screen w-full bg-background/98 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
						isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
					}`}
				>
					<div className="flex h-full flex-col items-center justify-center gap-10 px-10 pb-20 pt-24">
						{navLinks.map((link, index) => (
							<Link 
								key={link.href} 
								href={link.href} 
								onClick={() => setIsMenuOpen(false)}
								className={`text-3xl font-extrabold tracking-tight text-foreground/90 transition-all duration-300 hover:text-primary ${
									isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
								}`}
								style={{ transitionDelay: `${index * 80}ms` }}
							>
								{link.name}
							</Link>
						))}
						
						<Link 
							href="#inscripcion" 
							onClick={() => setIsMenuOpen(false)}
							className={`mt-6 w-full rounded-2xl bg-primary p-5 text-center text-lg font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95 ${
									isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
							}`}
							style={{ transitionDelay: `${navLinks.length * 80}ms` }}
						>
							Unirse al Movimiento
						</Link>
					</div>
				</div>

			</nav>
		</header>
	)
}