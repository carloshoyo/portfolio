import { FaFilePdf } from "react-icons/fa6";

export function Footer () {
    return (
        <footer>
            <section className='flex flex-col justify-center items-center text-center gap-2 p-5 mt-20
                                bg-[#363636] dark:bg-[#161616] '>
                <p className='text-[#979797]'>Carlos Hoyo Liddle · 2026</p>
                <a href="/cv-carlos-hoyo.pdf" target="_blank" rel='noopener' className='flex items-center gap-2'>
                    <p className='text-[#979797]'>CV</p>
                    <FaFilePdf className='text-[#979797] w-5 h-5'/>
                </a>
            </section>
        </footer>
        
    )
}