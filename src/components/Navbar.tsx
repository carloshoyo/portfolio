import logo from '../assets/LogoCHLBlanco.svg'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function NavBar() {
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
        <nav className='bg-gradient-to-br from-zinc-950/75 to-zinc-900/75 fixed top-0 w-full flex 
        border-b-1 border-zinc-700 mb-8 backdrop-blur-md z-50'>
            <ul className='flex items-center justify-between w-full ml-2'>
                <li className='flex items-center gap-8'>
                    <a href=''><img className='w-20 h-20' src={logo}/></a>
                    <h1 className='hidden lg:block text-white lg:text-4xl font-title'>Carlos Hoyo</h1>
                </li>
                <li className='hidden sm:block flex gap-4 mr-2 text-white'>
                    { barOptions.map((option) => (
                        <a key={option.name} href={option.href} className='scroll-smooth font-semibold px-6 py-2 rounded-xl align-center hover:bg-zinc-800/25 hover:p-3 hover:text-emerald-400 active:bg-zinc-700/25 active:duration-100 duration-300'>
                            {option.name} 
                        </a>
                    ))}
                </li>
                <li className="sm:hidden">
                    <button className="text-white mr-2"onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </li>
            </ul>
            <AnimatePresence mode='wait'>
                {isOpen && (                
                    <motion.div className='absolute top-[100%] left-0 flex flex-col gap-4 p-4 items-center
                        text-center bg-gradient-to-br from-zinc-950 to-zinc-900 backdrop-blur-xl border-b-1 
                        border-zinc-700 w-full text-white shadow-2xl'
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