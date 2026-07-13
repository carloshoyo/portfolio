import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export function NavBar({ theme, toggleTheme } : { theme: string, toggleTheme:() => void }) {
    const barOptions = [
        {name:"Sobre mí", href: '#hero'},
        {name:"Proyectos", href: '#proyectos'},
        {name:"Experiencia", href: '#experiencia'},
        {name:"Contacto", href: '#contcto'}
    ]
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: .3
            }
        },
        nonvisible: {
            opacity: 0,
            transition: {
                duration: .3
            }
        }
    }
    return (
        <nav className='hidden md:block bg-[#fffffa] md:p-0 text-[#363636] transition-colors 
                        duration-500 dark:bg-[#1A1A1A]/60 fixed top-0 w-full flex border-b-1 
                        border-[#979797]/30 dark:border-zinc-700 mb-8 backdrop-blur-md z-50 
                        dark:text-[#e5e5e5] px-2'>
            <ul className='flex items-center justify-between w-full px-2'>
                <li className='flex items-center gap-8'>
                    <h1 className='lg:text-2xl font-montserrat font-semibold'>C<em>A</em>RLOS HOYO</h1>
                </li>
                <li className='hidden sm:flex flex-row text-sm items-center'>
                    { barOptions.map((option) => (
                        <a key={option.name} href={option.href} className='group relative scroll-smooth font-semibold px-4 py-3 align-center hover:bg-[#CCD5AE]/30 dark:hover:bg-zinc-800/25 active:border-b border-cool-steel-800 dark:border-emerald-400 active:bg-zinc-700/25 active:duration-100 duration-300 justify-center'>
                            <div className='hidden absolute group-hover:flex bottom-0 left-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#ccd5ae] to-[#ccd5ae] dark:bg-gradient-to-r dark:from-[#ccd5ae] dark:to-[#e9edc9]'></div>
                            {option.name} 
                        </a>
                    ))}
                    <div className='flex flex-row rounded-full bg-zinc-800 w-12 p-1 gap-1'>
                        <MdDarkMode 
                            className={`cursor-pointer ${theme==='dark' ? 'block' : 'hidden'} text-amber-200`}
                            onClick={toggleTheme}
                        />
                        <MdOutlineDarkMode 
                            className={`cursor-pointer ${theme==='dark' ? 'hidden' : 'block'} text-[#e9edc9]`}
                            onClick={toggleTheme}
                        />
                        <MdOutlineLightMode 
                            className={`cursor-pointer ${theme==='dark' ? 'block' : 'hidden'} text-[#e5e5e5]`}
                            onClick={toggleTheme}
                        />
                        <MdLightMode 
                            className={`cursor-pointer ${theme==='dark' ? 'hidden' : 'block'} text-yellow-300`}
                            onClick={toggleTheme}
                        />
                    </div>
                </li>
                <li className="sm:hidden flex fustify-center align-center">
                    <button className="text-[#363636] dark:text-white mr-2"onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </li>
            </ul>
            <AnimatePresence mode='wait'>
                {isOpen && (                
                    <motion.div 
                        className='absolute top-[100%] left-0 flex flex-col gap-4 p-4 items-center
                            text-center bg-[#fffffa] dark:bg-[#1A1A1A] backdrop-blur-md border-b-1 
                            border-[#979797]/30 w-full text-white shadow-2xl gap-1'
                        initial='hidden'
                        animate='visible'
                        exit='nonvisible'
                        variants={variants}
                    >
                        { barOptions.map((option) => (
                            <a key={option.name} href={option.href} className='text-[#363636] bg-[#fffffa] dark:bg-[#1A1A1A] dark:text-white font-semibold px-6 py-2 rounded-xl align-center hover:bg-zinc-800/25 hover:p-3 active:bg-zinc-700/25 active:duration-100 duration-300'>
                                {option.name}
                            </a>
                        ))}                        
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}