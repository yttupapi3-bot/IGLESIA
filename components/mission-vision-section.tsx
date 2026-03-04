export function MissionVisionSection() {
	return (
		<section className="py-16 md:py-24 bg-background px-6">
			<div className="mx-auto max-w-5xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
					
				

					

					{/* --- CARTA DE VISIÓN --- */}
					<div className="flex flex-col text-center rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-t-4 border-t-primary">
						<div className="mb-4">
							<h3 className="text-2xl font-bold tracking-tight text-foreground">
								VISION
							</h3>
						</div>
						<p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
							Evangelizar el mundo y discipular las naciones. Mateo 28:19, Marcos 16:15
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}