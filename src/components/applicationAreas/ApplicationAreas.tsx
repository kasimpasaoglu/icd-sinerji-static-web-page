"use client";
import React from "react";
import SubHeader from "../SubHeader";
import { useTranslations } from "next-intl";
import GenericCard from "../GenericCard";
import AnimatedSection from "../AnimatedComponent";
import "./appareas.scss";


interface Card {
    title: string;
    description: string;
    image: string;
}


const ApplicationAreas = () => {
    const t = useTranslations('Uygulamalar')

    const y = useTranslations();
    const uygulamalar = y.raw('Uygulamalar')

    return (<>
        <SubHeader title={t('title')} />
        <section className="main-wrapper">

            <div className="text-wraper">
                <p>{t('description')}</p>
            </div>

            {uygulamalar.cards.map((item: Card, index: number) => {
                const fromDirection = index % 2 === 0 ? 'left' : 'right';
                return (
                    <div key={index} className="card-wrapper">
                        <AnimatedSection
                            
                            from={fromDirection}
                            duration={2000}
                            shouldShowInView
                            className="flex h-full">

                            <GenericCard
                                imageSrc={item.image}
                                imageAlt={item.title}
                                title={item.title}
                                description={item.description}
                            />

                        </AnimatedSection>

                    </div>
                )
            })}

        </section>
    </>);
};

export default ApplicationAreas;
