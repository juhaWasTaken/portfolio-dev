'use client';

import LocaleSwitcher from '../LocaleSwitcher';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NavigationLink from '../ui/NavigationLink';

export function Navbar() {
    const t = useTranslations('nav');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="flex flex-col gap-5 items-center justify-center">
            <div className='flex w-full'>
                <div className="bg-cardBG border-cardBorder border-[2px] rounded-full p-[10px]">
                    <LocaleSwitcher />
                </div>
                <div className="justify-end py-5 px-[32px] flex flex-grow min-h-[64px] items-center sm:justify-between bg-cardBG border-cardBorder border-[2px] sm:py-4 sm:px-[66px] rounded-[48px]">
                    <div className="hidden sm:flex sm:flex-grow sm:justify-between">
                        <NavigationLink href="/" >{t('home')}</NavigationLink>
                        <NavigationLink href="/projects" >{t('projects')}</NavigationLink>
                        <NavigationLink href="/contact" >{t('contact')}</NavigationLink>
                    </div>
                    <div className="block sm:hidden" onClick={toggleMenu}>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all mb-1 ${isMenuOpen ? 'transform rotate-45 translate-x-[-5px] translate-y-[6px]' : ''}`}></div>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all ${isMenuOpen ? 'transform -rotate-45 translate-x-[-5px] translate-y-[-6px]' : ''}`}></div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className='flex flex-col items-center gap-5 sm:hidden bg-cardBG border-cardBorder border-[2px] rounded-[14px] p-4 overflow-hidden w-full'>
                    <NavigationLink href="/" >{t('home')}</NavigationLink>
                    <NavigationLink href="/projects" >{t('projects')}</NavigationLink>
                    <NavigationLink href="/contact" >{t('contact')}</NavigationLink>
                </div>
            )}
        </nav>
    );
}

