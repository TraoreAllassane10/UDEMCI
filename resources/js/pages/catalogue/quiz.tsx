import React, { useState } from "react";
import {
    Clock,
    X,
    CheckCircle2,
    AlertCircle,
    HelpCircle,
    ArrowRight,
    Download,
    MessageCircle,
    ChevronRight,
    Sparkles,
    Award,
    Check,
    ChevronLeft,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function QuizEvaluationPage() {
    const [selectedOption, setSelectedOption] = useState<string>("B");
    const [currentQuestion, setCurrentQuestion] = useState<number>(2);

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= BREADCRUMB & HEADER ================= */}
                <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 text-xs text-gray-500">
                    <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                        <span>Mes cours</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span>Mathématiques Tle C & D</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span>Chapitre 4 : Calcul Intégral & Primitives</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span className="font-semibold text-slate-900">
                            Quiz d'évaluation BAC
                        </span>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                                    Session BAC Blanc 2025
                                </span>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    Conforme Direction des Examens & Concours
                                    (DECO)
                                </span>
                            </div>
                            <h1 className="text-xl md:text-2xl font-black text-slate-900">
                                Quiz d'auto-évaluation : Intégration par parties
                                & Primitives
                            </h1>
                            <p className="text-xs text-gray-500">
                                Test de validation des réflexes analytiques.
                                Objectif : maîtriser la règle du produit
                                décomposé avant l'épreuve de synthèse.
                            </p>
                        </div>

                        {/* TIMER & PROGRESS WIDGET */}
                        <div className="bg-white border border-gray-200 shadow-xs rounded-2xl p-3.5 flex items-center gap-6 self-start md:self-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider block">
                                        Temps restant
                                    </span>
                                    <span className="text-base font-black text-slate-900 font-mono">
                                        08:41
                                    </span>
                                </div>
                            </div>

                            <div className="h-8 w-px bg-gray-200"></div>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center text-xs gap-4">
                                    <span className="text-gray-500 font-medium">
                                        Question 2 sur 5
                                    </span>
                                    <span className="font-extrabold text-emerald-800">
                                        40%
                                    </span>
                                </div>
                                <div className="w-28 bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-700 h-full w-[40%] rounded-full"></div>
                                </div>
                            </div>

                            <button className="text-gray-400 hover:text-red-600 p-1 rounded-lg hover:bg-gray-50 transition-colors ml-2">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* LEFT COLUMN: QUESTION & OPTIONS (8 COLS) */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-6">
                                {/* Question Header */}
                                <div className="flex justify-between items-center text-xs border-b border-gray-100 pb-3">
                                    <span className="font-extrabold text-emerald-900 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-lg">
                                        QUESTION N° 02 / 05 • BARÈME : 4 POINTS
                                    </span>
                                    <span className="text-gray-400 font-medium">
                                        Niveau : Terminale C/D
                                    </span>
                                </div>

                                {/* Question Text */}
                                <div className="space-y-2">
                                    <h2 className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                                        Quelle est la formule exacte de
                                        l'intégration par parties pour deux
                                        fonctions{" "}
                                        <span className="font-mono text-emerald-800">
                                            u
                                        </span>{" "}
                                        et{" "}
                                        <span className="font-mono text-emerald-800">
                                            v
                                        </span>{" "}
                                        continûment dérivables sur un intervalle
                                        [a, b] ?
                                    </h2>
                                    <p className="text-xs text-gray-500">
                                        Sélectionnez l'unique proposition
                                        correcte afin de valider cette étape et
                                        débloquer les commentaires
                                        méthodologiques du correcteur.
                                    </p>
                                </div>

                                {/* Central Math Formula Expression */}
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center font-mono text-base font-bold text-slate-800">
                                    ∫<sub>a</sub>
                                    <sup>b</sup> u'(x) · v(x) dx = ?
                                </div>

                                {/* OPTIONS LIST */}
                                <div className="space-y-3">
                                    {/* OPTION A */}
                                    <div
                                        onClick={() => setSelectedOption("A")}
                                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                            selectedOption === "A"
                                                ? "border-emerald-700 bg-emerald-50/30"
                                                : "border-gray-200 hover:border-gray-300 bg-white"
                                        }`}
                                    >
                                        <div
                                            className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                                                selectedOption === "A"
                                                    ? "border-emerald-700 bg-emerald-700 text-white"
                                                    : "border-gray-300 text-gray-500"
                                            }`}
                                        >
                                            A
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-mono text-xs md:text-sm font-semibold text-slate-800">
                                                ∫<sub>a</sub>
                                                <sup>b</sup> u'(x) · v(x) dx = [
                                                u'(x) · v'(x) ]<sub>a</sub>
                                                <sup>b</sup> - ∫<sub>a</sub>
                                                <sup>b</sup> u(x) · v(x) dx
                                            </p>
                                            <span className="text-[10px] text-gray-400 block">
                                                Application erronée de la
                                                dérivée
                                            </span>
                                        </div>
                                    </div>

                                    {/* OPTION B (VALIDATED / CORRECT ANSWER) */}
                                    <div className="p-4 rounded-xl border-2 border-emerald-600 bg-emerald-50/40 space-y-3">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 shadow-xs">
                                                    <Check className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded">
                                                            CHOIX VALIDÉ
                                                        </span>
                                                        <span className="text-[10px] font-bold text-emerald-800">
                                                            ✓ Bonne réponse (+4
                                                            pts)
                                                        </span>
                                                    </div>
                                                    <p className="font-mono text-xs md:text-sm font-bold text-slate-900">
                                                        ∫<sub>a</sub>
                                                        <sup>b</sup> u'(x) ·
                                                        v(x) dx = [ u(x) · v(x)
                                                        ]<sub>a</sub>
                                                        <sup>b</sup> - ∫
                                                        <sub>a</sub>
                                                        <sup>b</sup> u(x) ·
                                                        v'(x) dx
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* EXPLANATION BOX */}
                                        <div className="bg-white p-4 rounded-xl border border-emerald-200 space-y-2 text-xs">
                                            <div className="flex items-center gap-2 font-bold text-slate-900">
                                                <img
                                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                                                    alt="Prof"
                                                    className="w-6 h-6 rounded-full object-cover border border-emerald-600"
                                                />
                                                <span>
                                                    Explication de M. Yao Konan
                                                </span>
                                                <span className="text-[10px] text-gray-400 font-normal">
                                                    • Lycée Scientifique de
                                                    Yamoussoukro
                                                </span>
                                            </div>

                                            <p className="text-gray-700 leading-relaxed text-[11px]">
                                                C'est l'identité fondamentale
                                                obtenue en intégrant les deux
                                                membres de la dérivation du
                                                produit{" "}
                                                <strong>
                                                    (uv)' = u'v + uv'
                                                </strong>
                                                . Sur [a, b], on obtient
                                                immédiatement [uv]<sub>a</sub>
                                                <sup>b</sup> = ∫ u'v + ∫ uv',
                                                d'où la formule cherchée en
                                                transposant l'un des termes.
                                            </p>

                                            <div className="flex items-center gap-1.5 text-amber-800 text-[11px] font-medium pt-1">
                                                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                                <span>
                                                    <strong>
                                                        Astuce mémorielle :
                                                    </strong>{" "}
                                                    Le terme tout intégré [uv]
                                                    porte les bornes et ne
                                                    contient plus de symbole de
                                                    dérivée.
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* OPTION C */}
                                    <div
                                        onClick={() => setSelectedOption("C")}
                                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                            selectedOption === "C"
                                                ? "border-emerald-700 bg-emerald-50/30"
                                                : "border-gray-200 hover:border-gray-300 bg-white"
                                        }`}
                                    >
                                        <div
                                            className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                                                selectedOption === "C"
                                                    ? "border-emerald-700 bg-emerald-700 text-white"
                                                    : "border-gray-300 text-gray-500"
                                            }`}
                                        >
                                            C
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-mono text-xs md:text-sm font-semibold text-slate-800">
                                                ∫<sub>a</sub>
                                                <sup>b</sup> u'(x) · v(x) dx = [
                                                u(x) · v'(x) ]<sub>a</sub>
                                                <sup>b</sup> + ∫<sub>a</sub>
                                                <sup>b</sup> u(x) · v(x) dx
                                            </p>
                                            <span className="text-[10px] text-gray-400 block">
                                                Erreur de signe (+) et d'ordre
                                                de dérivation
                                            </span>
                                        </div>
                                    </div>

                                    {/* OPTION D */}
                                    <div
                                        onClick={() => setSelectedOption("D")}
                                        className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                                            selectedOption === "D"
                                                ? "border-emerald-700 bg-emerald-50/30"
                                                : "border-gray-200 hover:border-gray-300 bg-white"
                                        }`}
                                    >
                                        <div
                                            className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 ${
                                                selectedOption === "D"
                                                    ? "border-emerald-700 bg-emerald-700 text-white"
                                                    : "border-gray-300 text-gray-500"
                                            }`}
                                        >
                                            D
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-mono text-xs md:text-sm font-semibold text-slate-800">
                                                ∫<sub>a</sub>
                                                <sup>b</sup> u'(x) · v(x) dx = ∫
                                                <sub>a</sub>
                                                <sup>b</sup> u(x) dx × ∫
                                                <sub>a</sub>
                                                <sup>b</sup> v'(x) dx
                                            </p>
                                            <span className="text-[10px] text-gray-400 block">
                                                Confusion fréquente :
                                                l'intégrale d'un produit n'est
                                                pas le produit des intégrales
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* FOOTER ACTIONS OF QUESTION */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
                                    <button className="text-xs font-semibold text-amber-800 hover:underline flex items-center gap-1.5 self-start sm:self-auto">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                        Voir l'astuce mnémotechnique ALPES
                                    </button>

                                    <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm">
                                        Question suivante{" "}
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* QUESTION NAVIGATION BULLETS */}
                            <div className="flex items-center justify-center gap-2 pt-2">
                                {[1, 2, 3, 4, 5].map((qNum) => (
                                    <button
                                        key={qNum}
                                        onClick={() => setCurrentQuestion(qNum)}
                                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                                            qNum === 1
                                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                                : qNum === 2
                                                  ? "bg-[#052e16] text-white shadow-md ring-2 ring-emerald-700 ring-offset-2"
                                                  : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                                        }`}
                                    >
                                        0{qNum}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: CRITERIA & SCOREBOARD (4 COLS) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* VALIDATION CRITERIA CARD */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                                    Critères de validation
                                </h3>

                                <div className="space-y-3 text-xs">
                                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                                        <span className="text-gray-500">
                                            Total questions
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            5 exercices
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                                        <span className="text-gray-500">
                                            Seuil d'obtention
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            80% (16 / 20)
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center py-1.5 border-b border-gray-100">
                                        <span className="text-gray-500">
                                            Tentatives restantes
                                        </span>
                                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                                            2 sur 3 aujourd'hui
                                        </span>
                                    </div>
                                </div>

                                {/* CURRENT SCORE DISPLAY */}
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-xs">
                                        8/20
                                    </div>
                                    <div className="space-y-0.5">
                                        <span className="text-xs font-bold text-slate-900">
                                            Score actuel : 8 pts
                                        </span>
                                        <p className="text-[11px] text-gray-500">
                                            Encore 2 bonnes réponses pour
                                            valider l'attestation du chapitre.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[10px] text-gray-400 italic">
                                    * La note finale est automatiquement
                                    inscrite dans votre relevé de compétences
                                    EduIvoire pour le suivi parental et
                                    pédagogique.
                                </p>
                            </div>

                            {/* PROFESSOR ASSISTANCE BOX */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                                        alt="Prof Yao"
                                        className="w-10 h-10 rounded-full object-cover border border-emerald-600"
                                    />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-xs">
                                            M. Yao Konan
                                        </h4>
                                        <p className="text-[10px] text-gray-500">
                                            Agrégé • Spécialiste BAC C & D
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Un blocage sur la notion de primitive par
                                    parties ? Consultez la fiche de synthèse ou
                                    sollicitez une assistance directe sur la
                                    communauté d'entraide.
                                </p>

                                <div className="space-y-2 pt-1 text-xs">
                                    <button className="w-full bg-gray-50 hover:bg-gray-100 text-slate-700 font-bold py-2.5 rounded-xl border border-gray-200 flex items-center justify-between px-3 transition-colors">
                                        <span className="flex items-center gap-2">
                                            <Download className="w-3.5 h-3.5 text-emerald-700" />{" "}
                                            Fiche Mémo BAC Ch 4 (PDF)
                                        </span>
                                        <Download className="w-3.5 h-3.5 text-gray-400" />
                                    </button>

                                    <button className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold py-2.5 rounded-xl border border-emerald-200 flex items-center justify-between px-3 transition-colors">
                                        <span className="flex items-center gap-2">
                                            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />{" "}
                                            Salon d'entraide WhatsApp Élèves
                                        </span>
                                        <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                                    </button>
                                </div>
                            </div>

                            {/* STATS BANNER */}
                            <div className="bg-[#052e16] text-white p-5 rounded-2xl space-y-2 shadow-sm">
                                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                                    <Award className="w-3.5 h-3.5" /> Mention
                                    Très Bien en vue
                                </span>
                                <p className="text-xs text-emerald-100 leading-relaxed">
                                    94% des élèves ayant obtenu 100% à ce quiz
                                    ont réussi l'exercice de calcul intégral au
                                    Baccalauréat ivoirien session passée.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
}
