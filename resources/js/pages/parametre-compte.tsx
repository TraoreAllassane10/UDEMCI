import React, { useState } from "react";
import {
    ChevronRight,
    User,
    ShieldCheck,
    Smartphone,
    Bell,
    Download,
    Camera,
    QrCode,
    Check,
    CheckCircle2,
    Trash2,
    Lock,
    FileText,
    AlertTriangle,
    Plus,
    Wifi,
    Sparkles,
    Info,
    MapPin,
    Building,
    GraduationCap,
    Save,
    RotateCcw,
} from "lucide-react";
import WebLayout from "@/layouts/web-layout";

export default function AccountSettingsPage() {
    const [activeTab, setActiveTab] = useState<
        "profile" | "security" | "payment" | "notifications" | "ecodata"
    >("profile");
    const [dataSaverMode, setDataSaverMode] = useState<"auto" | "ultra" | "hd">(
        "ultra",
    );
    const [autoOfflineDownload, setAutoOfflineDownload] = useState(true);
    const [dataAlertEnabled, setDataAlertEnabled] = useState(true);

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* ================= BREADCRUMB & HEADER ================= */}
                <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-3 text-xs text-gray-500">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                            <span>Accueil</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            <span>Mon compte</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            <span className="font-semibold text-slate-900">
                                Paramètres du compte
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-emerald-700" />{" "}
                                Compte Vérifié MENA & DECO
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                                Paramètres du compte & Préférences
                            </h1>
                            <p className="text-xs md:text-sm text-gray-500">
                                Gérez votre identité numérique académique
                                certifiée, vos informations personnelles, vos
                                portefeuilles de paiement Mobile Money ivoiriens
                                et vos préférences d'économie de forfait
                                internet (Éco-Data).
                            </p>
                        </div>

                        <button className="bg-white border border-gray-200 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 shadow-2xs hover:bg-gray-50 self-start md:self-auto transition-colors">
                            <Download className="w-4 h-4 text-emerald-700" />{" "}
                            Attestation MENA (PDF)
                        </button>
                    </div>

                    {/* TABS NAVIGATION */}
                    <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                                activeTab === "profile"
                                    ? "bg-[#052e16] text-white shadow-xs"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <User className="w-4 h-4" /> Profil & Identité
                        </button>

                        <button
                            onClick={() => setActiveTab("security")}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                                activeTab === "security"
                                    ? "bg-[#052e16] text-white shadow-xs"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <ShieldCheck className="w-4 h-4" /> Sécurité &
                            Connexion
                        </button>

                        <button
                            onClick={() => setActiveTab("payment")}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                                activeTab === "payment"
                                    ? "bg-[#052e16] text-white shadow-xs"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <Smartphone className="w-4 h-4" /> Paiements &
                            Mobile Money
                        </button>

                        <button
                            onClick={() => setActiveTab("notifications")}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                                activeTab === "notifications"
                                    ? "bg-[#052e16] text-white shadow-xs"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <Bell className="w-4 h-4" /> Notifications & SMS
                        </button>

                        <button
                            onClick={() => setActiveTab("ecodata")}
                            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                                activeTab === "ecodata"
                                    ? "bg-[#052e16] text-white shadow-xs"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                        >
                            <Wifi className="w-4 h-4" /> Téléchargement &
                            Éco-Data{" "}
                            <span className="bg-amber-100 text-amber-950 text-[9px] px-1.5 py-0.2 rounded font-black">
                                Inédit
                            </span>
                        </button>
                    </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* LEFT COLUMN: FORM SECTIONS (8 COLS) */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* SECTION 1: INFORMATIONS PERSONNELLES & STATUT ACADÉMIQUE */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-6">
                                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h2 className="text-base font-bold text-slate-900">
                                                Informations Personnelles &
                                                Statut Académique
                                            </h2>
                                            <p className="text-[11px] text-gray-400">
                                                Mettez à jour votre registre
                                                d'identification certifié auprès
                                                de la DECO.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-semibold border border-gray-200 rounded-lg px-2 py-1">
                                        ID: EDU-2026-991
                                    </span>
                                </div>

                                {/* PHOTO DE PROFIL */}
                                <div className="bg-red-50/30 border border-red-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                                            alt="Photo de profil"
                                            className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-xs"
                                        />
                                        <button className="absolute -bottom-1 -right-1 bg-[#052e16] text-white p-1 rounded-lg hover:bg-emerald-800 transition-colors">
                                            <Camera className="w-3 h-3" />
                                        </button>
                                    </div>

                                    <div className="space-y-1 text-center sm:text-left flex-1">
                                        <div className="flex items-center justify-center sm:justify-start gap-2">
                                            <span className="font-bold text-xs text-slate-900">
                                                Photo de Profil Officielle
                                            </span>
                                            <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.2 rounded-full">
                                                Validée DECO
                                            </span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 leading-tight">
                                            Format carré recommandé (JPG ou PNG
                                            min. 400x400 px, max 5 Mo). Cette
                                            photo apparaîtra sur vos
                                            attestations numériques et feuilles
                                            d'émargement.
                                        </p>
                                        <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                                            <button className="bg-white border border-gray-300 text-slate-800 text-[11px] font-bold px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                                                Changer la photo
                                            </button>
                                            <button className="text-rose-600 text-[11px] font-bold hover:underline">
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* FORM FIELDS GRID */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Nom complet vérifié
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Dr. Yao Mireille Edwige"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-hidden"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Matricule MENA (National)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                defaultValue="349-812-K"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-hidden"
                                            />
                                            <span className="absolute right-3 top-2.5 text-[10px] font-bold text-emerald-700 flex items-center gap-1">
                                                <Check className="w-3 h-3" />{" "}
                                                Certifié en ligne
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Adresse e-mail académique
                                        </label>
                                        <input
                                            type="email"
                                            defaultValue="mireille.yao@inphb.ci"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-hidden"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Téléphone principal CI
                                            (OTP/WhatsApp)
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                defaultValue="+225 07 89 45 12 30"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-hidden"
                                            />
                                            <span className="absolute right-3 top-2.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                                                Vérifié
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Ville & Commune de résidence
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="Abidjan, Cocody Riviera Palmeraie"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-hidden"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            DRENA & District Éducatif
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue="DRENA Abidjan 1 (Château, Cocody, Bingerville)"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-900 focus:outline-hidden"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            Rôle & Établissement de rattachement
                                        </label>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
                                            <span className="font-bold text-xs text-slate-900 block">
                                                Formateur Certifié Senior
                                            </span>
                                            <span className="text-[10px] text-gray-500">
                                                Spécialité Mathématiques &
                                                Chimie physique
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                                            &nbsp;
                                        </label>
                                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 space-y-1">
                                            <span className="font-bold text-xs text-slate-900 block">
                                                Lycée Scientifique de
                                                Yamoussoukro
                                            </span>
                                            <span className="text-[10px] text-emerald-800 font-semibold">
                                                Pôle d'Excellence National
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* BIOGRAPHICAL TEXTAREA */}
                                <div className="space-y-1">
                                    <label className="text-[11px] font-bold text-slate-700 block">
                                        Biographie & Spécialités d'enseignement
                                    </label>
                                    <textarea
                                        rows={3}
                                        defaultValue="Docteur en Sciences Appliquées, formatrice certifiée DECO. Plus de 12 ans d'expérience dans la préparation des candidats aux concours d'entrée des grandes écoles (Enseignant/Élève) et internationales (INP-HB, ENSEA, ESI)."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-slate-900 font-medium leading-relaxed focus:outline-hidden"
                                    />
                                </div>
                            </div>

                            {/* SECTION 2: PORTEFEUILLES MOBILE MONEY & RÈGLEMENTS */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                                            <Smartphone className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h2 className="text-base font-bold text-slate-900">
                                                Portefeuilles Mobile Money &
                                                Règlements
                                            </h2>
                                            <p className="text-[11px] text-gray-400">
                                                Gestion directe des flux sans
                                                compte bancaire avec opérateurs
                                                agréés BCEAO.
                                            </p>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-emerald-800 border border-emerald-200 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                                        <Plus className="w-3.5 h-3.5" /> Lier un
                                        compte
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* WAVE CI */}
                                    <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/30 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-md bg-sky-400 text-white font-bold text-xs flex items-center justify-center">
                                                    🌊
                                                </span>
                                                <span className="font-bold text-xs text-slate-900">
                                                    Wave Côte d'Ivoire
                                                </span>
                                            </div>
                                            <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.5 rounded-full">
                                                Par défaut
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-800 block">
                                            +225 07 89 45 12 30
                                        </span>
                                        <div className="flex justify-between items-center pt-2 text-[10px] text-gray-500 border-t border-emerald-200/60">
                                            <span>
                                                Frais de retrait : 0 FCFA
                                            </span>
                                            <button className="text-gray-400 hover:text-rose-600">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* ORANGE MONEY */}
                                    <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-bold text-xs flex items-center justify-center">
                                                    🍊
                                                </span>
                                                <span className="font-bold text-xs text-slate-900">
                                                    Orange Money CI
                                                </span>
                                            </div>
                                            <span className="text-gray-400 text-[9px] font-bold">
                                                Inactif/Secours
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-800 block">
                                            +225 07 11 22 33 44
                                        </span>
                                        <div className="flex justify-between items-center pt-2 text-[10px] text-gray-500 border-t border-gray-200">
                                            <button className="text-emerald-800 font-bold hover:underline">
                                                Définir par défaut
                                            </button>
                                            <button className="text-gray-400 hover:text-rose-600">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                                    <span className="font-bold text-slate-700">
                                        Ajout rapide possible en 1 clic :
                                    </span>
                                    <span className="bg-amber-100 text-amber-950 font-bold text-[9px] px-2 py-0.5 rounded">
                                        MTN MoMo CI
                                    </span>
                                    <span className="bg-blue-100 text-blue-900 font-bold text-[9px] px-2 py-0.5 rounded">
                                        Moov Money CI
                                    </span>
                                    <span className="bg-emerald-100 text-emerald-900 font-bold text-[9px] px-2 py-0.5 rounded">
                                        Carte TresorPay (UDEAO)
                                    </span>
                                </div>
                            </div>

                            {/* SECTION 3: OPTIMISATION DONNÉES MOBILES & TÉLÉCHARGEMENTS (ÉCO-DATA CI) */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold">
                                            <Wifi className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h2 className="text-base font-bold text-slate-900">
                                                Optimisation Données Mobiles &
                                                Téléchargements (Éco-Data CI)
                                            </h2>
                                            <p className="text-[11px] text-gray-400">
                                                Economisez jusqu'à 70% de votre
                                                volume internet sur les réseaux
                                                3G/4G ivoiriens.
                                            </p>
                                        </div>
                                    </div>
                                    <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                                        Économie estimée : ~2.4 Go / mois
                                    </span>
                                </div>

                                {/* DATA SAVER MODE SELECTION */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {/* AUTOMATIQUE */}
                                    <div
                                        onClick={() => setDataSaverMode("auto")}
                                        className={`p-3.5 rounded-xl border cursor-pointer transition-all space-y-1.5 ${
                                            dataSaverMode === "auto"
                                                ? "border-emerald-700 bg-emerald-50/40 shadow-xs"
                                                : "border-gray-200 bg-gray-50"
                                        }`}
                                    >
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block">
                                            Mode Adaptatif
                                        </span>
                                        <h3 className="font-bold text-xs text-slate-900">
                                            Automatique
                                        </h3>
                                        <p className="text-[10px] text-gray-500 leading-tight">
                                            S'adapte dynamiquement selon le
                                            débit de la 4G/Wi-Fi.
                                        </p>
                                    </div>

                                    {/* ULTRA-LÉGER (RECOMMENDED) */}
                                    <div
                                        onClick={() =>
                                            setDataSaverMode("ultra")
                                        }
                                        className={`p-3.5 rounded-xl border cursor-pointer transition-all relative space-y-1.5 ${
                                            dataSaverMode === "ultra"
                                                ? "border-emerald-700 bg-emerald-50/40 shadow-xs"
                                                : "border-gray-200 bg-gray-50"
                                        }`}
                                    >
                                        <span className="bg-amber-100 text-amber-950 font-black text-[9px] px-1.5 py-0.2 rounded absolute top-2 right-2">
                                            Recommandé CI
                                        </span>
                                        <span className="text-[10px] text-emerald-800 font-bold uppercase block">
                                            Qualité Éco (480p)
                                        </span>
                                        <h3 className="font-bold text-xs text-slate-900">
                                            Ultra-Léger (480p)
                                        </h3>
                                        <p className="text-[10px] text-gray-500 leading-tight">
                                            Même qualité visuelle avec 3x moins
                                            de consommations de Mo de pass
                                            internet.
                                        </p>
                                    </div>

                                    {/* HAUTE DÉFINITION */}
                                    <div
                                        onClick={() => setDataSaverMode("hd")}
                                        className={`p-3.5 rounded-xl border cursor-pointer transition-all space-y-1.5 ${
                                            dataSaverMode === "hd"
                                                ? "border-emerald-700 bg-emerald-50/40 shadow-xs"
                                                : "border-gray-200 bg-gray-50"
                                        }`}
                                    >
                                        <span className="text-[10px] text-gray-400 font-bold uppercase block">
                                            Standard (720p-1080p)
                                        </span>
                                        <h3 className="font-bold text-xs text-slate-900">
                                            Haute Définition (1080p)
                                        </h3>
                                        <p className="text-[10px] text-gray-500 leading-tight">
                                            Qualité maximale recommandée
                                            uniquement si vous avez la fibre
                                            Wi-Fi.
                                        </p>
                                    </div>
                                </div>

                                {/* TOGGLE OPTIONS */}
                                <div className="space-y-3 pt-2">
                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <span className="text-xs font-bold text-slate-900 block">
                                                Téléchargement hors-ligne
                                                automatique des fiches PDF &
                                                devoirs
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Pré-télécharge les polycopiés et
                                                annales DECO dès qu'un réseau
                                                Wi-Fi gratuit ou domestique est
                                                détecté.
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setAutoOfflineDownload(
                                                    !autoOfflineDownload,
                                                )
                                            }
                                            className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${autoOfflineDownload ? "bg-emerald-800" : "bg-gray-300"}`}
                                        >
                                            <span
                                                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${autoOfflineDownload ? "right-1" : "left-1"}`}
                                            />
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <span className="text-xs font-bold text-slate-900 block">
                                                Alerte consommation sur forfait
                                                mobile Orange / MTN / Moov
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                Affiche un avertissement avant
                                                de lancer un enregistrement
                                                vidéo très lourd hors connexion
                                                Wi-Fi active.
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                setDataAlertEnabled(
                                                    !dataAlertEnabled,
                                                )
                                            }
                                            className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${dataAlertEnabled ? "bg-emerald-800" : "bg-gray-300"}`}
                                        >
                                            <span
                                                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${dataAlertEnabled ? "right-1" : "left-1"}`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* SAVE BAR */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                                <span className="text-xs text-gray-400 font-medium">
                                    Dernière sauvegarde enregistrée le 10 Sep
                                    2026 à 14:32
                                </span>
                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                    <button className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-xl transition-colors">
                                        Réinitialiser
                                    </button>
                                    <button className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-xs">
                                        <Save className="w-4 h-4" /> Enregistrer
                                        les modifications
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: DIGITAL STUDENT CARD & SECURITY SIDEBAR (4 COLS) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* DIGITAL ACADEMIC CARD (MENA DECO) */}
                            <div className="bg-[#052e16] text-white rounded-3xl p-5 shadow-xl space-y-4 relative overflow-hidden">
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none"></div>

                                <div className="flex items-center justify-between border-b border-emerald-800/80 pb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-base">🇨🇮</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                                            RÉP. DE CÔTE D'IVOIRE
                                        </span>
                                    </div>
                                    <span className="bg-amber-400/20 text-amber-300 text-[9px] font-black px-2 py-0.5 rounded border border-amber-400/30">
                                        MENA / DECO
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[10px] text-emerald-300 uppercase tracking-widest block font-bold">
                                        Carte Scolaire Numérique
                                    </span>
                                    <span className="text-[9px] text-emerald-400 block">
                                        (Vérifiable par QR Code auprès des
                                        lycées & de la DECO)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <div className="space-y-1">
                                        <h3 className="font-extrabold text-sm text-white">
                                            Dr. Mireille Yao
                                        </h3>
                                        <p className="text-[10px] text-emerald-200 font-mono">
                                            Matricule : 349-812-K
                                        </p>
                                        <p className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                            Session 2026-2027 Active
                                        </p>
                                    </div>

                                    <div className="bg-white p-2 rounded-xl shadow-md text-slate-900">
                                        <QrCode className="w-12 h-12" />
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-emerald-800/80 flex justify-between items-center text-[9px] text-emerald-300">
                                    <span>ID: 00225-YAM-99</span>
                                    <span className="font-bold underline cursor-pointer hover:text-white">
                                        Agrandir ↗
                                    </span>
                                </div>
                            </div>

                            {/* SECURITY & 2FA PANEL */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-emerald-700" />
                                        Sécurité & 2FA
                                    </h3>
                                    <span className="text-[10px] text-emerald-800 bg-emerald-50 font-bold px-2 py-0.5 rounded">
                                        Protection maximale
                                    </span>
                                </div>

                                {/* SECURITY SCORE BAR */}
                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="font-bold text-slate-800">
                                            Indice de sécurité
                                        </span>
                                        <span className="font-black text-emerald-800">
                                            95% (Élevé)
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="w-[95%] h-full bg-emerald-700 rounded-full"></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 leading-tight">
                                        Votre compte possède une double
                                        vérification active. Aucun accès non
                                        autorisé n'a été détecté sur votre
                                        numéro principal.
                                    </p>
                                </div>

                                <div className="space-y-2 pt-1 text-xs">
                                    <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <Smartphone className="w-4 h-4 text-emerald-700" />
                                            <div>
                                                <span className="font-bold text-slate-900 block">
                                                    SMS OTP (+225)
                                                </span>
                                                <span className="text-[9px] text-gray-400">
                                                    Orange CI • Principal
                                                </span>
                                            </div>
                                        </div>
                                        <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.5 rounded">
                                            Activé
                                        </span>
                                    </div>

                                    <div className="p-2.5 bg-gray-50 rounded-xl flex items-center justify-between border border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                            <div>
                                                <span className="font-bold text-slate-900 block">
                                                    WhatsApp Professionnel
                                                </span>
                                                <span className="text-[9px] text-gray-400">
                                                    Alertes de connexion
                                                </span>
                                            </div>
                                        </div>
                                        <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-2 py-0.5 rounded">
                                            Activé
                                        </span>
                                    </div>
                                </div>

                                {/* LAST CONNECTIONS */}
                                <div className="pt-2 border-t border-gray-100 space-y-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                                        Dernières connexions
                                    </span>

                                    <div className="text-[11px] space-y-1.5">
                                        <div className="flex justify-between items-center text-gray-600">
                                            <div>
                                                <span className="font-bold text-slate-900 block">
                                                    Abidjan (Cocody)
                                                </span>
                                                <span className="text-[9px] text-gray-400">
                                                    Navigateur Chrome • Orange
                                                    CI Mobile
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                                                En ce moment
                                            </span>
                                        </div>

                                        <div className="flex justify-between items-center text-gray-600 pt-1">
                                            <div>
                                                <span className="font-bold text-slate-900 block">
                                                    Bouaké (Zone 2)
                                                </span>
                                                <span className="text-[9px] text-gray-400">
                                                    MAC OS • App Edulvoire
                                                </span>
                                            </div>
                                            <span className="text-[10px] text-gray-400">
                                                Il y a 2 jours
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-slate-900 font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5">
                                    <Lock className="w-3.5 h-3.5" /> Changer le
                                    mot de passe
                                </button>
                            </div>

                            {/* LEGAL ATTESTATIONS & DOCUMENTS */}
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-3">
                                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-gray-100 pb-3">
                                    <FileText className="w-4 h-4 text-emerald-700" />
                                    Données & Attestations Légales
                                </h3>
                                <p className="text-[11px] text-gray-500 leading-relaxed">
                                    Téléchargez l'intégralité de vos reçus de
                                    cours, relevés de vos versements comptables
                                    et attestations pédagogiques.
                                </p>

                                <button className="w-full border border-gray-200 hover:bg-gray-50 text-slate-800 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4 text-emerald-700" />{" "}
                                    Relevé officiel consolidé (PDF)
                                </button>

                                <div className="pt-2">
                                    <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block mb-1">
                                        Zone de sécurité avancée
                                    </span>
                                    <button className="text-[11px] text-rose-600 font-bold hover:underline flex items-center gap-1">
                                        <AlertTriangle className="w-3.5 h-3.5" />{" "}
                                        Désactiver temporairement mon compte ↗
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
