import { AiFillCode } from "react-icons/ai";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";

interface Proyecto {
    id: string;
    theme: string;
    descripcion: string;
    logoClaro: string;
    logoOscuro: string;
}

export function Proyectos({theme}: {theme: string}) {
    const [opened, setIsOpened] = useState<string | null>(null);

    const array_proyectos: Proyecto[] = [
        {
            id: 'stayin',
            theme: {theme},
            descripcion: "StayIn is a mobile flatmate-matching platform that pairs users based on lifestyle compatibility. It's built around a hybrid recommendation engine combining affinity scoring and bidirectional matching to surface the most compatible roommates.",
            logoClaro='/stayin.svg',
            logoOscuro='/stayindark.svg',
        }
    ];
    
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-4">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Proyectos</h1>
            </header>
            {array_proyectos.map((proyecto) => (
                <ProjectCard
                    key={proyecto.id}
                    theme={proyecto.theme}
                    descripcion={proyecto.descripcion}
                    logoClaro={proyecto.logoClaro}
                    logoOscuro={proyecto.logoOscuro}
                    onClick={() => setIsOpened(proyecto.id)}
                />
            ))}
            {abierto ? (
                <PreviewProyecto
                    onClose={setIsOpened(null)}
                    theme={proyecto.theme}
                    descripcion={proyecto.descripcion}
                    logoClaro={proyecto.logoClaro}
                    logoOscuro={proyecto.logoOscuro}
                    demo={}
                    stack={}
                />
            ) : (
                <></>
            )}
        </section>
    )
}
