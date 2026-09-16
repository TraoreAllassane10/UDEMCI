import { Button } from "@/components/ui/button";
import Step1 from "@/features/cours/components/createur/Step1";
import Step2 from "@/features/cours/components/createur/Step2";
import Step3 from "@/features/cours/components/createur/Step3";
import Step4 from "@/features/cours/components/createur/Step4";
import WebLayout from "@/layouts/web-layout";
import { ArrowLeft, ChevronRight, Eye, Save } from "lucide-react";
import { useState } from "react";

const Create = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        console.log("Formulaire envoyé...");
    };

    return (
        <WebLayout>
            <div className="bg-gray-50/70 text-slate-800 min-h-screen font-sans pb-16">
                {/* Fil d'ariane */}
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 pt-6 pb-2">
                    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
                        <span>Mes cours créateur</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span>Nouveau cours</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                        <span className="font-semibold text-slate-900">
                            Étape 1
                        </span>
                    </div>

                    <button className="text-gray-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors">
                        <Save className="w-3.5 h-3.5" />
                        <span>Enregistrer comme brouillon</span>
                    </button>
                </div>

                {/* Titre et setupper */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
                    <div className="space-y-1">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            Création d'un nouveau cours
                        </h1>
                        <p className="text-xs md:text-sm text-gray-500">
                            Renseignez le socle pédagogique et les repères
                            académiques selon les référentiels ivoiriens.
                        </p>
                    </div>

                    {/* STEPPER NAVIGATION */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* STEP 1 */}
                        <div
                            className={`border  rounded-2xl p-3.5 text-gray-400 flex items-center gap-3 shadow-xs ${currentStep === 1 ? "border-2 bg-white border-emerald-700" : "bg-white/60 border-gray-200"}`}
                        >
                            <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${currentStep === 1 ? "bg-[#052e16] text-white" : "bg-gray-100 text-gray-500"}`}
                            >
                                1
                            </div>
                            <div>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider block ${currentStep === 1 && "text-emerald-800"}`}
                                >
                                    Étape actuelle
                                </span>
                                <span
                                    className={`text-xs   ${currentStep === 1 ? "font-bold text-slate-900" : "font-semibold text-gray-600"}`}
                                >
                                    1. Informations générales
                                </span>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div
                            className={`border  rounded-2xl p-3.5 text-gray-400 flex items-center gap-3 shadow-xs ${currentStep === 2 ? "border-2 bg-white border-emerald-700" : "bg-white/60 border-gray-200"}`}
                        >
                            <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${currentStep === 2 ? "bg-[#052e16] text-white" : "bg-gray-100 text-gray-500"}`}
                            >
                                2
                            </div>
                            <div>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider block ${currentStep === 2 && "text-emerald-800"}`}
                                >
                                    A venir
                                </span>
                                <span
                                    className={`text-xs   ${currentStep === 2 ? "font-bold text-slate-900" : "font-semibold text-gray-600"}`}
                                >
                                    2. Chapitres & Vidéos
                                </span>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div
                            className={`border  rounded-2xl p-3.5 text-gray-400 flex items-center gap-3 shadow-xs ${currentStep === 3 ? "border-2 bg-white border-emerald-700" : "bg-white/60 border-gray-200"}`}
                        >
                            <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${currentStep === 3 ? "bg-[#052e16] text-white" : "bg-gray-100 text-gray-500"}`}
                            >
                                3
                            </div>
                            <div>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider block ${currentStep === 3 && "text-emerald-800"}`}
                                >
                                    A venir
                                </span>
                                <span
                                    className={`text-xs ${currentStep === 3 ? "font-bold text-slate-900" : "font-semibold text-gray-600"}`}
                                >
                                    3. Quiz & Évaluations
                                </span>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div
                            className={`border  rounded-2xl p-3.5 text-gray-400 flex items-center gap-3 shadow-xs ${currentStep === 4 ? "border-2 bg-white border-emerald-700" : "bg-white/60 border-gray-200"}`}
                        >
                            <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${currentStep === 4 ? "bg-[#052e16] text-white" : "bg-gray-100 text-gray-500"}`}
                            >
                                4
                            </div>
                            <div>
                                <span
                                    className={`text-[10px] font-bold uppercase tracking-wider block ${currentStep === 4 && "text-emerald-800"}`}
                                >
                                    Finalisation
                                </span>
                                <span
                                    className={`text-xs ${currentStep === 3 ? "font-bold text-slate-900" : "font-semibold text-gray-600"}`}
                                >
                                    4. Tarification & Publication
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
                    {currentStep === 1 && <Step1 />}
                    {currentStep === 2 && <Step2 />}
                    {currentStep === 3 && <Step3 />}
                    {currentStep === 4 && <Step4 />}

                    {/* Boutons */}
                    <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                        <button
                            onClick={prevStep}
                            className="text-xs font-bold text-gray-600 hover:text-slate-900 flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" /> Précédent
                        </button>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
                                <Eye className="w-4 h-4" /> Prévisualiser comme
                                un élève
                            </button>
                            <Button
                                onClick={
                                    currentStep === 4 ? handleSubmit : nextStep
                                }
                                className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                            >
                                {currentStep === 4
                                    ? "Publier le cours maintenant 🚀"
                                    : "Suivant"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default Create;
