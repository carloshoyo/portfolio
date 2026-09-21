import { FiExternalLink } from "react-icons/fi";

export function VisitSite({text1, text2, href}: {text1: string, text2: string, href: string}) {
    return(
        <a 
            href={href}
            className=""
        >
            <div 
                className="group p-3 flex flex-row justify-center items-center gap-2 rounded-xl 
                            bg-[#494949] transition duration-200 hover:bg-gradient-to-r 
                            hover:from-[#05ADE3] hover:via-[#05E0CC] hover:to-[#51D236] 
                            dark:hover:bg-gradient-to-r dark:hover:from-[#087EA4] 
                            dark:hover:via-[#009688] dark:hover:to-[#54A044]"
            >
                <p className="relative grid text-[#fffffa] text-lg font-medium text-center">
                    <span className="col-start-1 row-start-1 transition-opacity duration-300 group-hover:opacity-0">
                        {text1}
                    </span>
                    <span className="col-start-1 row-start-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {text2}
                    </span>
                </p>
                <FiExternalLink 
                    className="w-6 h-6 text-[#fffffa] "
                />
            </div>
        </a>
    )
}