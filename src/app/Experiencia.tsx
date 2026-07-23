import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { TimeLine } from "../components/TimeLine";

export interface Trabajo{
    title: string;
    period: string;
    desc: string;
    color: string;
}

export function Experiencia() {
    const jobs: Trabajo[] = [
        {
            title: "Full-Stack Freelance Developer",
            period: "Jul. 2026 - Present",
            desc: "Building and shipping full-stack web and mobile applications for clients, from requirements gathering to deployment. Working with React, TypeScript and Node across several concurrent projects.",
            color: "[#CCD5AE]/30"
        },
        {
            title: "Constella Intelligence",
            period: "Feb. 2026 - Jul. 2026",
            desc: "Developed internal tools to solve operational bottlenecks for the team, and automated recurring workflows using AI agents — reducing manual effort on repetitive tasks.",
            color: "[#CCD5AE]/30"
        },
    ]
    return (
        <section id="experiencia" className="flex flex-col text-cool-steel-900 dark:text-dark-text mb-16 md:mx-auto max-w-150 gap-4">
            <header className="flex flex-row items-center gap-4">
                <BiSolidBriefcaseAlt2 className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Experience</h1>
            </header>
            <article>
                <TimeLine jobs={jobs}/>
            </article>
        </section>
    )
}