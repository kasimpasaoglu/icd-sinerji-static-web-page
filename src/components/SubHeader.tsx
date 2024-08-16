"use client";

import AnimatedSection from "./AnimatedComponent";
import './subheader.scss'


interface SubHeaderProps {
    title: string;
    fromDirection?: "left" | "right" | "top" | "bottom";
    duration?: number;
    shouldShowInView?: boolean;
    bgImage?:string
}

const SubHeader = ({
    title,
    fromDirection = "left",
    duration = 2000,
    shouldShowInView = true,
    bgImage = "/assets/images/background.jpg"
}: SubHeaderProps) => {

    return (
        <header 
        className="header" 
        style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="filter"></div>
            <AnimatedSection from={fromDirection} duration={duration} shouldShowInView={shouldShowInView}>
                <h1 className="header-title">{title}</h1>
            </AnimatedSection>
        </header>
    );
};

export default SubHeader;
