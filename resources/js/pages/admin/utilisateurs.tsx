import React, { useState } from "react";
import {
    Search,
    Bell,
    Users,
    UserCheck,
    FileCheck,
    ShieldCheck,
    UserPlus,
    Download,
    CheckCircle2,
    AlertCircle,
    Clock,
    Eye,
    MoreVertical,
    Filter,
    GraduationCap,
    Award,
    Building2,
    Activity,
    ChevronLeft,
    ChevronRight,
    Shield,
    FileText,
    Lock,
    RefreshCw,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function AdminUserManagementPage() {
    const [activeTab, setActiveTab] = useState<
        "all" | "approved" | "pending" | "students" | "inspectors"
    >("all");
    const [selectedRole, setSelectedRole] = useState("Tous");
    const [selectedRegion, setSelectedRegion] = useState("Toutes");
    const [selectedDiscipline, setSelectedDiscipline] = useState("Toutes");

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
                            Gestion des utilisateurs & Formateurs agréés
                        </span>
                    </div>

                    {/* PAGE TITLE & ACTION BUTTONS */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                    Annuaire & Habilitation des Utilisateurs
                                </h1>
                                <span className="bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border border-emerald-200">
                                    MODULE DECO / MENA
                                </span>
                            </div>
                            <p className="text-gray-500 text-xs mt-1">
                                Supervision des profils apprenants, agréments
                                des enseignants-chercheurs MENA/ENS et gestion
                                des rôles institutionnels en Côte d'Ivoire.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-slate-800 font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-2xs transition-all">
                                <Download className="w-3.5 h-3.5 text-gray-600" />
                                <span>Exporter le registre</span>
                            </button>
                            <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
                                <UserPlus className="w-3.5 h-3.5" />
                                <span>Inviter un inspecteur / formateur</span>
                            </button>
                        </div>
                    </div>

                    {/* SUMMARY STAT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                    TOTAL UTILISATEURS ACTIFS
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <Users className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <span className="text-2xl font-black text-slate-900 font-mono">
                                    42 850
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">
                                +12% ce mois (Élèves & Auditeurs)
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                    FORMATEURS AGRÉÉS
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <UserCheck className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <span className="text-2xl font-black text-slate-900 font-mono">
                                    185
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">
                                Certifiés MENA, INP-HB, ENS, Lycées
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                    DOSSIERS D'AGRÉMENT
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                                    <FileCheck className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-black text-slate-900 font-mono">
                                    9
                                </span>
                                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    A traiter d'urgence
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">
                                Délai moyen d'instruction : 48h
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-gray-500">
                                <span className="text-[11px] font-bold uppercase tracking-wider">
                                    INSPECTEURS & DECO
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="flex items-baseline justify-between">
                                <span className="text-2xl font-black text-slate-900 font-mono">
                                    24
                                </span>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium">
                                Déployés sur 31 DRENA régionales
                            </div>
                        </div>
                    </div>

                    {/* ================= FEATURED APPROVAL CARD (DOSSIER EN ATTENTE D'AGRÉMENT) ================= */}
                    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xs overflow-hidden relative border-t-4 border-t-[#E8A33D]">
                        <div className="p-5 space-y-4">
                            {/* Header info */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                                        alt="M. Traoré Aboubacar"
                                        className="w-12 h-12 rounded-2xl object-cover border border-gray-200 shrink-0"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-amber-100 text-amber-900 text-[9px] font-black px-2 py-0.5 rounded-sm uppercase">
                                                Candidature Agrément Formateur
                                                N° AG-2026-089
                                            </span>
                                            <span className="text-[10px] text-gray-400 font-mono">
                                                • Soumis le 24 Oct. 2025
                                            </span>
                                        </div>
                                        <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
                                            M. Traoré Aboubacar
                                        </h3>
                                        <p className="text-[11px] text-gray-500">
                                            Professeur certifié de Mathématiques
                                            — Lycée Scientifique de Yamoussoukro
                                            • 12 ans d'enseignement •{" "}
                                            <span className="font-mono text-gray-700">
                                                Matricule MENA : 349-812-K
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Score Badge */}
                                <div className="bg-[#F8F7F4] border border-gray-200/90 rounded-2xl p-3 text-center self-start sm:self-auto shrink-0">
                                    <span className="text-[9px] text-gray-400 font-bold uppercase block">
                                        AVIS PÉDAGOGIQUE INSPECTION
                                    </span>
                                    <span className="text-xs font-black text-[#1B4332]">
                                        ⭐ Score 19 / 20 — Très Favorable
                                    </span>
                                </div>
                            </div>

                            {/* Documents Check Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="font-bold text-slate-900 text-[11px] block truncate">
                                            Diplôme CAPES / ENS
                                        </span>
                                        <span className="text-[9px] text-gray-400 block truncate">
                                            Authentifié MENA
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="font-bold text-slate-900 text-[11px] block truncate">
                                            Arrêté de Nomination
                                        </span>
                                        <span className="text-[9px] text-gray-400 block truncate">
                                            Fonction Publique CI
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="font-bold text-slate-900 text-[11px] block truncate">
                                            Casier Judiciaire B3
                                        </span>
                                        <span className="text-[9px] text-gray-400 block truncate">
                                            Conforme & Vierge
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-[#F8F7F4] p-2.5 rounded-xl border border-gray-200/70 flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="font-bold text-slate-900 text-[11px] block truncate">
                                            Spécimen Vidéo (480p)
                                        </span>
                                        <span className="text-[9px] text-gray-400 block truncate">
                                            Micro-cours Géométrie (15 min)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Actions */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                                <span className="text-[10px] text-gray-500 font-semibold flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-[#E8A33D]" />{" "}
                                    Dossier examiné par Inspecteur Principal
                                    Kouadio (DRENA Yamoussoukro)
                                </span>

                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none border border-red-200 text-red-700 hover:bg-red-50 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors">
                                        Refuser le dossier
                                    </button>
                                    <button className="flex-1 sm:flex-none border border-gray-300 text-slate-800 hover:bg-gray-100 font-bold px-3 py-1.5 rounded-xl text-xs transition-colors">
                                        Demander un complément
                                    </button>
                                    <button className="flex-1 sm:flex-none bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-4 py-1.5 rounded-xl text-xs shadow-xs transition-all flex items-center justify-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5" />{" "}
                                        Valider l'agrément & Activer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= TABS & FILTER BAR ================= */}
                    <div className="space-y-3">
                        {/* Tabs */}
                        <div className="flex flex-wrap items-center gap-1 bg-[#EBE9E2] p-1 rounded-2xl">
                            <button
                                onClick={() => setActiveTab("all")}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === "all"
                                        ? "bg-white text-slate-900 shadow-2xs"
                                        : "text-gray-600 hover:text-slate-900"
                                }`}
                            >
                                Tous les profils{" "}
                                <span className="text-gray-400 text-[10px]">
                                    (43 068)
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab("approved")}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === "approved"
                                        ? "bg-white text-slate-900 shadow-2xs"
                                        : "text-gray-600 hover:text-slate-900"
                                }`}
                            >
                                Formateurs agréés{" "}
                                <span className="text-gray-400 text-[10px]">
                                    (185)
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab("pending")}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                    activeTab === "pending"
                                        ? "bg-white text-slate-900 shadow-2xs"
                                        : "text-gray-600 hover:text-slate-900"
                                }`}
                            >
                                Dossiers en attente
                                <span className="bg-[#E8A33D] text-slate-900 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                                    9
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab("students")}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === "students"
                                        ? "bg-white text-slate-900 shadow-2xs"
                                        : "text-gray-600 hover:text-slate-900"
                                }`}
                            >
                                Élèves & Candidats BACC/BEPC{" "}
                                <span className="text-gray-400 text-[10px]">
                                    (42 850)
                                </span>
                            </button>

                            <button
                                onClick={() => setActiveTab("inspectors")}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    activeTab === "inspectors"
                                        ? "bg-white text-slate-900 shadow-2xs"
                                        : "text-gray-600 hover:text-slate-900"
                                }`}
                            >
                                Inspecteurs DECO{" "}
                                <span className="text-gray-400 text-[10px]">
                                    (24)
                                </span>
                            </button>
                        </div>

                        {/* Search Inputs & Selects */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div className="relative">
                                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher par nom, matricule MENA, email, établissement..."
                                    className="w-full bg-white border border-gray-200/90 rounded-xl pl-8 pr-4 py-2 text-xs font-medium text-slate-900 placeholder-gray-400 focus:outline-hidden shadow-2xs"
                                />
                            </div>

                            <select
                                value={selectedRole}
                                onChange={(e) =>
                                    setSelectedRole(e.target.value)
                                }
                                className="bg-white border border-gray-200/90 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden shadow-2xs cursor-pointer"
                            >
                                <option value="Tous">
                                    Rôle & Habilitation (Tous)
                                </option>
                                <option value="Formateur">
                                    Formateur Agréé
                                </option>
                                <option value="Inspecteur">
                                    Inspecteur DECO
                                </option>
                                <option value="Eleve">Élève / Apprenant</option>
                            </select>

                            <select
                                value={selectedRegion}
                                onChange={(e) =>
                                    setSelectedRegion(e.target.value)
                                }
                                className="bg-white border border-gray-200/90 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden shadow-2xs cursor-pointer"
                            >
                                <option value="Toutes">
                                    DRENA / Région (Toutes)
                                </option>
                                <option value="Abidjan1">
                                    DRENA Abidjan 1
                                </option>
                                <option value="Yamoussoukro">
                                    DRENA Yamoussoukro
                                </option>
                                <option value="Bouake">DRENA Bouaké 1</option>
                            </select>

                            <select
                                value={selectedDiscipline}
                                onChange={(e) =>
                                    setSelectedDiscipline(e.target.value)
                                }
                                className="bg-white border border-gray-200/90 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden shadow-2xs cursor-pointer"
                            >
                                <option value="Toutes">
                                    Discipline (Toutes)
                                </option>
                                <option value="Maths">Mathématiques</option>
                                <option value="Physique">
                                    Physique-Chimie
                                </option>
                                <option value="SVT">SVT</option>
                                <option value="Droit">Droit & Admin</option>
                            </select>
                        </div>
                    </div>

                    {/* ================= MAIN USERS TABLE ================= */}
                    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-2xs overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#F8F7F4] text-gray-400 uppercase text-[9px] font-extrabold border-b border-gray-200/60">
                                        <th className="py-3 px-5">
                                            UTILISATEUR & IDENTIFIANT
                                        </th>
                                        <th className="py-3 px-5">
                                            STATUT & HABILITATION
                                        </th>
                                        <th className="py-3 px-5">
                                            ÉTABLISSEMENT / TUTELLE
                                        </th>
                                        <th className="py-3 px-5">
                                            ACTIVITÉ PÉDAGOGIQUE
                                        </th>
                                        <th className="py-3 px-5">
                                            DERNIÈRE CONNEXION
                                        </th>
                                        <th className="py-3 px-5 text-right">
                                            ACTIONS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-xs font-medium text-slate-800">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                                                    alt="Dr. Yao Mireille"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                                />
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Dr. Yao Mireille
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 block">
                                                        m.yao@inp-hb.ci
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-mono">
                                                        Matr. MENA : 289-301-B
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1 bg-[#1B4332] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />{" "}
                                                Formateur Agréé DECO
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                INP-HB Yamoussoukro
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                DRENA Yamoussoukro
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                3 cours • 4 920 apprenants
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                Note moyenne : 4.9/5
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-1 text-[11px]">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-gray-700">
                                                    Il y a 12 min
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700"
                                                    title="Voir le profil"
                                                >
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
                                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120"
                                                    alt="Kouamé Armand"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                                />
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Kouamé Armand
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 block">
                                                        armand.kouame05@gmail.com
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-mono">
                                                        ID Élève : EDU-CI-84720
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                                                Élève Terminale D
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                Lycée Classique d'Abidjan
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                DRENA Abidjan 1 (Cocody)
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                4 cours actifs suivis
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                Progression globale 82%
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="text-gray-500 text-[11px]">
                                                Il y a 2h
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                                                    <Activity className="w-3.5 h-3.5" />
                                                </button>
                                                <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 text-slate-700">
                                                    <MoreVertical className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Row 3 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
                                                    alt="Magistrat Coulibaly"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                                />
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Magistrat Coulibaly
                                                        Souleymane
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 block">
                                                        s.coulibaly@justice.gouv.ci
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-mono">
                                                        Matr. MENA/FONCTION :
                                                        112-302-M
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1 bg-[#1B4332] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />{" "}
                                                Formateur Agréé Droit/ENA
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                Ministère de la Justice & ENA CI
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                Plateau, Abidjan
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                1 spécialité • 890 auditeurs
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                Code d'accès exclusif ENA
                                                Concours
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="text-gray-500 text-[11px]">
                                                Hier, 17h50
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

                                    {/* Row 4 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors">
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=120"
                                                    alt="Bakayoko Fatou"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                                />
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        Bakayoko Fatou
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 block">
                                                        fatou.bakayoko@education.ci
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-mono">
                                                        Code Inspecteur :
                                                        DECO-CI-009
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1 bg-emerald-100 text-[#1B4332] text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-300">
                                                <ShieldCheck className="w-3 h-3 text-[#1B4332]" />{" "}
                                                Inspectrice DECO
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                Coordination Régionale DECO
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                DRENA Abidjan 1 & 3
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                14 modules audités
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                8 agréments formateurs signés
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-1 text-[11px]">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                <span className="text-gray-700">
                                                    Actif maintenant
                                                </span>
                                            </div>
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

                                    {/* Row 5 */}
                                    <tr className="hover:bg-gray-50/80 transition-colors bg-amber-50/20">
                                        <td className="py-3.5 px-5">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120"
                                                    alt="N'Guessan Charles"
                                                    className="w-9 h-9 rounded-full object-cover border border-gray-200 shrink-0"
                                                />
                                                <div>
                                                    <span className="font-bold block text-slate-900">
                                                        N'Guessan Charles
                                                    </span>
                                                    <span className="text-[10px] text-gray-400 block">
                                                        charles.nguessan@ufhb.edu.ci
                                                    </span>
                                                    <span className="text-[9px] text-gray-400 font-mono">
                                                        Dossier Candidature :
                                                        T-902
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="inline-flex items-center gap-1 bg-[#4E2B08] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                                                <Clock className="w-3 h-3 text-[#E8A33D]" />{" "}
                                                Dossier en examen
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                Université Félix H. Boigny
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                UFR Bioscience •
                                                Enseignant-chercheur
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="font-bold block text-slate-900 text-[11px]">
                                                Dossier candidature déposé
                                            </span>
                                            <span className="text-[9px] text-gray-400 block">
                                                Spécialité : Biochimie Licence &
                                                Tle D
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5">
                                            <span className="text-gray-500 text-[11px]">
                                                Il y a 3 jours
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-5 text-right">
                                            <button className="bg-[#1B4332] hover:bg-[#123124] text-white font-bold px-3 py-1.5 rounded-lg text-xs shadow-2xs transition-all">
                                                Examiner
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="p-4 bg-[#F8F7F4] border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                            <span>
                                Affichage de 1 à 5 sur 43 068 utilisateurs
                                enregistrés
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
                                <button className="w-7 h-7 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs flex items-center justify-center">
                                    861
                                </button>
                                <button className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-slate-800 font-bold text-xs">
                                    Suivant
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ================= BOTTOM GARANTIES INSTITUTIONNELLES ================= */}
                    <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-[#1B4332]" />
                                Garanties Institutionnelles & Conformité
                                Nationale
                            </h3>
                            <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600" />{" "}
                                Chiffrement TLS 1.3 • Certifié ARTCI
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                                    <div className="w-6 h-6 rounded bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                    </div>
                                    <span>Vérification Biométrique & MENA</span>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-relaxed">
                                    Interconnexion directe avec le fichier
                                    central de la Direction des Examens et
                                    Concours (DECO) pour valider l'authenticité
                                    des diplômes et blocs matriculaires
                                    fonctionnaires.
                                </p>
                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                                    <span>Synchronisation DECO</span>
                                    <span className="text-emerald-700 font-bold">
                                        100% Opérationnelle
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                                    <div className="w-6 h-6 rounded bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                        <FileText className="w-3.5 h-3.5" />
                                    </div>
                                    <span>
                                        Journal d'Audit Réglementaire ARTCI
                                    </span>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-relaxed">
                                    Traçabilité immuable de chaque validation,
                                    modification de droits d'accès ou
                                    téléchargement de ressources pédagogiques,
                                    en stricte conformité avec la loi ivoirienne
                                    N° 2013-450.
                                </p>
                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                                    <span>Dernier contrôle ARTCI</span>
                                    <span className="text-slate-800 font-bold">
                                        Octobre 2024 (Conforme)
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl border border-gray-200/90 p-4 space-y-2 shadow-2xs">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                                    <div className="w-6 h-6 rounded bg-emerald-50 text-[#1B4332] flex items-center justify-center">
                                        <Lock className="w-3.5 h-3.5" />
                                    </div>
                                    <span>
                                        Gestion des Rôles & Cloisonnement RBAC
                                    </span>
                                </div>
                                <p className="text-[10px] text-gray-500 leading-relaxed">
                                    Segmentation hermétique entre les élèves
                                    mineurs, les formateurs prestataires et les
                                    inspecteurs pédagogiques régionaux
                                    garantissant la protection des épreuves et
                                    contenus sensibles.
                                </p>
                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-semibold">
                                    <span>Périmètre DRENA</span>
                                    <span className="text-slate-800 font-bold">
                                        31 DRENA Couvertes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </WebLayout>
    );
}
