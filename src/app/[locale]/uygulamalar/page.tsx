import ApplicationAreas from "@/components/applicationAreas/ApplicationAreas";
import { useTranslations } from "next-intl";
import React from "react";

const Uygulamalar = () => {
    const t = useTranslations('Uygulamalar');

    return (
        <ApplicationAreas />
    );
}

export default Uygulamalar
