import { useTranslations } from "next-intl"
import SubHeader from "../SubHeader"
import AnimatedSection from "../AnimatedComponent"
import Image from "next/image"
import "./partners.scss"



const Partners = () => {
    const t = useTranslations()
    const partners = t.raw('Partnerlerimiz')

    const f = useTranslations('Partnerlerimiz')

    return (<>
        <SubHeader title={f('title')} shouldShowInView />

        <section className="partners-wrapper">
            <article className="partners-article">
                <AnimatedSection from="top" duration={2000} shouldShowInView className="article-animated">
                    <p>
                        {f('description')}
                    </p>
                </AnimatedSection>

                <AnimatedSection
                    from="bottom"
                    duration={2000}
                    shouldShowInView
                    className="logo-section"
                    hFull>
                    {partners.logos.map((item: string, index: number) =>
                        <div key={index} className="logo-wrapper">
                            <Image
                                src={item}
                                alt={`Partner ${index + 1}`}
                                fill
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                className="logos"
                            />
                        </div>
                    )}
                </AnimatedSection>
            </article>
        </section>
    </>)
}

export default Partners