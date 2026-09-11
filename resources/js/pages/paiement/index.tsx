import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Lock, 
  CreditCard, 
  Smartphone, 
  Zap, 
  HelpCircle, 
  Clock, 
  Award, 
  Sparkles,
  Tag
} from 'lucide-react';
import WebLayout from '@/layouts/web-layout';

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<'wave' | 'orange' | 'mtn' | 'moov' | 'card'>('wave');
  const [phoneNumber, setPhoneNumber] = useState('07 89 45 12 30');
  const [promoCode, setPromoCode] = useState('');

  const paymentMethods = [
    {
      id: 'wave',
      name: 'Wave Côte d\'Ivoire',
      tag: '0% de frais • Recommandé',
      description: 'Validation directe en un clic via l\'application Wave',
      logoText: 'W',
      logoBg: 'bg-cyan-500 text-white',
    },
    {
      id: 'orange',
      name: 'Orange Money CI',
      tag: 'Pop-up #144#',
      description: 'Autorisation via notification USSD sécurisée',
      logoText: 'OM',
      logoBg: 'bg-orange-500 text-white',
    },
    {
      id: 'mtn',
      name: 'MTN Mobile Money',
      tag: 'MoMo Pay',
      description: 'Validation instantanée avec code secret MoMo (*133#)',
      logoText: 'M',
      logoBg: 'bg-yellow-400 text-slate-900',
    },
    {
      id: 'moov',
      name: 'Moov Money CI',
      tag: 'Flooz',
      description: 'Paiement direct sans frais additionnels',
      logoText: 'Mo',
      logoBg: 'bg-blue-600 text-white',
    },
    {
      id: 'card',
      name: 'Carte Bancaire Visa / Mastercard',
      tag: 'International',
      description: 'Cartes ivoiriennes et internationales acceptées 3D Secure',
      logoText: 'CB',
      logoBg: 'bg-slate-800 text-white',
    },
  ];

  return (
    <WebLayout>
        <div className="bg-gray-50/60 text-slate-800 min-h-screen font-sans pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6">
        
        {/* Fil d'Ariane & Badge Sécurité Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <nav className="text-xs text-gray-500 flex items-center gap-2">
            <span>Accueil</span>
            <span>&gt;</span>
            <span>Catalogue</span>
            <span>&gt;</span>
            <span>Maths Tle C & D</span>
            <span>&gt;</span>
            <span className="text-slate-900 font-medium">Paiement sécurisé</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-1.5 rounded-full self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Transaction 100% sécurisée SSL 256-bit</span>
          </div>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SECTIONS DE PAIEMENT (8 Colonnes) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Sélection */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Étape Finale
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Choisissez votre moyen de paiement
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Réglez instantanément avec vos comptes Mobile Money locaux ou carte bancaire sans frais cachés.
              </p>
            </div>

            {/* LISTE DES MOYENS DE PAIEMENT */}
            <div className="space-y-3">
              {paymentMethods.map((method) => {
                const isSelected = selectedMethod === method.id;
                return (
                  <div
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id as any)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer bg-white flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'border-emerald-800 shadow-sm ring-1 ring-emerald-800/20'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Logo Icon / Avatar */}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${method.logoBg}`}>
                        {method.logoText}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-slate-900 text-sm md:text-base">
                            {method.name}
                          </h3>
                          {method.tag && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected ? 'bg-emerald-100 text-emerald-900' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {method.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{method.description}</p>
                      </div>
                    </div>

                    {/* Radio Custom */}
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'border-emerald-800 bg-emerald-800' : 'border-gray-300'
                    }`}>
                      {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FORMULAIRE DYNAMIQUE SELON MODE SÉLECTIONNÉ */}
            {selectedMethod === 'wave' && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-emerald-700" />
                    Coordonnées du compte Wave
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">Côte d'Ivoire (+225)</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Numéro de téléphone Mobile Money
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 flex items-center gap-1.5 text-xs text-gray-500 border-r border-gray-200 pr-2">
                      <span className="text-base">🇨🇮</span>
                      <span className="font-semibold">+225</span>
                    </div>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-24 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                      placeholder="07 00 00 00 00"
                    />
                    <Check className="w-4 h-4 text-emerald-600 absolute right-3" />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1.5 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-500" />
                    Un push de confirmation de paiement sera envoyé immédiatement vers ce numéro.
                  </p>
                </div>
              </div>
            )}

            {/* FORMULAIRE CODE PROMO */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3">
              <label className="block text-xs font-semibold text-gray-700">
                Code promo ou coupon de parrainage (Optionnel)
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="EX: BAC2025"
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs uppercase font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700"
                  />
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-slate-800 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors">
                  Appliquer
                </button>
              </div>
            </div>

            {/* ALERTE BÉNEFICE / REDIRECTION */}
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 flex gap-3 text-xs text-amber-900">
              <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Validation instantanée via l'application Wave</p>
                <p className="text-amber-800/80 mt-0.5">
                  Après avoir cliqué sur le bouton ci-dessous, vous serez automatiquement redirigé vers l'application Wave pour autoriser le montant de 14 000 FCFA en toute sécurité. Vos accès au cours seront débloqués dans la seconde qui suit.
                </p>
              </div>
            </div>

            {/* REASSURANCE BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Activation directe</h4>
                  <p className="text-[10px] text-gray-500">Accès vidéo en &lt; 30 sec</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Chiffrement AES</h4>
                  <p className="text-[10px] text-gray-500">Données bancaires isolées</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Assistance Abidjan</h4>
                  <p className="text-[10px] text-gray-500">Dispo WhatsApp 7j/7</p>
                </div>
              </div>
            </div>

          </div>


          {/* RÉSUMÉ COMMANDE (4 Colonnes) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <h2 className="font-bold text-slate-900 text-lg">Résumé du cours</h2>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  Session 2024-2025
                </span>
              </div>

              {/* CARTE MINIATURE DU COURS */}
              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=200" 
                  alt="Mathématiques Tle C&D" 
                  className="w-20 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-100"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs line-clamp-2 leading-snug">
                    Mathématiques Terminale C & D : Maîtrise Complète...
                  </h3>
                  <p className="text-[11px] text-gray-500">Par M. YAO Kouassi (Lycée Classique)</p>
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold">
                    <span>★ 4.9</span>
                    <span className="text-gray-400 font-normal">(18h de vidéo)</span>
                  </div>
                </div>
              </div>

              {/* CALCUL DE PRIX */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Prix de base officiel</span>
                  <span className="line-through">20 000 FCFA</span>
                </div>

                <div className="flex justify-between text-emerald-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Réduction rentrée (-30%)
                  </span>
                  <span>-6 000 FCFA</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span className="flex items-center gap-1">
                    Frais de transaction mobile
                  </span>
                  <span className="text-emerald-700 font-bold">0 FCFA (Offerts)</span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="pt-4 border-t border-gray-200 flex justify-between items-baseline">
                <div>
                  <span className="text-xs text-gray-500 block">Total à payer</span>
                  <span className="text-[10px] text-gray-400">TTC • Accès immédiat</span>
                </div>
                <span className="text-2xl font-black text-amber-600">
                  14 000 <span className="text-sm font-bold">FCFA</span>
                </span>
              </div>

              {/* BOUTON DE SOUMISSION */}
              <button className="w-full bg-[#052e16] hover:bg-[#031d0e] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm">
                <Lock className="w-4 h-4 text-emerald-400" />
                Payer 14 000 FCFA avec Wave
              </button>

              <p className="text-[10px] text-gray-400 text-center leading-tight">
                En confirmant votre achat, vous acceptez nos{' '}
                <a href="#" className="underline text-gray-600 hover:text-slate-900">Conditions Générales de Vente</a>.
              </p>

              {/* LISTE BÉNÉFICES ET GARANTIES */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Garantie satisfait ou remboursé 14 jours</strong> sans condition</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Accès illimité et à vie sur smartphone, tablette et PC</span>
                </div>
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Certificat d'attestation officiel vérifiable avec QR code unique</span>
                </div>
              </div>

              {/* LOGOS PARTENAIRES */}
              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Partenaires officiels interbancaires CI
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">Wave</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">Orange CI</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">MTN MoMo</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">Moov Money</span>
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">GIM-UEMOA</span>
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