import React, { useState } from 'react';
import { 
  ChevronRight, 
  Save, 
  Check, 
  CheckCircle2, 
  ArrowLeft, 
  Calculator, 
  CreditCard, 
  Eye, 
  Rocket, 
  ShieldCheck, 
  Star, 
  Clock, 
  DollarSign, 
  Lock, 
  Smartphone, 
  Plus, 
  Info,
  Sparkles
} from 'lucide-react';
import WebLayout from '@/layouts/web-layout';

export default function CourseCreationStep4Page() {
  const [pricingModel, setPricingModel] = useState<'one-time' | 'free' | 'subscription'>('one-time');
  const [isPromoActive, setIsPromoActive] = useState(true);
  const [standardPrice, setStandardPrice] = useState('15 000');
  const [promoPrice, setPromoPrice] = useState('9 500');
  const [enrollmentEstimate, setEnrollmentEstimate] = useState(100);
  const [publishMode, setPublishMode] = useState<'immediate' | 'scheduled'>('immediate');

  // Calculated values based on pricing
  const promoPriceNum = 9500;
  const creatorCommission = 0.85; // 85%
  const netPerSale = promoPriceNum * creatorCommission; // 8075
  const platformFee = promoPriceNum * 0.15; // 1425
  const estimatedTotalRevenue = netPerSale * enrollmentEstimate; // 807 500

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
            <span className="font-semibold text-slate-900">Étape 4 (Finale)</span>
          </div>

          <button className="text-gray-600 hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors">
            <Save className="w-3.5 h-3.5" />
            <span>Enregistrer comme brouillon</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Tarification, Droits & Publication
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Fixez le prix de vente en FCFA, configurez les canaux de paiement Mobile Money et publiez votre cours auprès de milliers d'apprenants ivoiriens.
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

          {/* STEP 3 (COMPLETED) */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Étape 3</span>
              <span className="text-xs font-bold text-slate-900">Quiz & Évaluations</span>
            </div>
          </div>

          {/* STEP 4 (CURRENT ACTIVE) */}
          <div className="bg-white border-2 border-emerald-800 rounded-2xl p-3.5 flex items-center gap-3 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-[#052e16] text-white flex items-center justify-center font-black text-xs">
              4
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Étape Finale</span>
                <span className="bg-amber-100 text-amber-900 text-[9px] font-bold px-1.5 py-0.2 rounded">En cours</span>
              </div>
              <span className="text-xs font-bold text-slate-900">Tarification & Publi...</span>
            </div>
          </div>

        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: PRICING & PAYMENT CONFIGURATION (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* MODÈLE DE TARIFICATION */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
              <div className="border-b border-gray-100 pb-3">
                <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-700" />
                  Modèle de tarification
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">Sélectionnez la formule d'accès la plus adaptée à vos étudiants ivoiriens.</p>
              </div>

              {/* MODEL CARDS SELECTOR */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* ONE-TIME PAYMENT */}
                <div 
                  onClick={() => setPricingModel('one-time')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer relative space-y-2 ${
                    pricingModel === 'one-time' 
                      ? 'border-emerald-700 bg-emerald-50/40 shadow-xs' 
                      : 'border-gray-200 bg-gray-50/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
                    <input type="radio" checked={pricingModel === 'one-time'} readOnly className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">Paiement unique</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Accès à vie à tout le cours avec un seul achat BAC.</p>
                </div>

                {/* FREE */}
                <div 
                  onClick={() => setPricingModel('free')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer relative space-y-2 ${
                    pricingModel === 'free' 
                      ? 'border-emerald-700 bg-emerald-50/40 shadow-xs' 
                      : 'border-gray-200 bg-gray-50/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <input type="radio" checked={pricingModel === 'free'} readOnly className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">Gratuit</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Accès libre pour accroître votre notoriété.</p>
                </div>

                {/* SUBSCRIPTION */}
                <div 
                  onClick={() => setPricingModel('subscription')}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer relative space-y-2 ${
                    pricingModel === 'subscription' 
                      ? 'border-emerald-700 bg-emerald-50/40 shadow-xs' 
                      : 'border-gray-200 bg-gray-50/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <input type="radio" checked={pricingModel === 'subscription'} readOnly className="w-3.5 h-3.5 text-emerald-700" />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900">Abonnement</h3>
                  <p className="text-[10px] text-gray-500 leading-tight">Accès mensuel récurrent avec résiliation libre.</p>
                </div>

              </div>

              {/* PRIX STANDARD */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-800">Prix standard officiel</label>
                  <span className="text-[10px] text-gray-400 font-semibold">Devise : FCFA (XOF)</span>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    value={standardPrice}
                    onChange={(e) => setStandardPrice(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 focus:outline-hidden"
                  />
                  <span className="absolute right-4 top-3 text-xs font-bold text-gray-400">FCFA</span>
                </div>
                <p className="text-[10px] text-gray-400">
                  Fourchette conseillée pour un cours de spécialité Terminale : 10 000 à 25 000 FCFA.
                </p>
              </div>

              {/* PROMOTION PROMO TOGGLE BOX */}
              <div className="bg-amber-50/50 border border-amber-200/70 p-4 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-950 block">Activer la promotion de lancement</span>
                    <span className="text-[10px] text-amber-900">Stimulez les premières inscriptions dès la mise en ligne</span>
                  </div>
                  <button 
                    onClick={() => setIsPromoActive(!isPromoActive)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${isPromoActive ? 'bg-emerald-800' : 'bg-gray-200'}`}
                  >
                    <span className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${isPromoActive ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>

                {isPromoActive && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-amber-200/50">
                    <div>
                      <label className="text-[10px] font-bold text-amber-950 block mb-1">Prix promotionnel</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          value={promoPrice}
                          onChange={(e) => setPromoPrice(e.target.value)}
                          className="w-full bg-white border border-amber-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-hidden"
                        />
                        <span className="absolute right-2 top-2 bg-amber-200 text-amber-950 font-extrabold text-[9px] px-1.5 py-0.5 rounded">
                          -37%
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-amber-950 block mb-1">Durée de la réduction</label>
                      <div className="bg-white border border-amber-200 rounded-lg px-3 py-2 text-xs font-semibold text-amber-950 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span>14 jours dès la publication</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>


            {/* CALCULATEUR DE GAINS NETS */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-5">
              <div className="flex justify-between items-start border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                    Modèle de partage équitable
                  </span>
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-emerald-700" />
                    Calculateur de gains nets par vente
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-gray-400 block">Part créateur net</span>
                  <span className="text-lg font-black text-emerald-900">85% créateur</span>
                </div>
              </div>

              {/* THREE REVENUE BLOCKS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Payé par l'élève</span>
                  <span className="text-base font-black text-slate-900">9 500 FCFA</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">TTC par inscription</span>
                </div>

                <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200/80">
                  <span className="text-[10px] text-emerald-800 font-bold uppercase block">Votre part nette (85%)</span>
                  <span className="text-base font-black text-emerald-900">8 075 FCFA</span>
                  <span className="text-[9px] text-emerald-700 font-medium block mt-0.5">Versement direct</span>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Frais plateforme (15%)</span>
                  <span className="text-base font-black text-slate-700">1 425 FCFA</span>
                  <span className="text-[9px] text-gray-400 block mt-0.5">Hébergement & Mobiles</span>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>
                  <strong>Frais de retrait Mobile Money : 0 FCFA.</strong> Edulvoire prend intégralement en charge vos frais de virement Wave, Orange, MTN & Moov.
                </span>
              </div>

              {/* REVENUE ESTIMATE SLIDER */}
              <div className="pt-2 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900">Projection d'inscrits pour le premier mois</span>
                  <span className="font-black text-slate-900 bg-gray-100 px-2.5 py-1 rounded-lg text-xs">
                    {enrollmentEstimate} inscrits
                  </span>
                </div>

                <input 
                  type="range" 
                  min="10" 
                  max="500" 
                  value={enrollmentEstimate}
                  onChange={(e) => setEnrollmentEstimate(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />

                <div className="bg-emerald-50/80 border border-emerald-200/80 p-4 rounded-xl flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-950">Estimation de vos revenus nets :</span>
                  <span className="text-xl font-black text-emerald-900">
                    {estimatedTotalRevenue.toLocaleString('fr-FR')} FCFA
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 block text-right font-medium">
                  crédités sur votre compte le 1er du mois prochain
                </span>
              </div>

            </div>


            {/* COMPTES DE VERSEMENT DES GAINS */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-700" />
                    Comptes de versement des gains
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">Vos gains nets sont reversés chaque lundi de manière automatique.</p>
                </div>
                <button className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> Ajouter un numéro
                </button>
              </div>

              <div className="space-y-2.5">
                
                {/* WAVE ACCOUNT (DEFAULT) */}
                <div className="p-3.5 rounded-xl border border-emerald-300 bg-emerald-50/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-400 text-white flex items-center justify-center font-bold text-xs">
                      🌊
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-slate-900">Wave Côte d'Ivoire</span>
                        <span className="bg-emerald-100 text-emerald-900 text-[9px] font-bold px-1.5 py-0.2 rounded">
                          Actif & Vérifié
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">+225 07 89 45 12 30</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-800 bg-white border border-emerald-200 px-2.5 py-1 rounded-lg shadow-2xs">
                    Compte par défaut ✓
                  </span>
                </div>

                {/* ORANGE MONEY ACCOUNT */}
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                      🍊
                    </div>
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">Orange Money CI</span>
                      <span className="text-[11px] text-gray-500 font-mono">+225 07 11 22 33 44</span>
                    </div>
                  </div>

                  <button className="text-[10px] font-bold text-gray-500 hover:text-slate-900">
                    Activer
                  </button>
                </div>

                {/* MTN MOMO ACCOUNT */}
                <div className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400 text-slate-900 flex items-center justify-center font-bold text-xs">
                      📱
                    </div>
                    <div>
                      <span className="font-bold text-xs text-slate-900 block">MTN Mobile Money CI</span>
                      <span className="text-[11px] text-gray-500 font-mono">+225 05 00 88 77 66</span>
                    </div>
                  </div>

                  <button className="text-[10px] font-bold text-gray-500 hover:text-slate-900">
                    Activer
                  </button>
                </div>

              </div>
            </div>

          </div>


          {/* RIGHT COLUMN: PREVIEW CARD, CHECKLIST & MODALITIES (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* APERÇU DE LA FICHE PUBLIQUE */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  APERÇU DE LA FICHE PUBLIQUE
                </h3>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Mode en ligne
                </span>
              </div>

              {/* COURSE CARD PREVIEW */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs space-y-3 bg-white">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" 
                    alt="Miniature cours" 
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="bg-[#052e16] text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                      Terminale C & D
                    </span>
                    <span className="bg-emerald-700 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                      Programme MENA
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 5h 10m (12 leçons HD)
                  </span>
                </div>

                <div className="p-4 space-y-2.5">
                  <h4 className="font-extrabold text-sm text-slate-900 leading-snug">
                    Physique-Chimie Terminale D : Réussir les épreuves du BAC ivoirien
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                      alt="Formateur" 
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span className="font-semibold text-slate-800">Dr. Yao N'guessan (INP-HB Yamoussoukro)</span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-slate-900 font-extrabold text-xs ml-1">5.0</span>
                    <span className="text-gray-400 font-normal text-[10px]">(Nouveau cours DECO)</span>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-black text-slate-900">9 500 FCFA</span>
                      <span className="text-xs text-gray-400 line-through">15 000 FCFA</span>
                    </div>
                    <span className="bg-amber-100 text-amber-950 font-bold text-[9px] px-2 py-0.5 rounded">
                      Offre de lancement
                    </span>
                  </div>
                </div>
              </div>
            </div>


            {/* CHECKLIST DE CONFORMITÉ */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Checklist de conformité
                </h3>
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  5/5 Validé
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>12 capsules vidéo encodées et testées en multi-débit</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>4 fiches d'exercices corrigés PDF téléchargeables</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Au moins 1 quiz d'évaluation interactif activé</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Miniature haute résolution 16:9 conforme aux standards</span>
                </div>

                <div className="flex items-center gap-2.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>Référentiel national aligné sur le programme DECO 2024-2025</span>
                </div>
              </div>
            </div>


            {/* MODALITÉS DE PUBLICATION */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 border-b border-gray-100 pb-3">
                <Rocket className="w-4 h-4 text-emerald-700" />
                Modalités de publication
              </h3>

              <div className="space-y-3">
                
                {/* IMMEDIATE PUBLICATION */}
                <label 
                  onClick={() => setPublishMode('immediate')}
                  className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                    publishMode === 'immediate' ? 'border-emerald-700 bg-emerald-50/40' : 'border-gray-200 bg-gray-50/50'
                  }`}
                >
                  <input type="radio" checked={publishMode === 'immediate'} readOnly className="mt-1 text-emerald-700" />
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Publication immédiate</span>
                    <span className="text-[10px] text-gray-500">Visible dans le catalogue national dès la validation du livre</span>
                  </div>
                </label>

                {/* SCHEDULED PUBLICATION */}
                <label 
                  onClick={() => setPublishMode('scheduled')}
                  className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors ${
                    publishMode === 'scheduled' ? 'border-emerald-700 bg-emerald-50/40' : 'border-gray-200 bg-gray-50/50'
                  }`}
                >
                  <input type="radio" checked={publishMode === 'scheduled'} readOnly className="mt-1 text-emerald-700" />
                  <div>
                    <span className="font-bold text-xs text-slate-900 block">Programmer la date de lancement</span>
                    <span className="text-[10px] text-gray-500">Définir un jour précis de la révision de l'accès</span>
                  </div>
                </label>

              </div>

              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-[10px] text-gray-500 space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-700" /> Protection du droit d'auteur
                </p>
                <p className="leading-relaxed">
                  En publiant ce cours, vous certifiez être l'auteur légal des contenus vidéo et supports pédagogiques. Tout dépôt d'un cours est protégé conformément au code de la propriété intellectuelle de Côte d'Ivoire.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM STEPPER ACTION BAR ================= */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <button className="text-xs font-bold text-gray-600 hover:text-slate-900 flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Précédent : Quiz & Évaluations
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5">
              <Eye className="w-4 h-4" /> Prévisualiser comme un élève
            </button>
            <button className="w-full sm:w-auto bg-[#052e16] hover:bg-[#031d0e] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-sm">
              Publier le cours maintenant 🚀
            </button>
          </div>
        </div>

      </div>

    </div>
    </WebLayout>
  );
}