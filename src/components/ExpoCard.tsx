export function ExpoCard() {
    return (
        <div 
            className="flex flex-row p-2 w-50 rounded-full  border-[#087EA4] flex flex-row 
                        items-center justify-center gap-3 bg-gradient-to-r from-[#000]/20 to-[#AEAEAE]/20
                        hover:bg-gradient-to-br hover:from-[#000]/40 hover:via-[#AEAEAE]/40 hover:to-[#000]/40
                        hover:border-0 transition duration-200"
        >
            <img src="/expo.svg" alt="" className="w-6 h-" />
            <p className="text-[#000]">Expo</p>
        </div>
    )
}