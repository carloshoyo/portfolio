import { BiSolidBriefcaseAlt2 } from "react-icons/bi";
import { TimeLine } from "./TimeLine";

export function Experiencia() {
    return (
        <section id="experiencia" className="flex flex-col text-cool-steel-900 dark:text-dark-text mb-16 md:mx-auto max-w-150 gap-4">
            <header className="flex flex-row items-center gap-4">
                <BiSolidBriefcaseAlt2 className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Experiencia</h1>
            </header>
            <article>
                <TimeLine/>
            </article>
        </section>
    )
}