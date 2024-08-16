import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedSection from "../AnimatedComponent";
import InfoCarousel from "./InfoCarousel";


const InfoSection = () => {
    const hakkimizda = useTranslations('Hakkimizda')
    const misyonumuz = useTranslations('Misyonumuz')
    const vizyonumuz = useTranslations('Vizyonumuz')
    const t = useTranslations('AnaSayfa')
    return (
        <article className="grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-2 mx-auto max-w-7xl p-2 my-5 text-primarydark">
            <h2 className="col-span-1 lg:col-span-2 text-center p-3">{hakkimizda('subTitle')}</h2>
            <AnimatedSection
                from="left"
                duration={2000}
                className="col-span-1 p-5 shadow-2xl rounded-lg flex justify-evenly items-center flex-col h-full"
                shouldShowInView
                hFull
            >
                <div className="p-4 mb-3 border-b-2 rounded-b-lg">
                    <h3 className="text-center mb-3">{hakkimizda('title')}</h3>
                    <p>{hakkimizda('description')}</p>
                </div>
                <div className="p-4 mb-3 border-b-2 rounded-b-lg">
                    <h3 className="text-center mb-3">{misyonumuz('title')}</h3>
                    <p>{misyonumuz('description')}</p>
                </div>
                <div className="p-4 mb-3 border-b-2 rounded-b-lg">
                    <h3 className="text-center mb-3">{vizyonumuz('title')}</h3>
                    <p>{vizyonumuz('description')}</p>
                </div>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                    {t('title')}
                </blockquote>
            </AnimatedSection>
            <AnimatedSection
                from="right"
                duration={2000}
                className="col-span-1 p-4 shadow-2xl rounded-lg h-full"
                shouldShowInView
                hFull
            >
                <div className="h-96 lg:h-full relative">
                    <Image
                        className="rounded-lg"
                        src={'/assets/images/workers.jpg'}
                        alt={'workers'}
                        fill
                        sizes="(max-width: 1024px) 40vw, 40vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </AnimatedSection>
            <div className="col-span-1 lg:col-span-2 p-4 shadow-lg rounded-2xl h-full">
                <InfoCarousel />
            </div>
        </article>
    );
};

export default InfoSection;
