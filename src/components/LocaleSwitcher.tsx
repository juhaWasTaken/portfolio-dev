import { useState } from 'react';
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from 'next/navigation';
import { CircleFlag } from 'react-circle-flags';
import { ChevronDown } from 'lucide-react';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLocaleChange = (newLocale: string) => {
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded focus:outline-none outline-none"
            >
                <CircleFlag countryCode={locale === 'en' ? 'us' : 'es'} style={{ width: '24px', height: '24px' }} />
                <ChevronDown className={`transition-transform duration-200 w-4 h-4 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute bg-cardBorder border border-gray-300 mt-2 rounded shadow-lg">
                    {routing.locales.map((cur) => (
                        <div
                            key={cur}
                            onClick={() => handleLocaleChange(cur)}
                            className="flex items-center p-2 hover:bg-gray-200 cursor-pointer w-max"
                        >
                            <CircleFlag countryCode={cur === 'en' ? 'us' : 'es'} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                            <span>{t('locale', { locale: cur })}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
