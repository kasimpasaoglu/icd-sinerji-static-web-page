import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface Card {
    title: string;
    description: string;
    image: string;
    href: string
    subDescription: string
}

const LinkList = () => {
    const f = useTranslations('Hizmetlerimiz')
    const t = useTranslations();
    const hizmetlerimiz = t.raw('Hizmetlerimiz');

    return (<>

        <h4 className="text-primarydark mt-12 ml-10">{f('title')}</h4>

        <ul className="text-primarydark p-5">
            {hizmetlerimiz.cards.map((item: Card, index: number) => (
                <Link key={index} href={item.href}>
                    <li className="p-6 font-extrabold text-md rounded-md hover:shadow-lg hover:text-primarylight flex items-center">
                        <FiArrowRight className="mr-2" />
                        {item.title}
                    </li>
                </Link>
            ))}
        </ul>
        
    </>)
}

export default LinkList