import { useState } from "react";
import {
 
    UploadCloud,
    Check,

    List,
    ListOrdered,
    Sigma,
    Eye,
    CheckCircle2,
    Image as ImageIcon,
} from "lucide-react";

const Step1 = () => {
    const [courseTitle, setCourseTitle] = useState(
        "Physique-Chimie Terminale D : Réussir les épreuves du BAC ivoirien",
    );
    const [subTitle, setSubTitle] = useState(
        "Méthodologie complète, sujets types corrigés et fiches de synthèse conformes au programme MENA",
    );
    const [description, setDescription] = useState(
        "Bienvenue dans ce module d'excellence destiné aux élèves de Terminale Scientifique (C & D).\n\nConçu par des enseignants certifiés de Côte d'Ivoire, ce programme décortique méthodiquement chaque compétence clé exigée à la session officielle du Baccalauréat :\n• Maîtrise des lois de Newton et applications aux mouvements réels",
    );

    const [selectedLevels, setSelectedLevels] = useState<string[]>([
        "Terminale C & D",
    ]);
    const [selectedSubject, setSelectedSubject] =
        useState<string>("Physique-Chimie");
    const [isPromoEnabled, setIsPromoEnabled] = useState<boolean>(true);
    const [standardPrice, setStandardPrice] = useState<string>("15 000");
    const [promoPrice, setPromoPrice] = useState<string>("9 500");

    const levels = [
        "6e",
        "5e",
        "4e",
        "3e (BEPC)",
        "2nde A/C",
        "1ère A/C/D",
        "Terminale A",
        "Terminale C & D",
    ];

    const subjects = [
        "Mathématiques",
        "Physique-Chimie",
        "SVT",
        "Informatique",
        "Français",
        "Philosophie",
        "Comptabilité",
        "Anglais",
        "Histoire-Géographie"
    ];

    const toggleLevel = (lvl: string) => {
        if (selectedLevels.includes(lvl)) {
            setSelectedLevels(selectedLevels.filter((l) => l !== lvl));
        } else {
            setSelectedLevels([...selectedLevels, lvl]);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: MAIN FORM (8 COLS) */}
            <div className="lg:col-span-8 space-y-6">
              
                {/* SECTION 1: IDENTIFICATION DU COURS */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                            Identification du cours
                        </h2>
                        <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full">
                            Requis
                        </span>
                    </div>

                    {/* Titre du cours */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                            <label className="font-bold text-slate-800">
                                Titre du cours
                            </label>
                            <span className="text-gray-400 text-[11px]">
                                {courseTitle.length} / 120
                            </span>
                        </div>
                        <input
                            type="text"
                            value={courseTitle}
                            onChange={(e) => setCourseTitle(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all"
                            placeholder="Ex: Mathématiques Terminale C : Géométrie dans l'espace"
                        />
                        <p className="text-[10px] text-gray-400">
                            Privilégiez un titre précis mentionnant la classe.
                        </p>
                    </div>

                    {/* Description détaillée & Objectifs d'apprentissage */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <label className="font-bold text-slate-800">
                                Description détaillée & Objectifs
                                d'apprentissage
                            </label>
                        </div>

                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                            {/* Rich Text Toolbar */}
                            <div className="bg-white border-b border-gray-200 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100 font-bold">
                                        B
                                    </button>
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100 italic">
                                        I
                                    </button>
                                    <div className="h-4 w-px bg-gray-200 mx-1"></div>
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100">
                                        <List className="w-3.5 h-3.5" />
                                    </button>
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100">
                                        <ListOrdered className="w-3.5 h-3.5" />
                                    </button>
                                    <div className="h-4 w-px bg-gray-200 mx-1"></div>
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100 flex items-center gap-1 font-mono text-[11px]">
                                        <Sigma className="w-3.5 h-3.5 text-emerald-700" />
                                    </button>
                                </div>

                                <button className="text-[11px] font-semibold text-gray-500 hover:text-slate-900 flex items-center gap-1">
                                    <Eye className="w-3.5 h-3.5" /> Aperçu
                                </button>
                            </div>

                            <textarea
                                rows={6}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-4 text-xs md:text-sm text-slate-800 bg-transparent focus:outline-hidden font-sans leading-relaxed resize-y"
                                placeholder="Présentez le programme, les prérequis et ce que vos élèves vont apprendre..."
                            />
                        </div>
                    </div>
                </div>

                {/* SECTION 2: CLASSIFICATION & RÉFÉRENTIEL NATIONAL */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                            Classification & Référentiel National
                        </h2>
                    </div>

                    {/* Niveau(x) scolaire(s) visé(s) */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                            <label className="font-bold text-slate-800">
                                Niveau(x) scolaire(s) visé(s) :
                            </label>
                            <span className="text-gray-400 text-[11px]">
                                Sélection multiple possible
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {levels.map((lvl) => {
                                const isSelected = selectedLevels.includes(lvl);
                                return (
                                    <button
                                        key={lvl}
                                        type="button"
                                        onClick={() => toggleLevel(lvl)}
                                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                                            isSelected
                                                ? "bg-[#052e16] text-white border-[#052e16] shadow-xs"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        {isSelected && (
                                            <Check className="w-3.5 h-3.5" />
                                        )}
                                        {lvl}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Matière principale & thématiques */}
                    <div className="space-y-2 pt-2">
                        <label className="font-bold text-slate-800 text-xs">
                            Matière principale & thématiques
                        </label>

                        <div className="flex flex-wrap gap-2">
                            {subjects.map((subj) => {
                                const isSelected = selectedSubject === subj;
                                return (
                                    <button
                                        key={subj}
                                        type="button"
                                        onClick={() => setSelectedSubject(subj)}
                                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                                            isSelected
                                                ? "bg-[#052e16] text-white border-[#052e16] shadow-xs"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                                        }`}
                                    >
                                        {isSelected && (
                                            <Check className="w-3.5 h-3.5" />
                                        )}
                                        {subj}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Langue d'enseignement & Référentiel */}
                    <div className="space-y-1.5 pt-2">
                        <label className="font-bold text-slate-800 text-xs">
                            Langue d'enseignement & Référentiel
                        </label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs md:text-sm text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all">
                            <option>
                                Français - Conforme aux programmes ivoiriens
                                MENA (Ministère de l'Éducation)
                            </option>
                            <option>
                                Français - Enseignement Supérieur & Concours
                                Administratifs
                            </option>
                            <option>
                                Anglais - English National Curriculum
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: MEDIA, PRICING & SIDEBAR (4 COLS) */}
            <div className="lg:col-span-4 space-y-6">
                {/* MINIATURE DU COURS */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-emerald-700" />
                            Miniature du cours
                        </h3>
                        <span className="text-[10px] text-gray-400">
                            Ratio 16:9
                        </span>
                    </div>

                    {/* Image Preview */}
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 group">
                        <img
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600"
                            alt="Miniature"
                            className="w-full h-36 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                Changer l'image
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <span className="text-emerald-800 font-semibold flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5" />{" "}
                            miniature_physique_tle_d.jpg
                        </span>
                        <span className="text-gray-400 text-[10px] flex-shrink-0">
                            1.8 Mo
                        </span>
                    </div>

                    {/* Dropzone */}
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-emerald-600 transition-colors cursor-pointer bg-gray-50/50">
                        <UploadCloud className="w-6 h-6 text-emerald-700 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-slate-800">
                            Glissez une image ici ou{" "}
                            <span className="text-emerald-800 underline">
                                Parcourir vos fichiers
                            </span>
                        </p>
                        <span className="text-[10px] text-gray-400 mt-0.5 block">
                            1280 x 720 px recommandé (PNG, JPG ou WEBP max 5Mo)
                        </span>
                    </div>
                </div>

                {/* TARIFICATION & PROMOTION LOCALE */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-4 rounded-full bg-emerald-700"></span>
                            Tarification & Promotion locale
                        </h3>
                        <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                            FCFA (XOF)
                        </span>
                    </div>

                    {/* Prix standard */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-800">
                            Prix standard du cours
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                value={standardPrice}
                                onChange={(e) =>
                                    setStandardPrice(e.target.value)
                                }
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-hidden"
                            />
                            <span className="absolute right-4 top-2.5 text-xs font-bold text-gray-400">
                                FCFA
                            </span>
                        </div>
                        <p className="text-[10px] text-gray-400">
                            Prix conseillé pour un programme complet de
                            terminale : entre 10 000 et 25 000 FCFA.
                        </p>
                    </div>

                    {/* Toggle Promotion */}
                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-slate-900 block">
                                Mettre en promotion de lancement
                            </span>
                            <span className="text-[10px] text-gray-400">
                                Booste vos inscriptions dès la mise en ligne
                            </span>
                        </div>
                        <button
                            onClick={() => setIsPromoEnabled(!isPromoEnabled)}
                            className={`w-11 h-6 rounded-full transition-colors relative ${isPromoEnabled ? "bg-emerald-800" : "bg-gray-200"}`}
                        >
                            <span
                                className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${isPromoEnabled ? "right-1" : "left-1"}`}
                            />
                        </button>
                    </div>

                    {/* Prix promo si activé */}
                    {isPromoEnabled && (
                        <div className="space-y-3 pt-1">
                            <div className="space-y-1">
                                <div className="flex justify-between items-center text-xs">
                                    <label className="font-bold text-slate-800">
                                        Prix promotionnel réduit
                                    </label>
                                    <span className="text-emerald-800 font-extrabold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                                        ~37% de remise
                                    </span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={promoPrice}
                                        onChange={(e) =>
                                            setPromoPrice(e.target.value)
                                        }
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-900 focus:outline-hidden"
                                    />
                                    <span className="absolute right-4 top-2.5 text-xs font-bold text-gray-400">
                                        FCFA
                                    </span>
                                </div>
                            </div>

                            {/* Estimation du gain */}
                            <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-xl flex justify-between items-center text-xs">
                                <span className="text-emerald-950 font-medium">
                                    Votre gain formateur net estimé :
                                </span>
                                <span className="font-black text-emerald-900">
                                    8 075 FCFA / vente{" "}
                                    <span className="text-[10px] font-normal text-emerald-700">
                                        (85%)
                                    </span>
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Info Paiement Mobile */}
                    <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-1 text-[11px] text-gray-500">
                        <p className="font-bold text-slate-800 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />{" "}
                            Paiements mobiles intégrés sans tracas
                        </p>
                        <p className="text-[10px] leading-relaxed">
                            Les apprenants paient directement par Wave, Orange
                            Money ou MTN MoMo. Vos gains sont reversés sans
                            frais de change sur votre compte mobile local.
                        </p>
                        <div className="flex items-center gap-2 pt-1 font-bold text-[9px] text-gray-400">
                            <span>Wave</span> • <span>Orange Money</span> •{" "}
                            <span>MTN MoMo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
