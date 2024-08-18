"use client"

import {DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import LanguageSelector from './LanguageSelector'
import { useClickOutside } from '@mantine/hooks'
import { Navigation as NavigationType } from '@/type/Common'


interface NavigationProps {
    navigation: NavigationType
    onClose: () => void
    open : boolean
}

const Navigation = ({ navigation, onClose, open }: NavigationProps) => {


    const ref = useClickOutside(() => onClose())

    return (<div ref={ref}>
        <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-between lg:justify-start">
                    <DisclosureButton className="group inline-flex relative lg:hidden items-center justify-center rounded-md p-2 ring-2 ring-inset ring-white bg-primary">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="text-white block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="text-white hidden h-6 w-6 group-data-[open]:block" />
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
        <MobileMenu open={open} navigation={navigation} />
    </div>)
}

export default Navigation