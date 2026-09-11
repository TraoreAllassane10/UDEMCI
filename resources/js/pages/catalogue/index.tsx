import { Link } from "@inertiajs/react";
import {
    Award,
    Bookmark,
    BookmarkCheck,
    BookOpen,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    CreditCard,
    Download,
    DownloadCloud,
    GraduationCap,
    Home,
    ShieldCheck,
    ShoppingCart,
    SlidersHorizontal,
    Star,
    User,
    X,
    Zap,
} from "lucide-react";
import { useState } from "react";
import WebLayout from "@/layouts/web-layout";
import { home } from "@/routes";
import { COURSES_DATA } from "@/features/catalogue/constants";


export default function CatalogueIndex() {
    const [selectedSort, setSelectedSort] = useState("populaire");
    const [maxBudget, setMaxBudget] = useState(50000);
    const [savedCourses, setSavedCourses] = useState<number[]>([]);
    const [activeFilters, setActiveFilters] = useState<string[]>([
        "Lycée (Terminale C & D)",
        "Mathématiques",
        "Certificat inclus",
    ]);

    // Checkboxes
    const [selectedLevels, setSelectedLevels] = useState<string[]>([
        "lycee",
        "concours",
    ]);
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
        "maths",
    ]);
    const [isFreeOnly, setIsFreeOnly] = useState(false);
    const [isPromoOnly, setIsPromoOnly] = useState(true);
    const [hasOfflineDownload, setHasOfflineDownload] = useState(true);
    const [hasCertificate, setHasCertificate] = useState(true);
    const [hasMobileMoney, setHasMobileMoney] = useState(true);
    const [minRating, setMinRating] = useState("4.0");

    const toggleSaveCourse = (id: number) => {
        setSavedCourses((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id],
        );
    };

    const removeFilter = (filterText: string) => {
        setActiveFilters((prev) => prev.filter((f) => f !== filterText));
    };

    const clearAllFilters = () => {
        setActiveFilters([]);
        setSelectedLevels([]);
        setSelectedSubjects([]);
    };

    const toggleLevel = (lvl: string) => {
        setSelectedLevels((prev) =>
            prev.includes(lvl) ? prev.filter((l) => l !== lvl) : [...prev, lvl],
        );
    };

    const toggleSubject = (sub: string) => {
        setSelectedSubjects((prev) =>
            prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub],
        );
    };

    return (
        <WebLayout
            activeTab="catalogue"
            title="Catalogue des Formations - EduIvoire"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
                {/* En-tête & Contrôles Principaux */}
                <header className="flex flex-col gap-6 mb-8">
                    {/* Fil d'Ariane Minimal & Neutre */}
                    <nav
                        aria-label="Fil d'ariane"
                        className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-[13px] font-semibold"
                    >
                        <Link
                            href={home()}
                            className="hover:text-[#012d1d] dark:hover:text-white transition-colors flex items-center gap-1.5"
                        >
                            <Home className="w-4 h-4" />
                            <span>Accueil</span>
                        </Link>
                        <span className="text-neutral-300 dark:text-neutral-700">
                            /
                        </span>
                        <span className="text-[#012d1d] dark:text-emerald-400 font-bold">
                            Catalogue des cours
                        </span>
                    </nav>

                    {/* Titre de section & Tri */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5e7d9]/60 dark:bg-emerald-950/60 text-[#012d1d] dark:text-emerald-300 text-[12px] font-semibold">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#3f6653] dark:bg-emerald-400"></span>
                                Curriculum National &amp; Formations
                                Certifiantes CI
                            </div>
                            <h1 className="font-['Sora'] text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#012d1d] dark:text-white leading-tight">
                                Explorez tous les cours &amp; formations
                            </h1>
                            <p className="text-[15px] text-neutral-600 dark:text-neutral-300 flex items-center gap-2">
                                <span className="inline-flex items-center justify-center font-bold text-[#012d1d] dark:text-emerald-400">
                                    142
                                </span>
                                formations complètes et conformes aux examens
                                nationaux disponibles.
                            </p>
                        </div>

                        {/* Outil de tri */}
                        <div className="flex items-center gap-3 shrink-0">
                            <label
                                className="text-[13px] font-semibold text-neutral-600 dark:text-neutral-300"
                                htmlFor="catalog-sort"
                            >
                                Trier par :
                            </label>
                            <div className="relative min-w-[220px]">
                                <select
                                    id="catalog-sort"
                                    value={selectedSort}
                                    onChange={(e) =>
                                        setSelectedSort(e.target.value)
                                    }
                                    className="w-full appearance-none bg-white dark:bg-[#18181b] text-neutral-900 dark:text-white text-[13px] font-semibold px-4 py-2.5 pr-10 rounded-lg shadow-xs border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-[#1b4332] cursor-pointer"
                                >
                                    <option value="populaire">
                                        Les plus populaires
                                    </option>
                                    <option value="notes">
                                        Les mieux notés
                                    </option>
                                    <option value="recents">
                                        Nouveautés 2025
                                    </option>
                                    <option value="prix-asc">
                                        Prix croissant
                                    </option>
                                    <option value="prix-desc">
                                        Prix décroissant
                                    </option>
                                </select>
                                <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
                            </div>
                        </div>
                    </div>

                    {/* Pastilles de filtres actifs amovibles */}
                    {activeFilters.length > 0 && (
                        <div
                            className="flex flex-wrap items-center gap-2 pt-2"
                            id="active-filters"
                        >
                            <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold mr-1">
                                Filtres actifs:
                            </span>
                            {activeFilters.map((filter) => (
                                <span
                                    key={filter}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#18181b] border border-neutral-200 dark:border-neutral-800 text-[#012d1d] dark:text-emerald-300 text-[12px] font-semibold shadow-xs"
                                >
                                    <span>{filter}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeFilter(filter)}
                                        aria-label={`Supprimer filtre ${filter}`}
                                        className="hover:text-red-600 dark:hover:text-red-400 transition-colors cursor-pointer"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                </span>
                            ))}
                            <button
                                type="button"
                                onClick={clearAllFilters}
                                className="text-[12px] font-bold text-[#3f6653] dark:text-emerald-400 hover:text-[#012d1d] ml-2 underline underline-offset-4 cursor-pointer"
                            >
                                Effacer tout
                            </button>
                        </div>
                    )}
                </header>

                {/* Grille Principale 2 Colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Colonne Filtres (Sidebar ~280-320px sur desktop) */}
                    <aside className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 space-y-6">
                        <div className="bg-white dark:bg-[#18181b] rounded-xl shadow-xs border border-neutral-200/80 dark:border-neutral-800 p-5 space-y-6">
                            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal className="w-5 h-5 text-[#012d1d] dark:text-emerald-400" />
                                    <h2 className="font-['Sora'] text-lg font-bold text-[#012d1d] dark:text-white">
                                        Filtres de recherche
                                    </h2>
                                </div>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#c5e7d9] dark:bg-emerald-950 text-[#012018] dark:text-emerald-300">
                                    {activeFilters.length} actifs
                                </span>
                            </div>

                            {/* Section 1 : Niveau d'études */}
                            <div className="space-y-3">
                                <h3 className="font-['Sora'] text-[15px] font-semibold text-[#012d1d] dark:text-white flex items-center justify-between">
                                    <span>Niveau scolaire &amp; cursus</span>
                                    <GraduationCap className="w-4 h-4 text-neutral-400" />
                                </h3>
                                <div className="space-y-2.5 pt-1">
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedLevels.includes(
                                                    "lycee",
                                                )}
                                                onChange={() =>
                                                    toggleLevel("lycee")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors font-medium">
                                                Lycée (2nde, 1ère, Tle)
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            48
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedLevels.includes(
                                                    "college",
                                                )}
                                                onChange={() =>
                                                    toggleLevel("college")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Collège (6e à 3e - BEPC)
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            24
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedLevels.includes(
                                                    "concours",
                                                )}
                                                onChange={() =>
                                                    toggleLevel("concours")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors font-medium">
                                                Concours ENA, ENS, INFAS
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            32
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedLevels.includes(
                                                    "universite",
                                                )}
                                                onChange={() =>
                                                    toggleLevel("universite")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Université, Licence &amp; BTS
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            19
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedLevels.includes(
                                                    "pro",
                                                )}
                                                onChange={() =>
                                                    toggleLevel("pro")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Formations Pro &amp; Tech CI
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            21
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="h-px bg-neutral-100 dark:bg-neutral-800"></div>

                            {/* Section 2 : Matières & Filières */}
                            <div className="space-y-3">
                                <h3 className="font-['Sora'] text-[15px] font-semibold text-[#012d1d] dark:text-white flex items-center justify-between">
                                    <span>Matières prioritaires</span>
                                    <BookOpen className="w-4 h-4 text-neutral-400" />
                                </h3>
                                <div className="space-y-2.5 pt-1">
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "maths",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("maths")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors font-medium">
                                                Mathématiques &amp; Stats
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            38
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "physique",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("physique")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Physique - Chimie
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            26
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "info",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("info")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Informatique &amp; Code
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            18
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "ohada",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("ohada")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Comptabilité OHADA
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            15
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "droit",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("droit")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Droit &amp; Économie
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            22
                                        </span>
                                    </label>
                                    <label className="flex items-center justify-between text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer group">
                                        <span className="flex items-center gap-2.5">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubjects.includes(
                                                    "anglais",
                                                )}
                                                onChange={() =>
                                                    toggleSubject("anglais")
                                                }
                                                className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] focus:ring-0 cursor-pointer"
                                            />
                                            <span className="group-hover:text-[#012d1d] dark:group-hover:text-white transition-colors">
                                                Anglais professionnel
                                            </span>
                                        </span>
                                        <span className="text-[11px] text-neutral-500 font-semibold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
                                            11
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="h-px bg-neutral-100 dark:bg-neutral-800"></div>

                            {/* Section 3 : Prix & Budget FCFA */}
                            <div className="space-y-4">
                                <h3 className="font-['Sora'] text-[15px] font-semibold text-[#012d1d] dark:text-white flex items-center justify-between">
                                    <span>Budget (FCFA)</span>
                                    <span
                                        className="text-[12px] text-[#3f6653] dark:text-emerald-400 font-bold"
                                        id="price-display"
                                    >
                                        Max: {maxBudget.toLocaleString("fr-FR")}{" "}
                                        FCFA
                                    </span>
                                </h3>
                                <div className="space-y-2">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100000"
                                        step="5000"
                                        value={maxBudget}
                                        onChange={(e) =>
                                            setMaxBudget(Number(e.target.value))
                                        }
                                        className="w-full accent-[#1b4332] cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg"
                                    />
                                    <div className="flex justify-between text-[11px] font-semibold text-neutral-400">
                                        <span>0 FCFA</span>
                                        <span>50k FCFA</span>
                                        <span>100k+ FCFA</span>
                                    </div>
                                </div>
                                <div className="space-y-2 pt-1">
                                    <label className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isFreeOnly}
                                            onChange={(e) =>
                                                setIsFreeOnly(e.target.checked)
                                            }
                                            className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] cursor-pointer"
                                        />
                                        <span>Cours 100% Gratuits</span>
                                    </label>
                                    <label className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={isPromoOnly}
                                            onChange={(e) =>
                                                setIsPromoOnly(e.target.checked)
                                            }
                                            className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] cursor-pointer"
                                        />
                                        <span>Tarifs Promotionnels Actifs</span>
                                    </label>
                                </div>
                            </div>

                            <div className="h-px bg-neutral-100 dark:bg-neutral-800"></div>

                            {/* Section 4 : Modalités Spécifiques CI */}
                            <div className="space-y-3">
                                <h3 className="font-['Sora'] text-[15px] font-semibold text-[#012d1d] dark:text-white">
                                    Spécificités d'apprentissage
                                </h3>
                                <div className="space-y-2.5">
                                    <label className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={hasOfflineDownload}
                                            onChange={(e) =>
                                                setHasOfflineDownload(
                                                    e.target.checked,
                                                )
                                            }
                                            className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] cursor-pointer"
                                        />
                                        <span className="flex items-center gap-1.5">
                                            <DownloadCloud className="w-4 h-4 text-[#3f6653] dark:text-emerald-400" />
                                            <span>
                                                Vidéos téléchargeables
                                                (Hors-ligne)
                                            </span>
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={hasCertificate}
                                            onChange={(e) =>
                                                setHasCertificate(
                                                    e.target.checked,
                                                )
                                            }
                                            className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] cursor-pointer"
                                        />
                                        <span className="flex items-center gap-1.5">
                                            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                            <span>
                                                Avec Certificat d'aptitude
                                            </span>
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={hasMobileMoney}
                                            onChange={(e) =>
                                                setHasMobileMoney(
                                                    e.target.checked,
                                                )
                                            }
                                            className="w-4 h-4 rounded text-[#1b4332] accent-[#1b4332] cursor-pointer"
                                        />
                                        <span className="flex items-center gap-1.5">
                                            <CreditCard className="w-4 h-4 text-[#012d1d] dark:text-emerald-400" />
                                            <span>
                                                Paiement Wave &amp; MoMo
                                                disponible
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="h-px bg-neutral-100 dark:bg-neutral-800"></div>

                            {/* Section 5 : Évaluation */}
                            <div className="space-y-2">
                                <h3 className="font-['Sora'] text-[15px] font-semibold text-[#012d1d] dark:text-white">
                                    Notes minimales
                                </h3>
                                <div className="flex flex-col gap-1.5">
                                    <label className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating-filter"
                                            value="4.5"
                                            checked={minRating === "4.5"}
                                            onChange={() => setMinRating("4.5")}
                                            className="accent-[#1b4332] cursor-pointer"
                                        />
                                        <span className="flex items-center text-amber-400 text-xs gap-0.5">
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400/50" />
                                            <span className="text-neutral-800 dark:text-neutral-200 ml-1 font-semibold text-[13px]">
                                                4.5 &amp; plus
                                            </span>
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 text-[13px] cursor-pointer">
                                        <input
                                            type="radio"
                                            name="rating-filter"
                                            value="4.0"
                                            checked={minRating === "4.0"}
                                            onChange={() => setMinRating("4.0")}
                                            className="accent-[#1b4332] cursor-pointer"
                                        />
                                        <span className="flex items-center text-amber-400 text-xs gap-0.5">
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                                            <Star className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600" />
                                            <span className="text-neutral-800 dark:text-neutral-200 ml-1 font-semibold text-[13px]">
                                                4.0 &amp; plus
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Boutons de commande */}
                            <div className="pt-4 flex flex-col gap-2">
                                <button
                                    type="button"
                                    className="w-full py-3 bg-[#1b4332] hover:bg-[#012d1d] text-white font-['Sora'] font-semibold text-[14px] rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                    <span>Appliquer les filtres</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={clearAllFilters}
                                    className="w-full py-2 bg-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-semibold text-[13px] transition-colors cursor-pointer"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Zone Principale : Grille des Formations (9 colonnes) */}
                    <section className="lg:col-span-8 xl:col-span-9 space-y-8">
                        {/* Alerte Info Contexte Local */}
                        <div className="bg-neutral-100/90 dark:bg-neutral-800/60 rounded-xl p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 border border-neutral-200/60 dark:border-neutral-700/60">
                            <div className="flex items-center gap-3.5">
                                <div className="p-2.5 bg-[#1b4332] text-white rounded-lg shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-['Sora'] text-[15px] font-bold text-[#012d1d] dark:text-white">
                                        Conformité aux programmes du Ministère
                                        CI
                                    </p>
                                    <p className="text-[13px] text-neutral-600 dark:text-neutral-300">
                                        Tous nos cours secondaires et prépas
                                        suivent fidèlement les arrêtés
                                        pédagogiques en vigueur.
                                    </p>
                                </div>
                            </div>
                            <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-[#012d1d] dark:text-emerald-300 font-bold bg-[#c5e7d9]/70 dark:bg-emerald-950/70 px-3 py-1.5 rounded-full shrink-0">
                                Session 2024-2025
                            </span>
                        </div>

                        {/* Grille de 6 Cours Réalistes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {COURSES_DATA.map((course) => {
                                const isSaved = savedCourses.includes(
                                    course.id,
                                );
                                return (
                                    <article
                                        key={course.id}
                                        className="bg-white dark:bg-[#18181b] rounded-xl overflow-hidden shadow-xs hover:shadow-md border border-neutral-200/80 dark:border-neutral-800 transition-all duration-300 flex flex-col group"
                                    >
                                        {/* Image Box */}
                                        <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {/* Level Badge */}
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-[#012d1d] dark:text-emerald-300 text-[11px] px-2.5 py-1 rounded-full shadow-xs font-bold">
                                                    {course.levelBadge}
                                                </span>
                                            </div>
                                            {/* Promo Badge */}
                                            {course.promoTag && (
                                                <div className="absolute top-3 right-3">
                                                    <span className="bg-[#ffb956] text-[#2a1800] text-[11px] px-2.5 py-1 rounded-full font-bold shadow-xs">
                                                        {course.promoTag}
                                                    </span>
                                                </div>
                                            )}
                                            {/* Duration Badge */}
                                            <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-neutral-800 dark:text-neutral-200 text-[11px] px-2 py-0.5 rounded shadow-xs flex items-center gap-1 font-medium">
                                                <Clock className="w-3 h-3 text-neutral-500" />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span
                                                        className={`inline-block w-2 h-2 rounded-full ${course.badgeDotColor}`}
                                                    ></span>
                                                    <span
                                                        className={`text-[11px] uppercase tracking-wide font-bold ${course.categoryColor}`}
                                                    >
                                                        {course.category}
                                                    </span>
                                                </div>
                                                <h3 className="font-['Sora'] text-[15px] font-bold text-[#012d1d] dark:text-white group-hover:text-[#1b4332] dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                                                    {course.title}
                                                </h3>
                                                <div className="flex items-center gap-2 pt-1">
                                                    <User className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 truncate">
                                                        {course.instructor}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Évaluation & Inscrits */}
                                            <div className="flex items-center justify-between text-[13px]">
                                                <div className="flex items-center gap-1 text-amber-500">
                                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                    <span className="font-['Sora'] font-bold text-neutral-900 dark:text-white">
                                                        {course.rating}
                                                    </span>
                                                    <span className="text-neutral-400 text-[11px]">
                                                        ({course.reviewsCount}{" "}
                                                        avis)
                                                    </span>
                                                </div>
                                                <span className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                                                    {course.studentsCount}
                                                </span>
                                            </div>

                                            <div className="h-px bg-neutral-100 dark:bg-neutral-800"></div>

                                            {/* Prix & Modalités locales */}
                                            <div className="space-y-3">
                                                <div className="flex items-baseline justify-between">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="font-['Sora'] text-lg font-bold text-[#012d1d] dark:text-white">
                                                            {
                                                                course.priceFormatted
                                                            }
                                                        </span>
                                                        {course.originalPriceFormatted && (
                                                            <span className="text-neutral-400 line-through text-[12px]">
                                                                {
                                                                    course.originalPriceFormatted
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[11px] font-semibold text-[#3f6653] dark:text-emerald-400 flex items-center gap-0.5">
                                                        {course.featureIcon ===
                                                            "zap" && (
                                                            <Zap className="w-3 h-3 text-amber-500" />
                                                        )}
                                                        {course.featureIcon ===
                                                            "offline" && (
                                                            <Clock className="w-3 h-3" />
                                                        )}
                                                        {course.featureIcon ===
                                                            "cert" && (
                                                            <Award className="w-3 h-3 text-emerald-500" />
                                                        )}
                                                        {course.featureIcon ===
                                                            "download" && (
                                                            <Download className="w-3 h-3" />
                                                        )}
                                                        <span>
                                                            {course.feature}
                                                        </span>
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        className="flex-1 py-2.5 bg-[#1b4332] hover:bg-[#012d1d] text-white font-['Sora'] font-semibold text-[13px] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                                    >
                                                        <ShoppingCart className="w-4 h-4" />
                                                        <span>
                                                            {course.actionText}
                                                        </span>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleSaveCourse(
                                                                course.id,
                                                            )
                                                        }
                                                        aria-label={
                                                            isSaved
                                                                ? "Retirer des favoris"
                                                                : "Ajouter aux favoris"
                                                        }
                                                        className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                                                            isSaved
                                                                ? "bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-600 dark:text-amber-400"
                                                                : "bg-neutral-100 dark:bg-neutral-800 border-transparent text-neutral-500 hover:text-[#012d1d] dark:hover:text-white"
                                                        }`}
                                                    >
                                                        {isSaved ? (
                                                            <BookmarkCheck className="w-4 h-4" />
                                                        ) : (
                                                            <Bookmark className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {/* Pied de Liste : Pagination Accessible */}
                        <div className="pt-8 pb-4 flex flex-col sm:row items-center justify-between gap-4 border-t border-neutral-100 dark:border-neutral-800">
                            <p className="text-[13px] text-neutral-500 dark:text-neutral-400">
                                Affichage de{" "}
                                <span className="font-bold text-[#012d1d] dark:text-white">
                                    1 à 6
                                </span>{" "}
                                sur{" "}
                                <span className="font-bold text-[#012d1d] dark:text-white">
                                    142
                                </span>{" "}
                                cours
                            </p>
                            <nav
                                aria-label="Pagination catalogue"
                                className="inline-flex items-center gap-1.5"
                            >
                                <button
                                    type="button"
                                    disabled
                                    aria-label="Page précédente"
                                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed flex items-center justify-center"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    aria-current="page"
                                    className="w-9 h-9 rounded-lg bg-[#1b4332] text-white font-semibold text-[13px] flex items-center justify-center shadow-xs"
                                >
                                    1
                                </button>
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-semibold text-[13px] flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    2
                                </button>
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-semibold text-[13px] flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    3
                                </button>
                                <span className="w-8 text-center text-neutral-400 font-bold">
                                    ...
                                </span>
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 font-semibold text-[13px] flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    12
                                </button>
                                <button
                                    type="button"
                                    aria-label="Page suivante"
                                    className="p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[#012d1d] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center shadow-xs cursor-pointer"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </nav>
                        </div>

                        {/* Bandeau Réassurance & Paiement Sécurisé Local */}
                        <div className="bg-white dark:bg-[#18181b] rounded-xl p-6 sm:p-8 shadow-xs border border-neutral-200/80 dark:border-neutral-800">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-lg bg-[#c5e7d9]/60 dark:bg-emerald-950/60 text-[#012d1d] dark:text-emerald-300 flex items-center justify-center shrink-0">
                                        <DownloadCloud className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-['Sora'] text-[15px] font-bold text-[#012d1d] dark:text-white">
                                            Mode Hors-Ligne
                                        </h4>
                                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            Téléchargez vos cours sur
                                            l'application mobile et révisez sans
                                            connexion Internet.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-lg bg-[#ffddb5]/60 dark:bg-amber-950/60 text-[#382100] dark:text-amber-300 flex items-center justify-center shrink-0">
                                        <CreditCard className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-['Sora'] text-[15px] font-bold text-[#012d1d] dark:text-white">
                                            Paiement Mobile Sans Frais
                                        </h4>
                                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            Réglez instantanément avec Wave,
                                            Orange Money, MTN MoMo ou Moov Money
                                            en toute sécurité.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-lg bg-[#c5e7d9]/60 dark:bg-emerald-950/60 text-[#012d1d] dark:text-emerald-300 flex items-center justify-center shrink-0">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-['Sora'] text-[15px] font-bold text-[#012d1d] dark:text-white">
                                            Certificats Vérifiables
                                        </h4>
                                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            Attestations signées avec QR code
                                            officiel reconnues par les
                                            recruteurs et institutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </WebLayout>
    );
}
