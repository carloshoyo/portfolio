import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { TimeLine } from "./TimeLine";

export interface Trabajo{
    title: string;
    period: string;
    desc: string;
    color: string;
}

export function Experiencia() {
    const jobs: Trabajo[] = [
        {
            title: "Constella Intelligence",
            period: "Feb. 2026 - Present",
            desc: "I worked automating and developing production-environment projects",
            color: "[#CCD5AE]/30"
        },
        {
            title: "Full-Stack Freelance Developer",
            period: "Jul. 2026 - Present",
            desc: "I am curretnly working as a full-stack freelance developer.",
            color: "[#CCD5AE]/30"
        }
    ]
    return (
        <section id="experiencia" className="flex flex-col text-cool-steel-900 dark:text-dark-text mb-16 md:mx-auto max-w-150 gap-4">
            <header className="flex flex-row items-center gap-4">
                <BiSolidBriefcaseAlt2 className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Experiencia</h1>
            </header>
            <article>
                <TimeLine jobs={jobs}/>
            </article>
        </section>
    )
}