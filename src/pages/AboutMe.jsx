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
            class="flex h-full w-screen select-none flex-col items-center justify-center gap-5 align-middle md:gap-16"
            id="about"
        >
            <h3
                class="w-full text-center text-4xl font-bold md:text-6xl"
                data-aos="fade-down"
            >
                &lt; ABOUT ME &gt;
            </h3>
            <div
                class="flex w-full flex-col items-center gap-8 md:w-[65%] md:gap-10 xl:flex-row"
                data-aos="fade-up-right"
            >
                <div class="flex flex-col items-center gap-4 md:gap-10">
                    <img
                        class="aspect-square w-[50%] rounded-full md:w-[60%] xl:w-full"
                        src="./img/me.jpg"
                    />
                    <div class="animate-alpha-slow mx-auto flex w-fit flex-col items-center justify-center align-middle text-base-content">
                        <p class="text-md relative whitespace-pre text-right text-sm italic md:text-lg">
                            <FaSolidQuoteLeft class="absolute -left-9 top-1 h-8 w-8 md:-left-14 md:h-12 md:w-12" />
                            Scientists are the ones who ought to guide major
                            {"\n"}
                            decisions, with the help of machines.
                            <FaSolidQuoteRight class="absolute -right-9 top-1 h-8 w-8 md:-right-14 md:h-12 md:w-12" />
                        </p>
                        <p class="w-full text-right text-xs font-semibold text-white md:text-base">
                            Miguel Benasayag, The Tyranny of Algorithms
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-3 2xl:gap-10">
                    <div class="mx-auto grid w-4/5 grid-cols-4 gap-2 text-sm md:text-base lg:text-base xl:text-base 2xl:w-full 2xl:text-2xl">
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowPathRoundedSquare class="h-12 w-12 text-primary md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
                            <p class="text-center font-semibold">Proactive</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineStar class="h-12 w-12 text-yellow-400 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
                            <p class="text-center font-semibold">Excelence</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineBolt class="h-12 w-12 text-blue-400 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
                            <p class="text-center font-semibold">
                                Productivity
                            </p>
                        </div>
                        <div class="flex flex-col items-center">
                            <HiOutlineArrowTrendingUp class="h-12 w-12 text-green-400 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20" />
                            <p class="text-center font-semibold">Scalability</p>
                        </div>
                    </div>
                    <div class="mx-auto w-5/6">
                        <p class="text-justify text-sm leading-normal tracking-wide md:text-lg 2xl:text-2xl">
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
