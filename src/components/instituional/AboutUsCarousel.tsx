import Image from 'next/image'
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





export default function AboutUsCarousel() {

    const images = [
        "/assets/images/maincarousel/carousel1.jpg",
        "/assets/images/maincarousel/carousel2.jpg",
        "/assets/images/maincarousel/carousel3.jpg",
        "/assets/images/maincarousel/carousel4.jpg",
        "/assets/images/maincarousel/carousel5.jpg",
        "/assets/images/maincarousel/carousel6.jpg"
    ];

    const settings: Settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-full">
                    <Image
                        src={src}
                        alt={`About Us ${index + 1}`}
                        sizes="(max-width: 1024px) 50vw, 30vw"
                        width={1920}
                        height={1080}
                        style={{objectFit: 'cover',}}
                        className='rounded-lg'
                        quality={70} />
                </div>
            ))}
        </Slider>
    );
}