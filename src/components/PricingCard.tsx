interface PricingCardProps {
    titleName: string;
    info: string;
    price: number;
    features: string[];
    isRecommended: boolean;
    text: string;
}

export function PricingCard({ titleName, info, price, features, isRecommended, text }: PricingCardProps) {
    isRecommended = titleName == "Max" ? true : false
    const articleClassName =  isRecommended ? "rounded font-price" : "rounded border-blue font-price"
    return (
        <article className={articleClassName}>
            <header>
                <h1 className="text-lg font-semibold text-indigo-600 uppercase tracking-wider">{ titleName }</h1>
                <h2>{ info }</h2>
                <span className="text-4xl font-extrabold">{ price }$<span className="text-sm font-normal text-gray-500"> {text}</span></span>
            </header>
            {features.map((feature) => (
                <div>{ feature }</div>
            ))}
        </article>
    )
}