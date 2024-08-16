import { Resend } from 'resend';
import { Email } from '@/components/Email';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
    const emailTemplate = await request.json()

    try {
        const { data, error } = await resend.emails.send({
            from: "ICD Sinerji Contact Form <onboarding@resend.dev>", // Contact email
            to: ["ibrahimcdover@gmail.com"],
            subject: emailTemplate.subject,
            react: Email({
                name: emailTemplate.name,
                email: emailTemplate.email,
                phone: emailTemplate.phone,
                message: emailTemplate.message
            })
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
