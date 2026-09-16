import { useState } from "react";
import {
    Plus,
    Wallet,
    ArrowUpRight,
    TrendingUp,
    Users,
    Star,
    BookOpen,
    Download,
    ChevronDown,
    ArrowRight,
    MessageSquare,
    Book,
    Video,
    DollarSign,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";
import { Link } from "@inertiajs/react";

export default function InstructorDashboardPage() {
    const [selectedPeriod, setSelectedPeriod] = useState(
        "Ce mois-ci (Mars 2025)",
    );

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= TOP HEADER BAR ================= */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 md:px-8 py-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            Tableau de bord Formateur
                        </h1>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                            Suivez l'impact pédagogique de vos cours, vos
                            revenus générés et l'engagement de vos apprenants en
                            Côte d'Ivoire.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="relative">
                            <button className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-800 flex items-center gap-2 hover:bg-gray-50 shadow-xs">
                                {selectedPeriod}
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            </button>
                        </div>

                        <Link href={`/createur/nouveau-cours`} className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 shadow-sm">
                            <Plus className="w-4 h-4" />
                            Créer un nouveau cours
                        </Link>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-8">
                    {/* BANNIÈRE SOLDE DISPONIBLE & TRANSFERS */}
                    <div className="bg-emerald-950 text-white rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-xl bg-emerald-800/80 text-emerald-300 flex items-center justify-center">
                                        <Wallet className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                                        Solde disponible au retrait
                                    </span>
                                    <span className="bg-emerald-800/80 text-emerald-200 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-700/50">
                                        Instantané
                                    </span>
                                </div>
                                <p className="text-xs text-emerald-200/80">
                                    Transfert direct sans frais sur vos
                                    portefeuilles Wave CI, Orange Money, MTN
                                    MoMo ou Moov Money.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <div className="text-right sm:text-right">
                                    <span className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                        1 240 000 FCFA
                                    </span>
                                </div>

                                <button className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs transition-colors shadow-md flex items-center gap-2 whitespace-nowrap">
                                    <ArrowUpRight className="w-4 h-4" />
                                    Transférer
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARTE METRIQUES / KPIs (4 COLONNES) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* KPI 1 */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span className="font-semibold">
                                    Revenu total cumulé
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                                    <DollarSign className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900">
                                    2 845 000{" "}
                                    <span className="text-sm font-bold text-gray-500">
                                        FCFA
                                    </span>
                                </div>
                                <p className="text-[11px] text-emerald-700 font-bold mt-1 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" /> +18.4% ce
                                    mois-ci
                                </p>
                            </div>
                        </div>

                        {/* KPI 2 */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span className="font-semibold">
                                    Élèves inscrits
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                                    <Users className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900">
                                    4 920
                                </div>
                                <p className="text-[11px] text-emerald-700 font-bold mt-1 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" /> +340
                                    cette semaine
                                </p>
                            </div>
                        </div>

                        {/* KPI 3 */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span className="font-semibold">
                                    Note moyenne globale
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                                    <Star className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900">
                                    4.85{" "}
                                    <span className="text-sm text-gray-400 font-normal">
                                        / 5
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs">
                                    <span>★ ★ ★ ★ ★</span>
                                    <span className="text-[11px] text-gray-400 font-medium">
                                        (112 avis)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* KPI 4 */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
                            <div className="flex justify-between items-center text-xs text-gray-500">
                                <span className="font-semibold">
                                    Cours publiés
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900">
                                    6{" "}
                                    <span className="text-sm font-semibold text-emerald-700">
                                        actifs
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-400 mt-1">
                                    2 conformes BAC & Concours CI
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* GRAPHIQUE & TOP FORMATIONS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* GRAPHIQUE (8 COLS) */}
                        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">
                                        Évolution des revenus mensuels
                                    </h2>
                                    <p className="text-xs text-gray-400">
                                        Revenus bruts perçus par mois en FCFA
                                        (Octobre 2024 - Mars 2025)
                                    </p>
                                </div>

                                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold text-gray-600">
                                    <button className="bg-white text-slate-900 px-3 py-1 rounded-lg shadow-xs">
                                        Tous mes cours
                                    </button>
                                    <button className="px-3 py-1 hover:text-slate-900">
                                        Terminale
                                    </button>
                                    <button className="px-3 py-1 hover:text-slate-900">
                                        Concours ENA
                                    </button>
                                </div>
                            </div>

                            {/* Représentation graphique SVG */}
                            <div className="pt-4 space-y-4">
                                <div className="relative h-64 w-full bg-gradient-to-b from-emerald-50/40 to-transparent rounded-xl border-b border-gray-200 flex items-end justify-between px-4 pb-2">
                                    {/* Tooltip du pic */}
                                    <div className="absolute top-8 left-[45%] bg-[#052e16] text-white text-xs px-3 py-1.5 rounded-xl font-bold shadow-md text-center transform -translate-x-1/2">
                                        <span className="text-[10px] text-emerald-300 font-normal block">
                                            Février 2025 (Pic Révision BAC)
                                        </span>
                                        680 000 FCFA
                                    </div>

                                    {/* SVG Curve Line */}
                                    <svg
                                        className="absolute inset-0 w-full h-full overflow-visible"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 500 200"
                                    >
                                        <path
                                            d="M 10 160 Q 90 150, 170 120 T 250 30 T 330 60 T 490 20"
                                            fill="none"
                                            stroke="#047857"
                                            strokeWidth="3"
                                        />
                                    </svg>

                                    {/* Points du graphique */}
                                    <div className="w-full flex justify-between relative z-10 text-[11px] font-semibold text-gray-400">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs"></span>
                                            <span>Octobre (210k)</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs"></span>
                                            <span>Novembre (310k)</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs"></span>
                                            <span>Décembre (380k)</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-white shadow-md"></span>
                                            <span className="text-slate-900 font-bold">
                                                Février (680k)
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs"></span>
                                            <span>Janvier (540k)</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 border-2 border-white shadow-xs"></span>
                                            <span>Mars en cours (710k)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 pt-2 gap-2">
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
                                        Moyenne mensuelle :{" "}
                                        <strong>474 160 FCFA</strong>
                                    </span>

                                    <button className="text-emerald-800 font-bold flex items-center gap-1 hover:underline self-start sm:self-auto">
                                        <Download className="w-3.5 h-3.5" />{" "}
                                        Télécharger le relevé comptable
                                        (PDF/XLS)
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* TOP FORMATIONS (4 COLS) */}
                        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-5">
                            <div className="flex justify-between items-center">
                                <h2 className="text-base font-bold text-slate-900">
                                    Top Formations
                                </h2>
                                <span className="text-[11px] text-gray-400">
                                    Par revenus
                                </span>
                            </div>
                            <p className="text-xs text-gray-400">
                                Répartition de vos cours les plus rentables ce
                                trimestre
                            </p>

                            <div className="space-y-4 pt-1">
                                {/* Course 1 */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold text-slate-900">
                                        <span className="truncate max-w-[200px]">
                                            1. Maths Tle C & D : Maîtrise
                                        </span>
                                        <span className="text-emerald-800">
                                            1 380 000 F
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-emerald-700 h-full w-[100%] rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400">
                                        1 450 inscrits
                                    </span>
                                </div>

                                {/* Course 2 */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold text-slate-900">
                                        <span className="truncate max-w-[200px]">
                                            2. Prépa ENA 2025 : Droit &...
                                        </span>
                                        <span className="text-emerald-800">
                                            820 000 F
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-amber-500 h-full w-[60%] rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400">
                                        890 inscrits
                                    </span>
                                </div>

                                {/* Course 3 */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold text-slate-900">
                                        <span className="truncate max-w-[200px]">
                                            3. Physique 1ère C & D : Mécanique
                                        </span>
                                        <span className="text-emerald-800">
                                            410 000 F
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-emerald-700 h-full w-[30%] rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400">
                                        520 inscrits
                                    </span>
                                </div>

                                {/* Course 4 */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs font-bold text-slate-900">
                                        <span className="truncate max-w-[200px]">
                                            4. Calcul Intégral Avancé
                                        </span>
                                        <span className="text-emerald-800">
                                            235 000 F
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-gray-300 h-full w-[18%] rounded-full"></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400">
                                        340 inscrits
                                    </span>
                                </div>
                            </div>

                            <button className="w-full pt-2 text-center text-xs font-bold text-emerald-800 hover:underline flex items-center justify-center gap-1">
                                Voir l'analyse détaillée des 6 cours{" "}
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* INSCRIPTIONS RÉCENTES ET AVIS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* INSCRIPTIONS RÉCENTES (7 COLS) */}
                        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-base font-bold text-slate-900">
                                        Inscriptions récentes
                                    </h2>
                                    <p className="text-xs text-gray-400">
                                        Flux des apprenants ayant rejoint vos
                                        classes aujourd'hui
                                    </p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>{" "}
                                    En direct
                                </span>
                            </div>

                            <div className="overflow-x-auto pt-2">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-100 text-gray-400 font-medium">
                                            <th className="pb-3 font-normal">
                                                Apprenant
                                            </th>
                                            <th className="pb-3 font-normal">
                                                Cours
                                            </th>
                                            <th className="pb-3 font-normal">
                                                Paiement
                                            </th>
                                            <th className="pb-3 font-normal text-right">
                                                Montant net
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 font-medium">
                                        <tr>
                                            <td className="py-3.5">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 font-bold flex items-center justify-center text-[10px]">
                                                        KA
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">
                                                            Kouamé Armand
                                                        </p>
                                                        <span className="text-[10px] text-gray-400 block">
                                                            Abidjan, Yopougon
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 text-gray-600">
                                                Maths Terminale C & D
                                            </td>
                                            <td className="py-3.5">
                                                <span className="bg-cyan-50 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                                    Wave CI
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right font-bold text-slate-900">
                                                12 000 F
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-3.5">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-[10px]">
                                                        ST
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">
                                                            Sarah Touré
                                                        </p>
                                                        <span className="text-[10px] text-gray-400 block">
                                                            Bouaké
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 text-gray-600">
                                                Prépa Concours ENA 2025
                                            </td>
                                            <td className="py-3.5">
                                                <span className="bg-orange-50 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                                    Orange Money
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right font-bold text-slate-900">
                                                25 000 F
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-3.5">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-bold flex items-center justify-center text-[10px]">
                                                        MK
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">
                                                            Moussa Konaté
                                                        </p>
                                                        <span className="text-[10px] text-gray-400 block">
                                                            San Pédro
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 text-gray-600">
                                                Physique-Chimie 1ère C...
                                            </td>
                                            <td className="py-3.5">
                                                <span className="bg-yellow-50 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                                    MTN MoMo
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right font-bold text-slate-900">
                                                9 500 F
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="py-3.5">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-[10px]">
                                                        AB
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">
                                                            Aïcha Bamba
                                                        </p>
                                                        <span className="text-[10px] text-gray-400 block">
                                                            Abidjan, Cocody
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3.5 text-gray-600">
                                                Maths Terminale C & D
                                            </td>
                                            <td className="py-3.5">
                                                <span className="bg-cyan-50 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded">
                                                    Wave CI
                                                </span>
                                            </td>
                                            <td className="py-3.5 text-right font-bold text-slate-900">
                                                12 000 F
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* TÉMOIGNAGES & AVIS (5 COLS) */}
                        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-base font-bold text-slate-900">
                                        Témoignages & Avis
                                    </h2>
                                    <p className="text-xs text-gray-400">
                                        Dernières appréciations reçues
                                    </p>
                                </div>
                                <button className="text-xs font-semibold text-emerald-800 hover:underline">
                                    Tout voir
                                </button>
                            </div>

                            <div className="space-y-3 pt-1">
                                {/* Review 1 */}
                                <div className="p-4 bg-gray-50/80 rounded-xl space-y-2 border border-gray-100 text-xs">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-[10px]">
                                                YN
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">
                                                    Yannick N'Goran
                                                </p>
                                                <span className="text-[10px] text-gray-400 block">
                                                    Terminale D • Lycée
                                                    Classique
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-amber-500 font-bold text-xs">
                                            ★ ★ ★ ★ ★
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic text-[11px]">
                                        "Explication limpide sur l'intégration
                                        par parties et les équations
                                        différentielles. Les fiches d'exercices
                                        type BAC m'ont sauvé pour le devoir
                                        blanc, merci M. Yao !"
                                    </p>
                                </div>

                                {/* Review 2 */}
                                <div className="p-4 bg-gray-50/80 rounded-xl space-y-2 border border-gray-100 text-xs">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-amber-800 text-white font-bold flex items-center justify-center text-[10px]">
                                                MK
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">
                                                    Marie-Laure Kouadio
                                                </p>
                                                <span className="text-[10px] text-gray-400 block">
                                                    Candidat Concours ENA 2025
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-amber-500 font-bold text-xs">
                                            ★ ★ ★ ★ ★
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic text-[11px]">
                                        "Le module de droit administratif
                                        comparé est taillé exactement pour les
                                        épreuves ivoiriennes. Vos études de cas
                                        sont ultra pertinentes."
                                    </p>
                                </div>
                            </div>

                            <button className="w-full bg-emerald-100/70 hover:bg-emerald-100 text-emerald-950 font-bold py-2.5 rounded-xl text-xs transition-colors text-center flex items-center justify-center gap-2">
                                <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                                Répondre aux avis des apprenants
                            </button>
                        </div>
                    </div>

                    {/* BANNIÈRE OPPORTUNITÉ PÉDAGOGIQUE (BAC 2025) */}
                    <div className="bg-[#052e16] text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2 max-w-2xl">
                                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                                    OPPORTUNITÉ PÉDAGOGIQUE EDUIVOIRE
                                </span>
                                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                                    Lancez un cycle d'exercices corrigés pour le
                                    BAC 2025
                                </h3>
                                <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed">
                                    La demande d'annales corrigées en vidéo
                                    explose de +240% en Côte d'Ivoire entre mars
                                    et mai. Ajoutez un quiz interactif ou des
                                    sessions live Q&R pour booster vos revenus.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-5 py-3 rounded-xl text-xs transition-colors shadow-md text-center flex items-center justify-center gap-2">
                                    <Video className="w-4 h-4" />
                                    Programmer un Live Q&R
                                </button>
                                <button className="bg-emerald-900/80 hover:bg-emerald-900 text-emerald-100 font-semibold px-5 py-3 rounded-xl text-xs transition-colors border border-emerald-700/60 text-center flex items-center justify-center gap-2">
                                    <Book className="w-4 h-4" />
                                    Consulter le guide formateur
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
