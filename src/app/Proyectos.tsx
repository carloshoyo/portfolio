import { AiFillCode } from "react-icons/ai";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";

export function Proyectos({theme}: {theme: string}) {
    const descripcion = "StayIn is a mobile flatmate-matching platform that pairs users based on lifestyle compatibility. It's built around a hybrid recommendation engine combining affinity scoring and bidirectional matching to surface the most compatible roommates."
    const [opened, setIsOpened] = useState(false);
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-4">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Proyectos</h1>
            </header>
            <ProjectCard 
                theme={theme}
                descripcion={descripcion}
                logoClaro='/stayin.svg'
                logoOscuro='/stayindark.svg'
                onClick={() => setIsOpened(!opened)}
            />
        </section>
    )
}