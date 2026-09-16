import { Form, Head, Link } from "@inertiajs/react";
import {
    ArrowRight,
    Eye,
    EyeOff,
    Lock,
    Mail,
    ShieldCheck,
    Smartphone,
    Star,
} from "lucide-react";
import { useState } from "react";
import InputError from "@/components/input-error";
import PasskeyVerify from "@/components/passkey-verify";
import { Spinner } from "@/components/ui/spinner";
import AuthLayout from "@/layouts/auth-layout";
import { register } from "@/routes";
import { store } from "@/routes/login";
import { request } from "@/routes/password";

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <AuthLayout>
            <Head title="Se connecter" />

            <div className="w-full bg-white dark:bg-[#1c1c1e] rounded-xl shadow-xl p-8 sm:p-10 relative overflow-hidden border border-neutral-200/80 dark:border-white/10">
                {/* Decorative background glows */}
                <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#c1ecd4] dark:bg-emerald-900/30 opacity-40 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-[#ffddb5] dark:bg-amber-900/20 opacity-30 blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center p-2.5 transition-transform duration-300 hover:scale-105 shadow-xs">
                        <img
                            alt="Logo Plateforme E-Learning CI"
                            className="w-full h-full object-contain rounded-lg"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pl6RF5eViYTYa2A7I8p9BkB0nBxYHP71qjEPOrBB5qFyho1VmkS0N5HLtyFWfvDXG33g_qsuSRnKuo3ax-Ib7_I46NU0JcgjwQqVkCPJnK9IqVo6eK31wdt7r3LXqsGGN72zJCo3qVhsgTdRds1EbZ5CdJSaBD-VI4Neujs03KK-6leK_CHkUUzeYiIGXLeNSP4HN4ghVOv-cebiO9-SLEY4qCNQeAPRKPRv39UY6ospkz6Y2L8"
                        />
                    </div>
                    <span className="text-[11px] uppercase tracking-widest text-[#46655a] dark:text-emerald-400 font-semibold mb-1">
                        E-learning Côte d'Ivoire
                    </span>
                    <h1 className="font-['Sora'] text-[24px] font-semibold text-neutral-900 dark:text-white tracking-tight mb-2">
                        Content de te revoir
                    </h1>
                    <p className="text-[15px] text-neutral-600 dark:text-neutral-400 max-w-xs">
                        Connecte-toi pour continuer tes cours
                    </p>
                </div>

                {status && (
                    <div className="relative z-10 mt-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center text-sm font-medium text-emerald-700 dark:text-emerald-300">
                        {status}
                    </div>
                )}

                {/* <div className="relative z-10 mt-6">
                    <PasskeyVerify />
                </div> */}

                {/* Form */}
                <Form
                    {...store.form()}
                    resetOnSuccess={["password"]}
                    className="relative z-10 mt-6 flex flex-col space-y-5"
                >
                    {({ processing, errors }) => (
                        <>
                            {/* Email */}
                            <div className="flex flex-col space-y-1.5 text-left">
                                <label
                                    className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                    htmlFor="email"
                                >
                                    Adresse email
                                </label>
                                <div className="relative flex items-center">
                                    <Mail className="absolute left-3.5 text-neutral-500 dark:text-neutral-400 w-5 h-5 pointer-events-none select-none" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="etudiant@domaine.ci"
                                        className="w-full h-11 pl-11 pr-4 bg-white dark:bg-[#141414] text-neutral-900 dark:text-white text-[15px] rounded-lg shadow-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-800 outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent"
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col space-y-1.5 text-left">
                                <label
                                    className="text-[13px] font-semibold text-neutral-900 dark:text-neutral-200"
                                    htmlFor="password"
                                >
                                    Mot de passe
                                </label>
                                <div className="relative flex items-center">
                                    <Lock className="absolute left-3.5 text-neutral-500 dark:text-neutral-400 w-5 h-5 pointer-events-none select-none" />
                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••••••"
                                        className="w-full h-11 pl-11 pr-11 bg-white dark:bg-[#141414] text-neutral-900 dark:text-white text-[15px] rounded-lg shadow-xs placeholder:text-neutral-400 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-800 outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-[#1b4332] dark:focus:ring-emerald-500 focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        tabIndex={-1}
                                        aria-label="Afficher ou masquer le mot de passe"
                                        className="absolute right-3.5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white focus:outline-none transition-colors duration-150 cursor-pointer flex items-center justify-center p-1"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center space-x-2.5 cursor-pointer select-none">
                                    <input
                                        id="rememberMe"
                                        name="remember"
                                        type="checkbox"
                                        tabIndex={3}
                                        className="w-4 h-4 rounded text-[#1b4332] dark:text-emerald-500 bg-white focus:ring-0 focus:outline-none cursor-pointer accent-[#1b4332]"
                                    />
                                    <span className="text-[13px] font-semibold text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 transition-colors">
                                        Se souvenir de moi
                                    </span>
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={request()}
                                        tabIndex={5}
                                        className="text-[13px] font-semibold text-[#1b4332] dark:text-emerald-400 hover:underline transition-colors"
                                    >
                                        Mot de passe oublié ?
                                    </Link>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                                className="w-full h-12 bg-[#1b4332] hover:bg-[#0f281e] text-white font-['Sora'] text-[16px] font-semibold rounded-lg shadow-md active:scale-[0.99] transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer mt-2 disabled:opacity-70"
                            >
                                {processing ? (
                                    <Spinner className="w-5 h-5 text-white" />
                                ) : (
                                    <>
                                        <span>Se connecter</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </>
                    )}
                </Form>

                {/* Separator */}
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

                {/* Footer */}
                <div className="relative z-10 mt-8 pt-5 text-center border-t border-neutral-200 dark:border-neutral-800">
                    <p className="text-[14px] text-neutral-600 dark:text-neutral-400">
                        Pas encore de compte ?{" "}
                        <Link
                            href={register()}
                            className="font-['Sora'] text-[14px] font-semibold text-[#1b4332] dark:text-emerald-400 hover:underline ml-1"
                        >
                            Créer un compte
                        </Link>
                    </p>
                </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex items-center justify-center space-x-6 text-neutral-600 dark:text-neutral-400 opacity-80">
                <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#46655a] dark:text-emerald-400" />
                    <span className="text-[11px] font-semibold">
                        Connexion chiffrée SSL
                    </span>
                </div>
                <span className="text-neutral-400 dark:text-neutral-600">
                    •
                </span>
                <div className="flex items-center space-x-1.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-[11px] font-semibold">
                        +45k Apprenants CI
                    </span>
                </div>
            </div>
        </AuthLayout>
    );
}
