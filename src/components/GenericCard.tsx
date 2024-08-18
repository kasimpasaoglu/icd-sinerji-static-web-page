import React, { useState } from "react";
import Image from "next/image";


interface GenericCardProps {
    imageSrc: string;
    imageAlt: string;
    subTitle?: string
    title: string;
    description: string;
}

const GenericCard = ({ imageSrc, imageAlt, title, description, subTitle }: GenericCardProps) => {


    return (<>
        <div className="rounded-3xl col-span-1 p-4  shadow-xl mt-4 text-primarydark min-h-[710px] hover:shadow-2xl hover:shadow-black duration-500">
            <h3 className="text-center p-6">{title}</h3>
            <div className="relative aspect-[16/9]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 70vw, 40vw"
                style={{objectFit: "cover"}} 
                className="rounded-3xl" />
            </div>
            {subTitle && (
                <h4 className="text-center">{subTitle}</h4>
            )}
            <p className="p-4">{description}</p>
        </div>

    </>);
};

export default GenericCard;
