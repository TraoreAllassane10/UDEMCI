import { Head, Link, router, usePage } from "@inertiajs/react";
import {
    ChevronDown,
    Layers,
    Menu,
    Search,
    ShoppingBag,
    User,
    X,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { catalogue, dashboard, home, login, register } from "@/routes";
import type { Auth } from "@/types";

interface WebLayoutProps {
    children: ReactNode;
    title?: string;
    activeTab?:
        | "accueil"
        | "catalogue"
        | "mes-cours"
        | "devenir-formateur"
        | string;
    initialSearch?: string;
}

export default function WebLayout({
    children,
    title = "EduIvoire - Plateforme E-Learning Côte d'Ivoire",
    activeTab = "accueil",
    initialSearch = "",
}: WebLayoutProps) {
    const { auth } = usePage<{ auth: Auth }>().props;
    const [searchQuery, setSearchQuery] = useState(initialSearch);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.visit(catalogue({ query: { q: searchQuery.trim() } }).url);
        } else {
            router.visit(catalogue().url);
        }
    };

    return (
        <div className="bg-[#fcf9f8] dark:bg-[#121212] font-['Manrope'] text-neutral-900 dark:text-neutral-100 antialiased min-h-screen flex flex-col justify-between selection:bg-[#1b4332] selection:text-white">
            <Head title={title} />

            {/* Header / Navbar */}
            <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-[#18181b]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(1,45,29,0.06)] dark:shadow-none border-b border-neutral-200/80 dark:border-neutral-800">
                <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4 lg:gap-6">
                    {/* Logo & Brand */}
                    <Link
                        href={home()}
                        className="flex items-center gap-3 shrink-0 group"
                    >
                        <img
                            alt="Logo EduIvoire"
                            className="h-8 sm:h-9 w-auto object-contain rounded-md transition-transform group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pl6RF5eViYTYa2A7I8p9BkB0nBxYHP71qjEPOrBB5qFyho1VmkS0N5HLtyFWfvDXG33g_qsuSRnKuo3ax-Ib7_I46NU0JcgjwQqVkCPJnK9IqVo6eK31wdt7r3LXqsGGN72zJCo3qVhsgTdRds1EbZ5CdJSaBD-VI4Neujs03KK-6leK_CHkUUzeYiIGXLeNSP4HN4ghVOv-cebiO9-SLEY4qCNQeAPRKPRv39UY6ospkz6Y2L8"
                        />
                        <span className="font-['Sora'] text-xl font-bold text-[#012d1d] dark:text-emerald-400 tracking-tight hidden sm:inline">
                            UDEMCI
                        </span>
                    </Link>

                    {/* Category Dropdown Button */}
                    <div className="hidden lg:flex items-center gap-3 shrink-0">
                        <Link
                            href={catalogue()}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 font-semibold text-[13px] hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-[#012d1d] transition-colors"
                        >
                            <Layers className="w-4 h-4 text-[#1b4332] dark:text-emerald-400" />
                            <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-md hidden md:block">
                        <form
                            onSubmit={handleSearchSubmit}
                            className="relative flex items-center w-full"
                        >
                            <Search className="absolute left-3.5 text-neutral-400 dark:text-neutral-500 w-4 h-4 pointer-events-none" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] rounded-lg border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:border-[#1b4332] focus:ring-1 focus:ring-[#1b4332] transition-colors"
                                placeholder="Rechercher une matière, un cours, un concours..."
                                type="text"
                            />
                        </form>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-1 shrink-0 font-semibold text-[13px]">
                        <Link
                            href={home()}
                            className={`px-3.5 py-2 rounded-lg transition-colors ${
                                activeTab === "accueil"
                                    ? "bg-[#1b4332] text-white shadow-sm dark:bg-emerald-700"
                                    : "text-neutral-600 dark:text-neutral-300 hover:text-[#012d1d] dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-white/5"
                            }`}
                        >
                            Accueil
                        </Link>
                        <Link
                            href={catalogue()}
                            className={`px-3.5 py-2 rounded-lg transition-colors ${
                                activeTab === "catalogue"
                                    ? "bg-[#1b4332] text-white shadow-sm dark:bg-emerald-700"
                                    : "text-neutral-600 dark:text-neutral-300 hover:text-[#012d1d] dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-white/5"
                            }`}
                        >
                            Catalogue
                        </Link>
                        <a
                            href="/#devenir-formateur"
                            className="px-3.5 py-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-[#012d1d] dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                        >
                            Devenir formateur
                        </a>
                    </nav>

                    {/* Auth & Profile Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {auth.user ? (
                            <>
                                <Link
                                    href={catalogue()}
                                    aria-label="Mon panier"
                                    className="relative p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:text-[#012d1d] dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    <ShoppingBag className="w-5 h-5" />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#382100]"></span>
                                </Link>

                                <Link
                                    href={dashboard()}
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-['Sora'] text-[13px] font-semibold bg-[#1b4332] hover:bg-[#012d1d] text-white transition-all shadow-sm"
                                >
                                    <User className="w-4 h-4" />
                                    <span className="hidden sm:inline">
                                        Mon Espace
                                    </span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="px-3.5 py-2 rounded-lg text-[13px] font-semibold text-[#1b4332] dark:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                                >
                                    Connexion
                                </Link>
                                <Link
                                    href={register()}
                                    className="px-4 py-2 rounded-lg text-[13px] font-semibold bg-[#553500] dark:bg-amber-600 text-white hover:bg-[#382100] dark:hover:bg-amber-700 transition-colors shadow-sm"
                                >
                                    S'inscrire
                                </Link>
                            </>
                        )}

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="xl:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
                            aria-label="Ouvrir le menu de navigation"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu dropdown */}
                {mobileMenuOpen && (
                    <div className="xl:hidden bg-white dark:bg-[#18181b] border-b border-neutral-200 dark:border-neutral-800 px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                        <form
                            onSubmit={handleSearchSubmit}
                            className="relative flex items-center w-full md:hidden"
                        >
                            <Search className="absolute left-3.5 text-neutral-400 dark:text-neutral-500 w-4 h-4 pointer-events-none" />
                            <input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] rounded-lg border border-neutral-200 dark:border-neutral-800 focus:outline-none"
                                placeholder="Rechercher une formation..."
                                type="text"
                            />
                        </form>
                        <nav className="flex flex-col gap-1 font-semibold text-[14px]">
                            <Link
                                href={home()}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-2.5 rounded-lg transition-colors ${
                                    activeTab === "accueil"
                                        ? "bg-[#1b4332] text-white"
                                        : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                }`}
                            >
                                Accueil
                            </Link>
                            <Link
                                href={catalogue()}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-4 py-2.5 rounded-lg transition-colors ${
                                    activeTab === "catalogue"
                                        ? "bg-[#1b4332] text-white"
                                        : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                }`}
                            >
                                Catalogue des cours
                            </Link>
                            <a
                                href="/#devenir-formateur"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-2.5 rounded-lg text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                                Devenir formateur
                            </a>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="w-full pt-20 flex-1">{children}</main>

            {/* Footer */}
            <footer className="w-full bg-[#012d1d] text-white mt-auto">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <img
                                    alt="Logo Plateforme E-Learning CI"
                                    className="h-8 w-auto object-contain brightness-0 invert"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pl6RF5eViYTYa2A7I8p9BkB0nBxYHP71qjEPOrBB5qFyho1VmkS0N5HLtyFWfvDXG33g_qsuSRnKuo3ax-Ib7_I46NU0JcgjwQqVkCPJnK9IqVo6eK31wdt7r3LXqsGGN72zJCo3qVhsgTdRds1EbZ5CdJSaBD-VI4Neujs03KK-6leK_CHkUUzeYiIGXLeNSP4HN4ghVOv-cebiO9-SLEY4qCNQeAPRKPRv39UY6ospkz6Y2L8"
                                />
                                <span className="font-['Sora'] text-xl font-bold text-[#c1ecd4]">
                                    EduIvoire
                                </span>
                            </div>
                            <p className="text-[13px] text-emerald-100/80 leading-relaxed">
                                La première plateforme de formation en ligne
                                adaptée aux réalités ivoiriennes et régionales.
                                Accédez aux meilleures compétences avec des
                                experts locaux.
                            </p>
                        </div>

                        {/* Navigation Links */}
                        <div className="space-y-3">
                            <h4 className="font-['Sora'] text-[15px] font-semibold text-[#c1ecd4]">
                                À propos &amp; Formations
                            </h4>
                            <ul className="space-y-2 text-[13px] text-emerald-100/80">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Notre Mission
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href={catalogue()}
                                        className="hover:text-white transition-colors"
                                    >
                                        Catalogue Certifiant
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                    >
                                        Entreprises &amp; Partenaires
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#devenir-formateur"
                                        className="hover:text-white transition-colors"
                                    >
                                        Devenir Créateur / Formateur
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Payment Badges */}
                        <div className="space-y-3">
                            <h4 className="font-['Sora'] text-[15px] font-semibold text-[#c1ecd4]">
                                Moyens de Paiement Sécurisés
                            </h4>
                            <p className="text-[13px] text-emerald-100/80">
                                Réglez vos cours instantanément sans carte
                                bancaire grâce à vos comptes mobiles locaux :
                            </p>
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                                <span className="px-3 py-1 rounded bg-[#1b4332] text-white text-[11px] font-semibold">
                                    Wave
                                </span>
                                <span className="px-3 py-1 rounded bg-[#1b4332] text-white text-[11px] font-semibold">
                                    Orange Money
                                </span>
                                <span className="px-3 py-1 rounded bg-[#1b4332] text-white text-[11px] font-semibold">
                                    MTN MoMo
                                </span>
                                <span className="px-3 py-1 rounded bg-[#1b4332] text-white text-[11px] font-semibold">
                                    Moov Money
                                </span>
                            </div>
                        </div>

                        {/* Contact & Support */}
                        <div className="space-y-3">
                            <h4 className="font-['Sora'] text-[15px] font-semibold text-[#c1ecd4]">
                                Contact &amp; Support
                            </h4>
                            <p className="text-[13px] text-emerald-100/80">
                                Abidjan, Cocody Riviera Palmeraie
                                <br />
                                Côte d'Ivoire
                            </p>
                            <div className="space-y-1 text-[13px] text-emerald-100/80">
                                <p>support@eduivoire.ci</p>
                                <p>+225 07 00 00 00 00</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-emerald-100/80">
                        <p>© 2024 EduIvoire. Tous droits réservés.</p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Conditions Générales
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Politique de Confidentialité
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                Mentions Légales
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
