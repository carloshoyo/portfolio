import { AiFillCode } from "react-icons/ai";
// import { FaLaptopCode } from "react-icons/fa";
import logoStayIn from '../assets/LogoFondoBlancoTFG.svg'
import { motion } from "framer-motion";

export function Proyectos() {
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-16">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Proyectos</h1>
            </header>
            <article className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
                <motion.a 
                    href="" 
                    className="group bg-zinc-900 rounded-2xl shadow-lg relative block w-full aspect-video overflow-hidden font-sans z-0 transform-gpu"
                    initial='hidden'
                    animate='hidden'
                    whileHover='hover'
                >                
                    <img alt="Logo StayIn" src={logoStayIn} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"></img>
                    <div className="absolute inset-0 flex items-center justify-center
                        backdrop-blur-xs bg-cool-steel-800/50 dark:bg-black/50">
                        <p className="text-2xl group-hover:opacity-0 transition-opacity duration-300 text-dark-text">Coming soon...</p>
                    </div>
                    <motion.div
                        className="absolute overflow-hidden inset-x-0 bottom-0
                        h-3/5 flex flex-col justify-start backdrop-blur-md p-6
                        bg-cool-steel-950/60 dark:bg-black/60 z-10"
                        style={{
                            // Esto fuerza la compatibilidad en todos los navegadores
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)'
                        }}
                        variants={{
                            hidden: { y: "100%" },
                            hover: { y: "0%" }
                        }} transition={{ type:"spring", bounce:0, duration: .4 }}
                    >
                        <p className="text-zinc-200 text-sm md:text-base leading-relaxed opacity-0
                        group-hover:opacity-100 duration-700 mt-8">
                            StayIn es un portal de vivienda que busca (además de ser mi TFG)
                            que trata de romper con lo 
                        </p>
                    </motion.div>
                    <div className="absolute inset-0 rounded-2xl border border-zinc-800 pointer-events-none z-50"></div>
                </motion.a>
            </article>
        </section>
    )
}