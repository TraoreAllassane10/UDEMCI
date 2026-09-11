import {
    BarChart3,
    Calculator,
    FlaskConical,
    Languages,
    Medal,
    Terminal,
} from "lucide-react";

const ExplorerMatiere = () => {
    return (
        <section className="w-full py-16 bg-neutral-100 dark:bg-[#161618]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <span className="text-[11px] text-[#1b4332] dark:text-emerald-400 font-bold uppercase tracking-wider">
                        Filières Clés
                    </span>
                    <h2 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#1b4332] dark:text-white">
                        Explorez les matières les plus recherchées
                    </h2>
                    <p className="text-[15px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Des modules complets alignés sur les programmes
                        ivoiriens officiels et les exigences du marché de
                        l'emploi en Afrique de l'Ouest.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                        {
                            icon: Calculator,
                            title: "Mathématiques",
                            desc: "6e au Master 2",
                        },
                        {
                            icon: FlaskConical,
                            title: "Physique-Chimie",
                            desc: "Collège & Lycée",
                        },
                        {
                            icon: Terminal,
                            title: "Informatique & Code",
                            desc: "Web, Mobile & IA",
                        },
                        {
                            icon: BarChart3,
                            title: "Éco & Gestion",
                            desc: "OHADA & Finance",
                        },
                        {
                            icon: Languages,
                            title: "Anglais & Pro",
                            desc: "TOEFL & Business",
                        },
                        {
                            icon: Medal,
                            title: "Concours CI",
                            desc: "ENA, ENS, INFAS",
                        },
                    ].map((subject, idx) => {
                        const IconComponent = subject.icon;
                        return (
                            <a
                                key={idx}
                                href="#catalogue"
                                className="group p-6 rounded-xl bg-white dark:bg-[#1c1c1e] shadow-xs hover:shadow-md hover:bg-[#1b4332] dark:hover:bg-emerald-900 transition-all duration-300 flex flex-col items-center text-center gap-3 border border-neutral-200/80 dark:border-neutral-800"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#c5e7d9] dark:bg-emerald-950 group-hover:bg-[#1b4332]/20 text-[#1b4332] dark:text-emerald-400 group-hover:text-white flex items-center justify-center transition-colors">
                                    <IconComponent className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-['Sora'] text-[15px] font-semibold text-neutral-900 dark:text-white group-hover:text-white transition-colors">
                                        {subject.title}
                                    </h4>
                                    <p className="text-[12px] text-neutral-600 dark:text-neutral-400 group-hover:text-emerald-200 transition-colors">
                                        {subject.desc}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ExplorerMatiere;
