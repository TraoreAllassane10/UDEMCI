import React, { useState } from "react";
import {
    Search,
    Bell,
    User,
    Shield,
    Download,
    Calendar,
    ArrowUpRight,
    TrendingUp,
    Users,
    GraduationCap,
    BookOpen,
    Wifi,
    Filter,
    CheckCircle2,
    RefreshCw,
    Zap,
    Globe,
    ChevronDown,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function AdminDashboardPage() {
    const [selectedSemester, setSelectedSemester] = useState(
        "Session 2025-2026 (Semestre 2)",
    );

    return (
        <WebLayout>
            <div className="bg-[#F8F7F4] text-[#1C1C1C] min-h-screen font-sans text-xs antialiased selection:bg-[#1B4332] selection:text-white">
                {/* ================= MAIN CONTAINER ================= */}
                <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
                    {/* TOP BAR / BREADCRUMB & DECO STATUS */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-gray-500 font-medium">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex items-center gap-1 text-slate-700">
                                <Shield className="w-3.5 h-3.5 text-[#1B4332]" />{" "}
                                Supervision Nationale
                            </span>
                            <span>/</span>
                            <span>
                                République de Côte d'Ivoire — MENA & DECO
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-semibold text-[10px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                                Système opérationnel — 99,85% disponibilité
                            </span>
                            <span className="text-gray-400 hidden sm:inline">
                                • Relevé temps réel (30s)
                            </span>
                        </div>
                    </div>

                    {/* HERO TITLE & ACTIONS */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Console d'Administration & Supervision
                            </h1>
                            <p className="text-gray-500 text-xs mt-1 max-w-2xl">
                                Pilotage macro-éducatif, flux monétaires Mobile
                                Money et conformité des curricula aux standards
                                du Ministère de l'Éducation Nationale et de
                                l'Alphabétisation.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
                            {/* Filter Dropdown */}
                            <div className="relative bg-white border border-gray-200 rounded-xl shadow-2xs">
                                <select
                                    value={selectedSemester}
                                    onChange={(e) =>
                                        setSelectedSemester(e.target.value)
                                    }
                                    className="appearance-none bg-transparent pl-3 pr-8 py-2 text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                                >
                                    <option>
                                        Session 2025-2026 (Semestre 2)
                                    </option>
                                    <option>
                                        Session 2025-2026 (Semestre 1)
                                    </option>
                                </select>
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-3 pointer-events-none" />
                            </div>

                            {/* Export PDF Button */}
                            <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
                                <Download className="w-3.5 h-3.5" />
                                <span>Rapport MENA (Export PDF)</span>
                            </button>
                        </div>
                    </div>

                    {/* BANNER NOTIFICATION (AGRÉMENT PEDAGOGIQUE) */}
                    <div className="bg-[#FDE8CE]/70 border border-[#F5C28B] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#E8A33D] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">
                                !
                            </div>
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#1B4332] text-white text-[9px] font-bold px-2 py-0.2 rounded-sm uppercase tracking-wider">
                                        Priorité DECO
                                    </span>
                                    <span className="font-bold text-slate-900 text-xs">
                                        14 cours en attente d'agrément
                                        pédagogique national
                                    </span>
                                </div>
                                <p className="text-[#6C4B1B] text-[11px]">
                                    Des programmes préparatoires au Baccalauréat
                                    C & D et BEPC nécessitent une révision de
                                    conformité méthodologique avant distribution
                                    ouverte sur les canaux régionaux.
                                </p>
                            </div>
                        </div>

                        <button className="bg-[#4E2B08] hover:bg-[#391F05] text-white font-bold px-4 py-2 rounded-xl text-xs shrink-0 w-full sm:w-auto text-center transition-colors">
                            Examiner les 14 dossiers →
                        </button>
                    </div>

                    {/* ================= 4 KPI CARDS ================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-gray-500">
                                    Volume d'Affaires Global (GMV)
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                                    84.500.000{" "}
                                    <span className="text-xs font-sans font-bold text-gray-500">
                                        FCFA
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">
                                    <ArrowUpRight className="w-3 h-3" /> +21%
                                    emprise vs trimestre dernier
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-500">
                                <span>Part Édulvoire (15%)</span>
                                <span className="font-bold text-slate-900 font-mono">
                                    12.675.000 FCFA
                                </span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-gray-500">
                                    Apprenants Inscrits
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <Users className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                                    42.850
                                </div>
                                <p className="text-[10px] text-gray-500 mt-2">
                                    Élèves & auditeurs actifs sur les 31 régions
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-500">
                                <span>Rétention 30 jours</span>
                                <span className="font-bold text-slate-900 font-mono">
                                    78.4%
                                </span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-gray-500">
                                    Enseignants & Formateurs
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <GraduationCap className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                                    185
                                </div>
                                <p className="text-[10px] text-gray-500 mt-2">
                                    Professeurs certifiés Cafop, ENS & experts
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-500">
                                <span>Taux d'agrément MENA</span>
                                <span className="font-bold text-slate-900 font-mono">
                                    92.2%
                                </span>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 shadow-2xs space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-gray-500">
                                    Catalogue Didactique
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <BookOpen className="w-3.5 h-3.5" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                                        312
                                    </span>
                                    <span className="text-xs font-bold text-gray-500">
                                        cours
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">
                                    ⚠️ 14 cours en attente DECO
                                </div>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-500">
                                <span>Complétion moyenne</span>
                                <span className="font-bold text-slate-900 font-mono">
                                    64.1%
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ================= CHARTS AND GEOGRAPHY SECTION ================= */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* DYNAMIQUE DES INSCRIPTIONS & TRANSACTIONS (8 COLS) */}
                        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-sm text-slate-900">
                                        Dynamique des Inscriptions &
                                        Transactions Journalières
                                    </h3>
                                    <p className="text-[11px] text-gray-400">
                                        Corrélations avec le calendrier des
                                        examens blancs nationaux (BEPC / BAC)
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-[10px] font-bold">
                                    <span className="flex items-center gap-1 text-[#1B4332]">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#1B4332]"></span>{" "}
                                        GMV (FCFA)
                                    </span>
                                    <span className="flex items-center gap-1 text-[#E8A33D]">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]"></span>{" "}
                                        Inscriptions
                                    </span>
                                </div>
                            </div>

                            {/* CHART AREA MOCKUP */}
                            <div className="relative h-44 w-full bg-linear-to-b from-emerald-50/40 via-transparent to-transparent rounded-xl border-b border-gray-200 flex items-end justify-between px-4 pb-2">
                                {/* Highlight Marker */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1B4332] text-white text-[9px] font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1">
                                    <Zap className="w-3 h-3 text-[#E8A33D]" />{" "}
                                    +84% Pic Bac Blanc
                                </div>

                                {/* Simulated Wave SVG Path */}
                                <svg
                                    className="absolute inset-0 w-full h-full text-[#1B4332]"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 500 150"
                                >
                                    <path
                                        d="M0,120 Q120,100 200,60 T350,20 T500,70 L500,150 L0,150 Z"
                                        fill="currentColor"
                                        fillOpacity="0.08"
                                    />
                                    <path
                                        d="M0,120 Q120,100 200,60 T350,20 T500,70"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                </svg>

                                {/* Day Labels */}
                                <span className="text-[10px] text-gray-400 font-semibold z-10">
                                    01 Sep
                                </span>
                                <span className="text-[10px] text-gray-400 font-semibold z-10">
                                    03 Sep
                                </span>
                                <span className="text-[10px] text-gray-400 font-semibold z-10">
                                    05 Sep
                                </span>
                                <span className="text-[10px] font-bold text-[#1B4332] z-10">
                                    08 Sep (Pic BAC)
                                </span>
                                <span className="text-[10px] text-gray-400 font-semibold z-10">
                                    11 Sep
                                </span>
                            </div>

                            {/* Bottom mini KPI strip */}
                            <div className="grid grid-cols-3 gap-3 pt-2">
                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-100 space-y-0.5">
                                    <span className="text-[10px] text-gray-400 font-semibold block uppercase">
                                        Panier Moyen / Élève
                                    </span>
                                    <span className="text-xs font-extrabold text-slate-900 font-mono">
                                        14.200 FCFA
                                    </span>
                                    <span className="text-[9px] text-gray-400 block">
                                        Packs multi-matières
                                    </span>
                                </div>

                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-100 space-y-0.5">
                                    <span className="text-[10px] text-gray-400 font-semibold block uppercase">
                                        Part Du Wave CI
                                    </span>
                                    <span className="text-xs font-extrabold text-[#1B4332] font-mono">
                                        62.8%
                                    </span>
                                    <span className="text-[9px] text-gray-400 block">
                                        Validation en 3sec
                                    </span>
                                </div>

                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-100 space-y-0.5">
                                    <span className="text-[10px] text-gray-400 font-semibold block uppercase">
                                        Taux d'Échec Paiement
                                    </span>
                                    <span className="text-xs font-extrabold text-emerald-800 font-mono">
                                        0.82%
                                    </span>
                                    <span className="text-[9px] text-gray-400 block">
                                        Tolérance Réseau Mobile
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RÉPARTITION GÉOGRAPHIQUE (5 COLS) */}
                        <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/90 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-sm text-slate-900">
                                        Répartition Géographique
                                    </h3>
                                    <p className="text-[11px] text-gray-400">
                                        Côte d'Ivoire — Taux de pénétration
                                    </p>
                                </div>
                                <Globe className="w-4 h-4 text-gray-400" />
                            </div>

                            {/* Regional Bars */}
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-[11px] font-bold mb-1">
                                        <span className="text-slate-900">
                                            • Région des Lagunes (Abidjan)
                                        </span>
                                        <span className="font-mono text-slate-900">
                                            54%{" "}
                                            <span className="text-gray-400 font-normal">
                                                (23.139 élèves)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B4332] w-[54%]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-bold mb-1">
                                        <span className="text-slate-900">
                                            • Gbeke (Bouaké)
                                        </span>
                                        <span className="font-mono text-slate-900">
                                            16%{" "}
                                            <span className="text-gray-400 font-normal">
                                                (6.856 élèves)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B4332]/80 w-[16%]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-bold mb-1">
                                        <span className="text-slate-900">
                                            • Béoumi (Yamoussoukro)
                                        </span>
                                        <span className="font-mono text-slate-900">
                                            11%{" "}
                                            <span className="text-gray-400 font-normal">
                                                (4.713 élèves)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1B4332]/60 w-[11%]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-bold mb-1">
                                        <span className="text-slate-900">
                                            • Bas-Sassandra (San Pedro)
                                        </span>
                                        <span className="font-mono text-slate-900">
                                            8%{" "}
                                            <span className="text-gray-400 font-normal">
                                                (3.428 élèves)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#E8A33D] w-[8%]"></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-bold mb-1">
                                        <span className="text-slate-900">
                                            • Poro (Korhogo) & Autres régions
                                        </span>
                                        <span className="font-mono text-slate-900">
                                            11%{" "}
                                            <span className="text-gray-400 font-normal">
                                                (4.714 élèves)
                                            </span>
                                        </span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-300 w-[11%]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Low-data network box */}
                            <div className="bg-[#F8F7F4] p-3 rounded-xl border border-gray-200/80 space-y-1">
                                <div className="flex items-center gap-1.5 text-[#1B4332] font-bold text-[11px]">
                                    <Wifi className="w-3.5 h-3.5" />
                                    <span>Optimisation Réseau & Bas Débit</span>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-snug">
                                    71% du trafic streaming s'effectue via le
                                    transcodage adaptatif{" "}
                                    <strong className="text-slate-800">
                                        480p Ultra-Léger
                                    </strong>{" "}
                                    (compression AV1), assurant la fluidité
                                    pédagogique même en zones 3G à l'intérieur
                                    du pays.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= MOBILE MONEY REAL-TIME TRANSACTIONS ================= */}
                    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
                        {/* Header */}
                        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-sm text-slate-900">
                                        Dernières Transactions Mobile Money en
                                        Direct
                                    </h3>
                                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>{" "}
                                        Live Sync
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                    Encaissements instantanés et commissions
                                    prélevées à la source
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="border border-gray-200 hover:bg-gray-50 text-slate-700 font-semibold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors">
                                    <Filter className="w-3.5 h-3.5" /> Filtrer
                                    par opérateur
                                </button>
                                <button className="border border-gray-200 hover:bg-gray-50 text-slate-700 font-semibold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors">
                                    <Download className="w-3.5 h-3.5" />{" "}
                                    Exporter CSV
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F8F7F4] text-gray-400 uppercase text-[9px] font-extrabold border-b border-gray-200/60">
                                        <th className="py-3 px-5">
                                            HORODATAGE
                                        </th>
                                        <th className="py-3 px-5">APPRENANT</th>
                                        <th className="py-3 px-5">
                                            FORMATION / PACK
                                        </th>
                                        <th className="py-3 px-5">CANAL</th>
                                        <th className="py-3 px-5 text-right">
                                            MONTANT BRUT
                                        </th>
                                        <th className="py-3 px-5 text-right">
                                            COMMISSION EDULVOIRE (15%)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5 font-mono text-gray-500 whitespace-nowrap">
                                            14:42:18{" "}
                                            <span className="text-[9px] text-gray-400 block">
                                                Aujourd'hui
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#1B4332] font-bold text-[10px] flex items-center justify-center">
                                                    EA
                                                </div>
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Kouassi Ange-Emmanuel
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">
                                                        Lycée Moderne
                                                        Treichville
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-semibold block text-slate-800">
                                                Pack Révision Intensive BAC C
                                                2026
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Mathématiques & Physique
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-cyan-200">
                                                🌊 Wave CI
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-slate-900">
                                            15.000 FCFA
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-[#1B4332]">
                                            +2.250 FCFA
                                        </td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5 font-mono text-gray-500 whitespace-nowrap">
                                            14:38:05{" "}
                                            <span className="text-[9px] text-gray-400 block">
                                                Aujourd'hui
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-800 font-bold text-[10px] flex items-center justify-center">
                                                    TM
                                                </div>
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Touré Mariam
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">
                                                        Lycée Sainte Marie
                                                        Cocody
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-semibold block text-slate-800">
                                                Méthodologie Dissertation Philo
                                                BAC A/D
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Prof. Bakayoko
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-orange-200">
                                                🟧 Orange Money
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-slate-900">
                                            8.500 FCFA
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-[#1B4332]">
                                            +1.275 FCFA
                                        </td>
                                    </tr>

                                    {/* Row 3 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5 font-mono text-gray-500 whitespace-nowrap">
                                            14:31:50{" "}
                                            <span className="text-[9px] text-gray-400 block">
                                                Aujourd'hui
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center">
                                                    DY
                                                </div>
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Diao Yaouba
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">
                                                        Collège Moderne Bouaké
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-[#1B4332] px-5">
                                            <span className="font-semibold block text-slate-800">
                                                Préparation BEPC : SVT & Annales
                                                Corriger
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Module de 24 fiches d'exercices
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-amber-200">
                                                🟨 MTN MoMo
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-slate-900">
                                            6.000 FCFA
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-[#1B4332]">
                                            +900 FCFA
                                        </td>
                                    </tr>

                                    {/* Row 4 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5 font-mono text-gray-500 whitespace-nowrap">
                                            14:22:11{" "}
                                            <span className="text-[9px] text-gray-400 block">
                                                Aujourd'hui
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-800 font-bold text-[10px] flex items-center justify-center">
                                                    CK
                                                </div>
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Cissé Karamoko
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">
                                                        Université Nangui
                                                        Abrogoua
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-semibold block text-slate-800">
                                                Data Science avec Python & SQL
                                                en Entreprise
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Certificat Pro 60h
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-cyan-200">
                                                🌊 Wave CI
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-slate-900">
                                            45.000 FCFA
                                        </td>
                                        <td className="py-3.5 px-5 text-right font-mono font-bold text-[#1B4332]">
                                            +6.750 FCFA
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Footer of Table */}
                        <div className="p-4 bg-[#F8F7F4] border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
                            <span>
                                Affichage des 4 dernières transactions sur 1.628
                                enregistrées aujourd'hui
                            </span>
                            <button className="text-[#1B4332] font-bold hover:underline flex items-center gap-1">
                                Voir tout l'historique financier →
                            </button>
                        </div>
                    </div>

                    {/* ================= BOTTOM THREE HIGHLIGHT CARDS ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-start gap-3 shadow-2xs">
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-slate-900 text-xs">
                                    Harmonisation MENA 2025
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-snug">
                                    Les grilles d'évaluation APC (Approche Par
                                    Compétences) ont été synchronisées sur les
                                    cours de Terminale.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-start gap-3 shadow-2xs">
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-slate-900 text-xs">
                                    Interconnexion DECO Direct
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-snug">
                                    Vérification automatique des numéros
                                    matricules MENA pour la délivrance des
                                    attestations officielles.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-start gap-3 shadow-2xs">
                            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div className="space-y-0.5">
                                <h4 className="font-bold text-slate-900 text-xs">
                                    Passerelles Mobile Money
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-snug">
                                    API Wave, Orange, MTN et Moov
                                    opérationnelles à 100% avec niveau bancaire
                                    UEMOA conforme.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </WebLayout>
    );
}
