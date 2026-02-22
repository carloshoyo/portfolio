import yo from '../assets/foto_orla_zoomed_resized.webp'
import constella from '../assets/constella_logo.jfif'
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";


export function SobreMi() {
    const classNameParrafo='text-zinc-600 text-sm md:text-lg'
    return (
        <section id='sobre-mi' className="p-8 flex flex-col md:mx-auto max-w-150 rounded-lg 
                items-center gap-8 bg-gradient-to-br from-zinc-900 to-zinc-850
                justify-center text-left mt-32 mr-4 ml-4 shadow-sm shadow-zinc-700 mb-16">
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col items-center justify-center md:flex-row gap-8'>
                    <img alt='Carlos Hoyo' className='w-16 h-16 object-cover object-center rounded-full' src={yo} ></img>
                    <h1 className="font-sans text-5xl text-white">Hola, soy Carlos!</h1>
                </div>
                <aside className='flex flex-row gap-2 mt-4 items-center'>
                    <a href='https://constella.ai/'><img alt='Logo Constella Intelligence' src={constella} className='w-10 h-10 rounded-full'></img></a>
                    <p className='bg-emerald-900 text-emerald-400 p-0.5 rounded-sm'>Becario</p>
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
            <aside className='hidden md:flex flex-row justify-center gap-4'>
                <a href='https://github.com/carloshoyo'><FaGithub className='w-6 h-6 text-zinc-700'/></a>
                <a href='https://www.linkedin.com/in/carlos-hoyo-liddle-ba09b6314/'><GrLinkedin className='w-6 h-6 text-zinc-700'/></a>
                <a href='mailto:hoyoliddlecarlos@gmail.com'><IoIosMail className='w-6 h-6 text-zinc-700'/></a>
            </aside>
        </section>
    )
}