import { Check, CloudDownload } from 'lucide-react'
import React from 'react'

const PresentationMoyenPaiement = () => {
  return (
      <section className="w-full py-16 lg:py-20 bg-white dark:bg-[#121212]">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        <div className="bg-[#1b4332] dark:bg-[#193327] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
                            {/* Abstract Decorative Backgrounds */}
                            <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />
                            <div className="absolute top-0 right-1/4 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                                <div className="lg:col-span-6 space-y-6">
                                    <span className="px-3.5 py-1 rounded-full bg-[#c5e7d9] dark:bg-emerald-900 text-[#012018] dark:text-emerald-200 text-[11px] font-bold">
                                        Accessibilité 100% Ivoirienne
                                    </span>
                                    <h3 className="font-['Sora'] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug">
                                        Payez facilement par Mobile Money &amp;
                                        apprenez sans coupure internet
                                    </h3>
                                    <p className="text-[15px] text-[#c1ecd4] leading-relaxed">
                                        Pas besoin de carte bancaire
                                        internationale. Validez vos formations
                                        en quelques secondes avec votre compte
                                        local préféré. Téléchargez vos cours
                                        pour continuer vos révisions même en
                                        zone à faible réseau.
                                    </p>
                                    <div className="space-y-4 pt-2">
                                        {[
                                            "Validation instantanée du cours par SMS & code OTP",
                                            "Mode hors ligne intégré sur mobile et tablette",
                                            "Certificats téléchargeables au format PDF avec QR code d'authenticité",
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3"
                                            >
                                                <span className="w-6 h-6 rounded-full bg-[#c5e7d9] dark:bg-emerald-800 text-[#1b4332] dark:text-white flex items-center justify-center font-bold text-xs shrink-0">
                                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                                </span>
                                                <span className="text-[14px] font-medium text-white/95">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Money Partners Showcase */}
                                <div className="lg:col-span-6 flex flex-col gap-6">
                                    <div className="bg-[#142e23]/90 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-4 border border-white/10">
                                        <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                                            Opérateurs partenaires intégrés
                                        </span>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                            {[
                                                {
                                                    name: "Wave CI",
                                                    tag: "0% de frais",
                                                    badge: "W",
                                                    color: "bg-blue-500/10 text-blue-600",
                                                },
                                                {
                                                    name: "Orange Money",
                                                    tag: "Direct",
                                                    badge: "OM",
                                                    color: "bg-orange-500/10 text-orange-600",
                                                },
                                                {
                                                    name: "MTN MoMo",
                                                    tag: "Direct",
                                                    badge: "MoMo",
                                                    color: "bg-yellow-500/10 text-yellow-700",
                                                },
                                                {
                                                    name: "Moov Money",
                                                    tag: "Direct",
                                                    badge: "MC",
                                                    color: "bg-blue-700/10 text-blue-800",
                                                },
                                            ].map((operator, idx) => (
                                                <div
                                                    key={idx}
                                                    className="bg-white dark:bg-[#1c1c1e] p-3 rounded-xl flex flex-col items-center justify-center gap-1 shadow-xs text-center border border-neutral-200 dark:border-neutral-700"
                                                >
                                                    <div
                                                        className={`w-8 h-8 rounded-full ${operator.color} flex items-center justify-center font-bold text-xs`}
                                                    >
                                                        {operator.badge}
                                                    </div>
                                                    <span className="text-[13px] text-[#1b4332] dark:text-white font-bold">
                                                        {operator.name}
                                                    </span>
                                                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                                                        {operator.tag}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Offline Guarantee Card */}
                                    <div className="bg-white dark:bg-[#1c1c1e] p-6 rounded-2xl shadow-lg flex items-center gap-5 text-neutral-900 dark:text-white border border-neutral-200/80 dark:border-neutral-800">
                                        <div className="w-14 h-14 rounded-xl bg-[#c5e7d9] dark:bg-emerald-950 text-[#1b4332] dark:text-emerald-400 flex items-center justify-center shrink-0">
                                            <CloudDownload className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-['Sora'] text-[16px] font-bold text-[#1b4332] dark:text-white">
                                                Accès Hors Ligne Garanti
                                            </h4>
                                            <p className="text-[13px] text-neutral-600 dark:text-neutral-400 mt-1">
                                                Téléchargez les vidéos et
                                                supports PDF chez vous ou en
                                                zone wifi, et suivez vos modules
                                                sans consommer vos données
                                                mobiles quotidiennes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  )
}

export default PresentationMoyenPaiement
