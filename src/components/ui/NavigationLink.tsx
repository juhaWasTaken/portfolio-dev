'use client';

import { usePathname } from '@/i18n/routing';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';

export default function NavigationLink({
    href,
    ...rest
}: ComponentProps<typeof Link>) {
    const pathname = usePathname();

    // Comparar la ruta completa para determinar si el enlace es activo
    const isActive = pathname === href || (href === '/' && pathname === `/${pathname.split('/')[2]}`);

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            href={href}
            className={`nav-link ${isActive ? 'nav-link-active' : 'nav-link'}`}
            {...rest}
        />
    );
}