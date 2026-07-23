import { useEffect, useState } from 'react';
import yo from '/yo.webp';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";

export function Hero () {
    const ROLES = ["Full-Stack Engineer", "AI Integration", "Automation"];
    const NOMBRE = ["Carlos", " Hoyo", "Liddle"];
    const ICONOS_CLASSNAME='flex-1 w-6 h-6 hover:scale-110 duration-150 hover:text-[#CCD5AE]';
    const ICONOS = [
                    {
                        href: 'https://github.com/carloshoyo',
                        icon: <FaGithub className={ICONOS_CLASSNAME}/>
                    }, 
                    {
                        href: 'https://www.linkedin.com/in/carlos-hoyo-liddle-ba09b6314/',
                        icon: <GrLinkedin className={ICONOS_CLASSNAME}/>
                    },
                    {
                        href: 'mailto:hoyoliddlecarlos@gmail.com',
                        icon: <IoIosMail className={ICONOS_CLASSNAME}/>
                    }
                ]

    const [i, setI] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const id = setInterval(() => {
            setVisible(false);                          // 1. desvanece el actual
            setTimeout(() => {
            setI((prev) => (prev + 1) % ROLES.length); // 2. cambia el texto (oculto)
            setVisible(true);                          // 3. muestra el nuevo
            }, 350);                                     // = duración del fade de salida
        }, 3000);                                       // cada 3s
        return () => clearInterval(id);                 // ← limpieza imprescindible
    }, []);

    return (
        <section id='hero' className="md:p-20 lg:px-30 py-4 flex flex-col md:flex-row justify-center
                                    items-center gap-5 xl:justify-between mb-16">
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row md:flex-col gap-2 md:gap-0'>
                    {NOMBRE.map((linea, idx) => (
                        <p
                            key={linea}
                            className="animate-rise font-hero-title text-lg lg:text-8xl md:text-5xl"
                            style={{ animationDelay: `${idx * 0.12}s` }}
                        >
                            {linea}
                        </p>
                    ))}
                </div>                
                <div className='text-center'>
                    <p
                        className='animate-rise inline-block'
                        style={{ animationDelay: "0.45s" }}
                    >
                        <span
                            className={`font-inter text-[#979797] md:text-2xl lg:text-4xl text-xl inline-block transition-all
                                duration-[350ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                        >
                            {ROLES[i]}
                        </span>
                    </p>
                    <p 
                        className='animate-rise font-inter text-xs md:text-base lg:text-xl text-[#979797] font-light'
                        style={{ animationDelay: "0.55s" }}
                    >
                        @ Constella Intelligence
                    </p>
                    <div className='animate-rise flex flex-row justify-center gap-5'>
                        <img src="/spain-flag.svg" alt="Spain flag" title='Spanish Nationality' />
                        <img src="/england-flag.svg" alt='England' title="English Nationality" />
                    </div>
                </div>
            </div>
            <div className='text-left items-center flex flex-col gap-4 w-72'>
                <div 
                    className='animate-rise w-36 h-36 lg:w-72 lg:h-72 rounded-full bg-[#CCD5AE] dark:bg-[#CCD5AE]  flex justify-center overflow-hidden'
                    style={{ animationDelay: "0.30s" }}
                >
                    <img
                        alt='Carlos Hoyo'
                        className='w-full h-full object-cover object-[position:center_35%]'
                        src={yo}
                        width={192}
                        height={288}
                        fetchPriority='high'
                    />
                </div>
                <div>
                    <p
                        className='animate-rise font-inter font-bold md:text-lg'
                        style={{ animationDelay: "0.60s" }}
                    >
                        <span
                            className='subrayado'
                            style={{ animationDelay: "1.1s" }}
                        >
                            Bringing ideas into real products    
                        </span>
                    </p>
                    <p 
                        className='animate-rise text-[#979797]'
                        style={{ animationDelay: "0.70s" }}
                    >
                        Hi! I'm Carlos,
                    </p>
                    <p 
                        className='animate-rise text-[#979797] '
                        style={{ animationDelay: "0.70s" }}
                    >
                        Computer Engineer, focused on full-stack development with experience in integration and automation with AI.
                    </p>
                </div>
                <div
                    className='animate-rise flex flex-row justify-center gap-5'
                    style={{ animationDelay: "0.80s" }}
                >
                    {ICONOS.map((icono) => (
                        <a key={icono.href} href={icono.href}>{icono.icon}</a>
                    ))}
                </div>

            </div>
        </section>
    )
}