import { HiMiniCpuChip } from "react-icons/hi2";
import { TechCard } from "../components/TechCard";

export interface Icono {
    nombre: string;
    ruta: string;
}

interface Tecnologia {
    title: string;
    imgs: Icono[];
}

export function Tecnologias({ theme }: { theme: string }) {
    const tecs: Tecnologia[] = [
        {
            title: "Frameworks & Design",
            imgs: [
                { nombre: "React", ruta: theme === 'light' ? "/React_light.svg" : "/React_dark.svg" },
                { nombre: "Node.js", ruta: "/nodejs.svg" },
                { nombre: "Express", ruta: theme === 'light' ? "/Express.js_light.svg" : "/Express.js_dark.svg" },
                { nombre: "Expo", ruta: "/expo.svg" },
                { nombre: "Figma", ruta: "/figma.svg" },
            ]
        },
        {
            title: "Languages & Web Dev",
            imgs: [
                { nombre: "C++", ruta: "/c-plusplus.svg" },
                { nombre: "Java", ruta: "/java.svg" },
                { nombre: "JavaScript", ruta: "/javascript.svg" },
                { nombre: "TypeScript", ruta: "/typescript.svg" },
                { nombre: "PHP", ruta: theme === 'light' ? "/Php_light.svg" : "/Php_dark.svg" },
                { nombre: "Python", ruta: "/python.svg" },
                { nombre: "HTML5", ruta: "/html5.svg" },
                { nombre: "CSS", ruta: "/css.svg" },
            ]
        },
        {
            title: "Cloud & Infrastructure",
            imgs: [
                { nombre: "AWS", ruta: theme === 'light' ? "/Amazon Web Services_light.svg" : "/Amazon Web Services_dark.svg" },
                { nombre: "Docker", ruta: "/docker.svg" },
                { nombre: "Kubernetes", ruta: "/kubernetes.svg" },
                { nombre: "Linux", ruta: "/linux.svg" },
                { nombre: "Git", ruta: "/git.svg" },
                { nombre: "GitHub", ruta: theme === 'light' ? "/GitHub_light.svg" : "/GitHub_dark.svg" },
            ]
        },
        {
            title: "Automation & AI",
            imgs: [
                { nombre: "OpenClaw", ruta: "/openclaw.svg" },
                { nombre: "Claude", ruta: "/claude-ai-icon.svg" },
                { nombre: "Codex", ruta: theme === 'light' ? "/Codex_light.svg" : "/Codex_dark.svg" },
                { nombre: "Gemini", ruta: "/gemini.svg" },
            ]
        },

    ]
    return (
        <section>
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-4">
                <HiMiniCpuChip className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">
                    Tecnologías
                </h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-50">
                {tecs.map((tec) => (
                    <TechCard key={tec.title} title={tec.title} tecs={tec.imgs}/>
                ))}
            </div>
        </section>
    )
}