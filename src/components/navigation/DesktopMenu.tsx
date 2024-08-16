"use client"

import "./DesktopMenu.scss"
import clsx from "clsx"
import Link from 'next/link'
import { Navigation } from '@/type/Common'


interface DesktopMenuProps {
    navigation: Navigation
}

const DesktopMenu = ({ navigation }: DesktopMenuProps) => {
    return (
        <div className={clsx("icd-desktop-menu")}>
            <div className="wrapper">
                {navigation.items.map((item) => (
                    item.href ? (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx("link-item", item.isActive && "active")}
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <div key={item.name} className='subwrapper group'>
                            <button
                                className={clsx("sublink-button", item.isActive && "active")}
                            >
                                {item.name}
                            </button>
                            <div className="absolute left-0 mt-3 w-48 origin-top-right rounded-md shadow-lg bg-gray-100 ring-1 ring-primary ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2">
                                <div className="dropdown-arrow"></div>
                                {item.subitems?.map((subitem) => (
                                    <Link
                                        key={subitem.name}
                                        href={subitem.href}
                                        className={clsx("sublink-item", subitem.isActive && "active")}
                                    >
                                        {subitem.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )
                ))}

            </div>
        </div>
    )
}

export default DesktopMenu
