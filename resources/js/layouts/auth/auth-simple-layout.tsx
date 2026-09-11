import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="bg-[#fcf9f8] dark:bg-[#141414] font-['Manrope'] text-neutral-900 dark:text-white antialiased min-h-screen flex items-center justify-center p-4 sm:p-8">
            <main className="w-full max-w-md">
                <div className="flex flex-col w-full">
                    {title ? (
                        <div className="relative bg-white dark:bg-[#1c1c1e] rounded-xl shadow-xl p-6 sm:p-8 overflow-hidden border border-neutral-200/80 dark:border-white/10">
                            <div className="flex flex-col items-center gap-3 mb-6 text-center">
                                <Link
                                    href={home()}
                                    className="flex flex-col items-center gap-2 font-medium"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-neutral-100 dark:bg-white/5 p-2 flex items-center justify-center shadow-xs">
                                        <img
                                            alt="Logo Plateforme E-Learning CI"
                                            className="w-full h-full object-contain rounded-lg"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY6pl6RF5eViYTYa2A7I8p9BkB0nBxYHP71qjEPOrBB5qFyho1VmkS0N5HLtyFWfvDXG33g_qsuSRnKuo3ax-Ib7_I46NU0JcgjwQqVkCPJnK9IqVo6eK31wdt7r3LXqsGGN72zJCo3qVhsgTdRds1EbZ5CdJSaBD-VI4Neujs03KK-6leK_CHkUUzeYiIGXLeNSP4HN4ghVOv-cebiO9-SLEY4qCNQeAPRKPRv39UY6ospkz6Y2L8"
                                        />
                                    </div>
                                    <span className="sr-only">{title}</span>
                                </Link>

                                <div className="space-y-1 text-center">
                                    <h1 className="font-['Sora'] text-[20px] font-semibold text-neutral-900 dark:text-white">
                                        {title}
                                    </h1>
                                    {description && (
                                        <p className="text-[13px] text-neutral-600 dark:text-neutral-400 max-w-xs">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            </div>
                            {children}
                        </div>
                    ) : (
                        children
                    )}
                </div>
            </main>
        </div>
    );
}
