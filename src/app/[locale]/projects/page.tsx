import { Navbar } from "@/components/sections/Navbar";
import { HeaderWorks } from "./components/Header";
import { Works } from "./components/Works";
import { Footer } from "@/components/sections/Footer";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


interface Params {
    params: {
        locale: string
    }
}

export async function generateMetadata({ params: { locale } }: Params) {
    const t = await getTranslations({ locale, namespace: 'LocaleLayout' })
    return {
        title: t('titleProjects')
    }
}

export default async function Projects({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-5 overflow-hidden">
                <HeaderWorks />
                <section>
                    <Works />
                </section>
                <Footer />
            </main>
        </>
    )
}