import { Navbar } from "@/components/sections/Navbar";
import { HeaderContact } from "./components/Header";
import { ContactForm } from "./components/ContactForm";
import { ParticlesDemo } from "./components/Timezone";
import { ContactCard } from "./components/ContactCard";
import { NowPlaying } from "./components/NowPlaying";
import { Socials } from "./components/Socials";
import { Footer } from "@/components/sections/Footer";


interface Params {
    params: {
        locale: string
    }
}

export default async function Contact({params: {locale}}: Params) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-5 overflow-hidden">
                <HeaderContact />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
                    <ContactForm />
                    <div className="flex flex-col flex-grow gap-5">
                        <ContactCard />
                        <Socials />
                        <NowPlaying />
                        <ParticlesDemo />
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}