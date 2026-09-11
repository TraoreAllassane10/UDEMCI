import WebLayout from "@/layouts/web-layout";
import Hero from "@/features/acceuil/components/Hero";
import FormationSection from "@/features/acceuil/components/FormationSection";
import ExplorerMatiere from "@/features/acceuil/components/ExplorerMatiere";
import PresentationMoyenPaiement from "@/features/acceuil/components/PresentationMoyenPaiement";
import TemoignagesSection from "@/features/acceuil/components/TemoignagesSection";
import CTASection from "@/features/acceuil/components/CTASection";

export default function Welcome() {
    return (
        <WebLayout
            activeTab="accueil"
            title="UDEMCI - Plateforme E-Learning Côte d'Ivoire"
        >
            <div className="flex flex-col w-full">
                {/* Hero Section */}
                <Hero />

                {/* Formations à fort impact */}
                <FormationSection />

                {/* Matiere Populaire */}
                <ExplorerMatiere />

                {/* Presentation des moyens de paiements */}
                <PresentationMoyenPaiement/>

                {/* Temoignages */}
                <TemoignagesSection />

                {/* Appel à l'action */}
                <CTASection />
            </div>
        </WebLayout>
    );
}
