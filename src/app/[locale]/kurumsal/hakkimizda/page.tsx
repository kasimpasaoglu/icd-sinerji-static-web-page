import AboutUs from "@/components/instituional/AboutUs";
import { useTranslations } from "next-intl";
import React from "react";

const Hakkimizda = () => {
    const t = useTranslations('Hakkimizda');

    return (<>
        <AboutUs />
    </>
    );
}

export default Hakkimizda
