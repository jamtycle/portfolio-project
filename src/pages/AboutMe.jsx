import {
    HiOutlineArrowPathRoundedSquare,
    HiOutlineStar,
    HiOutlineBolt,
    HiOutlineArrowTrendingUp,
} from "solid-icons/hi";

/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @returns
 */
export default function AboutMe(props) {
    return (
        <div
            ref={props.ref}
            class="flex h-screen w-full select-none flex-col items-center justify-center gap-16 align-middle"
            id="about"
        >
            <h3 class="text-center text-6xl font-bold" data-aos="fade-down">
                ABOUT ME
            </h3>
            <div class="flex w-[60%] items-center gap-10" data-aos="fade-up-right">
                <img
                    class="aspect-square h-96 w-96 rounded-full"
                    src="./img/me.jpg"
                />
                <div class="flex gap-10">
                    <div class="mx-auto grid grid-rows-4">
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowPathRoundedSquare class="h-20 w-20 text-primary" />
                            <p class="text-center text-2xl font-bold">
                                Proactive
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineStar class="h-20 w-20 text-yellow-400" />
                            <p class="text-center text-2xl font-bold">
                                Excelence
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineBolt class="h-20 w-20 text-blue-400" />
                            <p class="text-center text-2xl font-bold">
                                Productivity
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowTrendingUp class="h-20 w-20 text-green-400" />
                            <p class="text-center text-2xl font-bold">
                                Scalability
                            </p>
                        </div>
                    </div>
                    <div class="mx-auto w-4/6">
                        <p class="text-justify text-2xl font-semibold leading-normal tracking-wide">
                            I am an experienced full-stack software developer
                            with a strong background in database design and
                            optimization, as well as GIS technologies. I have
                            successfully developed and deployed over 80 projects
                            and have a proven track record of achieving
                            significant improvements in project development and
                            deployment under agile methodologies. Additionally,
                            I am certified in ArcGIS and have experience
                            developing APIs for agricultural software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
