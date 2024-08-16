import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.scss"; // added
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';
import { Suspense } from 'react';
import Loading from './loading';

export const generateMetadata = () => {
    // Burada image leride open graph olarak eklenebilir 

    return {
        title: "ICD Sinerji"
    }
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className=''>
                <NextIntlClientProvider messages={messages}>
                    <Navbar locale={locale} />
                    <Suspense fallback={<Loading />}>
                        <main className='flex flex-col items-center'>{children}</main>
                    </Suspense>
                    <Footer locale={locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}