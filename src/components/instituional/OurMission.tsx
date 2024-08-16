"use client"
import { useTranslations } from "next-intl"
import SubHeader from "../SubHeader"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUsCarousel from "./AboutUsCarousel"
import AnimatedSection from "../AnimatedComponent";
import "./instituional.scss"




const OurMission = () => {


    const y = useTranslations('Misyonumuz')



    return (<>
        <SubHeader title={y('title')} fromDirection="top" />
        <section className="main-grid-aboutus">

            <AnimatedSection
                from="left"
                duration={2000}
                shouldShowInView
                className="left-col-animated"
                hFull>
                <div className="content">
                    <h3 className="sub-title">{y('subTitle')}</h3>
                    <p>{y('description')}</p>
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

export default OurMission