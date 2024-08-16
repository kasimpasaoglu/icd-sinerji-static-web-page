'use client'

import Image from 'next/image';
import { useLocale, useTranslations } from "next-intl";
import Link from 'next/link';

interface Project {
    title: string
    images: string[]
}

const LastProjects = () => {

    const locale = useLocale() 
    const f = useTranslations('Common')
    const y = useTranslations()
    const projects:Project[] = y.raw("Referanslar").projects
    const lastProjects = projects.slice(-3)

    console.log("locale,", locale)

    return (
        <div className="last-projects-wrapper">
            <h4 className="last-projects-title">{f('projectsTitle')}</h4>
            <hr className='last-projects-line' />
            <div className='last-projects-sub-wrapper'>
                {lastProjects.map((item) => (
                    <Link key={item.title} href={`/${locale}/referanslar`} className='last-project-link'>
                        <div className="image-wrapper">
                            <Image
                                className='last-projects-link-image'
                                src={item.images[0]}
                                alt={item.title}
                                fill
                                sizes="(max-width: 600px) 50vw, (max-width: 1200px) 40vw, 33vw"
                                style={{ objectFit: 'cover' }}
                                quality={70}
                            />
                        </div>
                        <h5 className='last-projects-link-title'>{item.title}</h5>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default LastProjects