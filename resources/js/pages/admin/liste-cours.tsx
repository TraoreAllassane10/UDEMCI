import React, { useState } from 'react';
import {
  Search,
  Bell,
  CheckCircle2,
  AlertCircle,
  FileText,
  Download,
  Filter,
  Eye,
  MoreVertical,
  Clock,
  Shield,
  BookOpen,
  Award,
  Video,
  Check,
  X,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Users
} from 'lucide-react';
import WebLayout from '@/layouts/web-layout';

export default function AdminCourseModerationPage() {
  const [activeTab, setActiveTab] = useState<'pending' | 'published' | 'rejected' | 'all'>('pending');
  const [selectedLevel, setSelectedLevel] = useState('Terminale D');
  const [selectedDiscipline, setSelectedDiscipline] = useState('Toutes les disciplines');

  return (
 <WebLayout>
       <div className="bg-[#F8F7F4] text-[#1C1C1C] min-h-screen font-sans text-xs antialiased selection:bg-[#1B4332] selection:text-white">
      {/* ================= MAIN CONTAINER ================= */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-6">

        {/* BREADCRUMB & TOP TAG */}
        <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <span>Administration</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Modération & Gestion des cours</span>
          </div>

          <span className="bg-[#1B4332]/10 text-[#1B4332] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#1B4332]" /> SISSION OFFICIELLE MENA / DECO — 2025/2026
          </span>
        </div>

        {/* HERO TITLE & ACTION BUTTONS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-[#E8A33D] uppercase tracking-wider block">
              PORTAIL RÉGLEMENTAIRE & CURRICULAIRE
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Gestion des Cours & Conformité Pédagogique MENA
            </h1>
            <p className="text-gray-500 text-xs max-w-2xl">
              Homologation académique stricte selon le référentiel scolaire ivoirien. Auditez les contenus multimédias, vérifiez les maquettes d'exercices et délivrez le visa pédagogique officiel avant mise en ligne.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-2xs transition-all">
              <FileText className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Grille d'évaluation pédagogique (PDF)</span>
            </button>
            <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
              <Download className="w-3.5 h-3.5" />
              <span>Rapports d'inspection</span>
            </button>
          </div>
        </div>

        {/* TABS FILTER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1 bg-[#EBE9E2] p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'pending'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              En attente de validation
              <span className="bg-[#E8A33D] text-slate-900 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
                14
              </span>
            </button>

            <button
              onClick={() => setActiveTab('published')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'published'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              Cours publiés et en ligne
              <span className="text-gray-500 text-[10px]">312</span>
            </button>

            <button
              onClick={() => setActiveTab('rejected')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'rejected'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              Cours rejetés ou à corriger
              <span className="text-gray-500 text-[10px]">8</span>
            </button>

            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              Tous les cours
            </button>
          </div>

          <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" /> Actualisé en continu du registre DECO
          </span>
        </div>

        {/* SEARCH AND SPECIFIC FILTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par titre de module, mot-clé, code matière..."
              className="w-full bg-white border border-gray-200/90 rounded-xl pl-8 pr-4 py-2 text-xs font-medium text-slate-900 placeholder-gray-400 focus:outline-hidden shadow-2xs"
            />
          </div>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-white border border-gray-200/90 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden shadow-2xs cursor-pointer"
          >
            <option>Terminale D</option>
            <option>Terminale C</option>
            <option>Terminale A</option>
            <option>3ème (BEPC)</option>
          </select>

          <select
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className="bg-white border border-gray-200/90 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden shadow-2xs cursor-pointer"
          >
            <option>Toutes les disciplines</option>
            <option>Physique-Chimie</option>
            <option>Mathématiques</option>
            <option>SVT</option>
            <option>Français & Philo</option>
          </select>
        </div>

        {/* ================= FEATURED AUDIT CARD (EXAMEN DE CONFORMITÉ EN COURS) ================= */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xs overflow-hidden">
          
          {/* Header Strip */}
          <div className="bg-[#1B4332] text-white px-5 py-2.5 flex flex-wrap items-center justify-between text-[11px] font-bold">
            <div className="flex items-center gap-2">
              <span className="bg-[#E8A33D] text-slate-900 text-[9px] font-black px-2 py-0.2 rounded-sm uppercase">
                COURS EN PRIORITÉ N°1 MENA
              </span>
              <span>2025-CI-3849</span>
            </div>
            <div className="flex items-center gap-3 text-emerald-100 text-[10px]">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#E8A33D]" /> Soumis à l'homologation : il y a 2h 15m
              </span>
              <span>•</span>
              <span>Inspecteur Réf : Dr. Bamba (Région Sud)</span>
            </div>
          </div>

          <div className="p-5 space-y-6">
            
            {/* Main Course Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Thumbnail & Video Preview (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gray-900 group cursor-pointer shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
                    alt="Physique Chimie"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    Terminale D • Scientifique
                  </span>
                  <span className="absolute bottom-2 right-2 bg-[#E8A33D] text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded font-mono">
                    15.000 FCFA
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="bg-[#F8F7F4] p-2 rounded-xl border border-gray-200/70">
                    <span className="font-bold block text-slate-900">4 Fiches</span>
                    <span className="text-gray-400">Exercices D'Exam</span>
                  </div>
                  <div className="bg-[#F8F7F4] p-2 rounded-xl border border-gray-200/70">
                    <span className="font-bold block text-slate-900">1 QCM</span>
                    <span className="text-gray-400">Évaluation BAC</span>
                  </div>
                  <div className="bg-[#F8F7F4] p-2 rounded-xl border border-gray-200/70">
                    <span className="font-bold block text-slate-900">Eco-Data</span>
                    <span className="text-gray-400">Transcodage 480p</span>
                  </div>
                </div>
              </div>

              {/* Details & Author (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-50 text-[#1B4332] text-[10px] font-bold px-2 py-0.5 rounded">
                      Matière : Physique-Chimie
                    </span>
                    <span className="text-gray-400 text-[10px]">• Programme de Révision BAC 2026</span>
                  </div>
                  <h2 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
                    Examen de conformité en cours : Physique-Chimie Terminale D : Réussir les épreuves du BAC ivoirien
                  </h2>
                </div>

                {/* Teacher Profile Card */}
                <div className="bg-[#F8F7F4] p-3 rounded-2xl border border-gray-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                      alt="Dr. Yao Mireille"
                      className="w-10 h-10 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xs text-slate-900">Dr. Yao Mireille</span>
                        <span className="bg-emerald-100 text-[#1B4332] text-[9px] font-bold px-1.5 py-0.2 rounded">
                          Formatrice Certifiée
                        </span>
                      </div>
                      <p className="text-[10px] text-gray-500">
                        Enseignante-chercheuse à l'INP-HB Yamoussoukro • 14 ans d'expérience
                      </p>
                    </div>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-[9px] text-gray-400 block font-semibold">Taux de réussite élèves</span>
                    <span className="font-black text-xs text-[#1B4332] font-mono">94.8% au BAC 2024</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-extrabold text-[10px] text-gray-400 uppercase tracking-wider block">
                    PÉRIMÈTRE CURRICULAIRE SOUMIS :
                  </span>
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    Modules examinés : Lois de Newton appliquées aux trajectoires paraboliques, acides-bases organiques amortis, dosage acido-basique physique-chimique, saponification et cinétique des réactions lentes.
                  </p>
                </div>
              </div>

            </div>

            {/* CHECKLIST D'AUDIT PÉDAGOGIQUE */}
            <div className="bg-[#F8F7F4] rounded-2xl p-4 border border-gray-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332]" />
                  Checklist d'audit pédagogique & critères réglementaires DECO
                </h3>
                <span className="text-[10px] text-gray-500 font-semibold">4 / 4 critères vérifiés par le rapporteur</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                
                <div className="bg-white p-3 rounded-xl border border-gray-200/90 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Conformité stricte au programme officiel MENA 2024-2025</span>
                    <span className="text-[10px] text-gray-500">Validation des chapitres de Mécanique, Vecteurs et Loi de Newton selon le barème officiel.</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200/90 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Transcodage vidéo & Profil éco bas-débit (480p)</span>
                    <span className="text-[10px] text-gray-500">Trame vidéo optimisée pour les réseaux mobiles 3G/4G en région (Bouaké, Korhogo, San Pedro).</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200/90 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Fiches de formules & exercices corrigés</span>
                    <span className="text-[10px] text-gray-500">Absence de coquilles scientifiques ; rédaction conforme aux annales orales et écrites.</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-200/90 flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">QCM conforme aux normes officielles de l'examen</span>
                    <span className="text-[10px] text-gray-500">Format des vagues de questions à choix multiples avec barème sans points négatifs abusifs.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ACTION BUTTONS STRIP */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-gray-100">
              <span className="text-[10px] text-gray-500 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Visa d'inspection DECO prêt pour génération d'agrément
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none border border-red-200 text-red-700 hover:bg-red-50 font-bold px-4 py-2 rounded-xl text-xs transition-colors">
                  Rejeter le cours
                </button>
                <button className="flex-1 sm:flex-none border border-gray-300 text-slate-800 hover:bg-gray-100 font-bold px-4 py-2 rounded-xl text-xs transition-colors">
                  Demander des ajustements
                </button>
                <button className="flex-1 sm:flex-none bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-5 py-2 rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 stroke-[3]" /> Approuver et publier sur le catalogue officiel
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ================= REGISTRE DES COURS EXAMINÉS & STATUT DE PUBLICATION ================= */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-2xs overflow-hidden">
          
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Registre des cours examinés & statut de publication
              </h3>
              <p className="text-[11px] text-gray-400">
                Suivi en temps réel des soumissions par les enseignants & inspections régionales
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                <Filter className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8F7F4] text-gray-400 uppercase text-[9px] font-extrabold border-b border-gray-200/60">
                  <th className="py-3 px-5">COURS & DISCIPLINE</th>
                  <th className="py-3 px-5">ENSEIGNANT / FORMATEUR</th>
                  <th className="py-3 px-5">NIVEAU D'ÉTUDE</th>
                  <th className="py-3 px-5">SOUMISSION</th>
                  <th className="py-3 px-5">STATUT DECO / MENA</th>
                  <th className="py-3 px-5 text-right">ACTIONS D'AUDIT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                
                {/* Row 1 */}
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=120"
                        alt="Maths"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <span className="font-bold block text-slate-900">
                          Mathématiques Tle C & D — Primitives & Intégrales
                        </span>
                        <span className="text-[10px] text-gray-400">10 leçons • 5h 30m</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#1B4332] font-bold text-[10px] flex items-center justify-center shrink-0">
                        YK
                      </div>
                      <div>
                        <span className="font-bold block text-slate-900 text-[11px]">M. Yao Kouassi</span>
                        <span className="text-[9px] text-gray-400 block">Lycée Classique d'Abidjan</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-600">
                    Terminale C & D
                  </td>
                  <td className="py-3.5 px-5 font-mono text-gray-500 text-[11px]">
                    22 Fév 2026
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[3]" /> Approuvé MENA (En ligne)
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700" title="Visualiser">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=120"
                        alt="Culture Générale"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <span className="font-bold block text-slate-900">
                          Prépa Concours ENA 2026 : Culture Générale & Droit
                        </span>
                        <span className="text-[10px] text-gray-400">18 leçons • 12h 00m</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                        CS
                      </div>
                      <div>
                        <span className="font-bold block text-slate-900 text-[11px]">Magistrat Coulibaly S.</span>
                        <span className="text-[9px] text-gray-400 block">Ex-Juge tribunal d'Abidjan</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-600">
                    Concours ENA
                  </td>
                  <td className="py-3.5 px-5 font-mono text-gray-500 text-[11px]">
                    24 Fév 2026
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[3]" /> Approuvé MENA (En ligne)
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50/80 transition-colors bg-amber-50/30">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=120"
                        alt="SVT"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <span className="font-bold block text-slate-900">
                          SVT Terminale D — Génétique Humaine & Immunologie
                        </span>
                        <span className="text-[10px] text-gray-400">8 leçons • 4h 15m</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px] flex items-center justify-center shrink-0">
                        AC
                      </div>
                      <div>
                        <span className="font-bold block text-slate-900 text-[11px]">Prof. Adjoua Clarisse</span>
                        <span className="text-[9px] text-gray-400 block">Université Felix Houphouët-Boigny</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-600">
                    Terminale D
                  </td>
                  <td className="py-3.5 px-5 font-mono text-gray-500 text-[11px]">
                    Hier, 18h20
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center gap-1 bg-[#4E2B08] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-[#E8A33D]" /> En attente d'audit DECO
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-2xs transition-all">
                      Examiner
                    </button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=120"
                        alt="Philosophie"
                        className="w-10 h-10 rounded-xl object-cover border border-gray-200 shrink-0"
                      />
                      <div>
                        <span className="font-bold block text-slate-900">
                          Philosophie Terminale A, C & D — La Conscience et l'Inconscient
                        </span>
                        <span className="text-[10px] text-gray-400">11 leçons • 7h 20m</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                        KE
                      </div>
                      <div>
                        <span className="font-bold block text-slate-900 text-[11px]">M. Koffi Eric</span>
                        <span className="text-[9px] text-gray-400 block">Lycée Sainte Marie Cocody</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-600">
                    Terminale A, C, D
                  </td>
                  <td className="py-3.5 px-5 font-mono text-gray-500 text-[11px]">
                    20 Fév 2026
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-200">
                      ⚠️ Corrections demandées
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 bg-[#F8F7F4] border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span>Affichage de 1 à 4 sur 334 cours enregistrés sur le système national</span>
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
              <button className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs">
                Suivant
              </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM STATS STRIP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-center gap-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-gray-100 text-slate-800 flex items-center justify-center shrink-0 font-bold">
              <Clock className="w-5 h-5 text-[#1B4332]" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">DÉLAI MOYEN DE VALIDATION DECO</span>
              <span className="text-xl font-extrabold text-slate-900 font-mono">36 h</span>
              <span className="text-[10px] text-gray-400 block">Objectif réglementaire : &lt; 48 heures ouvrées</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-center gap-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-gray-100 text-slate-800 flex items-center justify-center shrink-0 font-bold">
              <Award className="w-5 h-5 text-[#E8A33D]" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">TAUX D'APPROBATION INITIALE</span>
              <span className="text-xl font-extrabold text-slate-900 font-mono">88.5%</span>
              <span className="text-[10px] text-gray-400 block">11,5% de renvoi pour retouches méthodologiques</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/90 p-4 flex items-center gap-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-gray-100 text-slate-800 flex items-center justify-center shrink-0 font-bold">
              <Users className="w-5 h-5 text-[#1B4332]" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">INSPECTEURS ACTIFS AUJOURD'HUI</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xl font-extrabold text-slate-900 font-mono">6</span>
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-700 border border-white text-white text-[8px] font-bold flex items-center justify-center">AB</div>
                  <div className="w-5 h-5 rounded-full bg-amber-600 border border-white text-white text-[8px] font-bold flex items-center justify-center">YB</div>
                  <div className="w-5 h-5 rounded-full bg-slate-700 border border-white text-white text-[8px] font-bold flex items-center justify-center">CK</div>
                </div>
              </div>
              <span className="text-[10px] text-gray-400 block">Inspecteurs MENA connectés en simultané</span>
            </div>
          </div>

        </div>

      </main>

  

    </div>
 </WebLayout>
  );
}