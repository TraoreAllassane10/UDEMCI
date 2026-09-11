import React, { useState } from "react";
import {
    Clock,
    BookOpen,
    Award,
    RefreshCw,
    Play,
    List,
    CheckCircle2,
    ArrowRight,
    Eye,
    Download,
    Sparkles,
    Search,
    Heart,
    Wifi,
    ChevronDown,
    FileText,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function StudentDashboardPage() {
    const [activeTab, setActiveTab] = useState<
        "all" | "terminale" | "favorites" | "offline"
    >("all");

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= HEADER USER & STATS ================= */}
                <section className="bg-gradient-to-b from-emerald-50/60 to-gray-50/70 pt-8 pb-10 px-4 md:px-8 border-b border-gray-200/60">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {/* Top Banner Tag + Sync */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <span className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-900 font-semibold text-xs px-3 py-1 rounded-full w-fit">
                                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                                Espace Candidat BAC & Concours CI
                            </span>

                            <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm text-xs text-gray-600 self-start sm:self-auto">
                                <RefreshCw
                                    className="w-3.5 h-3.5 text-emerald-700 animate-spin"
                                    style={{ animationDuration: "6s" }}
                                />
                                <div>
                                    <span className="font-semibold text-slate-800">
                                        Synchronisation active
                                    </span>
                                    <span className="text-[10px] text-gray-400 block">
                                        3 chapitres disponibles hors-ligne
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bienvenue */}
                        <div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                                Bienvenue, Kouamé ! 👋
                            </h1>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                Reprenez vos révisions là où vous vous étiez
                                arrêté. Vos objectifs d'excellence sont à portée
                                de main.
                            </p>
                        </div>

                        {/* Cartes Métriques / Statstiques */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            {/* Stat 1 */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-medium">
                                        Heures d'apprentissage
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900">
                                            28h
                                        </span>
                                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                            +4.5h cette semaine
                                        </span>
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <Clock className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-medium">
                                        Cours actifs
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900">
                                            3
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            programmes suivis
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-emerald-800 font-medium">
                                        Prochain jalon : Concours blanc samedi
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-medium">
                                        Certificats & Évaluations
                                    </span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-slate-900">
                                            1
                                        </span>
                                        <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                                            Attestation BAC blanc
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-gray-500">
                                        Validé le 12 Février 2025 avec Mention
                                        Bien
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                                    <Award className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CONTENU DASHBOARD ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-10">
                    {/* BARRE DE FILTRES ET TRI */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-2 overflow-x-auto text-xs font-semibold">
                            <button
                                onClick={() => setActiveTab("all")}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                                    activeTab === "all"
                                        ? "bg-[#052e16] text-white shadow-sm"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                Tous mes cours (3)
                            </button>

                            <button
                                onClick={() => setActiveTab("terminale")}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                                    activeTab === "terminale"
                                        ? "bg-[#052e16] text-white shadow-sm"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                Terminale C & D
                            </button>

                            <button
                                onClick={() => setActiveTab("favorites")}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                                    activeTab === "favorites"
                                        ? "bg-[#052e16] text-white shadow-sm"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                <Heart className="w-3.5 h-3.5" />
                                Mes favoris
                            </button>

                            <button
                                onClick={() => setActiveTab("offline")}
                                className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                                    activeTab === "offline"
                                        ? "bg-[#052e16] text-white shadow-sm"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                                }`}
                            >
                                <Wifi className="w-3.5 h-3.5" />
                                Téléchargés hors-ligne
                            </button>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-gray-500 font-medium">
                            <span>Trier par :</span>
                            <button className="bg-white border border-gray-200 px-3 py-1.5 rounded-xl font-bold text-slate-800 flex items-center gap-1 hover:bg-gray-50">
                                Dernier consulté
                                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            </button>
                        </div>
                    </div>

                    {/* SECTION 1: REPRENDRE IMMÉDIATEMENT (FEATURED COURSE) */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                                Reprendre immédiatement
                            </h2>
                            <span className="text-xs text-gray-400 font-medium">
                                Dernière consultation : Hier à 21h45
                            </span>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-4 md:p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                {/* Media Preview Box */}
                                <div className="lg:col-span-5 relative aspect-video bg-slate-900 rounded-xl overflow-hidden group cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                                        alt="Étudiant révisant"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                                    />
                                    <span className="absolute top-3 left-3 bg-emerald-900/90 text-emerald-200 font-bold text-[10px] px-2.5 py-1 rounded-full border border-emerald-700/50">
                                        Terminale C & D • Science Axa
                                    </span>
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-emerald-700/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 fill-white ml-0.5" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                                        18 min restantes
                                    </span>
                                </div>

                                {/* Infos & Progression */}
                                <div className="lg:col-span-7 space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                                                En cours de révision
                                            </span>
                                            <span className="text-xs text-gray-400">
                                                • Module 3 : Analyse & Fonctions
                                            </span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                                            Mathématiques Terminale C & D :
                                            Maîtrise des Primitives & Calcul
                                            Intégral
                                        </h3>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs space-y-1">
                                        <span className="text-gray-400 font-medium">
                                            Dernier chapitre visionné :
                                        </span>
                                        <p className="font-bold text-slate-800">
                                            Calcul Intégral et primitives –
                                            Leçon 4 : Intégration par parties
                                        </p>
                                    </div>

                                    {/* Barre de progression */}
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between text-xs font-semibold">
                                            <span className="text-gray-500">
                                                Progression globale
                                            </span>
                                            <span className="text-emerald-800 font-bold">
                                                42%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                                            <div className="bg-emerald-700 h-full w-[42%] rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between text-[11px] text-gray-400">
                                            <span>12 / 35 leçons validées</span>
                                            <span>Prochain quiz : Demain</span>
                                        </div>
                                    </div>

                                    {/* Boutons d'action */}
                                    <div className="flex flex-wrap items-center gap-3 pt-2">
                                        <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 shadow-sm">
                                            <Play className="w-3.5 h-3.5 fill-white" />
                                            Reprendre le cours
                                        </button>
                                        <button className="bg-white hover:bg-gray-50 text-slate-700 font-semibold px-4 py-2.5 rounded-xl border border-gray-200 text-xs transition-colors flex items-center gap-2">
                                            <List className="w-3.5 h-3.5 text-gray-500" />
                                            Plan du cours
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: MES COURS EN COURS DE PRÉPARATION (3 CARDS GRID) */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                                Mes cours en cours de préparation (3)
                            </h2>
                            <a
                                href="#"
                                className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                            >
                                Voir le calendrier des révisions{" "}
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Cours Card 1 */}
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="relative aspect-video bg-slate-900">
                                        <img
                                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400"
                                            alt="Maths"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                            BAC C & D
                                        </span>
                                        <span className="absolute bottom-3 right-3 bg-emerald-800 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                                            42%
                                        </span>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug">
                                            Mathématiques Terminale C & D :
                                            Programme Complet d'Excellence
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            M. YAO Kouassi (Lycée Classique)
                                        </p>

                                        <div className="space-y-1.5 pt-2 border-t border-gray-100">
                                            <div className="flex justify-between text-[11px] text-gray-500">
                                                <span>12 / 35 leçons</span>
                                                <span>42%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-700 h-full w-[42%]"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />{" "}
                                                18h restantes
                                            </span>
                                            <span>4 devoirs blancs</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0">
                                    <button className="w-full bg-gray-50 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-bold py-2 rounded-xl text-xs transition-colors border border-gray-200 flex items-center justify-center gap-1">
                                        Continuer{" "}
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Cours Card 2 */}
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="relative aspect-video bg-slate-900">
                                        <img
                                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
                                            alt="Physique Chimie"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                            1ère C & D
                                        </span>
                                        <span className="absolute bottom-3 right-3 bg-emerald-800 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                                            15%
                                        </span>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug">
                                            Physique-Chimie 1ère C & D :
                                            Mécanique & Électrocinétique
                                            Fondamentale
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            Dr. Traoré Moussa (INP-HB
                                            Yamoussoukro)
                                        </p>

                                        <div className="space-y-1.5 pt-2 border-t border-gray-100">
                                            <div className="flex justify-between text-[11px] text-gray-500">
                                                <span>4 / 28 leçons</span>
                                                <span>15%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-700 h-full w-[15%]"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />{" "}
                                                21h restantes
                                            </span>
                                            <span>TP interactifs</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0">
                                    <button className="w-full bg-gray-50 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-bold py-2 rounded-xl text-xs transition-colors border border-gray-200 flex items-center justify-center gap-1">
                                        Continuer{" "}
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Cours Card 3 */}
                            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="relative aspect-video bg-slate-900">
                                        <img
                                            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=400"
                                            alt="Concours ENA"
                                            className="w-full h-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                            Concours 2025
                                        </span>
                                        <span className="absolute bottom-3 right-3 bg-emerald-800 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                                            68%
                                        </span>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <h3 className="font-bold text-slate-900 text-sm line-clamp-2 leading-snug">
                                            Prépa Concours ENA 2025 : Culture
                                            Générale & Droit Public Ivoirien
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            Magistrat Oussou K.
                                        </p>

                                        <div className="space-y-1.5 pt-2 border-t border-gray-100">
                                            <div className="flex justify-between text-[11px] text-gray-500">
                                                <span>40 / 58 leçons</span>
                                                <span>68%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-700 h-full w-[68%]"></div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> 6h
                                                restantes
                                            </span>
                                            <span>QCM chronométrés</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 pt-0">
                                    <button className="w-full bg-gray-50 hover:bg-emerald-50 hover:text-emerald-900 text-slate-700 font-bold py-2 rounded-xl text-xs transition-colors border border-gray-200 flex items-center justify-center gap-1">
                                        Continuer{" "}
                                        <ArrowRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: COURS TERMINÉS & CERTIFICATIONS */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                                Cours terminés & Certifications
                            </h2>
                            <span className="text-xs text-gray-400 font-medium">
                                1 programme achevé
                            </span>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                                            Certificat officiel homologué
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            ID Sécurité : CI-2025-8941
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm md:text-base mt-0.5">
                                        Attestation de Réussite : Session
                                        Intensive Épreuve SVT - Spécialité
                                        Génétique BAC C&D
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                                        Délivré par le jury EduIvoire CI &
                                        Inspection Pédagogique Régionale • Note
                                        finale : 17.5 / 20
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 self-end md:self-auto flex-shrink-0">
                                <button className="bg-gray-100 hover:bg-gray-200 text-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2">
                                    <Eye className="w-3.5 h-3.5" />
                                    Visualiser
                                </button>
                                <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 shadow-sm">
                                    <Download className="w-3.5 h-3.5" />
                                    Télécharger mon attestation PDF
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BANNIÈRE RECOMMANDATION IA */}
                    <div className="bg-[#052e16] text-white p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-lg">
                        {/* Arrière plan décoratif */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-3 max-w-2xl">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                    Recommandé pour votre série Tle Terminale
                                    C&D
                                </span>
                                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                                    Préparez l'épreuve de Philosophie : "Le
                                    Mythe de la Conscience et la Technique"
                                </h3>
                                <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed">
                                    Basé sur votre progression en Maths et
                                    Sciences, optimisez vos points aux épreuves
                                    littéraires grâce à la méthodologie de
                                    dissertation guidée par des inspecteurs
                                    nationaux d'Abidjan.
                                </p>
                                <div className="flex items-center gap-4 text-xs text-emerald-200 pt-1">
                                    <span>✓ Fiches de citation clés</span>
                                    <span>
                                        ✓ 5 dissertations corrigées pas à pas
                                    </span>
                                    <span>
                                        ✓ Paiement Wave & Orange Money : 7 500
                                        FCFA
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2.5 flex-shrink-0">
                                <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3 rounded-xl text-xs transition-colors shadow-md text-center">
                                    Découvrir le module Philo
                                </button>
                                <button className="bg-emerald-900/80 hover:bg-emerald-900 text-emerald-100 font-semibold px-6 py-2.5 rounded-xl text-xs transition-colors border border-emerald-700/60 text-center">
                                    Ajouter à ma liste de souhaits
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
