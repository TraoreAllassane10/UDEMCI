import { register } from "@/routes";
import { Link } from "@inertiajs/react";
import { ArrowRight, ChevronDown, Clock, Star, User } from "lucide-react";
import { useState } from "react";
import { COURSES } from "../constants";

const FormationSection = () => {
    const [selectedCycle, setSelectedCycle] = useState<string>("all");

    const filteredCourses = COURSES.filter((c) => {
        return selectedCycle === "all" || c.cycle === selectedCycle;
    });
    return (
        <>
            {/* Level Quick Filter Tabs */}
            <section
                className="w-full py-8 bg-white dark:bg-[#161618] border-y border-neutral-200/80 dark:border-neutral-800 shadow-xs"
                id="catalogue"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-[#1b4332] dark:text-emerald-400 font-bold">
                                Catalogue National
                            </span>
                            <h2 className="font-['Sora'] text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                                Explorez nos parcours d'apprentissage
                            </h2>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-[13px]">
                            <span>Trier par:</span>
                            <span className="font-semibold text-[#1b4332] dark:text-emerald-400">
                                Les plus populaires
                            </span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                        {[
                            { id: "all", label: "Tous les cycles" },
                            { id: "college", label: "Collège (6e à 3e)" },
                            {
                                id: "lycee",
                                label: "Lycée (2nde à Terminale)",
                            },
                            {
                                id: "universite",
                                label: "Université / Grandes Écoles",
                            },
                            { id: "pro", label: "Formations Pro & Tech" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCycle(tab.id)}
                                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                    selectedCycle === tab.id
                                        ? "bg-[#1b4332] dark:bg-emerald-600 text-white shadow-sm"
                                        : "bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/10"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses Grid */}
            <section className="w-full py-16 lg:py-24 bg-[#fcf9f8] dark:bg-[#121212]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
                    <div className="flex flex-col sm:flex-row sm:items-680 justify-between gap-4">
                        <div>
                            <span className="text-[11px] text-[#dc9933] dark:text-amber-400 font-bold uppercase tracking-wide">
                                Sélection recommandée
                            </span>
                            <h2 className="font-['Sora'] text-2xl sm:text-3xl font-bold text-[#1b4332] dark:text-white">
                                Formations à fort impact
                            </h2>
                        </div>
                        <a
                            href="#catalogue"
                            className="inline-flex items-center text-[15px] text-[#1b4332] dark:text-emerald-400 hover:underline font-semibold group"
                        >
                            <span>Voir les 240+ cours disponibles</span>
                            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="group flex flex-col bg-white dark:bg-[#1c1c1e] rounded-xl shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-neutral-200/80 dark:border-neutral-800"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                    <img
                                        alt={course.title}
                                        src={course.image}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div
                                        className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs ${
                                            course.badgeType === "tertiary"
                                                ? "bg-[#ffb956] text-[#2a1800] dark:bg-amber-500 dark:text-neutral-950"
                                                : "bg-[#c5e7d9] text-[#012018] dark:bg-emerald-950 dark:text-emerald-300"
                                        }`}
                                    >
                                        {course.badge}
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-[#1b4332]/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[11px] flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                                    <div className="space-y-2">
                                        <span className="text-[11px] text-[#46655a] dark:text-emerald-400 font-semibold uppercase">
                                            {course.category}
                                        </span>
                                        <h3 className="font-['Sora'] text-[15px] font-semibold text-neutral-900 dark:text-white line-clamp-2 group-hover:text-[#1b4332] dark:group-hover:text-emerald-400 transition-colors leading-snug">
                                            {course.title}
                                        </h3>
                                        <div className="flex items-center gap-2 pt-1 text-neutral-600 dark:text-neutral-400 text-[13px]">
                                            <User className="w-4 h-4 text-neutral-400" />
                                            <span>{course.instructor}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                                        <div className="flex items-center justify-between text-[13px]">
                                            <div className="flex items-center gap-1 text-[#dc9933] dark:text-amber-400 font-bold">
                                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                <span>{course.rating}</span>
                                                <span className="text-neutral-500 dark:text-neutral-500 font-normal text-[11px]">
                                                    ({course.reviewsCount} avis)
                                                </span>
                                            </div>
                                            <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
                                                {course.levelTag}
                                            </span>
                                        </div>

                                        <div className="flex items-baseline justify-between pt-1">
                                            <div className="flex flex-col">
                                                <span className="font-['Sora'] text-base font-bold text-[#1b4332] dark:text-emerald-400">
                                                    {course.price}
                                                </span>
                                                <span className="text-[11px] text-neutral-400 dark:text-neutral-500 line-through">
                                                    {course.originalPrice}
                                                </span>
                                            </div>
                                            <Link
                                                href={register()}
                                                className="px-3.5 py-2 rounded-lg bg-[#ffb956] dark:bg-amber-500 text-[#2a1800] dark:text-neutral-950 text-[13px] font-bold hover:brightness-95 transition-all shadow-xs"
                                            >
                                                S'inscrire
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormationSection;
