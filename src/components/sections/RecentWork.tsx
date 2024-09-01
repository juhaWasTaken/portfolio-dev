import { useTranslations } from "next-intl"

export function RecentWork({ className = "" }) {

    const t = useTranslations('recentWork')

    const allWorks = [
        {
            rol: 'works.work1.role',
            date: 'works.work1.date',
            company: 'works.work1.company'
        },
        {
            rol: 'works.work2.role',
            date: 'works.work2.date',
            company: 'works.work2.company'
        },
        {
            rol: 'works.work3.role',
            date: 'works.work3.date',
            company: 'works.work3.company'
        },
    ]

    return (
        <section className={`flex flex-col h-fit gap-[40px] sm:gap-[70px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] py-[60px] sm:px-[40px] sm:py-[60px] overflow-hidden ${className}`}>
            <div>
                <h2 className="text-textGray text-xl font-medium">{t('title')}</h2>
            </div>

            {
                allWorks.map(((work, index) =>
                    <div key={index} className="flex flex-col gap-[20px] lg:flex-row lg:items-center sm:justify-between">
                        <div className="flex flex-col justify-between sm:flex-col ">
                            <h3 className="text-[16px] sm:text-[22px]">{t(work.rol)}</h3>
                            <p className="text-textGray text-[13px] sm:text-[16px] italic">{t(work.date)}</p>
                        </div>
                        <p className="text-textGray text-[13px] sm:text-[18px]">{t(work.company)}</p>
                    </div>
                ))
            }
        </section>
    )
}