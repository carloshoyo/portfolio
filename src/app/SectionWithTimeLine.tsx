import {  } from "react-icons/bi";
import { TimeLine } from "../components/TimeLine";

export interface Points{
    title: string;
    period: string;
    desc: string;
    color: string;
}

export function SectionWithTimeLine({title, points, icon, id}: {title: string, points: Points[], icon: React.ReactNode, id: string}) {
    return (
        <section id={id} className="flex flex-col text-cool-steel-900 dark:text-dark-text mb-16 md:mx-auto max-w-150 gap-4">
            <header className="flex flex-row items-center gap-4">
                {icon}
                <h1 className="font-sans text-2xl">{title}</h1>
            </header>
            <article>
                <TimeLine jobs={points}/>
            </article>
        </section>
    )
}