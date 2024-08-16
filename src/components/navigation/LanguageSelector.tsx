import { locales } from '@/i18n'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { TR, GB } from 'country-flag-icons/react/3x2'
import React from 'react'
import AnimatedSection from '../AnimatedComponent'

const localeMap = new Map([
    ['tr', { name: 'Turkce', flag: <TR className='size-5' /> }],
    ['en', { name: 'English', flag: <GB className='size-5' /> }]
])

const LanguageSelector = () => {
    const pathname = usePathname()
    const [, locale, ...rest] = pathname.split('/')
    const [open, setOpen] = useState<boolean>(false)

    const CurrentFlag = localeMap.get(locale)?.flag

    return (
        <div className='relative'>
            <button
                type='button'
                onClick={() => setOpen(!open)}
                className="h-11 inline-flex items-center justify-center rounded-md p-2 ring-2 ring-inset ring-white bg-primary"
            >
                {CurrentFlag}
                <ChevronDownIcon className={clsx(open && "-rotate-180", "transition size-4 fill-white/60")} />
            </button>
            <AnimatedSection duration={300} show={open} className='absolute top-12 right-0' >
                <ul className="w-32 p-2 rounded-md shadow-lg bg-gray-100 ring-1 ring-primary ring-opacity-5 mt-2 text-black">
                    {locales.map((locale, index) => (
                        <li key={`${locale}-${index}}`}>
                            <Link href={`/${locale}/${rest.join('/')}`} className="group flex w-full items-center gap-2 py-1 px-2 rounded-md data-[focus]:bg-white/90 hover:bg-primarylight">
                                <span className="mr-2">{localeMap.get(locale)!.flag}</span>
                                {localeMap.get(locale)!.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </AnimatedSection>
        </div>
    )
}



export default LanguageSelector

