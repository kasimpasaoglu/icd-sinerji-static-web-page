"use client"

import React from 'react'
import './MainCarousel.scss'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import AnimatedSection from '../AnimatedComponent';
import { useTranslations } from 'next-intl';

export default function MainCarousel() {
    const images = [
        '/assets/images/maincarousel/carousel1.jpg',
        '/assets/images/maincarousel/carousel2.jpg',
        '/assets/images/maincarousel/carousel3.jpg',
        '/assets/images/maincarousel/carousel4.jpg',
        '/assets/images/maincarousel/carousel5.jpg',
        '/assets/images/maincarousel/carousel6.jpg'
    ]

    const t = useTranslations('AnaSayfa');


    return (
        <section className='relative'>
            <div className='hidden lg:block absolute inset-0 bg-black/50 backdrop-blur-xxs z-10'></div>
            <Carousel
                className='flex relative'
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(onClick) => (
                    <div onClick={onClick} className='control left'>
                        <ChevronLeftIcon className='w-6 h-6' />
                    </div>
                )}
                renderArrowNext={(onClick) => (
                    <div onClick={onClick} className='control right'>
                        <ChevronRightIcon className='w-6 h-6' />
                    </div>
                )}
            >
                {images.map((src, index) => (
                    <div key={index} className='relative h-full w-full'>
                        <Image
                            className='max-h-[calc(100vh-64px)]'
                            src={src}
                            alt={`Legend ${index + 1}`}
                            height={1080}
                            width={1920}
                            quality={70}
                            priority={Boolean([0, 1].includes(index))}
                        />
                    </div>
                ))}
            </Carousel>
            <AnimatedSection shouldShowInView from="left" duration={2000} className='hidden md:block relative md:absolute top-0 w-full h-auto text-center z-20'>
                <h1 className='hero text3d'>{t('title')}</h1>
                <h3 className='text-primarylight hidden lg:block '> {t('slogan')}</h3>
            </AnimatedSection>
        </section>
    )
}
