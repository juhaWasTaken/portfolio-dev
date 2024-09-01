import Image from "next/image";
import IMGExample from '../../assets/images/IMGExample.png'
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";


export function WorkExample({className=""}) {
    
    const t = useTranslations('workExample')

    return (
        <section className={`flex flex-col justify-between bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] py-[60px] sm:px-[40px] sm:py-[60px] overflow-hidden ${className}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between min-w-fit gap-[15px]">
                <div className="flex flex-col items-start gap-[5px]">
                    <h2 className="font-semibold text-[18px]">{t('title')}</h2>
                    <p className="text-[14px]">{t('ctaText')} <Link className="text-orangePrimary" href="/projects">{t('here')}</Link></p>
                </div>
                <Link className="bg-orangePrimary rounded-full p-1 w-fit" href="/projects"><ArrowRight className="text-white" width="24" height="24" /></Link>
            </div>
            <div className="flex-grow flex items-center justify-center ">
                <Image src={IMGExample} alt={t('altImg')} className="h-auto w-auto mb-[-240px]" priority loading="eager" quality={100}/> {/* w-full h-auto object-contain mb-[-240px] */}
            </div>
        </section>
    )
}