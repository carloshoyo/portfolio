import { AiFillCode } from "react-icons/ai";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PreviewProyecto } from "../components/PreviewProyecto";

export interface Proyecto {
    id: string;
    theme: string;
    cardText: string;
    descripcion: string;
    logoClaro: string;
    logoOscuro: string;
}

export interface Stack {
    icono: string;
    nombre: string;
    coloresBorde: string[];
    coloresTexto: string[];
    coloresBackground: string[];
}

export function Proyectos({theme}: {theme: string}) {
    const [opened, setIsOpened] = useState<string | null>(null);

    const array_proyectos: Proyecto[] = [
        {
            id: 'stayin',
            theme: theme,
            cardText: "StayIn is a mobile flatmate-matching platform that pairs users based on lifestyle compatibility. It's built around a hybrid recommendation engine combining affinity scoring and bidirectional matching to surface the most compatible roommates.",
            descripcion: "Finding a flat is easy. Finding someone you can actually live with isn't. StayIn matches flatmates by lifestyle compatibility — sleep schedules, cleanliness, guests, noise — so you know how well you'll get along before you move in together. Every profile is analysed by a hybrid recommendation engine that reads both your preferences and your free-text description, and scores compatibility in both directions. A match only shows up when it works for both people, not just for one. The more you use it, the sharper it gets: StayIn learns from how you interact with recommendations and adapts as your priorities change.",
            logoClaro:'/stayin.svg',
            logoOscuro:'/stayindark.svg',
        },
    ];

    const array_stack: Stack[] = [
        {
            icono: '/React_light.svg',
            nombre: 'React Native',
            coloresBorde: ['#087EA4', '#BAE3F1'],
            coloresTexto: ['#087EA4'],
            coloresBackground: ['#087EA4', '#BAE3F1'],
        },
        {
            icono: '/expo.svg',
            nombre: 'Expo',
            coloresBorde: ['#000', '#AEAEAE'],
            coloresTexto: ['#000'],
            coloresBackground: ['#000', '#AEAEAE'],
        },
        {
            icono: '/typescript.svg',
            nombre: 'TypeScript',
            coloresBorde: ['#3178C6', '#E0EFFF'],
            coloresTexto: ['#3178C6'],
            coloresBackground: ['#3178C6', '#E0EFFF'],
        },
        {
            icono: '/python.svg',
            nombre: 'Python',
            coloresBorde: ['#387EB8', '#FFE052'],
            coloresTexto: ['#387EB8'],
            coloresBackground: ['#387EB8', '#FFE052'],
        },
        {
            icono: '/fastapi.svg',
            nombre: 'FastAPI',
            coloresBorde: ['#009688', '#C3FBF6'],
            coloresTexto: ['#009688'],
            coloresBackground: ['#009688', '#C3FBF6'],
        },
        {
            icono: '/nodejs.svg',
            nombre: 'Node.js',
            coloresBorde: ['#54A044', '#ACFF9B'],
            coloresTexto: ['#54A044'],
            coloresBackground: ['#54A044', '#ACFF9B'],
        },
        {
            icono: '/postgresql.svg',
            nombre: 'PostgreSQL',
            coloresBorde: ['#336791', '#b4ddfe'],
            coloresTexto: ['#336791'],
            coloresBackground: ['#336791', '#b4ddfe'],
        },
        {
            icono: '/docker.svg',
            nombre: 'Docker',
            coloresBorde: ['#008FE2', '#ade1ff'],
            coloresTexto: ['#008FE2'],
            coloresBackground: ['#008FE2', '#ade1ff'],
        },
        {
            icono: '/figma.svg',
            nombre: 'Figma',
            coloresBorde: ['#A259FF', '#0ACF83'],
            coloresTexto: ['#A259FF'],
            coloresBackground: ['#A259FF', '#0ACF83', '#1ABCFE'],
        },
    ];

    const proyecto_abierto = array_proyectos.find(p => p.id === opened);
    
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-4">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Projects</h1>
            </header>
            {array_proyectos.map((proyecto) => (
                <ProjectCard
                    key={proyecto.id}
                    id={proyecto.id}
                    theme={proyecto.theme}
                    descripcion={proyecto.cardText}
                    logoClaro={proyecto.logoClaro}
                    logoOscuro={proyecto.logoOscuro}
                    onClick={() => setIsOpened(proyecto.id)}
                />
            ))}
            <AnimatePresence>
                
                {proyecto_abierto && (
                    <PreviewProyecto
                        onClose={() => setIsOpened(null)}
                        key={opened}
                        datos={proyecto_abierto}
                        stack={array_stack}
                    />
                )}
            </AnimatePresence>
            
        </section>
    )
}
