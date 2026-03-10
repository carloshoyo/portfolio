import yo from '../assets/foto_1.webp'
import constella from '../assets/constella_logo.jfif'
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion';


export function SobreMi() {
    const classNameParrafo=' text-sm md:text-lg dark:group-hover:text-zinc-300 duration-300'
    return (
        <section id='sobre-mi' className="tarjeta-sobre-mi group z-1 relative bg-[#F6D5D8] hover:bg-[#EDABB1] p-8 flex flex-col md:mx-auto max-w-150 rounded-lg 
                items-center gap-8 dark:bg-[#1E1E1E] to-zinc-950/75 backdrop-blur-md
                justify-center text-left mt-32 mr-4 ml-4 shadow-sm shadow-[#7E1B25] dark:shadow-[#557c93] mb-16
                hover:scale-102 hover:shadow-md duration-300">
            <div className='flex flex-col justify-center backdrop-blur-md'>
                <div className='flex flex-col items-center justify-center backdrop-blur-md md:flex-row gap-8'>
                    <img alt='Carlos Hoyo' className='w-16 h-24 object-cover object-center rounded-b-full' src={yo} ></img>
                    <h1 className="font-sans text-5xl dark:text-white">Hola, soy Carlos!</h1>
                </div>
                <aside className='flex flex-row gap-2 mt-4 items-center'>
                    <a href='https://constella.ai/'><img alt='Logo Constella Intelligence' src={constella} className='w-10 h-10 rounded-full'></img></a>
                    <p className='bg-[#7E1B25] text-[#FBEAEC] dark:bg-[#253741] dark:text-[#BED0DA] p-0.5 rounded-sm'>Becario</p>
                </aside>
            </div>
                           
            <p className={classNameParrafo}>
                Soy ingeniero informático en prácticas. Ahora mismo estoy en el último año de
                carrera, terminando una asignatura y mi Proyecto de Fin de Grado.
            </p>
            <p className={classNameParrafo}>
                Estoy especializado principalmente en el desarrollo de software y las tecnologías web, aunque con ciertos
                conocimientos de Aprendizaje Automático y un gran interés por el DevOps y la 
                ciberseguridad, campos en los que me estoy formando.
            </p>
            <aside className='hidden md:flex items-center gap-4 w-full'>
                <a href='https://github.com/carloshoyo'><FaGithub className='flex-1 w-6 h-6 text-zinc-700 hover:scale-110 duration-150 hover:text-[#c4455e] dark:hover:text-[#BED0DA]'/></a>
                <a href='https://www.linkedin.com/in/carlos-hoyo-liddle-ba09b6314/'><GrLinkedin className='w-6 h-6 text-zinc-700 hover:scale-110 duration-150 hover:text-[#c4455e] dark:hover:text-[#BED0DA]'/></a>
                <a href='mailto:hoyoliddlecarlos@gmail.com'><IoIosMail className='w-6 h-6 text-zinc-700 hover:scale-110 duration-150 hover:text-[#c4455e] dark:hover:text-[#BED0DA]'/></a>
                <div className='ml-auto '>
                    <motion.a 
                        href='' 
                        className='flex flex-row items-center gap-1'
                        initial="rest"
                        whileHover="hover"
                        >
                        <div className='overflow-hidden relative select-none'>
                            <motion.p 
                                className='group-hover:block dark:text-zinc-300 text-xs border-b-1 border-[#c4455e] dark:border-[#557c93] whitespace-nowrap'
                                variants={{
                                    rest: { x:"105%" },
                                    hover: { x: "0%" }
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                >
                                    Ver más
                            </motion.p>
                        </div>
                        <MoveRight className='w-5 h-5 dark:hover:text-[#557c93] hover:text-[#c4455e] dark:group-hover:text-zinc-300 duration-150'/>
                    </motion.a>
                </div>
            </aside>
        </section>
    )
}