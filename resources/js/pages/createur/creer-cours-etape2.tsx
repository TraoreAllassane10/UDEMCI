import React, { useState } from "react";
import {
    ChevronRight,
    Save,
    Plus,
    GripVertical,
    ChevronUp,
    ChevronDown,
    Video,
    FileText,
    MoreVertical,
    UploadCloud,
    Check,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Wifi,
    Clock,
    BookOpen,
    Download,
    Eye,
    Layers,
    HelpCircle,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function CourseCreationStep2Page() {
    const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= BREADCRUMB & HEADER ================= */}
                <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 text-xs text-gray-500">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                            <span>Mes cours créateur</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            <span>Physique-Chimie Terminale D</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            <span className="font-semibold text-slate-900">
                                Étape 2
                            </span>
                        </div>

                        <button className="text-gray-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors">
                            <Save className="w-3.5 h-3.5" />
                            <span>Enregistrer comme brouillon</span>
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                Programme et Contenu pédagogique
                            </h1>
                            <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                                BAC CI 2025
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500">
                            Structurez vos modules d'apprentissage, téléversez
                            vos vidéos de cours et organisez vos supports PDF
                            téléchargeables adaptés aux réseaux mobiles
                            ivoiriens.
                        </p>
                    </div>

                    {/* STEPPER NAVIGATION */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* STEP 1 (COMPLETED) */}
                        <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                                <Check className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                                    Étape 1
                                </span>
                                <span className="text-xs font-bold text-slate-900">
                                    Informations générales
                                </span>
                                <span className="text-[10px] text-emerald-700 font-medium block">
                                    ✓ Validé
                                </span>
                            </div>
                        </div>

                        {/* STEP 2 (CURRENT ACTIVE) */}
                        <div className="bg-white border-2 border-emerald-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs">
                            <div className="w-8 h-8 rounded-xl bg-[#052e16] text-white flex items-center justify-center font-black text-xs">
                                2
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                                        Étape 2
                                    </span>
                                    <span className="bg-amber-100 text-amber-900 text-[9px] font-bold px-1.5 py-0.2 rounded">
                                        En cours
                                    </span>
                                </div>
                                <span className="text-xs font-bold text-slate-900">
                                    Chapitres & Vidéos
                                </span>
                                <span className="text-[10px] text-gray-400 block">
                                    Contenu & Fiches BAC
                                </span>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="bg-white/60 border border-gray-200 rounded-2xl p-3.5 flex items-center gap-3 text-gray-400">
                            <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs">
                                3
                            </div>
                            <div>
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                                    Étape 3
                                </span>
                                <span className="text-xs font-semibold text-gray-600">
                                    Quiz & Évaluations
                                </span>
                                <span className="text-[10px] text-gray-400 block">
                                    QCM & Devoirs prévus
                                </span>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div className="bg-white/60 border border-gray-200 rounded-2xl p-3.5 flex items-center gap-3 text-gray-400">
                            <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs">
                                4
                            </div>
                            <div>
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">
                                    Étape 4
                                </span>
                                <span className="text-xs font-semibold text-gray-600">
                                    Tarification & Publication
                                </span>
                                <span className="text-[10px] text-gray-400 block">
                                    Paiements Mobile Money
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* LEFT COLUMN: CURRICULUM EDITOR (8 COLS) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-6">
                                {/* HEADER TOOLBAR */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                                    <div>
                                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-emerald-700" />
                                            Curriculum du cours
                                        </h2>
                                        <p className="text-xs text-gray-400">
                                            Organisez par glisser-déposer les
                                            leçons selon le référentiel
                                            ivoirien.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button className="text-xs font-semibold text-gray-600 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50/50">
                                            Déplier tout
                                        </button>
                                        <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-xs">
                                            <Plus className="w-3.5 h-3.5" />
                                            Ajouter un chapitre
                                        </button>
                                    </div>
                                </div>

                                {/* CHAPTER 1 (OPEN ACCORDION) */}
                                <div className="border border-emerald-200 rounded-2xl bg-white overflow-hidden shadow-xs space-y-0">
                                    {/* Chapter Header */}
                                    <div
                                        onClick={() =>
                                            setExpandedChapter(
                                                expandedChapter === 1
                                                    ? null
                                                    : 1,
                                            )
                                        }
                                        className="p-4 bg-emerald-50/40 hover:bg-emerald-50/70 transition-colors flex items-center justify-between cursor-pointer border-b border-emerald-100"
                                    >
                                        <div className="flex items-center gap-3">
                                            <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-bold text-slate-900 text-sm">
                                                        Chapitre 1 : Lois de
                                                        Newton et Cinématique
                                                        vectorielle
                                                    </h3>
                                                    <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.2 rounded">
                                                        4 leçons • 1h 45m
                                                    </span>
                                                </div>
                                                <p className="text-[11px] text-gray-500">
                                                    Tronc commun Terminale C & D
                                                    • Programme officiel MENA
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button className="p-1.5 text-gray-400 hover:text-slate-800 rounded-lg hover:bg-white/60">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-gray-600 hover:text-slate-900">
                                                {expandedChapter === 1 ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Chapter Lessons (Visible when expanded) */}
                                    {expandedChapter === 1 && (
                                        <div className="p-4 space-y-3 bg-white">
                                            {/* LESSON 1.1 */}
                                            <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-emerald-300 transition-all flex items-start justify-between gap-3 group">
                                                <div className="flex items-start gap-3">
                                                    <GripVertical className="w-4 h-4 text-gray-300 cursor-grab mt-1 group-hover:text-gray-400" />
                                                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Video className="w-3.5 h-3.5" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-xs text-slate-900">
                                                                1.1 Vecteurs
                                                                position,
                                                                vitesse et
                                                                accélération
                                                            </span>
                                                            <span className="bg-amber-100 text-amber-900 text-[9px] font-bold px-2 py-0.2 rounded-full flex items-center gap-1">
                                                                <Eye className="w-2.5 h-2.5" />{" "}
                                                                Aperçu gratuit
                                                                activé
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                                            <span className="flex items-center gap-1">
                                                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                                                Encodé HD
                                                                (1080p, 720p,
                                                                Éco 480p)
                                                            </span>
                                                            <span>•</span>
                                                            <span>
                                                                18:24 min
                                                            </span>
                                                            <span>•</span>
                                                            <span className="text-emerald-800 font-semibold">
                                                                145 Mo
                                                                (Orange/MTN
                                                                optimisé)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="text-gray-400 hover:text-slate-800 p-1">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* LESSON 1.2 */}
                                            <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-emerald-300 transition-all flex items-start justify-between gap-3 group">
                                                <div className="flex items-start gap-3">
                                                    <GripVertical className="w-4 h-4 text-gray-300 cursor-grab mt-1 group-hover:text-gray-400" />
                                                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <Video className="w-3.5 h-3.5" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <span className="font-bold text-xs text-slate-900 block">
                                                            1.2 Application :
                                                            Mouvement rectiligne
                                                            uniformément varié
                                                            (MRUV)
                                                        </span>
                                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                                            <span>
                                                                Encodé HD (3
                                                                flux prêts)
                                                            </span>
                                                            <span>•</span>
                                                            <span>
                                                                24:10 min
                                                            </span>
                                                            <span>•</span>
                                                            <span>198 Mo</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="text-gray-400 hover:text-slate-800 p-1">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* LESSON 1.3 (PDF RESOURCE) */}
                                            <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-emerald-300 transition-all flex items-start justify-between gap-3 group">
                                                <div className="flex items-start gap-3">
                                                    <GripVertical className="w-4 h-4 text-gray-300 cursor-grab mt-1 group-hover:text-gray-400" />
                                                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <FileText className="w-3.5 h-3.5" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-xs text-slate-900">
                                                                1.3 Fiche de
                                                                synthèse &
                                                                Formules clés du
                                                                BAC
                                                            </span>
                                                            <span className="bg-gray-100 text-gray-700 text-[9px] font-bold px-2 py-0.2 rounded">
                                                                Document PDF
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                                                            <span className="text-emerald-800 font-semibold">
                                                                Téléchargeable
                                                                hors-ligne
                                                            </span>
                                                            <span>•</span>
                                                            <span>
                                                                PDF de 14 pages
                                                            </span>
                                                            <span>•</span>
                                                            <span>2.4 Mo</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button className="text-gray-400 hover:text-slate-800 p-1">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* CHAPTER 2 (COLLAPSED) */}
                                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden p-4 flex items-center justify-between hover:border-gray-300 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <GripVertical className="w-4 h-4 text-gray-300" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">
                                                Chapitre 2 : Mouvement des
                                                projectiles dans un champ de
                                                pesanteur uniforme
                                            </h3>
                                            <p className="text-[11px] text-gray-400">
                                                5 leçons • 2h 10m • 1 devoir
                                                maison type BAC
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>

                                {/* CHAPTER 3 (COLLAPSED) */}
                                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden p-4 flex items-center justify-between hover:border-gray-300 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <GripVertical className="w-4 h-4 text-gray-300" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-sm">
                                                Chapitre 3 : Oscillateurs
                                                mécaniques et pendules
                                                élastiques
                                            </h3>
                                            <p className="text-[11px] text-gray-400">
                                                3 leçons • 1h 15m • Travaux
                                                pratiques et analyse des courbes
                                                sinusoïdales
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </div>

                                {/* UPLOAD DROPZONE FOR LESSONS */}
                                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center hover:border-emerald-600 transition-colors cursor-pointer bg-gray-50/30 space-y-3">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
                                        <UploadCloud className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">
                                            Glissez vos fichiers vidéo (MP4,
                                            MKV) ou documents PDF ici
                                        </p>
                                        <p className="text-[11px] text-gray-400 mt-0.5">
                                            Ils seront automatiquement convertis
                                            en leçons à la suite du cours et
                                            encodés pour les connexions
                                            ivoiriennes.
                                        </p>
                                    </div>
                                    <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-xs">
                                        Parcourir mon ordinateur{" "}
                                        <span className="text-[10px] text-gray-400 font-normal">
                                            Max. 2 Go par capsule vidéo
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: STATS & NETWORK OPTIMIZATION (4 COLS) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* PROGRAM STATS CARD */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-emerald-700" />
                                        Statistiques du programme
                                    </h3>
                                    <span className="text-[10px] text-gray-400 font-semibold">
                                        Temps réel
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block">
                                            Durée totale
                                        </span>
                                        <span className="text-base font-black text-slate-900">
                                            5h 10m
                                        </span>
                                        <span className="text-[9px] text-emerald-800 font-semibold block mt-0.5">
                                            Idéal pour le BAC D
                                        </span>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block">
                                            Nombre de leçons
                                        </span>
                                        <span className="text-base font-black text-slate-900">
                                            12
                                        </span>
                                        <span className="text-[9px] text-gray-500 block mt-0.5">
                                            Sur 3 chapitres
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-2 text-xs pt-1">
                                    <div className="flex justify-between items-center py-1 border-b border-gray-100">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <FileText className="w-3.5 h-3.5 text-amber-600" />{" "}
                                            Fichiers PDF à télécharger
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            4 fiches
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center py-1 border-b border-gray-100">
                                        <span className="text-gray-500 flex items-center gap-1.5">
                                            <Eye className="w-3.5 h-3.5 text-emerald-600" />{" "}
                                            Prévisualisation gratuite
                                        </span>
                                        <span className="font-bold text-emerald-800">
                                            2 leçons
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-amber-50/70 border border-amber-200/60 p-3 rounded-xl text-xs space-y-1">
                                    <p className="text-[11px] text-amber-950 leading-relaxed">
                                        💡 <strong>Astuce vente :</strong> Les
                                        formateurs avec au moins 2 leçons
                                        gratuites ont{" "}
                                        <strong>+65% d'inscriptions</strong> via
                                        Orange Money & Wave.
                                    </p>
                                </div>
                            </div>

                            {/* NETWORK OPTIMIZATION CARD (CI FOCUS) */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                        <Wifi className="w-4 h-4 text-emerald-700" />
                                        Optimisation Réseau CI
                                    </h3>
                                    <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.5 rounded-full">
                                        Transcodage multi-débits actif
                                    </span>
                                </div>

                                <p className="text-xs text-gray-500 leading-relaxed">
                                    Vos vidéos sont automatiquement compressées
                                    en 3 profils d'encodage optimisés pour le
                                    public ivoirien :
                                </p>

                                <div className="space-y-2 text-xs font-semibold">
                                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                                        <span className="flex items-center gap-2 text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>{" "}
                                            480p Bas-Débit Éco
                                        </span>
                                        <span className="text-[10px] text-gray-400">
                                            Économie de Pass Internet
                                        </span>
                                    </div>

                                    <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                                        <span className="flex items-center gap-2 text-slate-800">
                                            <span className="w-2 h-2 rounded-full bg-emerald-700"></span>{" "}
                                            Mode hors-ligne sécurisé
                                        </span>
                                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                                            Inclus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* RECOMMENDATIONS BOX */}
                            <div className="bg-[#052e16] text-white p-5 rounded-2xl space-y-3 shadow-sm">
                                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                                    <Sparkles className="w-3.5 h-3.5" />{" "}
                                    Recommandations pédagogiques
                                </span>
                                <p className="text-xs text-emerald-100 leading-relaxed">
                                    Pour maximiser la réussite des élèves au
                                    Baccalauréat ivoirien, découpez vos séances
                                    en{" "}
                                    <strong>
                                        capsules courtes de 15 à 25 minutes
                                    </strong>
                                    .
                                </p>
                                <p className="text-[11px] text-emerald-200/80 leading-relaxed">
                                    Les vidéos courtes évitent les coupures
                                    liées à l'instabilité du réseau mobile et
                                    permettent aux élèves d'étudier n'importe où
                                    à Abidjan ou à l'intérieur du pays.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= BOTTOM STEPPER ACTION BAR ================= */}
                    <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                            <span>
                                Étape 2 sur 4 • 85% des vidéos téléversées
                            </span>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <ArrowLeft className="w-4 h-4" /> Précédent :
                                Informations générales
                            </button>
                            <button className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm">
                                Suivant : Quiz & Évaluations{" "}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
