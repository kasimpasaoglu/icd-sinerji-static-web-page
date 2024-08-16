import Partners from "@/components/partners/Partners";
import { useTranslations } from "next-intl";
import React from "react";

const Partnerlerimiz = () => {
    const t = useTranslations('Partnerlerimiz');

    return (
        <Partners />
    );
}

export default Partnerlerimiz
