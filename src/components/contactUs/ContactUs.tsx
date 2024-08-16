import { useTranslations } from "next-intl"
import SubHeader from "../SubHeader"
import ContactCard from "../ContactCard"
import ContactForm from "./ContactForm"
import AnimatedSection from "../AnimatedComponent"
import "./contact.scss"

const ContactUs = () => {
    const t = useTranslations('Iletisim')

    return (<>
        <SubHeader fromDirection="top" title={t('title')} />
        <section className="contact-main-wrapper">
            <AnimatedSection from="left" duration={2000} shouldShowInView>
                <div className="flex">
                    <ContactCard className="contact-card" />
                </div>
            </AnimatedSection>
            <AnimatedSection from="right" duration={2000} shouldShowInView hFull className="h-full">
                <div className="contact-map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2054.152857531!2d37.330801370343465!3d37.069122937833214!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1723548446573!5m2!1str!2str"
                        className="contact-map"
                        loading="lazy"
                    ></iframe>
                </div>
            </AnimatedSection>
            <div className="form-main-wrapper">
                <AnimatedSection from="bottom" duration={2000} shouldShowInView>
                    <ContactForm />
                </AnimatedSection>
            </div>
        </section>
    </>)
}

export default ContactUs
