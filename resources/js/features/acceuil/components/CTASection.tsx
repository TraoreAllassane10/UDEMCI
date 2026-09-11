import { register } from "@/routes";
import { Link } from "@inertiajs/react";

const CTASection = () => {
    return (
        <section
            className="w-full py-16 bg-neutral-100 dark:bg-[#161618]"
            id="devenir-formateur"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="bg-white dark:bg-[#1c1c1e] p-8 sm:p-12 rounded-3xl shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8 border border-neutral-200/80 dark:border-neutral-800">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-[11px] text-[#1b4332] dark:text-emerald-400 font-bold uppercase tracking-wider">
                            Communauté Enseignante
                        </span>
                        <h3 className="font-['Sora'] text-2xl font-bold text-[#1b4332] dark:text-white">
                            Vous êtes enseignant ou professionnel certifié en
                            Côte d'Ivoire ?
                        </h3>
                        <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Partagez vos compétences, touchez des dizaines de
                            milliers d'élèves à travers tout le pays et percevez
                            vos revenus automatiquement chaque fin de mois par
                            Wave ou Mobile Money.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                        <Link
                            href={register()}
                            className="px-7 py-3.5 rounded-xl bg-[#1b4332] dark:bg-emerald-600 text-white font-['Sora'] text-[15px] font-semibold text-center hover:bg-[#0f281e] transition-colors shadow-sm"
                        >
                            Rejoindre comme Enseignant
                        </Link>
                        <a
                            href="#catalogue"
                            className="px-6 py-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 font-['Sora'] text-[15px] font-semibold text-center hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                            Parcourir les cours
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
