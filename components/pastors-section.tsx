export function PastorsSection() {
	return (
		<section id="pastores" className="py-20 md:py-32 bg-slate-50/50 px-6">
			<div className="mx-auto max-w-6xl">

				{/* --- ENCABEZADO CENTRAL --- */}
				<div className="mb-16 flex flex-col items-center text-center">
					<h2 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
						Nuestros Pastores
					</h2>
					<p className="text-lg text-muted-foreground">
						Liderazgo con corazón de servicio
					</p>
				</div>

				{/* --- CONTENEDOR DINÁMICO (Lado a lado en PC, apilado en Móvil) --- */}
				<div className="flex flex-col items-center gap-12 md:flex-row md:gap-20">

					{/* 1. Imagen Flotante (Lado Izquierdo) */}
					<div className="relative w-full md:w-1/2">
						{/* Sombra/Resplandor decorativo detrás de la foto */}
						<div className="absolute -inset-2 -z-10 rounded-[2.5rem] bg-primary/10 opacity-70 blur-2xl transition-all duration-500"></div>
						
						{/* Contenedor de la foto con efecto hover */}
						<div className="overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20">
							<img
								src="/images/pastores.jpg"
								alt="Pastor Marlon Lacayo y Pastora Ana Lacayo"
								className="h-auto w-full object-cover"
							/>
						</div>
					</div>

					{/* 2. Textos (Lado Derecho) */}
					<div className="flex w-full flex-col text-center md:w-1/2 md:text-left">
						<h3 className="mb-4 text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
							Pastores Marlon & Ana Lacayo
						</h3>
						<p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
							Somos una familia bajo la cobertura de los Pastores Jairo & Berenice Sequeira, enviados para establecer el reino de Dios en Rivas. Creemos firmemente en el proposito que Dios ha depositado en cada persona y trabajamos con pasion para discipular, equipar y enviar Lideres a manifestar el poder sobrenatural de Dios en este tiempo.
						</p>
					</div>

				</div>

			</div>
		</section>
	)
}