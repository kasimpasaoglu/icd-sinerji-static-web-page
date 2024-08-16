

import InfoSection from "@/components/homepage/InfoSection";
import MainCarousel from "@/components/homepage/MainCarousel";
import { useTranslations } from "next-intl";
import React from "react";


const AnaSayfa = () => {
    const t = useTranslations('AnaSayfa');

    return (<>
        <MainCarousel />
        <InfoSection />
    </>
    );
}

export default AnaSayfa
