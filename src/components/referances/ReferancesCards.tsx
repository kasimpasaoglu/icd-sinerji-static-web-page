"use client"
import Image from "next/image";
import AnimatedSection from "../AnimatedComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ReferancesCardsProps {
    title: string;
    images: string[]; // resim urllerini stringten olusan bir array olarak bekle
}

const ReferencesCards = ({ title, images }: ReferancesCardsProps) => {




    return (<>
        <div className="h-full p-4 shadow-xl rounded-lg bg-primary hover:scale-105 transition-all duration-500 flex flex-col justify-center">
            <h4 className="text-white text-center py-5 h-1/3">{title}</h4>
            <div className="h-full">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                >
                    {images.map((src, index) => (
                        <div key={index} className="relative aspect-square">
                            <Image
                                src={src}
                                alt={`Legend ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70wv, 50vw"
                                style={{ objectFit: 'cover' }}
                                quality={80}
                                priority={Boolean([0, 1].includes(index))} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>

    </>)
}

export default ReferencesCards