import { Star } from 'lucide-react'
import React from 'react'

const TemoignagesSection = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#fcf9f8] dark:bg-[#121212]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <span className="text-[11px] text-[#1b4332] dark:text-emerald-400 font-bold uppercase tracking-wider">
                                    Retour d'expérience
                                </span>
                                <h2 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#1b4332] dark:text-white">
                                    La voix de nos apprenants en Côte d'Ivoire
                                </h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-[14px] font-bold text-neutral-900 dark:text-white">
                                    4.8 / 5
                                </span>
                            </div>
                        </div>

                        {/* Testimonials 3-Column Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "Grâce au pack de préparation ENA sur EduIvoire, j'ai pu m'entraîner avec des annales corrigées par d'anciens auditeurs. Les fiches de synthèse en droit administratif m'ont permis de réussir brillamment l'écrit.",
                                    tag: "Concours ENA",
                                    author: "Marc-Aurèle S.",
                                    location: "Cocody, Abidjan",
                                    initials: "MS",
                                    avatarColor: "bg-[#1b4332] text-white",
                                },
                                {
                                    quote: "À Bouaké, trouver un bon professeur de soutien en Maths pour la Terminale C n'était pas simple. Les cours vidéo et les exercices types BAC m'ont donné une moyenne de 16/20 en Maths au baccalauréat !",
                                    tag: "Terminale C",
                                    author: "Affoué Konan",
                                    location: "Bouaké Centre",
                                    initials: "AK",
                                    avatarColor: "bg-[#46655a] text-white",
                                },
                                {
                                    quote: "Étudiant à l'INP-HB de Yamoussoukro, j'ai suivi la formation Fullstack en parallèle de mon cursus. Le paiement par Wave était immédiat et j'ai déjà décroché mes premières missions freelance à distance.",
                                    tag: "Dev Web Tech",
                                    author: "Thierry Danho",
                                    location: "Yamoussoukro",
                                    initials: "TD",
                                    avatarColor: "bg-[#553500] text-white",
                                },
                            ].map((testimonial, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-[#1c1c1e] p-8 rounded-2xl shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow border border-neutral-200/80 dark:border-neutral-800"
                                >
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#c5e7d9] dark:bg-emerald-950 text-[#012018] dark:text-emerald-300 font-semibold">
                                                {testimonial.tag}
                                            </span>
                                        </div>
                                        <p className="text-[14px] text-neutral-600 dark:text-neutral-300 italic leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                        <div
                                            className={`w-11 h-11 rounded-full ${testimonial.avatarColor} flex items-center justify-center font-bold text-sm shrink-0`}
                                        >
                                            {testimonial.initials}
                                        </div>
                                        <div>
                                            <p className="font-['Sora'] text-[14px] text-neutral-900 dark:text-white font-semibold">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-[12px] text-neutral-500 dark:text-neutral-500">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
  )
}

export default TemoignagesSection
