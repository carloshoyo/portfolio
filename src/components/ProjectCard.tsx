import { motion } from "framer-motion";
import { MoveRight } from 'lucide-react';

export function ProjectCard({theme, descripcion, logoClaro, logoOscuro, onClick, id}: {theme: string, descripcion: string, logoClaro: string, logoOscuro: string, onClick: () => void, id: string}) {
    return(
        <motion.article 
            className="flex flex-col group  w-full max-w-2xl mx-auto shadow-[0_0_25px_0px_#CCD5AE] dark:shadow-[0_0_0px_0px_#CCD5AE] dark:bg-[#161616] p-10 rounded-4xl
                hover:scale-103 duration-150"
            layoutId={`card-${id}`}
        >
            <motion.img layoutId={`logo-${id}`} alt="Logo StayIn" src={theme==='light' ? logoClaro : logoOscuro} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"></motion.img>
            <motion.div 
                className="relative text-[#979797] max-h-0 group-hover:mt-10 opacity-0 overflow-hidden group-hover:max-h-40 
                    group-hover:opacity-100 transition-all duration-500"
                layoutId={`desc-${id}`}
            >
                <p>
                    {descripcion}
                </p>
                <div className='w-fit ml-auto'>
                    <motion.div
                        className='flex flex-row items-center gap-1 cursor-pointer'
                        initial="rest"
                        whileHover="hover"
                        onClick={onClick}
                        >
                        <div 
                            className='overflow-hidden relative select-none'
                        >
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
                    </motion.div>
                </div>
            </motion.div>
        </motion.article>
    )
}