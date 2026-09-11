import React from "react";
import {
    Star,
    Users,
    Clock,
    Award,
    CheckCircle2,
    PlayCircle,
    FileText,
    HelpCircle,
    Download,
    Share2,
    Heart,
    ChevronDown,
    Check,
    ShoppingCart,
    MessageCircle,
    Video,
    Smartphone,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function CourseDetailsPage() {
    return (
        <WebLayout>
            <div className="bg-gray-50 text-slate-800 min-h-screen font-sans">
                {/* ================= HERO SECTION ================= */}
                <section className="bg-[#052e16] text-white pt-8 pb-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Breadcrumb */}
                        <nav className="text-xs md:text-sm text-emerald-200/80 mb-6 flex flex-wrap items-center gap-2">
                            <span>Accueil</span>
                            <span>&gt;</span>
                            <span>Catalogue</span>
                            <span>&gt;</span>
                            <span>Lycée</span>
                            <span>&gt;</span>
                            <span>Terminale C & D</span>
                            <span>&gt;</span>
                            <span className="text-white font-medium">
                                Mathématiques
                            </span>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Infos Principales du cours (Col 8) */}
                            <div className="lg:col-span-8 space-y-6">
                                {/* Badges */}
                                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                                    <span className="bg-emerald-800/80 text-emerald-200 px-3 py-1 rounded-full border border-emerald-700/50">
                                        ⚡ Recommandé
                                    </span>
                                    <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
                                        🔥 CERTIFIÉ
                                    </span>
                                    <span className="bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-full border border-emerald-700">
                                        EXAMEN NATIONAL
                                    </span>
                                </div>

                                {/* Titre */}
                                <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                                    Mathématiques Terminale C & D : Maîtrise
                                    Complète du Programme & Préparation au BAC
                                    2025
                                </h1>

                                {/* Description courte */}
                                <p className="text-emerald-100/90 text-sm md:text-base max-w-3xl leading-relaxed">
                                    Le cours terme officiel indispensable pour
                                    réussir votre année de Terminale. Exercices
                                    corrigés, méthodes pas à pas, sujets
                                    d'examens et soutien continu pour obtenir de
                                    très bonnes notes au BAC.
                                </p>

                                {/* Statistiques Métriques */}
                                <div className="flex flex-wrap items-center gap-6 text-sm text-emerald-100 pt-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center text-amber-400">
                                            <Star className="w-4 h-4 fill-amber-400" />
                                            <span className="font-bold text-white ml-1">
                                                4.9
                                            </span>
                                        </div>
                                        <span className="text-emerald-300/80">
                                            (857 avis)
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4 text-emerald-400" />
                                        <span>
                                            <strong>2 450</strong> élèves
                                            inscrits
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-emerald-400" />
                                        <span>
                                            Dernière mise à jour :{" "}
                                            <strong>Mars 2025</strong>
                                        </span>
                                    </div>
                                </div>

                                {/* Auteur */}
                                <div className="flex items-center gap-3 pt-4 border-t border-emerald-900/80">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                                        alt="M. YAO Kouassi"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                                    />
                                    <div>
                                        <p className="text-xs text-emerald-300 uppercase tracking-wider font-semibold">
                                            Enseignant / Formateur
                                        </p>
                                        <p className="font-bold text-white text-base">
                                            M. YAO Kouassi
                                        </p>
                                        <p className="text-xs text-emerald-200/80">
                                            Professeur certifié de Mathématiques
                                            au Lycée Scientifique
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Spacer pour maintenir le layout sur desktop (la carte flottante s'aligne ici) */}
                            <div className="hidden lg:block lg:col-span-4 h-px"></div>
                        </div>
                    </div>
                </section>

                {/* ================= CONTENU PRINCIPAL + CARTE ACHAT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
                        {/* COLONNE GAUCHE (8 Cols) - CONTENU DU COURS */}
                        <div className="lg:col-span-8 space-y-10">
                            {/* BARRE DE NAVIGATION INTERNE */}
                            <div className="flex items-center gap-4 border-b border-gray-200 overflow-x-auto pb-2 text-sm font-medium">
                                <button className="text-emerald-800 border-b-2 border-emerald-700 font-bold pb-2 whitespace-nowrap">
                                    Ce que vous allez maîtriser
                                </button>
                                <button className="text-gray-500 hover:text-emerald-800 pb-2 whitespace-nowrap">
                                    Programme du cours
                                </button>
                                <button className="text-gray-500 hover:text-emerald-800 pb-2 whitespace-nowrap">
                                    Prérequis
                                </button>
                                <button className="text-gray-500 hover:text-emerald-800 pb-2 whitespace-nowrap">
                                    L'Formateur
                                </button>
                                <button className="text-gray-500 hover:text-emerald-800 pb-2 whitespace-nowrap">
                                    Avis des élèves
                                </button>
                            </div>

                            {/* BLOCK: Ce que vous allez maîtriser */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold text-slate-900">
                                        Ce que vous allez maîtriser
                                    </h2>
                                    <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-medium">
                                        BAC avec mention
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Maîtrise complète des fonctions
                                            numériques, limites, continuité,
                                            dérivabilité et études graphiques.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Résolution avancée des équations
                                            différentielles et applications aux
                                            problèmes physiques.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Calcul intégral complet : méthodes
                                            d'intégration par parties, calcul de
                                            surfaces et de volumes.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Géométrie vectorielle et dans
                                            l'espace, produit vectoriel, produit
                                            mixte et équations de plans.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Aptitude à résoudre les problèmes
                                            complexes d'arithmétique et de
                                            nombres complexes avec méthodes
                                            d'astuces.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p>
                                            Accès à 50+ exercices et devoirs
                                            académiques entièrement corrigés pas
                                            à pas pour vous entraîner chez vous.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* BLOCK: Programme complet du cours */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">
                                            Programme complet du cours
                                        </h2>
                                        <p className="text-xs text-gray-500 mt-1">
                                            12 chapitres • 64 vidéos • 18h 45m
                                            de durée totale
                                        </p>
                                    </div>
                                    <button className="text-xs font-semibold text-emerald-700 hover:underline">
                                        Tout développer
                                    </button>
                                </div>

                                {/* Accordéon Chapitre 1 */}
                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <div className="bg-gray-50/80 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100/80 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                            <div>
                                                <span className="text-xs text-gray-500 font-semibold uppercase">
                                                    Chapitre 1
                                                </span>
                                                <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                    Introduction, méthodologie
                                                    et rappels stratégiques de
                                                    1ère
                                                </h3>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500 font-medium">
                                            4 leçons • 45 min
                                        </span>
                                    </div>

                                    {/* Contenu du Chapitre 1 */}
                                    <div className="p-4 space-y-3 bg-white border-t border-gray-100">
                                        <div className="flex items-center justify-between text-sm py-1">
                                            <div className="flex items-center gap-3">
                                                <PlayCircle className="w-4 h-4 text-emerald-600" />
                                                <span className="text-slate-700">
                                                    Présentation du cours & Mode
                                                    d'emploi du BAC
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                                                    Aperçu gratuit
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    10:15
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm py-1">
                                            <div className="flex items-center gap-3">
                                                <PlayCircle className="w-4 h-4 text-emerald-600" />
                                                <span className="text-slate-700">
                                                    Rappels fondamentaux sur les
                                                    polynômes et factorisations
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                                                    Aperçu gratuit
                                                </span>
                                                <span className="text-xs text-gray-400">
                                                    15:20
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-sm py-1">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-4 h-4 text-gray-400" />
                                                <span className="text-slate-700">
                                                    Fiche récapitulative :
                                                    Formulaire clé de 1ère (PDF)
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-400">
                                                PDF
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between text-sm py-1">
                                            <div className="flex items-center gap-3">
                                                <HelpCircle className="w-4 h-4 text-gray-400" />
                                                <span className="text-slate-700">
                                                    Quiz de diagnostic : Évaluez
                                                    votre niveau de départ
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-400">
                                                10 QCM
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Chapitre 2 (Fermé) */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-gray-500 font-semibold uppercase">
                                                Chapitre 2
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Limites, Continuité et
                                                Dérivabilité
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        8 leçons • 2h 15m
                                    </span>
                                </div>

                                {/* Chapitre 3 (Fermé) */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-gray-500 font-semibold uppercase">
                                                Chapitre 3
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Fonctions Logarithmes Népériens
                                                et Exponentielles
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        10 leçons • 3h 05m
                                    </span>
                                </div>

                                {/* Chapitre 4 (Fermé) */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-gray-500 font-semibold uppercase">
                                                Chapitre 4
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Calcul Intégral et Calcul
                                                d'Aires
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        6 leçons • 1h 50m
                                    </span>
                                </div>

                                {/* Chapitre 5 (Fermé) */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-gray-500 font-semibold uppercase">
                                                Chapitre 5
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Suites Numériques et
                                                Raisonnement par Récurrence
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        6 leçons • 1h 40m
                                    </span>
                                </div>

                                {/* Chapitre 6 (Fermé) */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-gray-400 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-gray-500 font-semibold uppercase">
                                                Chapitre 6
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Probabilités & Variables
                                                Aléatoires
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 font-medium">
                                        7 leçons • 2h 10m
                                    </span>
                                </div>

                                {/* Chapitre Bonus (Fermé) */}
                                <div className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-amber-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <ChevronDown className="w-5 h-5 text-amber-600 -rotate-90" />
                                        <div>
                                            <span className="text-xs text-amber-700 font-bold uppercase">
                                                BONUS
                                            </span>
                                            <h3 className="font-bold text-slate-800 text-sm md:text-base">
                                                Annales corrigées du BAC des 5
                                                dernières années
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-xs text-amber-800 font-medium">
                                        12 sujets • 5h 30m
                                    </span>
                                </div>
                            </div>

                            {/* BLOCK: Prérequis recommandés */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                <h2 className="text-xl font-bold text-slate-900">
                                    Prérequis recommandés
                                </h2>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <span>
                                            Avoir suivi le programme de Première
                                            S ou C/D avec des connaissances de
                                            base de la géométrie.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <span>
                                            Disposer d'une grille de résolution
                                            de problème et d'une calculatrice
                                            scientifique homologuée examen.
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                                        <span>
                                            Motivation régulière : prévoir au
                                            moins 2 à 3 heures d'étude par
                                            semaine.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* BLOCK: Formateur */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                                        alt="M. YAO Kouassi"
                                        className="w-16 h-16 rounded-full object-cover border-2 border-emerald-600"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-bold text-slate-900">
                                                M. YAO Kouassi
                                            </h3>
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-500 text-white" />
                                        </div>
                                        <p className="text-xs text-gray-500">
                                            Professeur Certifié Hors Classe •
                                            Titulaire Agrégé de l'Éducation
                                        </p>
                                        <div className="flex items-center gap-4 text-xs text-gray-600 mt-2">
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />{" "}
                                                4.9 Note formateur
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3.5 h-3.5" />{" "}
                                                12 500+ Élèves formés
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <PlayCircle className="w-3.5 h-3.5" />{" "}
                                                8 Cours publiés
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                                    Diplômé de l'École Normale Supérieure, il a
                                    plus de 15 ans d'expérience dans
                                    l'enseignement des mathématiques au lycée
                                    pour les sections scientifiques. Ses cours
                                    sont reconnus pour leur rigueur, leur
                                    simplicité d'explication et leurs astuces
                                    pratiques permettant de résoudre facilement
                                    les exercices types des examens nationaux.
                                </p>
                            </div>

                            {/* BLOCK: Avis des élèves */}
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">
                                            Avis des élèves
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            Basé sur 857 évaluations vérifiées
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 bg-emerald-50/60 px-4 py-3 rounded-xl">
                                        <span className="text-4xl font-extrabold text-emerald-900">
                                            4.9
                                        </span>
                                        <div>
                                            <div className="flex text-amber-400">
                                                <Star className="w-4 h-4 fill-amber-400" />
                                                <Star className="w-4 h-4 fill-amber-400" />
                                                <Star className="w-4 h-4 fill-amber-400" />
                                                <Star className="w-4 h-4 fill-amber-400" />
                                                <Star className="w-4 h-4 fill-amber-400" />
                                            </div>
                                            <span className="text-xs text-emerald-800 font-medium">
                                                98% d'avis positifs
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Barres de progression des avis */}
                                <div className="space-y-2 max-w-md text-xs text-gray-600">
                                    <div className="flex items-center gap-3">
                                        <span className="w-12">5 étoiles</span>
                                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-600 h-full w-[88%]"></div>
                                        </div>
                                        <span className="w-8 text-right">
                                            88%
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-12">4 étoiles</span>
                                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-600 h-full w-[9%]"></div>
                                        </div>
                                        <span className="w-8 text-right">
                                            9%
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="w-12">3 étoiles</span>
                                        <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-600 h-full w-[2%]"></div>
                                        </div>
                                        <span className="w-8 text-right">
                                            2%
                                        </span>
                                    </div>
                                </div>

                                {/* Liste d'avis */}
                                <div className="space-y-4 pt-4 border-t border-gray-100">
                                    {/* Avis 1 */}
                                    <div className="p-4 bg-gray-50/60 rounded-xl space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs">
                                                    AK
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800">
                                                        Aïcha Koné
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        Élève en Terminale C •
                                                        Il y a 2 jours
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3.5 h-3.5 fill-amber-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Ce cours m'a tellement aidée à
                                            comprendre le chapitre sur les
                                            fonctions logarithmes ! M. Yao
                                            explique tout très clairement avec
                                            des étapes simples. Grâce à ce
                                            cours, j'ai eu 16/20 à mon dernier
                                            devoir de classe. Je le recommande
                                            vivement.
                                        </p>
                                    </div>

                                    {/* Avis 2 */}
                                    <div className="p-4 bg-gray-50/60 rounded-xl space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-blue-800 text-white font-bold flex items-center justify-center text-xs">
                                                    MA
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800">
                                                        Marc-Aurèle Kouassi
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        Élève en Terminale D •
                                                        Il y a 1 semaine
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3.5 h-3.5 fill-amber-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            L'essentiel tout en étant super
                                            complet ! La section d'exercices
                                            type BAC est une vraie mine d'or
                                            pour s'entraîner. Les fiches PDF
                                            téléchargeables permettent de
                                            réviser même quand on n'a pas accès
                                            à Internet.
                                        </p>
                                    </div>

                                    {/* Avis 3 */}
                                    <div className="p-4 bg-gray-50/60 rounded-xl space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-purple-800 text-white font-bold flex items-center justify-center text-xs">
                                                    SD
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-800">
                                                        Salimata Sylla Drou
                                                    </p>
                                                    <p className="text-[10px] text-gray-400">
                                                        Candidat libre • Il y a
                                                        2 semaines
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-3.5 h-3.5 fill-amber-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Le suivi du prof dans la section
                                            questions/réponses est top. Il
                                            répond rapidement et prend le temps
                                            d'expliquer sous forme de petits
                                            schémas. Pour la première fois
                                            depuis la seconde, les maths me
                                            paraissent compréhensibles !
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLONNE DROITE (4 Cols) - CARTE FLOTTANTE D'ACHAT (STICKY) */}
                        <div className="lg:col-span-4 lg:-mt-64 z-20">
                            <div className="sticky top-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                {/* VIGNETTE VIDÉO / APERÇU */}
                                <div className="relative aspect-video bg-slate-900 group cursor-pointer overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600"
                                        alt="Aperçu du cours"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-amber-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <PlayCircle className="w-8 h-8 fill-white text-amber-500 ml-0.5" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-3 left-3 bg-black/70 text-white text-[11px] font-medium px-2 py-1 rounded">
                                        Regarder l'extrait vidéo
                                    </span>
                                </div>

                                {/* CONTENU DE LA CARTE */}
                                <div className="p-6 space-y-6">
                                    {/* PRIX */}
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-2xl md:text-3xl font-black text-slate-900">
                                            14 000 FCFA
                                        </span>
                                        <span className="text-sm text-gray-400 line-through">
                                            25 000 FCFA
                                        </span>
                                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                                            -44%
                                        </span>
                                    </div>

                                    <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 bg-emerald-50 p-2 rounded-lg">
                                        <Clock className="w-3.5 h-3.5" />
                                        Offre promotionnelle réservée aux 50
                                        premiers
                                    </p>

                                    {/* BOUTON D'ACTION PRINCIPAL */}
                                    <div className="space-y-3">
                                        <button className="w-full bg-[#5b3206] hover:bg-[#432404] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
                                            <ShoppingCart className="w-4 h-4" />
                                            Acheter ce cours maintenant
                                        </button>

                                        <button className="w-full bg-white hover:bg-gray-50 text-slate-700 font-semibold py-2.5 px-4 rounded-xl border border-gray-300 transition-colors text-xs flex items-center justify-center gap-2">
                                            <MessageCircle className="w-4 h-4 text-emerald-600" />
                                            Contacter par WhatsApp
                                        </button>
                                    </div>

                                    {/* MODES DE PAIEMENT ACCEPTE */}
                                    <div className="pt-2 text-center border-t border-gray-100">
                                        <p className="text-[11px] text-gray-400 mb-2">
                                            Paiement sécurisé accepté via :
                                        </p>
                                        <div className="flex justify-center items-center gap-2 flex-wrap">
                                            <span className="bg-amber-100 text-amber-800 font-bold text-[10px] px-2 py-1 rounded">
                                                Wave
                                            </span>
                                            <span className="bg-orange-100 text-orange-800 font-bold text-[10px] px-2 py-1 rounded">
                                                Orange
                                            </span>
                                            <span className="bg-yellow-100 text-yellow-800 font-bold text-[10px] px-2 py-1 rounded">
                                                MTN
                                            </span>
                                            <span className="bg-blue-100 text-blue-800 font-bold text-[10px] px-2 py-1 rounded">
                                                Moov
                                            </span>
                                        </div>
                                    </div>

                                    {/* CE COURS COMPREND */}
                                    <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-700">
                                        <p className="font-bold text-slate-900">
                                            Ce cours comprend :
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <Video className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                18h 45m de vidéos à la demande
                                                accessible à vie
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Download className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                24 ressources téléchargeables
                                                (Fiches & Exercices)
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                Accès au forum de soutien direct
                                                avec le professeur
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Smartphone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                Accès sur mobile, tablette et
                                                ordinateur
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                Certificat de fin de formation
                                                Téléchargeable
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                            <span>
                                                Droit d'accès direct au groupe
                                                WhatsApp exclusif
                                            </span>
                                        </div>
                                    </div>

                                    {/* BOUTONS SECONDAIRES (Partage / Favoris) */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                                        <button className="flex items-center gap-1.5 hover:text-emerald-700 font-medium">
                                            <Share2 className="w-4 h-4" />{" "}
                                            Partager ce cours
                                        </button>
                                        <button className="flex items-center gap-1.5 hover:text-red-600 font-medium">
                                            <Heart className="w-4 h-4" />{" "}
                                            Ajouter aux favoris
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
