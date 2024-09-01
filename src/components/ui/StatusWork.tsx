'use client'

import { useState, useEffect } from "react";
import { XIcon } from "@/assets/icons/TechIcons";
import { CircleIcon } from '@/assets/icons/CircleIcon';
import { useTranslations } from "next-intl";

const statusOptions = {
    Available: {
        name: 'available',
        color: 'bg-green-500'
    },
    NotAvailable: {
        name: 'unavailable',
        color: 'bg-red-500'
    }
};

export function StatusWork({ isAvailable = true, className = '' }) {
    const t = useTranslations('workStatus');
    const [status, setStatus] = useState(
        isAvailable ? statusOptions.Available : statusOptions.NotAvailable
    );

    useEffect(() => {
        setStatus(isAvailable ? statusOptions.Available : statusOptions.NotAvailable);
    }, [isAvailable]);

    const bgColorClass =
        status === statusOptions.Available ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className={`flex items-center w-fit bg-pageBG border-cardBorder border gap-[10px] rounded-[26px] py-[5px] px-[17px] ${className}`} >
            <div className='flex items-center rounded-full'>
                {status === statusOptions.Available ? <CircleIcon /> : <XIcon />}
            </div>
            <p className="uppercase text-textGray text-[11px] sm:text-[13px] font-medium">
                {t(status.name)}
            </p>
        </div>
    );
}
