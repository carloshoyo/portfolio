import { useState } from "react";
import { PricingCard } from "./PricingCard";

const cards = [
    {
        titleName: "Free",
        info: "Use it for free",
        basePrice: 0,
        features: [],
        isRecommended: false,
        text: ""
    },
    {
        titleName: "Pro",
        info: "Investigate, program, organize",
        basePrice: 15,
        features: [],
        isRecommended: false,
        text: ""
    }, 
    {
        titleName: "Max",
        info: "All that Pro has, but more",
        basePrice: 90,
        features: [],
        isRecommended: true,
        text: ""
    }
];

export function PricingTable() {
    const [isAnnually, setIsAnnually] = useState(false)
    return (
        <section className="bg-slate-200 py-20 px-4 rounded flex flex-col items-center">
            <header className="bg-white p-1 rounded-full mb-12 flex">
                <button className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${ 
                    !isAnnually ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'}`}
                    onClick={() => setIsAnnually(false)}>Monthly</button>
                <button className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                isAnnually ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'}`}
                onClick={() => setIsAnnually(true)}>Annually</button>
            </header>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full ">
                {cards.map((card) => (
                    <div key={card.titleName} className={`cursor-pointer border-1 p-4 bg-slate-50 p-8 rounded-xl shadow-lg ${card.isRecommended ? 'border-2 border-indigo-500 shadow-indigo-500/50' : 'border-black shadow-gray-500'}`}>
                        <PricingCard titleName={card.titleName} info={card.info} price={isAnnually ? card.basePrice*10 : card.basePrice} features={card.features} isRecommended={card.isRecommended} text={!isAnnually ? '/month' : '/year'}></PricingCard>
                    </div>
                ))}
            </div>
        </section>
    )
}