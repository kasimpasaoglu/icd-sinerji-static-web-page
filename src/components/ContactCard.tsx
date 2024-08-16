import { useTranslations } from 'next-intl';
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp,
    FaXing,
} from 'react-icons/fa';

interface ContactCardProps {
    className?: string
}

const ContactCard = ({ className = "p-6 z-10 col-span-1 bg-primarydark" }: ContactCardProps) => {

    const f = useTranslations('Adres')
    const t = useTranslations('SocialMedia')

    return (
        <div className={className}>
            <h4 className='text-white'>{f('contactTitle')}</h4>
            <hr className='border-gray-300 my-5' />
            <h5 className='text-white mb-4'>{f('contactSubtitle')}</h5>

            <div className="flex mb-4">
                <MapPinIcon className="flex-none w-5 h-5 mr-2" />
                <span>{f('address')}</span>
            </div>

            <div className="flex text-white mb-4">
                <PhoneIcon className="flex-none w-5 h-5 mr-2" />
                <span>{f('phone')}</span>
            </div>

            <div className="flex text-white mb-4">
                <EnvelopeIcon className="flex-none w-5 h-5 mr-2" />
                <span>{f('mail')}</span>
            </div>

            <div className="flex space-x-4">
                <p>{f('socialmedia')}</p>
                <a
                    href={t('instagram')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700"
                >
                    <FaInstagram className="flex-none w-6 h-6" />
                </a>
                <a
                    href={t('linkedIn')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900"
                >
                    <FaLinkedin className="flex-none w-6 h-6" />
                </a>
                <a
                    href={t('whatsapp')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700"
                >
                    <FaWhatsapp className="flex-none w-6 h-6" />
                </a>
            </div>
        </div>
    )
}

export default ContactCard