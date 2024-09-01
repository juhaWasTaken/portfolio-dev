import { useTranslations } from "next-intl";
import { BorderBeam } from "../magicui/border-beam";

function ServiceCardDev() {
    const t = useTranslations('services')
    return (
        <div className="relative flex flex-col bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[30px] py-[35px] sm:px-[40px] sm:py-[60px] overflow-hidden min-w-fit w-full z-20">
            <BorderBeam />
            <h2 className=" text-textGray font-medium text-[16px] sm:text-[22px] z-20 text-center">{t('developer')}</h2>
            <div className="absolute inset-0 bg-card-gradient z-[-10]"></div> 
        </div>
    )
}

function ServiceCardUI() {
    const t = useTranslations('services')
    return (
        <div className="relative flex flex-col items-center justify-center bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[20px] py-[30px] sm:px-[40px] sm:py-[50px] overflow-hidden sm:min-h-[150px] w-full z-20">
            <h2 className=" text-textGray font-medium text-[16px] sm:text-[22px] z-20 text-center text-balance">{t('designUX')}</h2>
            <BorderBeam />
            <div className="absolute inset-0 bg-card-gradient2 z-[-10]"></div> 
        </div>
    )
}

function ServiceCardDesg() {
    const t = useTranslations('services')
    return (
        <div className="relative flex flex-col items-center justify-center bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[20px] py-[30px] sm:px-[40px] sm:py-[50px] overflow-hidden sm:min-h-[150px] w-full z-20">
            <h2 className=" text-textGray font-medium text-[16px] sm:text-[22px] z-20 text-center">{t('design')}</h2>
            <div className="absolute inset-0 bg-card-gradient3 z-[-10]"></div> 
            <BorderBeam />
        </div>
    )
}

export function Services() {
    return (
        <section className="flex flex-col gap-5 ">

            <ServiceCardDev />

            <section className="flex flex-col sm:flex-row gap-5">

                <ServiceCardUI />
                <ServiceCardDesg />

            </section>
        </section>
    );
}
