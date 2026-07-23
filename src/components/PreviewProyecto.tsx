import { useEffect } from "react";
import type { Proyecto } from "../app/Proyectos";
import { motion } from "framer-motion";
import type { Stack } from "../app/Proyectos";
import { StackCard } from "./StackCard";
import { VisitSite } from "./VisitSite";
import { IoClose } from "react-icons/io5";

export function PreviewProyecto({onClose, datos, stack}: {onClose: () => void, datos: Proyecto, stack: Stack[]}) {
    useEffect(() => {
        const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        document.documentElement.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', esc);
            document.documentElement.style.overflow = '';
        }
    }, [onClose]);

    return (
        <motion.article layoutId={`card-${datos.id}`} className="flex flex-col md:flex-row fixed inset-0 z-50 bg-[#fffffa] dark:bg-[#161616] overflow-y-auto px-10">
            <aside className="order-2 md:order-1 w-1/3 shrink-0 flex justify-center">
                <div className="relative w-1/2 self-center">
                    {/* Vídeo detrás: cubre algo más que el hueco; el marco tapa los
                        bordes y redondea las esquinas. Ajusta inset hasta cubrir la pantalla. */}
                    <video
                        src="/Demo.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute object-cover rounded-2xl"
                        style={{
                            // Hueco de pantalla del iPhone17.svg (medido: aspecto 19.5:9).
                            top: '2.2%',
                            left: '5%',
                            width: '90%',
                            height: '95.5%',
                        }}
                    />
                    {/* Bezel por encima: pantalla transparente + Dynamic Island.
                        Define el tamaño del contenedor y enmascara el vídeo. */}
                    <img
                        src="/iPhone17.svg"
                        alt="Demo de StayIn"
                        className="relative w-full h-auto object-contain pointer-events-none select-none"
                    />
                </div>
            </aside>
            <div className="order-1 md:order-2 flex-1 min-h-0 h-full p-8 flex flex-col gap-10">
                <div className="w-full flex flex-row justify-between">
                    <div className="w-1/2">
                        <motion.img 
                            layoutId={`logo-${datos.id}`} 
                            alt="Logo StayIn" 
                            src={datos.theme==='light' ? datos.logoClaro : datos.logoOscuro} 
                            className="object-cover w-full h-full transition-transform duration-500 "
                        >
                        </motion.img>
                    </div>
                    <div>
                        <IoClose
                            className="text-[#494949] hover:text-[#363636] dark:hover:text-[#696969] w-10 h-10 cursor-pointer duration-150"
                            onClick={onClose}
                        />
                    </div>
                </div>
                <motion.div
                    className="relative text-[#979797] text-sm md:text-md lg:text-lg"
                    layoutId={`desc-${datos.id}`}
                >
                    <p>
                        {datos.descripcion}
                    </p>
                </motion.div>
                <div className="w-full flex justify-end">
                    <VisitSite/>
                </div>
                <motion.div 
                    className="flex flex-col gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="font-bold md:text-md lg:text-xl">
                        What have I used for this project?
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-20">
                        {stack.map((s) => (
                            <StackCard key={s.nombre} tech={s} theme={datos.theme} />
                        ))}
                    </div>
                    
                </motion.div>
            </div>
        </motion.article >
    )
}