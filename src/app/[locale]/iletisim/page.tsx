import ContactUs from "@/components/contactUs/ContactUs";
import { useTranslations } from "next-intl";
import React from "react";

const Iletisim = () => {
    const t = useTranslations('Iletisim');

    return (<>
        <ContactUs />
    </>
    );
}

export default Iletisim
