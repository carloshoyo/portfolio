import { HiMiniCpuChip } from "react-icons/hi2";
import { useState, type SVGProps } from "react";
import { FaReact } from "react-icons/fa";
import { React } from '../components/LogosSVG'
import { JavaScript } from '../components/LogosSVG'
import { IoLogoJavascript } from "react-icons/io5";

export function Tecnologias() {
    const [reactHover, setReactHover] = useState(false)
    const classNameLogos = "w-10 h-10 text-zinc-700 hover:w-13 h-13 hover:text-yellow-300 duration-100";
    return (
        <section className="mb-16 gap-4 flex flex-col gap-4 fonr-sans">
            <article className="flex flex-col gap-4">
                <header className="flex flex-row gap-4 ">
                    <HiMiniCpuChip className="w-7 h-7"/>
                    <h1 className="fonts-sans text-2xl">
                        Tecnologías
                    </h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full items-center
                    ml-4 mr-4 rounded bg-gradient-to-br from-zinc-900 to-zinc-850">
                    <section className="w-full border-r-1 border-zinc-800">
                        <h2 className="text-lg text-center p-2 rounded-t-lg">
                            Frontend
                        </h2>
                        {/* c++, java, javascript, typescript, go, python */}
                        <ul className="p-4">
                            <li>
                                <FaReact className="hidden w-10 h-10 text-zinc-700 hover:w-13 h-13 hover:text-cyan-400 duration-100"/>
                                <React className=" w-10 h-10 hover:w-13 h-13 duration-100"/>
                                <IoLogoJavascript className="hidden w-10 h-10 text-zinc-700 hover:w-13 h-13 hover:text-yellow-300 duration-100"/>
                                <JavaScript className="w-10 h-10 hover:w-13 h-13 duration-100"/>
                            </li>
                        </ul>
                    </section>
                    <section className="w-full">
                        <h2 className="text-lg text-center">Backend</h2>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </section>
                    <section className="w-full">
                        <h2 className="text-lg text-center">Bases de Datos</h2>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </section>
                    <section className="w-full">
                        <h2 className="text-lg text-center">DevOps</h2>
                        <ul>
                            <li>

                            </li>
                        </ul>
                    </section>
                </div>
            </article>
        </section>
    )
}