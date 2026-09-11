import React, { useState } from 'react';
import { 
  ChevronRight, 
  Save, 
  Plus, 
  Check, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle, 
  Eye, 
  Sigma, 
  Trash2, 
  Edit3, 
  FileText, 
  Sliders, 
  Lock, 
  FileCheck, 
  Sparkles, 
  Info,
  Clock,
  Shuffle,
  BookOpen
} from 'lucide-react';

export default function CourseCreationStep3Page() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(2);
  const [correctAnswer, setCorrectAnswer] = useState<'A' | 'B' | 'C' | 'D'>('A');
  const [passingScore, setPassingScore] = useState(75);
  const [randomizeOrder, setRandomizeOrder] = useState(true);
  const [showExplanations, setShowExplanations] = useState(true);

  return (
    <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
      
      {/* ================= BREADCRUMB & HEADER ================= */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <span>Mes cours créateur</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span>Physique-Chimie Terminale D</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-slate-900">Étape 3 sur 4</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-gray-400 text-[11px] flex items-center gap-1">
              <Clock className="w-3 h-3" /> Enregistré il y a 2 min
            </span>
            <button className="text-gray-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors">
              <Save className="w-3.5 h-3.5" />
              <span>Enregistrer comme brouillon</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide border border-emerald-100">
              Module d'évaluation Terminale Scientifique
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Générateur de Quiz & Évaluations formatives
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Concevez les QCM d'auto-évaluation et les devoirs types conformes aux épreuves officielles de la session BAC.
            </p>
          </div>

          {/* TOTAL EVALUATIONS BADGE */}
          <div className="bg-white border border-gray-200 p-3.5 rounded-2xl flex items-center gap-3 shadow-xs self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Total Évaluations</span>
              <span className="text-sm font-black text-slate-900">3 actives <span className="text-xs text-gray-500 font-semibold">(31 pts)</span></span>
            </div>
          </div>
        </div>

        {/* STEPPER NAVIGATION */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* STEP 1 (COMPLETED) */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Étape 1</span>
              <span className="text-xs font-bold text-slate-900">Informations générales</span>
            </div>
          </div>

          {/* STEP 2 (COMPLETED) */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Étape 2</span>
              <span className="text-xs font-bold text-slate-900">Chapitres & Vidéos</span>
            </div>
          </div>

          {/* STEP 3 (CURRENT ACTIVE) */}
          <div className="bg-white border-2 border-emerald-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-[#052e16] text-white flex items-center justify-center font-black text-xs">
              3
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Étape 3</span>
                <span className="bg-amber-100 text-amber-900 text-[9px] font-bold px-1.5 py-0.2 rounded">Étape actuelle</span>
              </div>
              <span className="text-xs font-bold text-slate-900">Quiz & Évaluations</span>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="bg-white/60 border border-gray-200 rounded-2xl p-3.5 flex items-center gap-3 text-gray-400">
            <div className="w-8 h-8 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-xs">
              4
            </div>
            <div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Étape 4</span>
              <span className="text-xs font-semibold text-gray-600">Tarification & Publication</span>
            </div>
          </div>

        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: QUIZ BUILDER EDITOR (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-6">
              
              {/* QUIZ SELECTION HEADER */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white text-emerald-800 border border-gray-200 flex items-center justify-center font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.2 rounded">
                      Quiz sélectionné : Chapitre 1
                    </span>
                    <h2 className="text-sm font-bold text-slate-900 mt-0.5">
                      Quiz de fin de Chapitre 1 : Cinématique & Lois de Newton
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 self-end sm:self-auto">
                  <span>5 questions • 20 pts</span>
                  <button className="p-1.5 hover:bg-gray-200 rounded-lg text-gray-600">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* QUESTION TABS NAV */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedQuestionIndex(num)}
                      className={`w-8 h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                        selectedQuestionIndex === num
                          ? 'bg-[#052e16] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button className="px-3 py-1.5 rounded-xl border border-dashed border-gray-300 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" /> Ajouter
                  </button>
                </div>

                <span className="text-[11px] text-gray-400 font-medium hidden sm:block">
                  Édition : Question {selectedQuestionIndex} sur 5
                </span>
              </div>

              {/* QUESTION FORM */}
              <div className="space-y-5">
                
                {/* QUESTION SETTINGS (TYPE / POINTS / DIFFICULTY) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Type de question</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-900 focus:outline-hidden">
                      <option>Choix unique (QCM)</option>
                      <option>Choix multiple</option>
                      <option>Vrai / Faux</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Barème / Points</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        defaultValue={4}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900 focus:outline-hidden"
                      />
                      <span className="absolute right-3 top-2 text-[10px] font-bold text-gray-400">points</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">Niveau de difficulté</label>
                    <span className="w-full bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl px-3 py-2 text-xs font-bold block text-center">
                      Niveau BAC (Moyen)
                    </span>
                  </div>
                </div>

                {/* STATEMENT / QUESTION TEXT */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-slate-800">Énoncé de la question <span className="text-rose-500">*</span></label>
                    <span className="text-emerald-800 font-semibold text-[11px] flex items-center gap-1 cursor-pointer">
                      <Sigma className="w-3.5 h-3.5" /> Formutage mathématique activé
                    </span>
                  </div>

                  {/* RICH TEXT MINI TOOLBAR */}
                  <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                    <div className="bg-white border-b border-gray-200 px-3 py-1.5 flex items-center gap-2 text-xs text-gray-600 overflow-x-auto">
                      <button className="p-1 rounded-md hover:bg-gray-100 font-bold">B</button>
                      <button className="p-1 rounded-md hover:bg-gray-100 italic">I</button>
                      <button className="p-1 rounded-md hover:bg-gray-100 underline">U</button>
                      <button className="p-1 rounded-md hover:bg-gray-100 font-mono">x²</button>
                      <div className="h-4 w-px bg-gray-200 mx-1"></div>
                      <button className="p-1 px-2 rounded-md hover:bg-gray-100 font-mono text-[11px] text-emerald-800 bg-emerald-50 font-bold">
                        $\Sigma$ LaTeX
                      </button>
                      <button className="p-1 px-2 rounded-md hover:bg-gray-100 text-[11px] font-semibold text-gray-600">
                        Schéma Vectoriel
                      </button>
                      <button className="p-1 px-2 rounded-md hover:bg-gray-100 text-[11px] font-semibold text-gray-600">
                        Image
                      </button>
                    </div>

                    <textarea 
                      rows={3}
                      defaultValue="Quelle est l'équation horaire x(t) d'un mobile se déplaçant selon un axe (Ox) avec une accélération constante a₀, une vitesse initiale v₀ et une position initiale x₀ ?"
                      className="w-full p-3 text-xs md:text-sm text-slate-900 bg-transparent focus:outline-hidden font-medium leading-relaxed resize-y"
                    />
                  </div>
                </div>


                {/* ANSWER PROPOSITIONS */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-slate-800">Propositions de réponses</label>
                    <span className="text-gray-400 text-[10px]">Cochez la case circulaire de la bonne réponse</span>
                  </div>

                  <div className="space-y-2.5">
                    
                    {/* OPTION A (CORRECT) */}
                    <div className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      correctAnswer === 'A' ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 flex-1">
                        <input 
                          type="radio" 
                          name="correct_answer" 
                          checked={correctAnswer === 'A'} 
                          onChange={() => setCorrectAnswer('A')}
                          className="w-4 h-4 text-emerald-700 focus:ring-emerald-600"
                        />
                        <span className="font-bold text-xs text-slate-900 w-16">Option A</span>
                        <input 
                          type="text" 
                          defaultValue="x(t) = ½ a₀ t² + v₀ t + x₀"
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-900 focus:outline-hidden"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> Bonne réponse
                        </span>
                      </div>
                    </div>

                    {/* OPTION B */}
                    <div className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      correctAnswer === 'B' ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 flex-1">
                        <input 
                          type="radio" 
                          name="correct_answer" 
                          checked={correctAnswer === 'B'} 
                          onChange={() => setCorrectAnswer('B')}
                          className="w-4 h-4 text-emerald-700 focus:ring-emerald-600"
                        />
                        <span className="font-bold text-xs text-slate-900 w-16">Option B</span>
                        <input 
                          type="text" 
                          defaultValue="x(t) = a₀ t² + v₀ t + x₀"
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-hidden"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-[10px]">Distracteur plausible</span>
                        <button className="text-gray-400 hover:text-rose-600 p-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* OPTION C */}
                    <div className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      correctAnswer === 'C' ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 flex-1">
                        <input 
                          type="radio" 
                          name="correct_answer" 
                          checked={correctAnswer === 'C'} 
                          onChange={() => setCorrectAnswer('C')}
                          className="w-4 h-4 text-emerald-700 focus:ring-emerald-600"
                        />
                        <span className="font-bold text-xs text-slate-900 w-16">Option C</span>
                        <input 
                          type="text" 
                          defaultValue="x(t) = ½ a₀ t + v₀ t² + x₀"
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-hidden"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-[10px]">Distracteur dimensionnel</span>
                        <button className="text-gray-400 hover:text-rose-600 p-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* OPTION D */}
                    <div className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                      correctAnswer === 'D' ? 'bg-emerald-50/70 border-emerald-300 shadow-xs' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 flex-1">
                        <input 
                          type="radio" 
                          name="correct_answer" 
                          checked={correctAnswer === 'D'} 
                          onChange={() => setCorrectAnswer('D')}
                          className="w-4 h-4 text-emerald-700 focus:ring-emerald-600"
                        />
                        <span className="font-bold text-xs text-slate-900 w-16">Option D</span>
                        <input 
                          type="text" 
                          defaultValue="x(t) = a₀ t + v₀"
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-800 focus:outline-hidden"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-[10px]">Erreur d'intégration</span>
                        <button className="text-gray-400 hover:text-rose-600 p-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>

                  <button className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1 pt-1">
                    <Plus className="w-3.5 h-3.5" /> Ajouter une proposition (Option E)
                  </button>
                </div>


                {/* EXPLANATION / FEEDBACK BOX */}
                <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-amber-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-700" />
                      Explication pédagogique & Rétroaction
                    </label>
                    <span className="text-[10px] text-amber-900 font-semibold">Affiché après réponse</span>
                  </div>
                  <textarea 
                    rows={2}
                    defaultValue="Par double intégration de l'accélération a(t) = a₀, on obtient la vitesse v(t) = a₀t + v₀, puis par intégration de v(t), x(t) = ½a₀t² + v₀t + x₀. Astuce : vérifiez toujours les dimensions physiques des termes !"
                    className="w-full bg-white/80 border border-amber-200/80 rounded-lg p-2.5 text-xs text-amber-950 focus:outline-hidden leading-relaxed"
                  />
                </div>

                {/* FORM ACTIONS */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <button className="w-full sm:w-auto text-xs font-bold text-emerald-800 border border-emerald-200 hover:bg-emerald-50 px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5">
                    <Plus className="w-4 h-4" /> Ajouter une nouvelle question
                  </button>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-slate-800">
                      Annuler
                    </button>
                    <button className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs">
                      <Save className="w-3.5 h-3.5" /> Enregistrer la question
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT COLUMN: CREATED EVALUATIONS & PARAMETERS (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* CREATED EVALUATIONS LIST */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  Évaluations créées
                </h3>
                <span className="text-[10px] bg-gray-100 text-gray-700 font-bold px-2 py-0.5 rounded">
                  3 modules
                </span>
              </div>

              <div className="space-y-2.5">
                
                {/* EVALUATION 1 */}
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1 hover:border-emerald-300 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-emerald-800 font-bold">Chapitre 1 • Chapitre 1</span>
                    <button className="text-gray-400 hover:text-slate-800"><Edit3 className="w-3.5 h-3.5" /></button>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Auto-évaluation : Cinématique</h4>
                  <p className="text-[10px] text-gray-400">5 questions • Barème 20 pts</p>
                </div>

                {/* EVALUATION 2 */}
                <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-1 relative">
                  <span className="absolute right-3 top-3 bg-emerald-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                    Actif
                  </span>
                  <span className="text-[10px] text-emerald-800 font-bold">Chapitre 2 • Chapitre 2</span>
                  <h4 className="font-bold text-xs text-slate-900">QCM Synthèse : Mouvement de pr...</h4>
                  <p className="text-[10px] text-gray-500">6 questions prévues • En cours</p>
                </div>

                {/* EVALUATION 3 */}
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl space-y-1 hover:border-emerald-300 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-amber-900 font-bold bg-amber-100 px-1.5 py-0.2 rounded">
                      Examen BAC
                    </span>
                    <button className="text-gray-400 hover:text-slate-800"><Edit3 className="w-3.5 h-3.5" /></button>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">Sujet BAC Blanc n°1 corrigé</h4>
                  <p className="text-[10px] text-gray-400">Devoir surveillé numérique avec vidéo</p>
                </div>

              </div>

              <button className="w-full bg-[#052e16] hover:bg-[#031d0e] text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs">
                <Plus className="w-4 h-4" /> Créer un nouveau quiz ou devoir
              </button>
            </div>


            {/* SUCCESS CRITERIA & PARAMETERS */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-700" />
                  Critères de réussite & Paramètres
                </h3>
              </div>

              {/* SEUIL DE VALIDATION SLIDER */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">Seuil de validation du certificat</span>
                  <span className="font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                    {passingScore}% (15 / 20)
                  </span>
                </div>

                <input 
                  type="range" 
                  min="50" 
                  max="100" 
                  value={passingScore}
                  onChange={(e) => setPassingScore(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />

                <div className="flex justify-between text-[9px] text-gray-400 font-semibold">
                  <span>50% (Moyenne)</span>
                  <span>70% (Mention Bien)</span>
                  <span>100% (Parfait)</span>
                </div>
              </div>

              {/* ATTEMPTS ALLOWED */}
              <div className="space-y-1 pt-2">
                <label className="text-xs font-bold text-slate-800 block">Nombre de tentatives autorisées</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-900 focus:outline-hidden">
                  <option>3 tentatives par 24 heures</option>
                  <option>Tentatives illimitées</option>
                  <option>1 seule tentative (Mode Examen)</option>
                </select>
              </div>

              {/* RANDOMIZE ORDER TOGGLE */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Ordre aléatoire des questions</span>
                  <span className="text-[10px] text-gray-400">Mélange automatique pour limiter la triche</span>
                </div>
                <button 
                  onClick={() => setRandomizeOrder(!randomizeOrder)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${randomizeOrder ? 'bg-emerald-800' : 'bg-gray-200'}`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${randomizeOrder ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* SHOW EXPLANATIONS TOGGLE */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Afficher les explications détaillées</span>
                  <span className="text-[10px] text-gray-400">Immédiatement après la validation de l'élève</span>
                </div>
                <button 
                  onClick={() => setShowExplanations(!showExplanations)}
                  className={`w-11 h-6 rounded-full transition-colors relative ${showExplanations ? 'bg-emerald-800' : 'bg-gray-200'}`}
                >
                  <span className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${showExplanations ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

            </div>


            {/* DECO / MENA OFFICIAL NORMS NOTICE */}
            <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-amber-950 flex items-center gap-1.5 text-xs">
                <Info className="w-4 h-4 text-amber-800" /> Normes officielles DECO / MENA
              </span>
              <p className="text-[11px] text-amber-900 leading-relaxed">
                <strong>Rappel pédagogique :</strong> Les QCM conformes aux critères d'évaluation des lycées de Côte d'Ivoire doivent comporter 4 propositions distinctes avec un seul distracteur plausible. Privilégiez les démarches de raisonnement plutôt que la simple mémorisation brute.
              </p>
              <a href="#" className="text-[10px] font-bold text-amber-950 underline block pt-1 hover:text-black">
                Télécharger le guide de rédaction DECO ↗
              </a>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM STEPPER ACTION BAR ================= */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <button className="text-xs font-bold text-gray-600 hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Précédent : Chapitres & Vidéos
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
              <Eye className="w-4 h-4" /> Aperçu élève
            </button>
            <button className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm">
              Suivant : Tarification & Publication <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}