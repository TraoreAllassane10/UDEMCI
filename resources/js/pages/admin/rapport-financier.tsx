import React, { useState } from "react";
import {
    Search,
    Bell,
    Download,
    RefreshCw,
    TrendingUp,
    Wallet,
    PieChart,
    ShieldCheck,
    CheckCircle2,
    AlertTriangle,
    Clock,
    Eye,
    ArrowUpRight,
    Filter,
    FileText,
    DollarSign,
    Building,
    Lock,
    Layers,
    Sparkles,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function FinancialReportPage() {
    const [selectedMonth, setSelectedMonth] = useState("Mars 2025");
    const [selectedOperator, setSelectedOperator] = useState(
        "Tous les Opérateurs",
    );
    const [selectedStatus, setSelectedStatus] = useState("Tous les Statuts");

    return (
        <WebLayout>
            <div className="bg-[#F8F7F4] text-[#1C1C1C] min-h-screen font-sans text-xs antialiased selection:bg-[#1B4332] selection:text-white">
                {/* ================= MAIN CONTAINER ================= */}
                <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">
                    {/* BREADCRUMB */}
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium">
                        <span>Administration</span>
                        <span>/</span>
                        <span className="text-slate-900 font-bold">
                            Finance & Réconciliation Mobile Money
                        </span>
                    </div>

                    {/* PAGE TITLE & ACTION BUTTONS */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Rapports Financiers & Réconciliation Mobile
                                Money
                            </h1>
                            <p className="text-gray-500 text-xs mt-1">
                                Suivi en temps réel des encaissements,
                                répartition automatisée des commissions,
                                équilibrage des passerelles Wave, Orange, MTN,
                                Moov et virements interbancaires GIM-UEMOA.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                            <select
                                value={selectedMonth}
                                onChange={(e) =>
                                    setSelectedMonth(e.target.value)
                                }
                                className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 shadow-2xs focus:outline-hidden cursor-pointer"
                            >
                                <option value="Mars 2025">
                                    Ce mois : Mars 2025
                                </option>
                                <option value="Fevrier 2025">
                                    Février 2025
                                </option>
                                <option value="Janvier 2025">
                                    Janvier 2025
                                </option>
                            </select>

                            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-2xs transition-all">
                                <Download className="w-3.5 h-3.5 text-gray-600" />
                                <span>Relevé Comptable (PDF)</span>
                            </button>

                            <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
                                <RefreshCw className="w-3.5 h-3.5" />
                                <span>Lancer la réconciliation</span>
                            </button>
                        </div>
                    </div>

                    {/* HERO BANNER CARD */}
                    <div className="bg-[#0B2319] text-white rounded-3xl p-5 shadow-xs relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-1.5 z-10 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <span className="bg-emerald-900/80 text-emerald-300 text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-700/50">
                                    Agrégateur BCEAO N° DREO-0924-004 •
                                    GIM-UEMOA Sécurisé
                                </span>
                            </div>
                            <h2 className="text-lg md:text-xl font-bold tracking-tight">
                                Compensation Instantanée Multi-Opérateurs
                            </h2>
                            <p className="text-emerald-100/70 text-[11px] leading-relaxed">
                                Les fonds collectés par Mobile Money en Côte
                                d'Ivoire sont séquestrés au fil de l'eau sur nos
                                comptes trésorerie sous-jacents dans les 4
                                banques réseaux et redistribués aux formateurs
                                selon la clé certifiée 85% / 15%.
                            </p>
                        </div>

                        <div className="bg-[#133225] border border-emerald-800/80 rounded-2xl p-4 z-10 shrink-0 text-right w-full md:w-auto">
                            <div className="flex items-center justify-end gap-1.5 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                                <span>TRÉSORERIE CENTRALE DE SÉQUESTRE</span>
                                <Wallet className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-2xl font-black font-mono mt-1 text-white">
                                24 160 000 FCFA
                            </div>
                        </div>
                    </div>

                    {/* METRIC CARDS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Volume Global (GMV)
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="text-2xl font-black text-slate-900 font-mono">
                                84 500 000{" "}
                                <span className="text-xs font-normal text-gray-500">
                                    FCFA
                                </span>
                            </div>
                            <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                                <ArrowUpRight className="w-3 h-3" /> +13.2% vs
                                mois précédent
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Commissions Plateforme (15%)
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                                    <PieChart className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="text-2xl font-black text-slate-900 font-mono">
                                12 675 000{" "}
                                <span className="text-xs font-normal text-gray-500">
                                    FCFA
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                Marge brute nette société
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Quote-part Formateurs (85%)
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <DollarSign className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="text-2xl font-black text-slate-900 font-mono">
                                71 825 000{" "}
                                <span className="text-xs font-normal text-gray-500">
                                    FCFA
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                Distribué aux enseignants CI
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[10px] font-bold uppercase tracking-wider">
                                    Taux Réconciliation Passerelles
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="text-2xl font-black text-slate-900 font-mono">
                                99.94%
                            </div>
                            <div className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                Écart résiduel : 0 FCFA
                            </div>
                        </div>
                    </div>

                    {/* OPERATORS BREAKDOWN SECTION */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-extrabold text-sm text-slate-900">
                                    Répartition par Opérateur Mobile Money
                                </h3>
                                <p className="text-[10px] text-gray-500">
                                    Volumes traités en Côte d'Ivoire et état des
                                    comptes de séquestre passerelles.
                                </p>
                            </div>
                            <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Mise à jour
                                Passerelles en temps réel (Ping 12ms)
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Wave */}
                            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3 relative overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-cyan-500 text-white font-extrabold flex items-center justify-center text-xs">
                                            W
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xs">
                                                Wave Côte d'Ivoire
                                            </h4>
                                            <span className="text-[9px] text-gray-400 font-mono">
                                                Frais API : 1.0%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="bg-cyan-50 text-cyan-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-cyan-200">
                                        58%
                                    </span>
                                </div>

                                <div>
                                    <div className="text-lg font-black font-mono text-slate-900">
                                        49 010 000{" "}
                                        <span className="text-xs text-gray-500">
                                            FCFA
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">
                                        Taux de succès : 99.9%
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                                    <span className="text-gray-400 font-medium">
                                        Solde Séquestre Vague
                                    </span>
                                    <span className="font-bold font-mono text-slate-900">
                                        14 250 000 FCFA
                                    </span>
                                </div>
                            </div>

                            {/* Orange Money */}
                            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3 relative overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-orange-500 text-white font-extrabold flex items-center justify-center text-xs">
                                            OM
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xs">
                                                Orange Money CI
                                            </h4>
                                            <span className="text-[9px] text-gray-400 font-mono">
                                                Frais API : 1.2%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="bg-orange-50 text-orange-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-orange-200">
                                        26%
                                    </span>
                                </div>

                                <div>
                                    <div className="text-lg font-black font-mono text-slate-900">
                                        21 970 000{" "}
                                        <span className="text-xs text-gray-500">
                                            FCFA
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">
                                        Taux de succès : 99.8%
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                                    <span className="text-gray-400 font-medium">
                                        Solde Séquestre Orange
                                    </span>
                                    <span className="font-bold font-mono text-slate-900">
                                        6 120 000 FCFA
                                    </span>
                                </div>
                            </div>

                            {/* MTN MoMo */}
                            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3 relative overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center text-[10px]">
                                            MTN
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xs">
                                                MTN MoMo
                                            </h4>
                                            <span className="text-[9px] text-gray-400 font-mono">
                                                Frais API : 1.2%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="bg-amber-50 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-200">
                                        12%
                                    </span>
                                </div>

                                <div>
                                    <div className="text-lg font-black font-mono text-slate-900">
                                        10 140 000{" "}
                                        <span className="text-xs text-gray-500">
                                            FCFA
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">
                                        Taux de succès : 99.4%
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                                    <span className="text-gray-400 font-medium">
                                        Solde Séquestre MoMo
                                    </span>
                                    <span className="font-bold font-mono text-slate-900">
                                        2 840 000 FCFA
                                    </span>
                                </div>
                            </div>

                            {/* Moov Money */}
                            <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-3 relative overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 rounded-lg bg-[#0066B3] text-white font-extrabold flex items-center justify-center text-[10px]">
                                            Moov
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-xs">
                                                Moov CI & CB
                                            </h4>
                                            <span className="text-[9px] text-gray-400 font-mono">
                                                Frais API : 1.5%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="bg-blue-50 text-blue-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-blue-200">
                                        4%
                                    </span>
                                </div>

                                <div>
                                    <div className="text-lg font-black font-mono text-slate-900">
                                        3 380 000{" "}
                                        <span className="text-xs text-gray-500">
                                            FCFA
                                        </span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 font-medium">
                                        Taux de succès : 99.0%
                                    </div>
                                </div>

                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px]">
                                    <span className="text-gray-400 font-medium">
                                        Solde Séquestre Moov
                                    </span>
                                    <span className="font-bold font-mono text-slate-900">
                                        950 000 FCFA
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE SECTION : CHART & INTEGRITY PANEL */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* CHART CONTAINER (2 cols) */}
                        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-200/80 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <div>
                                    <h3 className="font-extrabold text-sm text-slate-900">
                                        Flux Quotidien & Répartition
                                        Trimestrielle
                                    </h3>
                                    <p className="text-[10px] text-gray-500">
                                        Encaissements Bruts (Total) vs
                                        Reversements Formateurs (85%) vs Marge
                                        Edulvoire (15%).
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-600">
                                    <span className="flex items-center gap-1">
                                        <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>{" "}
                                        Brut
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>{" "}
                                        Formateurs (85%)
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>{" "}
                                        Marge (15%)
                                    </span>
                                </div>
                            </div>

                            {/* Simulated Chart SVG */}
                            <div className="relative h-48 w-full pt-4">
                                {/* Tooltip Overlay Example */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#0B2319] text-white text-[10px] font-mono px-2.5 py-1 rounded-lg shadow-md z-20 pointer-events-none text-center border border-emerald-800">
                                    <div className="font-bold text-emerald-300">
                                        Pic 04 Mars — 6.8M FCFA
                                    </div>
                                    <div className="text-gray-300 text-[9px]">
                                        284 Ventes Instantanées
                                    </div>
                                </div>

                                <svg
                                    className="w-full h-full overflow-visible"
                                    viewBox="0 0 500 150"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <linearGradient
                                            id="chartGradient"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#1B4332"
                                                stopOpacity="0.15"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#1B4332"
                                                stopOpacity="0.0"
                                            />
                                        </linearGradient>
                                    </defs>

                                    {/* Gridlines */}
                                    <line
                                        x1="0"
                                        y1="30"
                                        x2="500"
                                        y2="30"
                                        stroke="#F1F5F9"
                                        strokeWidth="1"
                                    />
                                    <line
                                        x1="0"
                                        y1="75"
                                        x2="500"
                                        y2="75"
                                        stroke="#F1F5F9"
                                        strokeWidth="1"
                                    />
                                    <line
                                        x1="0"
                                        y1="120"
                                        x2="500"
                                        y2="120"
                                        stroke="#F1F5F9"
                                        strokeWidth="1"
                                    />

                                    {/* Area under main curve */}
                                    <path
                                        d="M0,110 Q80,90 160,85 T320,30 T420,120 T500,70 L500,150 L0,150 Z"
                                        fill="url(#chartGradient)"
                                    />

                                    {/* Curve 1: Gross (Black line) */}
                                    <path
                                        d="M0,110 Q80,90 160,85 T320,30 T420,120 T500,70"
                                        fill="none"
                                        stroke="#1C1C1C"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />

                                    {/* Curve 2: Formateurs 85% (Dashed Emerald line) */}
                                    <path
                                        d="M0,118 Q80,98 160,93 T320,45 T420,128 T500,80"
                                        fill="none"
                                        stroke="#1B4332"
                                        strokeWidth="1.8"
                                        strokeDasharray="4 3"
                                    />

                                    {/* Curve 3: Margin 15% (Amber line) */}
                                    <path
                                        d="M0,140 Q80,138 160,135 T320,120 T420,145 T500,135"
                                        fill="none"
                                        stroke="#E8A33D"
                                        strokeWidth="1.8"
                                    />
                                </svg>
                            </div>

                            {/* X Axis */}
                            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono border-t border-gray-100 pt-2">
                                <span>01 Mars</span>
                                <span>07 Mars</span>
                                <span>14 Mars</span>
                                <span className="font-bold text-slate-800">
                                    21 Mars (Pic GMV)
                                </span>
                                <span>28 Mars</span>
                                <span>Aujourd'hui (31 Mars)</span>
                            </div>
                        </div>

                        {/* INTEGRITY PANEL (1 col) */}
                        <div className="bg-white rounded-3xl border border-gray-200/80 p-5 shadow-2xs space-y-4 flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-extrabold uppercase text-gray-400 tracking-wider">
                                        CONTRÔLE D'INTÉGRITÉ
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-slate-900">
                                        0 Anomalie Non Résolue
                                    </h3>
                                    <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">
                                        Audit automatisé des signaux de paiement
                                        cryptographiques sur les 72 dernières
                                        heures.
                                    </p>
                                </div>

                                <div className="space-y-2 pt-1">
                                    <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center justify-between text-[11px]">
                                        <span className="text-gray-600 font-medium">
                                            Écarts de conversion Wave/OM
                                        </span>
                                        <span className="font-mono font-bold text-slate-900">
                                            0 FCFA
                                        </span>
                                    </div>

                                    <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center justify-between text-[11px]">
                                        <span className="text-gray-600 font-medium">
                                            Paiements orphelins (Ipsos/v3)
                                        </span>
                                        <span className="font-mono font-bold text-emerald-700">
                                            0 Incident
                                        </span>
                                    </div>

                                    <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center justify-between text-[11px]">
                                        <span className="text-gray-600 font-medium">
                                            Virement global GIM-UEMOA
                                        </span>
                                        <span className="font-mono font-bold text-emerald-700">
                                            04.00 GMT (Conforme)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Tax Info Box */}
                            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-3 flex items-start gap-2.5">
                                <ShieldCheck className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                                <div className="space-y-0.5">
                                    <span className="font-bold text-[#1B4332] text-xs block">
                                        Audit Fiscal DGI Côte d'Ivoire
                                    </span>
                                    <p className="text-[10px] text-emerald-950/80 leading-relaxed">
                                        TVA précomptée et retenue à la source
                                        (AIRS) 100% calculées pour les
                                        formateurs résidants ivoiriens.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= REAL TIME RECONCILIATION TABLE ================= */}
                    <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <h3 className="font-extrabold text-base text-slate-900">
                                    Journal de Réconciliation en Temps Réel
                                </h3>
                                <p className="text-xs text-gray-500">
                                    Contrôle croisé des versements passerelles
                                    Mobile Money et du grand livre Edulvoire.
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <select
                                    value={selectedOperator}
                                    onChange={(e) =>
                                        setSelectedOperator(e.target.value)
                                    }
                                    className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs focus:outline-hidden cursor-pointer"
                                >
                                    <option value="Tous les Opérateurs">
                                        Tous les Opérateurs
                                    </option>
                                    <option value="Wave">Wave CI</option>
                                    <option value="Orange">Orange Money</option>
                                    <option value="MTN">MTN MoMo</option>
                                </select>

                                <select
                                    value={selectedStatus}
                                    onChange={(e) =>
                                        setSelectedStatus(e.target.value)
                                    }
                                    className="bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs focus:outline-hidden cursor-pointer"
                                >
                                    <option value="Tous les Statuts">
                                        Tous les Statuts
                                    </option>
                                    <option value="Lettre">
                                        Lettré & Compensé
                                    </option>
                                    <option value="Execute">
                                        Virement Exécuté
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-2xs overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#F8F7F4] text-gray-400 uppercase text-[9px] font-extrabold border-b border-gray-200/60">
                                            <th className="py-3 px-5">
                                                REF. TRANSACTION / DATE
                                            </th>
                                            <th className="py-3 px-5">
                                                PASSERELLE
                                            </th>
                                            <th className="py-3 px-5">
                                                BÉNÉFICIAIRE / ÉLÈVE
                                            </th>
                                            <th className="py-3 px-5 font-mono">
                                                MONTANT BRUT
                                            </th>
                                            <th className="py-3 px-5 font-mono">
                                                FORMATEUR (85%)
                                            </th>
                                            <th className="py-3 px-5 font-mono">
                                                EDULVOIRE (15%)
                                            </th>
                                            <th className="py-3 px-5">
                                                RÉCONCILIATION
                                            </th>
                                            <th className="py-3 px-5 text-right">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-gray-50/80 transition-colors">
                                            <td className="py-3.5 px-5">
                                                <span className="font-mono font-bold block text-slate-900">
                                                    TX-CI-2025-0841
                                                </span>
                                                <span className="text-[10px] text-gray-400 block font-mono">
                                                    24 Mars 2025, 11:12
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-cyan-100 text-cyan-900 font-bold px-2.5 py-1 rounded-full text-[10px]">
                                                    Wave CI
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="font-bold block text-slate-900">
                                                    Kouassi Ange
                                                </span>
                                                <span className="text-[10px] text-gray-400 block">
                                                    Pack BAC D 2025 (3x Tle)
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                                                15 000 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-semibold text-emerald-800">
                                                12 750 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono text-gray-500">
                                                2 250 FCFA
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                                    Lettré & Compensé
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 text-right">
                                                <button
                                                    className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700"
                                                    title="Détails transaction"
                                                >
                                                    <Eye className="w-3.5 h-3.5" />
                                                </button>
                                            </td>
                                        </tr>

                                        {/* Row 2 */}
                                        <tr className="hover:bg-gray-50/80 transition-colors">
                                            <td className="py-3.5 px-5">
                                                <span className="font-mono font-bold block text-slate-900">
                                                    TX-CI-2025-0840
                                                </span>
                                                <span className="text-[10px] text-gray-400 block font-mono">
                                                    24 Mars 2025, 10:58
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-orange-100 text-orange-900 font-bold px-2.5 py-1 rounded-full text-[10px]">
                                                    Orange Money
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="font-bold block text-slate-900">
                                                    Touré Mariam
                                                </span>
                                                <span className="text-[10px] text-gray-400 block">
                                                    SVT Terminale C & D (Mme
                                                    Bamba)
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                                                8 500 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-semibold text-emerald-800">
                                                7 225 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono text-gray-500">
                                                1 275 FCFA
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                                    Lettré & Compensé
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 text-right">
                                                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                                                    <Eye className="w-3.5 h-3.5" />
                                                </button>
                                            </td>
                                        </tr>

                                        {/* Row 3 */}
                                        <tr className="hover:bg-gray-50/80 transition-colors">
                                            <td className="py-3.5 px-5">
                                                <span className="font-mono font-bold block text-slate-900">
                                                    TX-CI-2025-0839
                                                </span>
                                                <span className="text-[10px] text-gray-400 block font-mono">
                                                    24 Mars 2025, 10:35
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full text-[10px]">
                                                    MTN MoMo
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="font-bold block text-slate-900">
                                                    Soro Yacouba
                                                </span>
                                                <span className="text-[10px] text-gray-400 block">
                                                    Prepa ENA
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                                                6 000 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-semibold text-emerald-800">
                                                5 100 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono text-gray-500">
                                                900 FCFA
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                                    Lettré & Compensé
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 text-right">
                                                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                                                    <Eye className="w-3.5 h-3.5" />
                                                </button>
                                            </td>
                                        </tr>

                                        {/* Row 4 */}
                                        <tr className="hover:bg-gray-50/80 transition-colors bg-blue-50/20">
                                            <td className="py-3.5 px-5">
                                                <span className="font-mono font-bold block text-slate-900">
                                                    BATCH-VIR-2025-14
                                                </span>
                                                <span className="text-[10px] text-gray-400 block font-mono">
                                                    24 Mars 2025, 09:15
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="bg-blue-100 text-blue-900 font-bold px-2.5 py-1 rounded-full text-[10px]">
                                                    Virement Wave/Bank
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="font-bold block text-slate-900">
                                                    28 Formateurs Certifiés
                                                </span>
                                                <span className="text-[10px] text-gray-400 block">
                                                    Solde hebdomadaire cours
                                                    payants
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-bold text-slate-900">
                                                4 250 000 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono font-semibold text-emerald-800">
                                                4 250 000 FCFA
                                            </td>
                                            <td className="py-3.5 px-5 font-mono text-gray-400">
                                                0 FCFA (Vir)
                                            </td>
                                            <td className="py-3.5 px-5">
                                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full">
                                                    <CheckCircle2 className="w-3 h-3" />{" "}
                                                    Virement Exécuté
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-5 text-right">
                                                <button
                                                    className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700"
                                                    title="Reçu de virement"
                                                >
                                                    <Download className="w-3.5 h-3.5" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="p-4 bg-[#F8F7F4] border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                                <span>
                                    Affichage de 1 à 4 sur 5 420 transactions
                                    réconciliées
                                </span>
                                <div className="flex items-center gap-1">
                                    <button className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 disabled:opacity-50">
                                        Précédent
                                    </button>
                                    <button className="w-7 h-7 rounded-lg bg-[#1B4332] text-white font-bold text-xs flex items-center justify-center">
                                        1
                                    </button>
                                    <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs flex items-center justify-center">
                                        2
                                    </button>
                                    <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs flex items-center justify-center">
                                        3
                                    </button>
                                    <span className="px-1">...</span>
                                    <button className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs">
                                        Suivant
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= BOTTOM FOOTER COMPLIANCE CARDS ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                                <Layers className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-900">
                                    Normes SYSCOHADA Révisées
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-relaxed mt-0.5">
                                    Les écritures de compensation respectent la
                                    nomenclature SYSCOHADA pour les produits
                                    numériques et l'apprentissage et
                                    commissionnements intermédiaires.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                                <Building className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-900">
                                    Télédéclaration DGI CI
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-relaxed mt-0.5">
                                    Génération automatique du fichier d'export
                                    mensuel de la TVA et de la retenue pour la
                                    Direction Générale des Impôts de Côte
                                    d'Ivoire.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                                <Lock className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-900">
                                    GIM-UEMOA Interbancaire
                                </h4>
                                <p className="text-[10px] text-gray-500 leading-relaxed mt-0.5">
                                    Interconnexion directe avec les comptes
                                    bancaires de plus 1000 formateurs
                                    garantissant un virement exact.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </WebLayout>
    );
}
