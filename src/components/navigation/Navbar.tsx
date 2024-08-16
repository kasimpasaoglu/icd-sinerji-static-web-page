"use client"

import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { Navigation } from '@/type/Common'
import DesktopMenu from './DesktopMenu'
import LanguageSelector from './LanguageSelector'


interface NavbarProps {
    locale: string
}

const Navbar = ({ locale }: NavbarProps) => {
    const t = useTranslations('Common')
    const pathname = usePathname()

    const navigation = {
        items: [
            { name: t('AnaSayfa'), href: `/${locale}`, isActive: pathname === `/${locale}` },
            { name: t('Hizmetlerimiz'), href: `/${locale}/hizmetlerimiz`, isActive: pathname.includes(`hizmetlerimiz`) },
            {
                name: t('Kurumsal'),
                isActive: pathname.includes(`kurumsal`),
                subitems: [
                    { name: t('Hakkimizda'), href: `/${locale}/kurumsal/hakkimizda`, isActive: pathname.includes(`kurumsal/hakkimizda`) },
                    { name: t('Misyonumuz'), href: `/${locale}/kurumsal/misyonumuz`, isActive: pathname.includes(`kurumsal/misyonumuz`) },
                    { name: t('Vizyonumuz'), href: `/${locale}/kurumsal/vizyonumuz`, isActive: pathname.includes(`kurumsal/vizyonumuz`) }
                ]
            },
            { name: t('Uygulamalar'), href: `/${locale}/uygulamalar`, isActive: pathname.includes(`uygulamalar`) },
            { name: t('Referanslar'), href: `/${locale}/referanslar`, isActive: pathname.includes(`referanslar`) },
            { name: t('Partnerlerimiz'), href: `/${locale}/partnerlerimiz`, isActive: pathname.includes(`partnerlerimiz`) },
            { name: t('Iletisim'), href: `/${locale}/iletisim`, isActive: pathname.includes(`iletisim`) },
        ]
    } as Navigation;

    return (
        <Disclosure as="nav" className="bg-gray-400 sticky top-0 z-50">
            {({ open }: { open: boolean }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-between lg:justify-start">
                                <DisclosureButton className="group inline-flex relative lg:hidden items-center justify-center rounded-md p-2 ring-2 ring-inset ring-white bg-primary">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                                <div className="flex flex-shrink-0 items-center relative w-20 h-10">
                                    <Image
                                        src='/assets/logo/icd-logo-only.png'
                                        alt='logo'
                                        fill
                                        sizes='20vw'
                                        style={{ objectFit: 'contain' }}
                                        priority
                                        className='drop-shadow-lg'
                                    />
                                </div>
                                <DesktopMenu navigation={navigation} />
                                <div className='lg:ml-auto'>
                                <LanguageSelector />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <MobileMenu open={open} navigation={navigation} />
                </>
            )}
        </Disclosure>
    )
}

export default Navbar