"use client"

import ContactCard from '../ContactCard';
import LastProjects from './LastProjects';
import Links from './Links';
import './footer.scss'

interface FooterProps {
    locale: string
}

const Footer = ({ locale }: FooterProps) => {

    return (<>
        <footer className="footer-main-wrapper">
            <div className='footer-sub-wrapper'>
                <ContactCard className='contact-card-main-wrapper' />

                <LastProjects />
                
                <Links locale={locale}/>

            </div>
        </footer>

    </>)

}

export default Footer