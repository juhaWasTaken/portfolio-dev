

import ShimmerButton from "@/components/magicui/shimmer-button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export function ShimmerButtonUI() {
    const  t  = useTranslations('contact');
    return (
        <div className="z-10 flex items-center justify-center">
            <Link href='/contact'>
                <ShimmerButton className="shadow-2xl" >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        {t('button')}
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    )
}