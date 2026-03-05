"use client"

import { useState, useEffect } from "react"
import { Users, Droplets, Baby, HeartHandshake, Flame } from "lucide-react"
import { title } from "process"

const activities = [
	{
		title: "Evangelismo Sobrenatural",
		description: "Nuestra misión es compartir las buenas nuevas del Evangelio y llevar a las personas a tener una relación personal con Dios por medio de la persona de Jesucristo.",
		images: [
			"/images/evangelismo1.jpg", 
			"/images/evangelismo2.jpg", 
			"/images/evangelismo3.jpg"
		],
		icon: Users,
	},
	{
		title: "Una nueva vida un Nuevo comienzo",
		description: "Acompañamos a los creyentes en su paso público de fe y obediencia, declarando una nueva vida en Cristo Jesú",
		images: [
			"/images/bautismo1.jpg",
			"/images/bautismo2.jpg",
			"/images/bautismo3.jpg"
		],
		icon: Droplets,
	},
	{
		title: "Departamento de Niños",
		description: "Formamos a la próxima generación con principios bíblicos en un ambiente divertido, lleno de amor y seguro para ellos.",
		images: [
			"/images/ninos1.jpg",
			"/images/ninos2.jpg",
			"/images/ninos3.jpg"
		],
		icon: Baby,
	},
	{
		title: "Departamento de Ujieres",
		description: "Servimos con excelencia y alegría para que cada persona que nos visita se sienta bienvenida en la casa de Dios.",
		images: [
			"/images/ujieres1.jpg",
			"/images/ujieres2.jpg",
			"/images/ujieres3.jpg"
		],
		icon: HeartHandshake,
	},
	{


title: "Casas de Paz",
		description: "Una Casa de Paz es un lugar donde los vecinos, familiares y amigos se reúnen una vez a la semana para orar los unos por los otros por sus necesidades, aprender acerca de Dios y crecer en su vida cristiana a través del poder sobrenatural de Dios.",
		images: [   
			"/images/casapaz1.jpg",
			"/images/casapaz2.jpg",
			"/images/casapaz3.jpg"
		],
		icon: HeartHandshake,
	},
	{


		title: "Manifestando su Poder",
		description: "En MDVR estamos comprometidos a seguir haciendo la obra que Jesús nos ha asignado, Sanando enfermos, Liberando, Predicando y enseñando Mateo 4:23 ",
		images: [
			"/images/poder1.jpg",
			"/images/poder2.jpg",
			"/images/poder3.jpg"
		],
		icon: Flame,
	},
]

// --- MINI-COMPONENTE QUE HACE LA MAGIA DEL CARRUSEL AUTOMÁTICO ---
function ImageCarousel({
	images,
	title,
	icon: Icon,
}: {
	images: string[]
	title: string
	icon: any
}) {
	// ¡Esta es la línea que se había borrado!
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		// Cambia la imagen cada 3000 milisegundos (3 segundos)
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 3000)
		
		return () => clearInterval(timer)
	}, [images.length])

	return (
		<div className="relative h-110 sm:h-96 w-full overflow-hidden">
			{/* Contenedor de las fotos que se desliza */}
			<div 
				className="flex h-full w-full transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((imgSrc, imgIndex) => (
					<img
						key={imgIndex}
						src={imgSrc}
						alt={`${title} ${imgIndex + 1}`}
						className="h-full min-w-full object-cover shrink-0"
					/>
				))}
			</div>
			
			{/* Iconito flotante */}
			<div className="absolute bottom-4 left-4 pointer-events-none rounded-xl bg-background/95 p-2.5 backdrop-blur-sm shadow-sm">
				<Icon className="h-6 w-6 text-primary" />
			</div>

			{/* Indicadores (puntitos) estilo Instagram */}
			<div className="absolute bottom-4 right-4 flex gap-1.5">
				{images.map((_, idx) => (
					<div
						key={idx}
						className={`h-1.5 rounded-full transition-all duration-500 ${
							currentIndex === idx ? "w-4 bg-primary" : "w-1.5 bg-primary-foreground/50 backdrop-blur-sm"
						}`}
					/>
				))}
			</div>
		</div>
	)
}

// --- SECCIÓN PRINCIPAL ---
export function ServicesSection() {
	return (
		<section id="ministerios" className="py-16 md:py-24 bg-background px-6">
			<div className="mx-auto max-w-5xl">
				
				{/* Encabezado */}
				<div className="mb-12 text-center flex flex-col items-center">
					<span className="text-sm font-bold tracking-wider text-primary uppercase mb-2">
						LO QUE HACEMOS
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-4">
						Nuestros Ministerios
					</h2>
					<p className="max-w-2xl text-lg text-muted-foreground text-pretty">
						Nuestra pasión es entrenar, equipar, movilizar y empoderar a cada miembro del ministerio para alcanzar al perdido a través de lo sobrenatural, así como también ayudar a cada nuevo creyente a comenzar su camino mediante el proceso de la visión.
					</p>
				</div>

				{/* Cuadrícula de Cartas */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					{activities.map((activity, index) => (
						<div 
							key={index} 
							className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
						>
							{/* Aquí llamamos a nuestro nuevo carrusel automático */}
							<ImageCarousel 
								images={activity.images} 
								title={activity.title} 
								icon={activity.icon} 
							/>
							
							{/* Textos */}
							<div className="flex flex-col p-6 flex-grow">
								<h3 className="text-xl font-bold tracking-tight text-foreground mb-3">
									{activity.title}
								</h3>
								<p className="text-base leading-relaxed text-muted-foreground">
									{activity.description}
								</p>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	)
}