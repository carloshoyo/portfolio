import { useState } from "react";

export function TimeLine() {
    const [isHoveredConstella, setIsHoveredConstella] = useState(false)
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-row items-center md:flex-col gap-4 justify-center text-center">
                <div className="flex flex-row justify-center">
                    <div className={`hidden md:block flex flex-col text-emerald-400 p-2 rounded-lg bg-black/25 ${isHoveredConstella ? 'opacity-100' : 'opacity-0'}`}>
                        <a href="">
                            <p>Constella Intelligence</p>
                            <p>Becario.</p>
                            <p>(Feb. 2026 - Ag. 2026)</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:flex-row items-center">
                    <Line value={'h-50 w-0 md:h-0 md:w-75'}/>
                    <div className='flex flex-col text-emerald-400 md:hidden'>
                        <a href="">
                            <p>Constella Intelligence</p>
                            <p>Becario.</p>
                            <p>(Feb. 2026 - Ag. 2026)</p>
                        </a>
                    </div>                    
                    <Circle color="border-emerald-800 bg-emerald-950" 
                        onMouseEnter={() => { setIsHoveredConstella(true)}}
                        onMouseLeave={() => { setIsHoveredConstella(false)}}/>
                    <DiscLine value={'h-50 w-0 md:h-0 md:w-75'}/>
                </div>
            </div>
        </div>
    )

}

const classNameComponents = "flex flex-col";

const Circle = ({
        color,
        onMouseEnter,
        onMouseLeave
    }: {
        color:string;
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
        }) => {
    return (
        <div className={classNameComponents}>
            <a href="">
                <div 
                    className={`border-2 ${color} w-5 h-5 rounded-full`}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                </div>
            </a>
        </div>
    )
}

const Line = ({value}:{value:string}) => {
    return (
        <div className={classNameComponents}>
            <div className={`${value} border border-zinc-700`}></div>
        </div>
    )
}

const DiscLine = ({value}:{value:string}) => {
    return (
        <div className={classNameComponents}>
            <div className={`${value} border border-dashed border-zinc-700`}></div>
        </div>
    )
}