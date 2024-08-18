"use client"

import "./MobileMenu.scss"
import { Disclosure, DisclosureButton } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import Link from 'next/link'
import { Navigation } from '@/type/Common'
import { useEffect, useState } from "react"
import { useClickOutside } from "@mantine/hooks"



interface MobileMenuProps {
    open: boolean
    navigation: Navigation
    onClose: () => void
}



const MobileMenu = ({ open, navigation, onClose }: MobileMenuProps) => {


    const ref = useClickOutside(() => onClose())




    return (
        <div ref={ref} className={clsx("icd-mobile-menu", open ? "max-h-[450px]" : "max-h-0")}>
            <div className="wrapper">
                {navigation.items.map((item) => (
                    <div key={item.name}>
                        {item.href ? (
                            <Link href={item.href} className={clsx("link-item", item.isActive && "active")}>
                                {item.name}
                            </Link>
                        ) : (
                            <Disclosure as="div" key={item.name} className="space-y-1">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className={clsx(item.isActive && "active", "link-disclosure-button")}>
                                            {item.name}
                                            <ChevronDownIcon className={clsx(open && "-rotate-180", "transition duration-500 size-4 fill-white/80")} />
                                        </DisclosureButton>
                                        <div className={clsx("subitem-wrapper", open ? "max-h-32" : "max-h-0")}>
                                            {item.subitems?.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className={clsx(subitem.isActive && "active", "subitem-link")}
                                                >
                                                    {subitem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </Disclosure>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileMenu