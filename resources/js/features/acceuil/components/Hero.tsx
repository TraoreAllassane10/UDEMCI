import { ArrowRight, Award, Download, GraduationCap, ShieldCheck, Star, Trophy } from 'lucide-react'

const Hero = () => {
  return (
       <section className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-100/70 dark:from-emerald-950/20 via-[#fcf9f8] dark:via-[#121212] to-[#fcf9f8] dark:to-[#121212] pt-12 pb-20 lg:pt-16 lg:pb-28">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Content */}
                            <div className="lg:col-span-7 flex flex-col items-start gap-6">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5e7d9] dark:bg-emerald-950/60 text-[#012018] dark:text-emerald-300 text-[13px] font-semibold shadow-xs">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#1b4332] dark:bg-emerald-400 animate-pulse" />
                                    <span>
                                        Rentrée 2024–2025 • Certifications
                                        Reconnues
                                    </span>
                                </div>

                                <h1 className="font-['Sora'] text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1b4332] dark:text-white tracking-tight leading-tight max-w-2xl">
                                    Apprends à ton rythme, où que tu sois en{" "}
                                    <span className="text-[#dc9933] dark:text-amber-400 relative inline-block">
                                        Côte d'Ivoire
                                        <svg
                                            className="absolute -bottom-2 left-0 w-full h-3 text-[#dc9933]/30 dark:text-amber-400/30"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 200 12"
                                        >
                                            <path
                                                d="M2 9C58 3 142 3 198 9"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeWidth="4"
                                            />
                                        </svg>
                                    </span>
                                </h1>

                                <p className="text-[17px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                                    Développez vos compétences scolaires,
                                    universitaires et professionnelles grâce aux
                                    cours certifiants dispensés par les
                                    meilleurs enseignants et experts ivoiriens.
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-wrap items-center gap-4 pt-2">
                                    <a
                                        href="#catalogue"
                                        className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#ffb956] dark:bg-amber-500 text-[#2a1800] dark:text-neutral-950 font-['Sora'] text-[15px] font-bold shadow-md hover:brightness-95 transition-all cursor-pointer"
                                    >
                                        <span>Découvrir les cours</span>
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                    <a
                                        href="#devenir-formateur"
                                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-neutral-800 text-[#1b4332] dark:text-emerald-400 font-['Sora'] text-[15px] font-semibold shadow-xs hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all border border-neutral-200 dark:border-neutral-700"
                                    >
                                        <GraduationCap className="mr-2 w-5 h-5" />
                                        <span>Devenir formateur</span>
                                    </a>
                                </div>

                                {/* Trust Badges */}
                                <div className="pt-6 flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400">
                                    <div className="flex items-center gap-2">
                                        <Download className="w-5 h-5 text-[#1b4332] dark:text-emerald-400" />
                                        <span className="text-[13px] font-medium">
                                            Contenus téléchargeables
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="w-5 h-5 text-[#1b4332] dark:text-emerald-400" />
                                        <span className="text-[13px] font-medium">
                                            Paiements 100% sécurisés
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        <span className="text-[13px] font-medium">
                                            Note moyenne 4.85/5
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Visual Showcase */}
                            <div className="lg:col-span-5 relative flex justify-center">
                                <div className="relative w-full max-w-md">
                                    {/* Background Decorative Halo */}
                                    <div className="absolute -inset-4 bg-[#a5d0b9]/40 dark:bg-emerald-900/30 rounded-3xl blur-2xl transform -rotate-3 pointer-events-none" />

                                    {/* Portrait Card */}
                                    <div className="relative bg-white dark:bg-[#1c1c1e] p-3 rounded-2xl shadow-xl overflow-hidden border border-neutral-200/80 dark:border-white/10">
                                        <img
                                            alt="Étudiante ivoirienne rayonnante sur EduIvoire"
                                            className="w-full h-96 sm:h-[420px] object-cover rounded-xl"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-b0F0Ba_x2ARQO27MG4KKZgIFNFBZin0JS-bMvs8pANgJh2On4YQnT2lgspAXh2gZYw1ErVLSSUXMOY-nBuO8pRPDvJOMoNgRjaSL8yZUrh8xivP-X9txWHtNYumg_-h-KaKEjd0k8sQZFiQuGQYgNnrwgiSpKUakzo8_sWSb5pcCl_6HyPiAyNR-ZL5BSAObSvu-f3Q9Pw7YAS3iRvqyaTG4sbjzQaJNicBEZeDrAvFuLGA8dqcj"
                                        />

                                        {/* Floating Pill 1: Total Students */}
                                        <div className="absolute top-6 left-6 bg-white/95 dark:bg-[#1c1c1e]/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 border border-neutral-200 dark:border-neutral-700">
                                            <div className="w-10 h-10 rounded-full bg-[#c5e7d9] dark:bg-emerald-950 text-[#1b4332] dark:text-emerald-400 flex items-center justify-center font-bold">
                                                <Award className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-['Sora'] text-base text-[#1b4332] dark:text-emerald-400 leading-tight font-bold">
                                                    +45 000
                                                </p>
                                                <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                                                    Apprenants certifiés en CI
                                                </p>
                                            </div>
                                        </div>

                                        {/* Floating Pill 2: Success Rate */}
                                        <div className="absolute bottom-6 right-6 bg-[#1b4332] dark:bg-emerald-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-amber-300">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-['Sora'] text-sm font-bold text-white">
                                                    94.8% de réussite
                                                </p>
                                                <p className="text-[11px] text-[#a5d0b9] dark:text-emerald-200">
                                                    Aux concours nationaux
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default Hero
