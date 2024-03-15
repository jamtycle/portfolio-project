import {
    HiOutlineArrowPathRoundedSquare,
    HiOutlineStar,
    HiOutlineBolt,
    HiOutlineArrowTrendingUp,
} from "solid-icons/hi";

export default function AboutMe() {
    return (
        <div class="grid h-screen w-full select-none" id="about">
            <div class="my-auto flex h-fit flex-col gap-24">
                <h3 class="text-center text-6xl font-bold" data-aos="fade-down">
                    ABOUT ME
                </h3>
                <div
                    class="m-auto flex w-3/4 items-center gap-3"
                    data-aos="fade-up-right"
                >
                    <img
                        class="aspect-square h-96 w-96 rounded-full"
                        src="./img/me.jpg"
                    />
                    <div class="flex flex-col gap-10">
                        <div class="mx-auto grid w-4/5 grid-cols-4">
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
                        <div class="mx-auto w-5/6">
                            <p class="text-justify text-2xl font-semibold tracking-wide leading-normal">
                                I am an experienced full-stack software
                                developer with a strong background in database
                                design and optimization, as well as GIS
                                technologies. I have successfully developed and
                                deployed over 80 projects and have a proven
                                track record of achieving significant
                                improvements in project development and
                                deployment under agile methodologies.
                                Additionally, I am certified in ArcGIS and have
                                experience developing APIs for agricultural
                                software.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
