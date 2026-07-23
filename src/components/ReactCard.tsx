export function ReactCard() {
    return (
        <div 
            className="flex flex-row p-2 w-50 rounded-full  border-[#087EA4] flex flex-row 
                        items-center justify-center gap-3 bg-gradient-to-r from-[#087EA4]/20 to-[#BAE3F1]/20
                        hover:bg-gradient-to-br hover:from-[#087EA4]/40 hover:via-[#BAE3F1]/40 hover:to-[#087EA4]/40
                        hover:border-0 transition duration-200"
        >
            <img src="/React_light.svg" alt="" className="w-6 h-" />
            <p className="text-[#087EA4]">React Native</p>
        </div>
    )
}