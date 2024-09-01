import Image from 'next/image';
import Sticker from '@/assets/images/stickerWink.webp'
import { useTranslations } from 'next-intl';

export function HeaderContact() {
    const t = useTranslations('headerContact')
    return (
        <header className="bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[40px] sm:px-[42px] sm:py-[60px] overflow-hidden">
            <div className="flex flex-col gap-[30px] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-[28px] order-last sm:order-first w-full sm:w-1/2">
                    <h1 className="text-orangePrimary font-semibold text-2xl sm:text-4xl text-balance">{t('title')}</h1>
                    <p className="text-textGray text-base lg:text-lg leading-[1.2em] text-pretty">{t('text')}</p>
                </div>
                <div className="flex items-center justify-center bg-circleBigBG w-fit rounded-full p-[12px] border-circlesBorder border ">
                    <div className="bg-cardBorder w-fit rounded-full border border-circlesBorder p-2 ">
                        <Image src={Sticker} alt={t('altImg')} width='132' height='132' className="transition-all hover:scale-125 " loading='eager' quality={100} priority />
                    </div>
                </div>
            </div>
        </header>
    );
}