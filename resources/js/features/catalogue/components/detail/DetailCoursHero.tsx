import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BadgeCheck, RotateCw, Star, Trophy, User2, UsersRound } from "lucide-react";

const DetailCoursHero = () => {
    return (
        <section className="bg-primary h-screen mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 space-y-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="#"
                                className="hover:text-accent text-emerald-100/80 font-['Manrope'] font-semibold  transition-colors "
                            >
                                Acceuil
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="#"
                                className="hover:text-accent text-emerald-100/80 font-['Manrope'] font-semibold  transition-colors"
                            >
                                Catalogue
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="#"
                                className="hover:text-accent text-emerald-100/80 font-['Manrope'] font-semibold  transition-colors"
                            >
                                Lycée(Terminale C&amp;D)
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink
                                href="#"
                                className="hover:text-accent text-emerald-100/80 font-['Manrope'] font-semibold transition-colors"
                            >
                                Mathématiques
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex items-center gap-2">
                    <div className="inline-flex gap-2 items-center justify-center px-2 p-1 rounded-full bg-primary-light/40 text-emerald-100/80 text-[12px] ">
                        <BadgeCheck className="w-4 h-4" />
                        <span className="font-bold">Programme Officiel CI</span>
                    </div>

                    <div className="inline-flex gap-2 items-center justify-center px-2 p-1 rounded-full bg-primary-light/40 text-emerald-100/80 text-[12px] ">
                        <Trophy className="w-4 h-4" />
                        <span className="font-bold">Certifiant</span>
                    </div>

                    <div className="inline-flex gap-2 items-center justify-center px-2 p-1 rounded-full bg-primary-light/40 text-emerald-100/80 text-[12px] ">
                        <span className="font-bold">Session BAC 2025</span>
                    </div>
                </div>

                <h1 className="max-w-2xl text-4xl text-white font-bold leading-11">
                    Mathématiques Terminale C & D : Maîtrise Complète du
                    Programme & Préparation au BAC 2025
                </h1>

                <p className="max-w-2xl text-emerald-100/60 tracking-wide text-[17px] leading-7">
                    Le programme officiel ivoirien décortiqué pas à pas : études
                    de fonctions, calcul intégral, suites numériques,
                    probabilités et annales corrigées des 10 dernières années.
                </p>

                <div className="max-w-2xl flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-primary-light/40 rounded-sm px-2 py-1">
                        <span className="text-accent text-xl font-medium">
                            4.9
                        </span>
                        <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <Star className="w-4 h-4 fill-accent text-accent" />
                        </span>
                        <span className="text-emerald-100/40 font-semibold">(890 avis)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <UsersRound className="w-4 h-4 text-emerald-100/40"/>
                        <span className="text-white text-[13px] font-medium">3 450 élèves inscrits</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RotateCw className="w-4 h-4 text-emerald-100/40" />
                        <span className="text-[13px] text-emerald-100/40">Dernière m.à.j : Février 2025</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailCoursHero;
