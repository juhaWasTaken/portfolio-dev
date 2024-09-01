import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
  return {
    metadataBase: new URL(siteUrl),
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: 'Carlos Gallaga Portfolio',
      description: 'Discover my portfolio where I show my outstanding projects, stack and skills. Specialized in creating websites and web applications with advanced and modern technologies. I like to create applications and web pages with a great user experience.',
      type: 'website',
      locale: 'es_MX',
      url: 'https://carlosgallaga.com',
      siteName: 'Carlos Gallaga - Portfolio',
    }
  }
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {

  unstable_setRequestLocale(locale);
  const messages = await getMessages()

  return (
    <html lang={locale} >
      <body className={`flex flex-col gap-5 bg-pageBG text-white py-[64px] px-4 sm:px-6 mx-auto max-w-[1216px] ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position="bottom-right" reverseOrder={false} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
