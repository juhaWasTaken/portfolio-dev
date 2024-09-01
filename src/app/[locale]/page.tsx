
import { Header } from "@/components/sections/Header";
import { RecentWork } from "@/components/sections/RecentWork";
import { Socials } from "@/components/sections/Socials";
import { WorkExample } from "@/components/sections/WorkExample";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { ContactIdea } from "@/components/sections/ContacIdea";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Params {
  params: {
    locale: string;
  }
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title')
  }
}

export default async function Home({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-5 overflow-hidden">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
          <div className="grid grid-rows-[auto_auto_1fr] gap-5 self-start h-full">
            <RecentWork className="max-h-fit" />
            <Socials className="max-h-fit" />
            <WorkExample className="h-full w-full" />
          </div>
          <div className="flex flex-col flex-grow gap-5">
            <Services />
            <Stack /> {/*  */}
            <ContactIdea />
          </div>
        </section>
        <Footer />
      </main>
    </>

  );
}
