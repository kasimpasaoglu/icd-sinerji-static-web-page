"use client"
import { useTranslations } from "next-intl"
import SubHeader from "../SubHeader"
import AnimatedSection from "../AnimatedComponent"
import ReferencesCards from "./ReferancesCards"
import { useEffect, useState } from "react";


interface Project {
    title: string;
    images: string[];
}


const Referances = () => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
    

    const t = useTranslations('Referanslar')
    const y = useTranslations()
    const u = y.raw('Referanslar') || {};
    const cards: Project[] = u.projects || []

    return (
        <>
            <SubHeader title={t('title')} />
            <section className="max-w-7xl min-h-screen mx-auto justify-center items-center">

                <article className="flex flex-wrap h-full p-6">
                    <AnimatedSection from="top" duration={2000} shouldShowInView className="py-10 px-16 my-8 shadow-lg rounded-lg italic">
                        <p>{t('description')}</p>
                    </AnimatedSection>
                </article>


                <div className={`p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 opacity-0 transition-opacity duration-1000 ease-in-out delay-200 ${isVisible ? 'opacity-100' : 'opacity-0' } `}>
                    {cards.slice().reverse().map((card: Project, index: number) => (  // toReverse() kullanmayi denedim hata verdi, yeni fonksiyonmus desteklemiyormus aq... 
                        <ReferencesCards
                            key={index}
                            title={card.title}
                            images={card.images} />
                    ))}
                </div>

            </section>
        </>
    );
}

export default Referances