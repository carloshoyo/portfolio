import logo from '../assets/LogoCHLBlanco.svg'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export function NavBar({ theme, toggleTheme } : { theme: string, toggleTheme:() => void }) {
    const barOptions = [
        {name:"Sobre mí", href: '#sobre-mi'},
        {name:"Experiencia", href: '#experiencia'},
        {name:"Proyectos", href: '#proyectos'},
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
        <nav className='bg-rose-100 text-cool-steel-950 transition-colors duration-500 dark:bg-[#1A1A1A]/60 fixed top-0 w-full flex 
                        border-b-1 border-[#c4455e] dark:border-zinc-700 mb-8 backdrop-blur-md z-50 dark:text-[#e5e5e5]'>
            <ul className='flex items-center justify-between w-full ml-2 '>
                <li className='flex items-center gap-8'>
                    <a href=''><img className='w-10 h-10' src={logo}/></a>
                    <h1 className='hidden lg:block  lg:text-2xl font-title'>Carlos Hoyo</h1>
                </li>
                <li className='hidden sm:flex flex-row mr-2 text-sm items-center'>
                    { barOptions.map((option) => (
                        <a key={option.name} href={option.href} className='group relative scroll-smooth font-semibold px-4 py-3 align-center hover:bg-[#F6D5D8] dark:hover:bg-zinc-800/25 active:border-b border-cool-steel-800 dark:border-emerald-400 active:bg-zinc-700/25 active:duration-100 duration-300 justify-center'>
                            <div className='hidden absolute group-hover:flex bottom-0 left-0 right-0 w-full h-0.5 bg-gradient-to-r from-[#f0d956] to-[#c4455e] dark:bg-gradient-to-r dark:from-[#557c93] dark:to-[#a4c6b8]'></div>
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
                <li className="sm:hidden">
                    <button className="text-white mr-2"onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </li>
            </ul>
            <AnimatePresence mode='wait'>
                {isOpen && (                
                    <motion.div 
                        className='absolute top-[100%] left-0 flex flex-col gap-4 p-4 items-center
                            text-center bg-gradient-to-br from-gray-950 to-zinc-900 backdrop-blur-md border-b-1 
                            border-zinc-700 w-full text-white shadow-2xl gap-1'
                        initial='hidden'
                        animate='visible'
                        exit='nonvisible'
                        variants={variants}
                    >
                        { barOptions.map((option) => (
                            <a key={option.name} href={option.href} className='text-white font-semibold px-6 py-2 rounded-xl align-center hover:bg-zinc-800/25 hover:p-3 active:bg-zinc-700/25 active:duration-100 duration-300'>
                                {option.name}
                            </a>
                        ))}                        
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}