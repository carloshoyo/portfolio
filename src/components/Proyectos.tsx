import { AiFillCode } from "react-icons/ai";
// import { FaLaptopCode } from "react-icons/fa";
import logoStayIn from '../assets/LogoFondoBlancoTFG.svg'

export function Proyectos() {
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 text-white items-center md:mx-auto max-w-150 mb-16">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Proyectos</h1>
            </header>
            <article className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
                <a href="">
                    <div className="relative w-full aspect-video rounded-xl font-sans overflow-hidden border border-gray-800">
                        <img alt="Logo StayIn" src={logoStayIn} className="object-cover w-full h-full"></img>
                        <div className="absolute inset-0 flex items-center justify-center
                            backdrop-blur-xs bg-black/50 rounded-xl">
                            <p className="text-xl">Coming soon...</p>
                        </div>
                    </div>
                </a>
            </article>
        </section>
    )
}