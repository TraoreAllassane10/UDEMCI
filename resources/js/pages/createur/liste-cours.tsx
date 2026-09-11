import React, { useState } from 'react';
import {
  ChevronRight,
  BookOpen,
  Plus,
  Search,
  SlidersHorizontal,
  MoreVertical,
  Edit3,
  BarChart2,
  Eye,
  EyeOff,
  Trash2,
  Users,
  Star,
  Clock,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import WebLayout from '@/layouts/web-layout';

interface Course {
  id: string;
  title: string;
  subject: string;
  level: string;
  thumbnail: string;
  status: 'published' | 'draft' | 'archived';
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  revenue: number;
  updatedAt: string;
  chaptersCount: number;
  duration: string;
}

export default function CreatorCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activeActionMenu, setActiveActionMenu] = useState<string | null>(null);

  const [courses, setCourses] = useState<Course[]>([
    {
      id: 'c1',
      title: 'Mathématiques Terminale C & D : Préparation Intensive au BAC',
      subject: 'Mathématiques',
      level: 'Terminale',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600',
      status: 'published',
      studentsCount: 1240,
      rating: 4.8,
      reviewsCount: 312,
      price: 15000,
      revenue: 12400000,
      updatedAt: '12 Sep 2026',
      chaptersCount: 14,
      duration: '18h 30m'
    },
    {
      id: 'c2',
      title: 'Physique-Chimie 3ème : Réussir le BEPC avec Mention',
      subject: 'Physique-Chimie',
      level: '3ème',
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600',
      status: 'published',
      studentsCount: 890,
      rating: 4.9,
      reviewsCount: 198,
      price: 8000,
      revenue: 7120000,
      updatedAt: '05 Sep 2026',
      chaptersCount: 10,
      duration: '12h 15m'
    },
    {
      id: 'c3',
      title: 'SVT Première D : Génétique Humaine & Immunologie',
      subject: 'SVT',
      level: 'Première',
      thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600',
      status: 'draft',
      studentsCount: 0,
      rating: 0,
      reviewsCount: 0,
      price: 12000,
      revenue: 0,
      updatedAt: 'Aujourd\'hui à 11:20',
      chaptersCount: 6,
      duration: '6h 40m'
    },
    {
      id: 'c4',
      title: 'Français & Méthodologie de la Dissertation au Secondaire',
      subject: 'Français',
      level: 'Toutes classes',
      thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600',
      status: 'published',
      studentsCount: 450,
      rating: 4.6,
      reviewsCount: 84,
      price: 6000,
      revenue: 2250000,
      updatedAt: '20 Août 2026',
      chaptersCount: 8,
      duration: '9h 10m'
    }
  ]);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || course.status === selectedStatus;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesStatus && matchesLevel;
  });

  const formatFCFA = (amount: number) => {
    return amount.toLocaleString('fr-FR') + ' FCFA';
  };

  const toggleCourseStatus = (id: string) => {
    setCourses(courses.map(c => {
      if (c.id === id) {
        const newStatus = c.status === 'published' ? 'draft' : 'published';
        return { ...c, status: newStatus };
      }
      return c;
    }));
    setActiveActionMenu(null);
  };

  return (
    <WebLayout>
        <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
      
      {/* ================= BREADCRUMB ================= */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <span>Accueil</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span>Espace Créateur</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-slate-900">Mes cours</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-700" /> Formateur Certifié DECO
            </span>
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Gestion du Catalogue de Cours
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Consultez vos programmes pédagogiques, suivez vos inscriptions, publiez de nouveaux modules et analysez la rentabilité de vos contenus.
            </p>
          </div>

          <button className="bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-colors self-start md:self-auto">
            <Plus className="w-4 h-4" /> Créer un nouveau cours
          </button>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: COURSES LIST & FILTERS (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">

            {/* SEARCH AND FILTERS CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un cours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="published">Publiés</option>
                  <option value="draft">Brouillons</option>
                </select>

                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  <option value="all">Tous les niveaux</option>
                  <option value="3ème">3ème</option>
                  <option value="Première">Première</option>
                  <option value="Terminale">Terminale</option>
                </select>
              </div>
            </div>

            {/* LIST OF COURSES CARDS */}
            <div className="space-y-4">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl border border-gray-200 shadow-xs p-4 md:p-5 hover:border-emerald-300 transition-all">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    
                    {/* THUMBNAIL AND COURSE DETAILS */}
                    <div className="flex items-start gap-4">
                      <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                        <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] font-mono px-1 rounded">
                          {course.duration}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {course.status === 'published' ? (
                            <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.2 rounded-full">
                              Publié
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-700 text-[9px] font-bold px-2 py-0.2 rounded-full">
                              Brouillon
                            </span>
                          )}
                          <span className="text-[10px] text-gray-500 font-semibold">• {course.level}</span>
                          <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
                            {course.subject}
                          </span>
                        </div>

                        <h3 className="font-bold text-xs md:text-sm text-slate-900 leading-snug">
                          {course.title}
                        </h3>

                        <div className="flex items-center gap-3 text-[10px] text-gray-400 pt-1">
                          <span>{course.chaptersCount} chapitres</span>
                          <span>•</span>
                          <span>Mis à jour le {course.updatedAt}</span>
                        </div>
                      </div>
                    </div>

                    {/* METRICS & ACTIONS */}
                    <div className="flex sm:flex-col items-end justify-between sm:justify-center w-full sm:w-auto border-t sm:border-t-0 border-gray-100 pt-3 sm:pt-0">
                      <div className="text-left sm:text-right space-y-0.5">
                        <span className="text-[10px] text-gray-400 font-bold uppercase block">Revenu généré</span>
                        <span className="font-extrabold text-xs md:text-sm text-slate-900 font-mono">
                          {formatFCFA(course.revenue)}
                        </span>
                        <div className="text-[10px] text-emerald-800 font-semibold flex items-center sm:justify-end gap-1">
                          <Users className="w-3 h-3" /> {course.studentsCount} élèves
                        </div>
                      </div>

                      <div className="flex items-center gap-1 pt-2">
                        <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-700 text-xs font-bold flex items-center gap-1">
                          <Edit3 className="w-3.5 h-3.5" /> Modifier
                        </button>
                        <button
                          onClick={() => toggleCourseStatus(course.id)}
                          className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-slate-700"
                          title="Changer statut"
                        >
                          {course.status === 'published' ? <EyeOff className="w-3.5 h-3.5 text-gray-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-700" />}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: STATS & SUMMARY PANEL (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">

            {/* CREATOR OVERVIEW BADGE */}
            <div className="bg-[#052e16] text-white rounded-3xl p-5 shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Bilan Formateur</span>
                <span className="bg-amber-400/20 text-amber-300 text-[9px] font-black px-2 py-0.5 rounded border border-amber-400/30">
                  DECO Verified
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-emerald-300 block">Revenus cumulés (2026)</span>
                <h2 className="text-2xl font-extrabold text-white font-mono">21 770 000 FCFA</h2>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-800/80 text-xs">
                <div>
                  <span className="text-[10px] text-emerald-300 block">Élèves formés</span>
                  <span className="font-bold text-white">2 580 élèves</span>
                </div>
                <div>
                  <span className="text-[10px] text-emerald-300 block">Note moyenne</span>
                  <span className="font-bold text-amber-300 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300" /> 4.8 / 5
                  </span>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS SIDEBAR */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-gray-100 pb-3">
                Ressources du Créateur
              </h3>

              <div className="space-y-2 text-xs">
                <button className="w-full p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-between text-slate-800 font-bold transition-colors">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-700" /> Guide de création DECO
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </button>

                <button className="w-full p-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-between text-slate-800 font-bold transition-colors">
                  <span className="flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-emerald-700" /> Rapports de versement Wave
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
    </WebLayout>
  );
}