import type { Trabajo } from "../app/Experiencia";

export function TimeLine({jobs}: {jobs: Trabajo[]}) {
    return (
        <section>
            {jobs.map((job) => (
                <div className="">
                    <div className="border-l-2 border-[#9EB64C] dark:border-[#CCD5AE] px-7">
                        <p className="font-semibold">
                            {job.title}
                        </p>
                        <p className="text-sm text-[#979797]">
                            {job.period}
                        </p>
                        <p className="text-[#777777]">
                            {job.desc}
                        </p>
                    </div>
                    <div className="border-l-2 border-dotted border-[#9EB64C] dark:border-[#CCD5AE] h-10">
                    </div>
                </div>
            ))}
        </section>
    )
}