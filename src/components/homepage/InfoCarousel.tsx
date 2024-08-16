"use client"

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const InfoCarousel = () => {

    const t = useTranslations()
    const partners = t.raw('Partnerlerimiz')


      const settings = {
        infinite: true, 
        slidesToShow: 8, 
        slidesToScroll: 1, 
        autoplay: true, 
        speed: 4000, 
        autoplaySpeed: 0,  
        cssEase: "linear", 
        initialSlide: 0,
        arrows : false,
        responsive : [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 5, 
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2, 
                }
            }
        ]
      };

      return(
        <Slider {...settings}>
            {partners.logos.map(( src:string, index:number ) => (
                <div key={index} className='w-36 h-36 relative'>
                    <Image 
                        src={src} 
                        alt={`Partner ${index + 1}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
                        style={{ objectFit: "cover" }}
                        className='rounded-lg' 
                    />
                </div>
            ))}
        </Slider>
      )
}

export default InfoCarousel