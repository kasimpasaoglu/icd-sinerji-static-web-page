"use client"

import { useTranslations } from "next-intl"
import AnimatedSection from "../AnimatedComponent";
import Link from "next/link";
import './services.scss'
import SubHeader from "../SubHeader";
import GenericCard from "../GenericCard";


interface Card {
    title: string;
    description: string;
    image: string;
    href: string
    subDescription: string
}

const Services = () => {
    const t = useTranslations();
    const translations = t.raw('Hizmetlerimiz');

    return (
        <>
            <SubHeader title={translations.title} fromDirection="right" shouldShowInView duration={1000} />

            <section className="main-grid">
                <div className="col-span-1 lg:col-span-2">
                    <AnimatedSection from="bottom" duration={2000} shouldShowInView>
                        <p className="services-text">{translations.description}</p>
                    </AnimatedSection>
                </div>

                {translations.cards.map((item: Card, index: number) => {
                    const fromDirection = index % 2 === 0 ? 'left' : 'right';
                    return (
                        <Link
                            key={index}
                            href={item.href}
                        >
                            <AnimatedSection
                                from={fromDirection}
                                duration={2000}
                                shouldShowInView
                                className="flex h-full"
                            >

                                <GenericCard
                                    imageSrc={item.image}
                                    imageAlt={`${item.title.split(' ')[0]}`}
                                    title={item.title}
                                    description={item.description}
                                />
                            </AnimatedSection>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}

export default Services
