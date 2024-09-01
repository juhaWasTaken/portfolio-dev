'use client';

import { useLocale, useTranslations } from "next-intl";
import { MessageCircle, Copy, Download } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';
import { BorderBeam } from "@/components/magicui/border-beam";

export function ContactCard() {
    const t = useTranslations('contactCard');
    const locale = useLocale();

    const handleCopyEmail = () => {
        const email = 'carlos.gallagav@gmail.com'; // Reemplaza con tu correo real
        navigator.clipboard.writeText(email)
            .then(() => {
                toast.success(t('copySuccess'));
            })
            .catch(() => {
                toast.error(t('copyError'));
            });
    };

    const handleDownloadCV = () => {
        const cvUrl = locale === 'es' ? '/cvs/Carlos-Gallaga-CV.pdf' : '/cvs/Carlos-Gallaga-CV-EN.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = locale === 'es' ? 'Carlos-Gallaga-CV-ES.pdf' : 'Carlos-Gallaga-CV-EN.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(t('downloadSuccess'));
    };

    return (
        <section className="relative flex flex-col gap-10 bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[25px] py-[40px] sm:px-[40px] sm:py-[40px] overflow-hidden z-20">
            <div>
                <div className="flex gap-2 items-center justify-center bg-pageBG border border-borderNew/10 w-fit px-4 py-1 rounded-full mb-3">
                    <MessageCircle size={16} className="text-white" />
                    <p className="text-gray text-sm">{t('badge')}</p>
                </div>
                <p className="text-white text-sm ">
                    {t('text-1')} <br />
                    {t('text-2')}
                </p>
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex items-center gap-3 md:gap-5 bg-pageBG hover:bg-contactBtnHover transition-all hover:border-[1.5px] border border-borderNew/10 rounded-md px-4 py-1 text-white sm:w-1/2 text-left justify-between text-xs md:text-sm lg:text-base w-full"
                    onClick={handleCopyEmail}
                >
                    {t('correoBtn')}
                    <span>
                        <Copy size={16} className="text-white" />
                    </span>
                </button>
                <button
                    className="flex items-center gap-3 md:gap-5 bg-pageBG hover:bg-contactBtnHover transition-all hover:border-[1.5px] border border-borderNew/10 rounded-md px-4 py-1 text-white sm:w-1/2 text-left justify-between text-xs md:text-sm lg:text-base w-full"
                    onClick={handleDownloadCV}
                >
                    {t('cvBtn')}
                    <span>
                        <Download size={16} className="text-white" />
                    </span>
                </button>
            </div>
            <div className="absolute inset-0 bg-card-gradient z-[-10]"></div>
            <BorderBeam />
        </section>
    );
}
