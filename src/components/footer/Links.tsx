import { useTranslations } from "next-intl"
import Link from "next/link"



interface FooterProps {
    locale: string
}

const Links = ({ locale }: FooterProps) => {
    const t = useTranslations('Common')

    const navigation = [
        { name: t('AnaSayfa'), href: '/' },
        { name: t('Hizmetlerimiz'), href: `/${locale}/hizmetlerimiz` },
        {
            name: t('Kurumsal'),
            subitems: [
                { name: t('Hakkimizda'), href: `/${locale}/kurumsal/hakkimizda` },
                { name: t('Misyonumuz'), href: `/${locale}/kurumsal/misyonumuz` },
                { name: t('Vizyonumuz'), href: `/${locale}/kurumsal/vizyonumuz` }
            ]
        },
        { name: t('Uygulamalar'), href: `/${locale}/uygulamalar` },
        { name: t('Referanslar'), href: `/${locale}/referanslar` },
        { name: t('Partnerlerimiz'), href: `/${locale}/partnerlerimiz` },
        { name: t('Iletisim'), href: `/${locale}/iletisim` },
    ]


    return (
        <div className='q-links-wrapper'>
            <h4 className="q-links-title">{t('linksTitle')}</h4>
            <hr className='q-links-line' />
            <div className='q-links-sub-wrapper'>
                {navigation.map((item) =>
                    item.href ? (
                        <Link className='q-links' key={item.name} href={item.href}>˃ {item.name}</Link>
                    ) : (
                        item.subitems &&
                        item.subitems.map((subitem) => (
                            <Link className='q-links' key={subitem.name} href={subitem.href}>˃ {subitem.name}</Link>
                        ))
                    )
                )}
            </div>
        </div>
    )
}

export default Links