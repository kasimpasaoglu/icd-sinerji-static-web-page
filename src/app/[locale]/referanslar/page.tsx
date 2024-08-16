import LoadingSpinner from "@/components/loadingspinner/LoadingSpinner";
import Referances from "@/components/referances/Referances";
import { useTranslations } from "next-intl";
import React from "react";

const Referanslar = () => {
    const t = useTranslations('Referanslar');

    return (<>
    <Referances />
    </>);
}

export default Referanslar
