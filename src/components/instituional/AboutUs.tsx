"use client"
import { useTranslations } from "next-intl"
import SubHeader from "../SubHeader"
import AboutUsCarousel from "./AboutUsCarousel"
import AnimatedSection from "../AnimatedComponent";
import './instituional.scss'




const AboutUs = () => {

    const t = useTranslations('Hakkimizda')

    return (<>
        <SubHeader title={t('title')} fromDirection="top" />
        <section className="main-grid-aboutus">

            <AnimatedSection
                from="left"
                duration={2000}
                shouldShowInView
                className="left-col-animated"
                hFull>
                <div className="content">
                    <h3 className="sub-title">{t('subTitle')}</h3>
                    <p>{t('description')}</p>
                </div>
            </AnimatedSection>

            <div className="right-col-wrapper">
                <AnimatedSection
                    from="right"
                    duration={2000}
                    shouldShowInView
                    className="right-col-animated"
                    hFull>
                    <AboutUsCarousel />
                </AnimatedSection>
            </div>

        </section>
    </>)
}

export default AboutUs