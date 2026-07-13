import type { Icono } from "./Tecnologías";

export function TechCard({title, tecs}: {title: string, tecs: Icono[]}) {
    return (
        <div className="relative hover:scale-105 duration-200 flex flex-col justify-center min-h-50
                        bg-[#fffffa] dark:bg-[#161616] shadow-[0_0_10px_0px_#CCD5AE]
                        dark:shadow-[0_0_0px_0px_#CCD5AE] rounded-2xl text-sm gap-7
                        w-full">
            <p className="absolute top-2 left-2 text-[#979797]/70">{title}</p>
            <div className="flex align-center self-center w-full justify-center p-10">
                <div className="grid grid-cols-4 gap-7 w-full justify-items-center">
                    {tecs.map((tec) => (
                        <div key={tec.nombre} className="group relative">
                            <div className="hidden absolute -top-10 left-1/2 -translate-x-1/2 bg-[#363636]/80 p-1 rounded-md group-hover:block whitespace-nowrap">
                                <p className="text-[#fff] text-center">{tec.nombre}</p>
                            </div>
                            <img src={tec.ruta} alt={tec.nombre} className="w-9 h-9 hover:scale-120 duration-200 transition-transform"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}