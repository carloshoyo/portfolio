import { FiExternalLink } from "react-icons/fi";

export function VisitSite() {
    return(
        <a 
            href="Hero.tsx"
            className="w-full flex justify-end"
        >
            <div 
                className="group p-3 w-full md:w-1/3 flex flex-row justify-center items-center gap-2 rounded-xl 
                            bg-[#494949] transition duration-200 hover:bg-gradient-to-r 
                            hover:from-[#05ADE3] hover:via-[#05E0CC] hover:to-[#51D236] 
                            dark:hover:bg-gradient-to-r dark:hover:from-[#087EA4] 
                            dark:hover:via-[#009688] dark:hover:to-[#54A044]"
            >
                <p className="relative grid text-[#fffffa] text-lg font-medium text-center">
                    <span className="col-start-1 row-start-1 transition-opacity duration-300 group-hover:opacity-0">
                        Visit Site
                    </span>
                    <span className="col-start-1 row-start-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Coming soon
                    </span>
                </p>
                <FiExternalLink 
                    className="w-6 h-6 text-[#fffffa] "
                />
            </div>
        </a>
    )
}