import { Form, Head, Link } from "@inertiajs/react";
import {
    ArrowRight,
    Award,
    Check,
    Eye,
    EyeOff,
    GraduationCap,
    LogIn,
    Mail,
    Presentation,
    ShieldCheck,
    User,
} from "lucide-react";
import { useState } from "react";
import InputError from "@/components/input-error";
import { Spinner } from "@/components/ui/spinner";
import AuthLayout from "@/layouts/auth-layout";
import { login } from "@/routes";
import { store } from "@/routes/register";

type Props = {
    passwordRules?: string;
};

export default function Register({ passwordRules }: Props) {
    const [role, setRole] = useState<"eleve" | "createur">("eleve");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    return (
        <AuthLayout>
            <Head title="Créer un compte" />

            <div className="relative bg-white dark:bg-[#1c1c1e] rounded-xl shadow-xl p-6 sm:p-8 overflow-hidden border border-neutral-200/80 dark:border-white/10">
                {/* Subtle top organic accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1b4332] via-[#dc9933] to-[#46655a]" />

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-14 h-14 mb-3 rounded-xl bg-neutral-100 dark:bg-white/5 p-2 flex items-center justify-center shadow-xs">
                        <img
                            alt="Logo Plateforme E-Learning CI"
                            className="w-full h-full object-contain rounded-lg"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pl6RF5eViYTYa2A7I8p9BkB0nBxYHP71qjEPOrBB5qFyho1VmkS0N5HLtyFWfvDXG33g_qsuSRnKuo3ax-Ib7_I46NU0JcgjwQqVkCPJnK9IqVo6eK31wdt7r3LXqsGGN72zJCo3qVhsgTdRds1EbZ5CdJSaBD-VI4Neujs03KK-6leK_CHkUUzeYiIGXLeNSP4HN4ghVOv-cebiO9-SLEY4qCNQeAPRKPRv39UY6ospkz6Y2L8"
                        />
                    </div>
                    <h1 className="font-['Sora'] text-[20px] font-semibold text-neutral-900 dark:text-white tracking-tight">
                        Créez votre compte
                    </h1>
                    <p className="text-[13px] text-neutral-600 dark:text-neutral-400 mt-1 max-w-xs">
                        Rejoignez la communauté apprenante de Côte d'Ivoire
                    </p>
                </div>

                {/* Form Section */}
                <Form
                    {...store.form()}
                    resetOnSuccess={["password", "password_confirmation"]}
                    disableWhileProcessing
                    className="space-y-4"
                >
                    {({ processing, errors }) => (
                        <>
                            {/* Role Selector */}
                            <div>
                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2">
                                    Votre objectif
                                </span>
                                <input type="hidden" name="role" value={role} />
                                <div
                                    className="grid grid-cols-2 gap-3"
                                    id="role-selector"
                                >
                                    {/* Student Card */}
                                    <button
                                        type="button"
                                        onClick={() => setRole("eleve")}
                                        className={`relative flex flex-col items-center justify-center p-3.5 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                                            role === "eleve"
                                                ? "bg-[#c5e7d9]/40 dark:bg-emerald-950/40 text-[#1b4332] dark:text-emerald-300 shadow-xs ring-2 ring-[#1b4332] dark:ring-emerald-500"
                                                : "bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-neutral-200"
                                        }`}
                                    >
                                        <GraduationCap
                                            className={`w-6 h-6 mb-1 ${role === "eleve" ? "text-[#1b4332] dark:text-emerald-400" : "text-[#46655a] dark:text-neutral-400"}`}
                                        />
                                        <span className="font-['Sora'] text-[13px] font-semibold leading-tight">
                                            Je veux apprendre
                                        </span>
                                        <span className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                                            élève &amp; Pro
                                        </span>
                                        {role === "eleve" && (
                                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#1b4332] dark:bg-emerald-600 text-white rounded-full flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                                            </span>
                                        )}
                                    </button>

                                    {/* Teacher Card */}
                                    <button
                                        type="button"
                                        onClick={() => setRole("createur")}
                                        className={`relative flex flex-col items-center justify-center p-3.5 rounded-lg text-center transition-all duration-200 cursor-pointer ${
                                            role === "createur"
                                                ? "bg-[#c5e7d9]/40 dark:bg-emerald-950/40 text-[#1b4332] dark:text-emerald-300 shadow-xs ring-2 ring-[#1b4332] dark:ring-emerald-500"
                                                : "bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-neutral-200"
                                        }`}
                                    >
                                        <Presentation
                                            className={`w-6 h-6 mb-1 ${role === "createur" ? "text-[#1b4332] dark:text-emerald-400" : "text-[#46655a] dark:text-neutral-400"}`}
                                        />
                                        <span className="font-['Sora'] text-[13px] font-semibold leading-tight">
                                            Je veux enseigner
                                        </span>
                                        <span className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                                            Formateur
                                        </span>
                                        {role === "createur" && (
                                            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#1b4332] dark:bg-emerald-600 text-white rounded-full flex items-center justify-center">
                                                <Check className="w-2.5 h-2.5 text-white stroke-3" />
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Full Name */}
                            <div className="space-y-1">
                                <label
                                    className="block text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                    htmlFor="name"
                                >
                                    Nom complet
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-4 h-4 pointer-events-none" />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        placeholder="Ex: Traoré Allassane"
                                        className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-white dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] border border-neutral-300 dark:border-neutral-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <InputError message={errors.name} />
                            </div>

                            {/* Email */}
                            <div className="space-y-1">
                                <label
                                    className="block text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                    htmlFor="email"
                                >
                                    Adresse e-mail
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 w-4 h-4 pointer-events-none" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        tabIndex={2}
                                        autoComplete="email"
                                        placeholder="votre.nom@domaine.ci"
                                        className="w-full h-11 pl-10 pr-3.5 rounded-lg bg-white dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] border border-neutral-300 dark:border-neutral-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Phone with Côte d'Ivoire Badge */}
                            <div className="space-y-1">
                                <label
                                    className="block text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                    htmlFor="phone"
                                >
                                    Numéro de téléphone
                                </label>
                                <div className="relative flex rounded-lg shadow-xs overflow-hidden border border-neutral-300 dark:border-neutral-800 focus-within:ring-2 focus-within:ring-[#1b4332] dark:focus-within:ring-emerald-500 focus-within:border-transparent">
                                    <div className="inline-flex items-center px-3 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[13px] font-semibold select-none shrink-0 space-x-1.5">
                                        <span className="inline-block w-4 h-3 bg-gradient-to-r from-[#F77F00] via-[#FFFFFF] to-[#009A44] rounded-[1px] shadow-xs" />
                                        <span>+225</span>
                                    </div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        tabIndex={3}
                                        autoComplete="tel"
                                        placeholder="07 00 00 00 00"
                                        className="w-full h-11 px-3.5 bg-white dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] focus:outline-none"
                                    />
                                </div>
                                <InputError message={errors.phone} />
                            </div>

                            {/* Passwords Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* Password */}
                                <div className="space-y-1">
                                    <label
                                        className="block text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                        htmlFor="password"
                                    >
                                        Mot de passe
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            tabIndex={4}
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            passwordrules={passwordRules}
                                            className="w-full h-11 pl-3.5 pr-9 rounded-lg bg-white dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] border border-neutral-300 dark:border-neutral-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            tabIndex={-1}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center p-1 cursor-pointer"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                    <InputError message={errors.password} />
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-1">
                                    <label
                                        className="block text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                        htmlFor="password_confirmation"
                                    >
                                        Confirmation
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            type={
                                                showPasswordConfirm
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            tabIndex={5}
                                            autoComplete="new-password"
                                            placeholder="••••••••"
                                            passwordrules={passwordRules}
                                            className="w-full h-11 pl-3.5 pr-9 rounded-lg bg-white dark:bg-[#141414] text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 text-[13px] border border-neutral-300 dark:border-neutral-800 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPasswordConfirm(
                                                    !showPasswordConfirm,
                                                )
                                            }
                                            tabIndex={-1}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center p-1 cursor-pointer"
                                        >
                                            {showPasswordConfirm ? (
                                                <EyeOff className="w-4 h-4" />
                                            ) : (
                                                <Eye className="w-4 h-4" />
                                            )}
                                        </button>
                                    </div>
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>
                            </div>

                            {/* Terms & Conditions Checkbox */}
                            <div className="pt-1">
                                <label className="flex items-start gap-2.5 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="terms"
                                        required
                                        tabIndex={6}
                                        className="mt-1 w-4 h-4 rounded text-[#1b4332] dark:text-emerald-500 accent-[#1b4332] focus:ring-[#1b4332] cursor-pointer"
                                    />
                                    <span className="text-[12px] leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors select-none">
                                        J'accepte les{" "}
                                        <a
                                            className="text-[#1b4332] dark:text-emerald-400 font-semibold hover:underline"
                                            href="#"
                                        >
                                            conditions d'utilisation
                                        </a>{" "}
                                        et la{" "}
                                        <a
                                            className="text-[#1b4332] dark:text-emerald-400 font-semibold hover:underline"
                                            href="#"
                                        >
                                            politique de confidentialité
                                        </a>{" "}
                                        de la plateforme.
                                    </span>
                                </label>
                            </div>

                            {/* Submit CTA Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    tabIndex={7}
                                    disabled={processing}
                                    data-test="register-user-button"
                                    className="w-full h-12 bg-[#1b4332] hover:bg-[#0f281e] text-white rounded-lg font-['Sora'] text-[16px] font-semibold shadow-md transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer disabled:opacity-70"
                                >
                                    {processing ? (
                                        <Spinner className="w-5 h-5 text-white" />
                                    ) : (
                                        <>
                                            <span>Créer mon compte</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="relative z-10 my-7 flex items-center">
                    <div className="flex-grow h-px bg-neutral-200 dark:bg-neutral-800" />
                    <span className="px-4 text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider bg-white dark:bg-[#1c1c1e]">
                        ou continuer avec
                    </span>
                    <div className="flex-grow h-px bg-neutral-200 dark:bg-neutral-800" />
                </div>

                {/* Social Buttons */}
                <div className="relative z-10  gap-3">
                    <a href="/auth/redirect">
                        <button
                            type="button"
                            className="h-11 w-full px-4 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-900 dark:text-neutral-200 rounded-lg text-[13px] font-semibold flex items-center justify-center space-x-2.5 shadow-xs border border-neutral-300/60 dark:border-neutral-800 transition-all duration-150 cursor-pointer active:scale-[0.98]"
                        >
                            <svg
                                className="w-4 h-4 shrink-0"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                                    fill="#EA4335"
                                />
                            </svg>
                            <span className="truncate">Google</span>
                        </button>
                    </a>
                </div>

                {/* Discreet Separator */}
                <div className="my-6 relative flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
                    </div>
                    <span className="relative px-3 bg-white dark:bg-[#1c1c1e] text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                        Déjà membre ?
                    </span>
                </div>

                {/* Footer Action */}
                <div className="text-center">
                    <p className="text-[13px] text-neutral-600 dark:text-neutral-400">
                        Vous avez déjà un compte ?
                        <Link
                            href={login()}
                            tabIndex={8}
                            className="font-['Sora'] text-[15px] text-[#1b4332] dark:text-emerald-400 hover:text-[#012d1d] dark:hover:text-emerald-300 font-bold inline-flex items-center ml-1.5 group transition-colors"
                        >
                            <span>Se connecter</span>
                            <LogIn className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </p>
                </div>
            </div>

            {/* Trust Indicators footer */}
            <div className="mt-4 flex items-center justify-center space-x-6 text-neutral-600 dark:text-neutral-400 opacity-80">
                <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1b4332] dark:text-emerald-400" />
                    <span className="text-[11px] font-semibold">
                        Paiements Orange, MTN &amp; Wave
                    </span>
                </div>
                <div className="flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-[#1b4332] dark:text-emerald-400" />
                    <span className="text-[11px] font-semibold">
                        Certificats Ivoiriens
                    </span>
                </div>
            </div>
        </AuthLayout>
    );
}
