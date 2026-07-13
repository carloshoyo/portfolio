import { AiFillCode } from "react-icons/ai";
// import { FaLaptopCode } from "react-icons/fa";
import logoStayIn from '../assets/stayin.svg'
import logoStayInDark from '../assets/stayindark.svg';
import { motion } from "framer-motion";
import { MoveRight } from 'lucide-react';

export function Proyectos({theme}: {theme: string}) {
    return (
        <section id="proyectos" className="mb-16">
            <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-4">
                <AiFillCode className="w-7 h-7"/>
                <h1 className="font-sans text-2xl">Proyectos</h1>
            </header>
            <article className="flex flex-col group  w-full max-w-2xl mx-auto shadow-[0_0_25px_0px_#CCD5AE] dark:shadow-[0_0_0px_0px_#CCD5AE] dark:bg-[#161616] p-10 rounded-4xl
                    hover:cursor-pointer hover:scale-103 duration-150">
                <img alt="Logo StayIn" src={theme==='light' ? logoStayIn : logoStayInDark} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"></img>
                <div className="relative text-[#979797] max-h-0 group-hover:mt-10 opacity-0 overflow-hidden group-hover:max-h-40 
                            group-hover:opacity-100 transition-all duration-500">
                    <p >
                        StayIn is a mobile flatmate-matching platform that pairs users based on lifestyle compatibility. It's built around a hybrid recommendation engine combining affinity scoring and bidirectional matching to surface the most compatible roommates.
                    </p>
                    <div className='w-fit ml-auto'>
                        <motion.a 
                            href='' 
                            className='flex flex-row items-center gap-1'
                            initial="rest"
                            whileHover="hover"
                            >
                            <div className='overflow-hidden relative select-none'>
                                <motion.p 
                                    className='group-hover:block text-[#979797] hover:text-[#363636] dark:text-zinc-300 text-xs border-b-2 border-[#CCD5AE] dark:border-[#CCD5AE] whitespace-nowrap'
                                    variants={{
                                        rest: { x:"105%" },
                                        hover: { x: "0%" }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    >
                                        Ver más
                                </motion.p>
                            </div>
                            <MoveRight className='w-5 h-5 text-[#979797] dark:hover:text-[#CCD5AE] hover:text-[#363636] dark:group-hover:text-zinc-300 duration-150'/>
                        </motion.a>
                    </div>
                </div>
                
            </article> 
        </section>
    )
}

// export function Proyectos() {
//     return (
//         <section id="proyectos" className="mb-16">
//             <header className="flex flex-row gap-4 items-center md:mx-auto max-w-150 mb-16">
//                 <AiFillCode className="w-7 h-7"/>
//                 <h1 className="font-sans text-2xl">Proyectos</h1>
//             </header>
//             <article className="flex flex-col items-center gap-4 w-full max-w-3xl mx-auto">
//                 <motion.a 
//                     href="" 
//                     className="group bg-zinc-900 rounded-2xl shadow-lg relative block w-full aspect-video overflow-hidden font-sans z-0 transform-gpu"
//                     initial='hidden'
//                     animate='hidden'
//                     whileHover='hover'
//                 >                
//                     <img alt="Logo StayIn" src={logoStayIn} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"></img>
//                     <div className="absolute inset-0 flex items-center justify-center
//                         backdrop-blur-xs bg-cool-steel-800/50 dark:bg-black/50">
//                         <p className="text-2xl group-hover:opacity-0 transition-opacity duration-300 text-dark-text">Coming soon...</p>
//                     </div>
//                     <motion.div
//                         className="absolute overflow-hidden inset-x-0 bottom-0
//                         h-3/5 flex flex-col justify-start backdrop-blur-md p-6
//                         bg-cool-steel-950/60 dark:bg-black/60 z-10"
//                         style={{
//                             // Esto fuerza la compatibilidad en todos los navegadores
//                             WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
//                             maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)'
//                         }}
//                         variants={{
//                             hidden: { y: "100%" },
//                             hover: { y: "0%" }
//                         }} transition={{ type:"spring", bounce:0, duration: .4 }}
//                     >
//                         <p className="text-zinc-200 text-sm md:text-base leading-relaxed opacity-0
//                         group-hover:opacity-100 duration-700 mt-8">
//                             StayIn es un portal de vivienda que busca (además de ser mi TFG)
//                             que trata de romper con lo 
//                         </p>
//                     </motion.div>
//                     <div className="absolute inset-0 rounded-2xl border border-zinc-800 pointer-events-none z-50"></div>
//                 </motion.a>
//             </article>
//         </section>
//     )
// }