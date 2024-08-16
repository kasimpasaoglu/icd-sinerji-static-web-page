import { FunctionComponent } from "react";

interface EmailTemplateProps {
    name: string
    email: string
    phone: string
    message: string
}

export const Email: FunctionComponent<EmailTemplateProps> = ({
    name,
    email,
    phone,
    message,
}) => {
    return (
        <div>
            <h2>
                ICD Sinerji Web Sitesi Contact Form Mesaji
            </h2>
            <h3>
                Gonderen ismi: {name}
            </h3>
            <h3>
                Gonderen e-email: <a href={`mailto:${email}`}>{email}</a>
            </h3>
            <h3>
                Telefon: <a href={`tel:${phone}`}>{phone}</a>
            </h3>
            <p>
                {message}
            </p>
        </div>
    )
};