import React, { useState } from "react";
import {
    ArrowLeft,
    Play,
    Pause,
    Volume2,
    Maximize,
    Settings,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    FileText,
    Download,
    Bookmark,
    Share2,
    Wifi,
    Clock,
    HelpCircle,
    MessageSquare,
    PenTool,
    Sparkles,
    Lock,
    Check,
    ShieldCheck,
    Eye,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function CoursePlayerPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTab, setActiveTab] = useState<
        "summary" | "resources" | "quiz" | "qa"
    >("summary");
    const [noteText, setNoteText] = useState(
        "Exemple : Yao Konan insiste sur le choix des fonctions à dériver avec la méthode ALPES (Arc-Log, Polynôme, Exp, Sin/Cos)...",
    );
    const [openChapter, setOpenChapter] = useState<number | null>(4);

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= TOP HEADER BAR ================= */}
                <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 sticky top-0 z-30 shadow-xs">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
                        {/* Back & Title */}
                        <div className="flex items-center gap-3">
                            <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2 py-0.5 rounded">
                                        TERMINALE C & D
                                    </span>
                                    <span className="text-xs text-gray-500">
                                        Professeur Yao Konan (Lycée Classique
                                        d'Abidjan)
                                    </span>
                                </div>
                                <h1 className="text-sm md:text-base font-extrabold text-slate-900 leading-tight">
                                    Mathématiques Terminale : Maîtrise Complète
                                    du Programme
                                </h1>
                            </div>
                        </div>

                        {/* Progress & Actions */}
                        <div className="flex items-center gap-4 text-xs">
                            <div className="hidden lg:flex items-center gap-3 border-r border-gray-200 pr-4">
                                <span className="text-gray-500 font-medium">
                                    Progression globale :
                                </span>
                                <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-600 h-full w-[42%]"></div>
                                </div>
                                <span className="font-bold text-slate-900">
                                    42%
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl font-medium hover:bg-emerald-100 transition-colors">
                                    <Wifi className="w-3.5 h-3.5" />
                                    Mode Hors-ligne
                                </button>
                                <button className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= MAIN CONTENT LAYOUT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* LEFT COLUMN (8 COLS) - VIDEO PLAYER & LESSON DETAILS */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* VIDEO PLAYER CONTAINER */}
                            <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative group">
                                {/* Top Video Overlay Badges */}
                                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
                                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        EduIvoire Direct HD
                                    </span>
                                    <span className="bg-black/60 backdrop-blur-md text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                                        ⚡ Optimisé Bas Débit (Orange/MTN/Moov)
                                    </span>
                                </div>

                                {/* Video Player / Screen Placeholder */}
                                <div className="relative aspect-video bg-slate-900 flex items-center justify-center cursor-pointer">
                                    <img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                                        alt="Vidéo de cours"
                                        className="w-full h-full object-cover opacity-80"
                                    />

                                    {/* Big Play Button Overlay */}
                                    <button
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="absolute w-16 h-16 rounded-full bg-amber-500/90 hover:bg-amber-500 text-slate-950 flex items-center justify-center shadow-xl transition-transform transform group-hover:scale-110"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 fill-slate-950" />
                                        ) : (
                                            <Play className="w-8 h-8 fill-slate-950 ml-1" />
                                        )}
                                    </button>

                                    {/* Custom Control Bar (Bottom) */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6 space-y-2">
                                        {/* Progress Line */}
                                        <div className="w-full bg-gray-600/60 h-1.5 rounded-full overflow-hidden cursor-pointer relative">
                                            <div className="bg-emerald-500 h-full w-[35%] rounded-full"></div>
                                        </div>

                                        <div className="flex justify-between items-center text-white text-xs">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() =>
                                                        setIsPlaying(!isPlaying)
                                                    }
                                                    className="hover:text-emerald-400"
                                                >
                                                    {isPlaying ? (
                                                        <Pause className="w-4 h-4" />
                                                    ) : (
                                                        <Play className="w-4 h-4" />
                                                    )}
                                                </button>
                                                <Volume2 className="w-4 h-4 hover:text-emerald-400 cursor-pointer" />
                                                <span className="font-mono text-[11px] text-gray-300">
                                                    08:35 / 22:45
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-300">
                                                <span className="bg-white/10 text-[10px] px-1.5 py-0.5 rounded font-mono">
                                                    1080p HD
                                                </span>
                                                <Settings className="w-4 h-4 hover:text-white cursor-pointer" />
                                                <Maximize className="w-4 h-4 hover:text-white cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sub-video info bar */}
                                <div className="bg-slate-900 p-3 px-4 flex justify-between items-center text-xs text-slate-300 border-t border-slate-800">
                                    <span className="font-semibold flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        Leçon 2 sur 4 du Chapitre 4
                                    </span>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />{" "}
                                            Durée: 22m 45s
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye className="w-3.5 h-3.5" /> 1285
                                            élèves ont suivi
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* LESSON TITLE & ACTION BAR */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                            Chapitre 4 : Calcul Intégral &
                                            Primitives
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-0.5">
                                            Leçon 2 : Primitives usuelles et
                                            intégration par parties
                                        </h2>
                                    </div>

                                    <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 self-start sm:self-auto shadow-sm">
                                        Mark as completed & continue{" "}
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* ACTION TOOLS (Notes, Bookmark, Revision) */}
                                <div className="flex flex-wrap items-center gap-2 text-xs">
                                    <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 px-3 py-2 rounded-xl font-medium transition-colors">
                                        <PenTool className="w-3.5 h-3.5 text-emerald-700" />
                                        Prendre une note à ce minutage (08:35)
                                    </button>
                                    <button className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-slate-700 px-3 py-2 rounded-xl font-medium transition-colors">
                                        <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                                        Enregistrer le signet
                                    </button>
                                    <button className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-2 rounded-xl font-medium border border-emerald-200">
                                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                        Mode révision rapide (Fiches)
                                    </button>
                                </div>

                                {/* PERSONAL NOTES TEXTAREA */}
                                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200 space-y-2">
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span className="font-bold text-slate-800 flex items-center gap-1.5">
                                            <PenTool className="w-3.5 h-3.5 text-emerald-700" />{" "}
                                            Mes notes personnelles de la leçon
                                        </span>
                                        <span>
                                            Synchro en clé avec votre compte
                                            étudiant
                                        </span>
                                    </div>
                                    <textarea
                                        rows={2}
                                        value={noteText}
                                        onChange={(e) =>
                                            setNoteText(e.target.value)
                                        }
                                        className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                                    />
                                    <div className="flex justify-end gap-2">
                                        <button className="text-xs text-gray-500 hover:text-slate-800 px-3 py-1">
                                            Annuler
                                        </button>
                                        <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors">
                                            Enregistrer la note
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* LESSON TABBED DETAILS SECTION */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
                                {/* TABS HEADER */}
                                <div className="flex items-center border-b border-gray-200 overflow-x-auto text-xs font-semibold bg-gray-50/50">
                                    <button
                                        onClick={() => setActiveTab("summary")}
                                        className={`px-5 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                                            activeTab === "summary"
                                                ? "border-emerald-800 text-emerald-900 font-bold bg-white"
                                                : "border-transparent text-gray-500 hover:text-slate-800"
                                        }`}
                                    >
                                        <FileText className="w-4 h-4" />
                                        Aperçu & Résumé
                                    </button>

                                    <button
                                        onClick={() =>
                                            setActiveTab("resources")
                                        }
                                        className={`px-5 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                                            activeTab === "resources"
                                                ? "border-emerald-800 text-emerald-900 font-bold bg-white"
                                                : "border-transparent text-gray-500 hover:text-slate-800"
                                        }`}
                                    >
                                        <Download className="w-4 h-4" />
                                        Ressources & Fiches PDF (3)
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("quiz")}
                                        className={`px-5 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                                            activeTab === "quiz"
                                                ? "border-emerald-800 text-emerald-900 font-bold bg-white"
                                                : "border-transparent text-gray-500 hover:text-slate-800"
                                        }`}
                                    >
                                        <HelpCircle className="w-4 h-4" />
                                        Quiz d'auto-évaluation (10 Q)
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("qa")}
                                        className={`px-5 py-3.5 border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                                            activeTab === "qa"
                                                ? "border-emerald-800 text-emerald-900 font-bold bg-white"
                                                : "border-transparent text-gray-500 hover:text-slate-800"
                                        }`}
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Questions & Réponses (14)
                                    </button>
                                </div>

                                {/* TAB CONTENT: SUMMARY */}
                                {activeTab === "summary" && (
                                    <div className="p-6 space-y-6">
                                        {/* Synthesis Box */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                                                    alt="Prof Yao"
                                                    className="w-10 h-10 rounded-full object-cover border border-emerald-600"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-slate-900 text-sm">
                                                        Synthèse pédagogique du
                                                        professeur Yao Konan
                                                    </h3>
                                                    <p className="text-[11px] text-gray-500">
                                                        Conforme aux exigences
                                                        des épreuves du
                                                        BACCALAURÉAT Général
                                                        session 2025
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-xs text-gray-700 leading-relaxed">
                                                Dans cette seconde leçon du
                                                module de calcul intégral, nous
                                                développons la technique
                                                maîtresse de{" "}
                                                <strong>
                                                    l'intégration par parties
                                                    (IPP)
                                                </strong>
                                                . Cette méthode découle
                                                directement de la formule de
                                                dérivation d'un produit de deux
                                                fonctions dérivables sur un
                                                intervalle donné [a, b].
                                            </p>
                                        </div>

                                        {/* Formula Highlight Card */}
                                        <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-xl space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wider">
                                                    ∑ Formule fondamentale de
                                                    l'intégration par parties
                                                </span>
                                                <span className="text-[10px] bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded">
                                                    Indispensable au BAC
                                                </span>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg border border-amber-200/60 text-center font-mono text-sm md:text-base font-bold text-slate-900 overflow-x-auto">
                                                ∫<sub>a</sub>
                                                <sup>b</sup> u(x) · v'(x) dx = [
                                                u(x) · v(x) ]<sub>a</sub>
                                                <sup>b</sup> - ∫<sub>a</sub>
                                                <sup>b</sup> u'(x) · v(x) dx
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                                                <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
                                                    <span className="font-bold text-amber-900 block mb-1">
                                                        Règle mnémotechnique
                                                        "ALPES" :
                                                    </span>
                                                    <p className="text-gray-600 text-[11px]">
                                                        Priorité de choix pour
                                                        la fonction à dériver
                                                        u(x) :<br />
                                                        Arc-tangente →
                                                        Logarithme → Polynôme →
                                                        Exponentielle →
                                                        Sinus/Cos
                                                    </p>
                                                </div>

                                                <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
                                                    <span className="font-bold text-amber-900 block mb-1">
                                                        Erreur fréquente des
                                                        candidats :
                                                    </span>
                                                    <p className="text-gray-600 text-[11px]">
                                                        N'oubliez pas d'évaluer
                                                        la partie [u(x)·v(x)]
                                                        aux bornes avant de
                                                        retrancher la nouvelle
                                                        intégrale résiduelle.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Documents & Download list */}
                                        <div className="space-y-3">
                                            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                                <Download className="w-4 h-4 text-emerald-700" />{" "}
                                                Documents & Supports de Travail
                                            </h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-emerald-50/50 transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                                                            <FileText className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-xs text-slate-900">
                                                                14 Primitives
                                                                Usuelles - Fiche
                                                                M...
                                                            </p>
                                                            <span className="text-[10px] text-gray-400">
                                                                PDF • 1.8 Mo •
                                                                Prêt à imprimer
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Download className="w-4 h-4 text-gray-400 hover:text-emerald-700" />
                                                </div>

                                                <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between hover:bg-emerald-50/50 transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                                                            <FileText className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-xs text-slate-900">
                                                                Sujet BAC Blanc
                                                                2023 & Corrigé
                                                            </p>
                                                            <span className="text-[10px] text-gray-400">
                                                                Exercice 2
                                                                détaillé • 3.2
                                                                Mo
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <Download className="w-4 h-4 text-gray-400 hover:text-emerald-700" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quiz Preview Banner */}
                                        <div className="bg-[#052e16] text-white p-5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                                                    Validation de compétence
                                                </span>
                                                <h4 className="font-bold text-sm">
                                                    Prêt à tester vos réflexes
                                                    d'intégration ?
                                                </h4>
                                                <p className="text-xs text-emerald-200/80">
                                                    10 questions à choix
                                                    multiples chronométrées avec
                                                    corrigé pas à pas rédigé.
                                                </p>
                                            </div>
                                            <button className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-4 py-2.5 rounded-xl text-xs whitespace-nowrap shadow-sm">
                                                Démarrer le Quiz (15 min)
                                            </button>
                                        </div>

                                        {/* Q&A Section Preview */}
                                        <div className="space-y-3 pt-2">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-bold text-slate-900 text-sm">
                                                    Dernières questions posées
                                                    sur ce chapitre
                                                </h4>
                                                <button className="text-xs font-semibold text-emerald-800 hover:underline">
                                                    Poser une question
                                                </button>
                                            </div>

                                            <div className="p-4 bg-gray-50 rounded-xl space-y-3 text-xs border border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-[10px]">
                                                            AK
                                                        </span>
                                                        <span className="font-bold text-slate-800">
                                                            Amina Koné{" "}
                                                            <span className="text-gray-400 font-normal">
                                                                (Lycée Sainte
                                                                Marie, Cocody)
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-gray-400">
                                                        il y a 3 heures
                                                    </span>
                                                </div>
                                                <p className="text-gray-700 italic">
                                                    "Monsieur, si le produit est
                                                    d'un polynôme et de ln(x),
                                                    pourquoi ne pas dériver le
                                                    polynôme directement au lieu
                                                    du logarithme ?"
                                                </p>

                                                {/* Teacher Reply */}
                                                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-lg space-y-1 ml-4">
                                                    <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-[11px]">
                                                        <span>
                                                            Prof. Yao Konan
                                                        </span>
                                                        <span className="bg-emerald-800 text-white text-[9px] px-1.5 py-0.2 rounded">
                                                            FORMATEUR CERTIFIÉ
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-700 text-[11px]">
                                                        "Excellente remarque
                                                        Amina ! Parce qu'on ne
                                                        connaît pas de primitive
                                                        élémentaire directe de
                                                        ln(x) sans refaire une
                                                        IPP. En posant u(x) =
                                                        ln(x), sa dérivée 1/x
                                                        simplifie immédiatement
                                                        le degré du polynôme !"
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* RIGHT COLUMN (4 COLS) - COURSE PLAYLIST / SOMMAIRE */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden sticky top-20">
                                {/* Header Sommaire */}
                                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">
                                            Sommaire du cours
                                        </h3>
                                        <p className="text-[11px] text-gray-500">
                                            Progression globale : 42% • 15 / 35
                                            leçons terminées
                                        </p>
                                    </div>
                                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded">
                                        Terminales C&D
                                    </span>
                                </div>

                                {/* LISTE DES CHAPITRES (ACCORDÉONS) */}
                                <div className="divide-y divide-gray-100 max-h-[calc(100vh-220px)] overflow-y-auto text-xs">
                                    {/* CHAPITRE 1 (Terminé) */}
                                    <div className="bg-white">
                                        <div
                                            onClick={() =>
                                                setOpenChapter(
                                                    openChapter === 1
                                                        ? null
                                                        : 1,
                                                )
                                            }
                                            className="p-3.5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-xs">
                                                        Chapitre 1 : Rappels &
                                                        Fonctions
                                                    </h4>
                                                    <span className="text-[10px] text-gray-400">
                                                        4 / 4 leçons terminées •
                                                        1h 15m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown
                                                className={`w-4 h-4 text-gray-400 transition-transform ${openChapter === 1 ? "" : "-rotate-90"}`}
                                            />
                                        </div>
                                    </div>

                                    {/* CHAPITRE 2 (Terminé) */}
                                    <div className="bg-white">
                                        <div
                                            onClick={() =>
                                                setOpenChapter(
                                                    openChapter === 2
                                                        ? null
                                                        : 2,
                                                )
                                            }
                                            className="p-3.5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-xs">
                                                        Chapitre 2 : Limites &
                                                        Continuité
                                                    </h4>
                                                    <span className="text-[10px] text-gray-400">
                                                        8 / 8 leçons terminées •
                                                        2h 10m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown
                                                className={`w-4 h-4 text-gray-400 transition-transform ${openChapter === 2 ? "" : "-rotate-90"}`}
                                            />
                                        </div>
                                    </div>

                                    {/* CHAPITRE 3 (Terminé) */}
                                    <div className="bg-white">
                                        <div
                                            onClick={() =>
                                                setOpenChapter(
                                                    openChapter === 3
                                                        ? null
                                                        : 3,
                                                )
                                            }
                                            className="p-3.5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-xs">
                                                        Chapitre 3 : Logarithmes
                                                        & Exp
                                                    </h4>
                                                    <span className="text-[10px] text-gray-400">
                                                        3 / 3 leçons terminées •
                                                        3h 05m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown
                                                className={`w-4 h-4 text-gray-400 transition-transform ${openChapter === 3 ? "" : "-rotate-90"}`}
                                            />
                                        </div>
                                    </div>

                                    {/* CHAPITRE 4 (EN COURS - OUVERT) */}
                                    <div className="bg-emerald-50/30">
                                        <div
                                            onClick={() =>
                                                setOpenChapter(
                                                    openChapter === 4
                                                        ? null
                                                        : 4,
                                                )
                                            }
                                            className="p-3.5 flex justify-between items-center cursor-pointer bg-emerald-50/60 font-bold border-l-4 border-emerald-800"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-4 h-4 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-[9px]">
                                                    4
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-xs">
                                                        Chapitre 4 : Calcul
                                                        Intégral & Aires
                                                    </h4>
                                                    <span className="text-[10px] text-emerald-800 font-medium">
                                                        1 / 4 leçons terminées •
                                                        1h 50m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown
                                                className={`w-4 h-4 text-emerald-800 transition-transform ${openChapter === 4 ? "" : "-rotate-90"}`}
                                            />
                                        </div>

                                        {/* Leçons du Chapitre 4 */}
                                        {openChapter === 4 && (
                                            <div className="bg-white divide-y divide-gray-100 text-[11px]">
                                                {/* Leçon 1 (Validée) */}
                                                <div className="p-3 pl-8 flex items-center justify-between text-gray-600 hover:bg-gray-50 cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                        <span>
                                                            1. Intégrale de
                                                            Riemann & Notion
                                                            d'aire
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-gray-400">
                                                        18m
                                                    </span>
                                                </div>

                                                {/* Leçon 2 (Active / En Cours) */}
                                                <div className="p-3 pl-8 flex items-center justify-between bg-emerald-100/60 font-bold text-emerald-950 border-l-2 border-emerald-800">
                                                    <div className="flex items-center gap-2">
                                                        <Play className="w-3.5 h-3.5 fill-emerald-800 text-emerald-800" />
                                                        <span>
                                                            2. Primitives &
                                                            Intégration par
                                                            parties
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-emerald-800 font-mono">
                                                        22m
                                                    </span>
                                                </div>

                                                {/* Leçon 3 (À venir) */}
                                                <div className="p-3 pl-8 flex items-center justify-between text-gray-500 hover:bg-gray-50 cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <Lock className="w-3.5 h-3.5 text-gray-400" />
                                                        <span>
                                                            3. Changement de
                                                            variable & Cas
                                                            complexes
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] text-gray-400">
                                                        25m
                                                    </span>
                                                </div>

                                                {/* Quiz du Chapitre */}
                                                <div className="p-3 pl-8 flex items-center justify-between text-amber-800 font-semibold bg-amber-50/50 hover:bg-amber-50 cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                                                        <span>
                                                            Quiz d'évaluation -
                                                            Épreuve BAC
                                                        </span>
                                                    </div>
                                                    <span className="bg-amber-200 text-amber-900 text-[9px] px-1.5 py-0.2 rounded font-bold">
                                                        QUIZ
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* CHAPITRE 5 (Verrouillé) */}
                                    <div className="bg-white">
                                        <div className="p-3.5 flex justify-between items-center text-gray-400">
                                            <div className="flex items-center gap-2.5">
                                                <Lock className="w-4 h-4 text-gray-300" />
                                                <div>
                                                    <h4 className="font-semibold text-xs text-gray-500">
                                                        Chapitre 5 : Suites &
                                                        Récurrence
                                                    </h4>
                                                    <span className="text-[10px] text-gray-400">
                                                        0 / 6 leçons • 1h 40m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown className="w-4 h-4 text-gray-300 -rotate-90" />
                                        </div>
                                    </div>

                                    {/* CHAPITRE 6 (Verrouillé) */}
                                    <div className="bg-white">
                                        <div className="p-3.5 flex justify-between items-center text-gray-400">
                                            <div className="flex items-center gap-2.5">
                                                <Lock className="w-4 h-4 text-gray-300" />
                                                <div>
                                                    <h4 className="font-semibold text-xs text-gray-500">
                                                        Chapitre 6 :
                                                        Probabilités & Aires
                                                    </h4>
                                                    <span className="text-[10px] text-gray-400">
                                                        0 / 7 leçons • 2h 10m
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronDown className="w-4 h-4 text-gray-300 -rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                {/* OFFLINE PACK DOWNLOAD BOX */}
                                <div className="p-4 bg-emerald-50/60 border-t border-emerald-100 space-y-2">
                                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                                        <Wifi className="w-4 h-4 text-emerald-700" />
                                        Pack Chapitre Hors-Connexion
                                    </div>
                                    <p className="text-[11px] text-emerald-800/80">
                                        Téléchargez les 4 vidéos du Chapitre 4
                                        compressées (185 Mo) pour réviser même
                                        sans forfait data actif.
                                    </p>
                                    <button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs">
                                        <Download className="w-3.5 h-3.5" />
                                        Télécharger le Chapitre 4 (MP4 + PDF)
                                    </button>
                                </div>

                                {/* WHATSAPP TEACHER ASSISTANCE */}
                                <div className="p-3.5 bg-gray-50 text-center text-xs text-gray-600 border-t border-gray-100 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                                    <span>
                                        Permanence pédagogique WhatsApp :
                                        Assistance par les répétiteurs chaque
                                        soir de 18h à 21h
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
