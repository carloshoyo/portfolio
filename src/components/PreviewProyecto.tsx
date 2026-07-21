import { useEffect } from "react";
import type { Proyecto } from "../app/Proyectos";
import { motion } from "framer-motion";



export function PreviewProyecto({onClose, datos, id}: {onClose: () => void, datos: Proyecto, id: string}) {
    useEffect(() => {
        const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', esc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', esc);
            document.body.style.overflow = '';
        }
    }, [onClose]);

    return (
        <motion.article layoutId={`card-${datos.id}`} className="fixed inset-0 z-50 bg-[#fffffa]">
            <motion.img 
                layoutId={`logo-${datos.id}`} 
                alt="Logo StayIn" 
                src={datos.theme==='light' ? datos.logoClaro : datos.logoOscuro} 
                className="object-cover transition-transform duration-500 
                    group-hover:scale-105"
            >

            </motion.img>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                >
                {/* {stack.map((s) => ( ... ))} */}
            </motion.div>
            <motion.div 
                className="relative text-[#979797] max-h-0 group-hover:mt-10 opacity-0 overflow-hidden group-hover:max-h-40 
                    group-hover:opacity-100 transition-all duration-500"
                layoutId={`desc-${datos.id}`}
            >
                <p>
                    {datos.descripcion}
                </p>
            </motion.div>
        </motion.article >
    )
}