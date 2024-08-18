"use client"

import { Disclosure } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { Navigation  as NavigationType} from '@/type/Common'
import Navigation from './Navigation'



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
    } as NavigationType;

    return (
        <Disclosure as="nav" className="bg-gray-400 sticky top-0 z-50">
            {({ open, close }: { open: boolean, close:() => void }) => (
                <>
                    <Navigation onClose={() => close()} navigation={navigation} open={open}/>                    
                </>
            )}
        </Disclosure>
    )
}

export default Navbar