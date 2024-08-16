"use client"


import { EmailTemplate } from "@/type/Common";
import { useTranslations } from "next-intl";
import React, { ChangeEvent, FormEvent, useState } from "react"
import PopUpNotification, { NotificationType } from "../PopUpNotification";

interface NotificationProps {       // notification props tipleri
    show: boolean;
    type: NotificationType;
    text: string;
}

const ContactForm = () => {
    const t = useTranslations("Form")

    const [formData, setFormData] = useState<EmailTemplate>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

        // notification state'i, 3 farkli durumu izler (notification arrayi ile). gorunurluk, tip ve metin

    const [notification, setNotification] = useState<NotificationProps>({ 
        show: false,
        type: NotificationType.SUCCESS,
        text: ""
    })

        // API aramasi
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            mode: "same-origin",
            body: JSON.stringify(formData)
        })

        if (!response.ok) {           // yanit false ise
            setNotification({
                show:true,                      // notifikasyonu goster
                type: NotificationType.ALERT,   // notifikasyon tipi alert olarak ayarla
                text: t('fail')                // notifikasyon metni 'fail' olarak ayarla     
            })
        } else {                            // yanit 500 alti ise   
            setNotification({
                show:true,                       // notifikasyonu goster
                type: NotificationType.SUCCESS,  // notifikasyon tipi success olarak ayarla
                text: t('success')               // notifikasyon metni 'success' olarak ayarla
            }) 

            // ACIKLAMA: response durumuna gore notifications arrayinin icindeki verileri degistirir. bu verileri asagidaki popup componentine gonderecegiz... show true donunce popup acilacak, tipine gore uygun popup gelecek ve metin de oyle olacak. 
            
            setFormData({                      // formu sifirla
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            })
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleCloseNotification = () => { // notifikasyonu kapat fonsiyonu
        setNotification({...notification, show: false}); // notfications arrayindeki show degerini false yap, digerlerini degistirmene gerek yok...
    }


    return (
        <form onSubmit={handleSubmit} className="form">
            <h5 className="form-subtitle">{t('subTitle')}</h5>
            <h3 className="form-title">{t('title')}</h3>

            <div className="input-wrapper">
                <input
                    required
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    className="inputs" />
                <input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('emailPlaceholder')}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title={t('emailTitle')}
                    className="inputs" />
            </div>

            <div className="input-wrapper">
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('phonePlaceholder')}
                    pattern="[0-9]*"
                    title={t('phoneTitle')}
                    className="inputs" />
                <input
                    required
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('subjectPlaceholder')}
                    className="inputs" />
            </div>

            <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('messagePlaceholder')}
                className="textarea" />
            <button
                type="submit"
                className="submit-button"
            >
                {t('submit').toUpperCase()}
            </button>

            <PopUpNotification
                type={notification.type} // notifikasyon tipi
                show={notification.show} // notifikasyon gosterilsin mi
                title={notification.text} // notifikasyon mesaji
                onClose={handleCloseNotification} // close tusuna basilinca notifikasyonu kapat fonksiyonu cagir
                /> 
        </form>
    )


}


export default ContactForm