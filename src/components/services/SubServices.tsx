"use client"
import { useTranslations } from "next-intl";
import './services.scss'
import Image from "next/image";
import LinkList from "./LinkList";
import AnimatedSection from "../AnimatedComponent";
import { useMediaQuery } from "@mantine/hooks";
import SubHeader from "../SubHeader";

const SubServices = ({ indexNumber }: { indexNumber: number }) => {

    const t = useTranslations();
    const hizmetlerimiz = t.raw('Hizmetlerimiz');

    const { title, description, image, imageAlternate, subDescription } = hizmetlerimiz.cards[indexNumber];

    const fromDirection = useMediaQuery ('(min-width: 1024px)')

    
    return (
        <>
            <SubHeader title={title} fromDirection="right" duration={1000} shouldShowInView/>

            <section className="sub-grid">
                
                <aside className="sub-aside">
                    
                    <AnimatedSection
                        from={fromDirection ? 'left' : 'bottom'}
                        duration={2000}
                        shouldShowInView
                        className="h-full"
                        >
                        <div className="aside-links ">
                        <LinkList />
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection
                        from="bottom"
                        duration={2000}
                        shouldShowInView
                        className="aside-image-wrapper">
                        <div className="w-full h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={imageAlternate}
                                    alt={`${title} 2`}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 40vw"
                                    className="object-cover rounded-lg p-2"
                                />
                            </div>
                        </div>
                    </AnimatedSection>

                </aside>

                <article className="sub-article">
                    
                    <AnimatedSection
                        from={fromDirection ? 'top' : 'bottom'}
                        duration={2000}
                        shouldShowInView
                        className="description" >
                        <p>{description}</p>
                    </AnimatedSection>

                    <AnimatedSection
                        from={fromDirection ? 'right' : 'bottom'}
                        duration={2000}
                        shouldShowInView
                        hFull
                        className="main-image-wrapper">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 1024px) 40vw, 40vw"
                            className="object-cover rounded-lg p-2"
                            priority
                        />
                    </AnimatedSection>

                    <AnimatedSection
                        from="bottom"
                        duration={2000}
                        shouldShowInView
                        className="description">
                        <p>{subDescription}</p>

                    </AnimatedSection>

                </article>
            
            </section >
        </>
    )
}

export default SubServices;
