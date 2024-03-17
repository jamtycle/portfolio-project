import { FaSolidQuoteLeft, FaSolidQuoteRight } from "solid-icons/fa";
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
            <div
                class="flex w-[65%] items-center gap-10"
                data-aos="fade-up-right"
            >
                <div class="flex flex-col items-center gap-10">
                    <img
                        class="aspect-square w-full rounded-full"
                        src="./img/me.jpg"
                    />
                    <div class="animate-alpha-slow mx-auto flex w-fit flex-col items-center justify-center align-middle text-base-content">
                        <p class="relative whitespace-pre text-right text-xl italic">
                            <FaSolidQuoteLeft class="absolute -left-14 top-1 h-12 w-12" />
                            Scientists are the ones who ought to guide major
                            {"\n"}
                            decisions, with the help of machines.
                            <FaSolidQuoteRight class="absolute -right-14 top-1 h-12 w-12" />
                        </p>
                        <p class="w-full text-right font-semibold text-white">
                            Miguel Benasayag, The Tyranny of Algorithms
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-10">
                    <div class="mx-auto grid grid-cols-4 gap-2">
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowPathRoundedSquare class="h-20 w-20 text-primary" />
                            <p class="text-center text-2xl font-semibold">
                                Proactive
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineStar class="h-20 w-20 text-yellow-400" />
                            <p class="text-center text-2xl font-semibold">
                                Excelence
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineBolt class="h-20 w-20 text-blue-400" />
                            <p class="text-center text-2xl font-semibold">
                                Productivity
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowTrendingUp class="h-20 w-20 text-green-400" />
                            <p class="text-center text-2xl font-semibold">
                                Scalability
                            </p>
                        </div>
                    </div>
                    <div class="mx-auto w-5/6">
                        <p class="text-justify text-2xl leading-normal tracking-wide">
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
