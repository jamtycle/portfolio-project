import { For, Show, createSignal, onMount } from "solid-js";
import {
    HiOutlineArrowDown,
    HiOutlineArrowUp,
    HiOutlineChevronDoubleDown,
    HiOutlineEnvelope,
    HiOutlineNewspaper,
} from "solid-icons/hi";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Cover from "./pages/Cover";
import { FiGithub } from "solid-icons/fi";
import LabeledIcon from "./components/LabeledIcon";
import ProjectsMobile from "./pages/ProjectsMobile";
import MoreProjectsMobile from "./pages/MoreProjectsMobile";

function MobileApp() {
    /** @type {boolean} */
    let isScrolling = false;
    let touchstartY = 0;
    let touchendY = 0;
    let cover, aboutMe, projects, moreProjects, contactMe;
    /**
     * @type {HTMLElement[]}
     */
    let elements;

    /**
     * @type {[import("solid-js").Accessor<number>, import("solid-js").Setter<number>]}
     */
    const [targetIndex, setTargetIndex] = createSignal(0);

    function handleTargetIndexChange(_number) {
        if (isScrolling) return;

        setTargetIndex((prev) => {
            const info = prev + _number;
            if (info >= 0 && info < elements.length) {
                isScrolling = true;
                return info;
            }
            return prev;
        });
    }

    function checkDirection() {
        if (touchendY < touchstartY) handleTargetIndexChange(1);
        if (touchendY > touchstartY) handleTargetIndexChange(-1);
    }

    onMount(() => {
        elements = [cover, aboutMe, projects, contactMe];
        window.scrollTo({ behavior: "smooth", top: 0, left: 0 });

        window.addEventListener("scroll", () => {
            isScrolling = true;
            elements.forEach((element, i) => {
                const rect = element.getBoundingClientRect();
                if (window.scrollY >= rect.top && window.scrollY <= rect.bottom)
                    setTargetIndex(i);
            });
        });
        window.addEventListener("scrollend", () => (isScrolling = false));

        window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) handleTargetIndexChange(1);
            else handleTargetIndexChange(-1);
        });
        window.addEventListener(
            "touchstart",
            (e) => (touchstartY = e.changedTouches[0].screenY),
        );
        window.addEventListener("touchend", (e) => {
            touchendY = e.changedTouches[0].screenY;
            checkDirection();
        });
        setTargetIndex(0);
    });

    return (
        <>
            <main class="grid w-screen grid-rows-4 text-white">
                <Cover
                    ref={cover}
                    nextTarget={() =>
                        window.scrollTo({
                            behavior: "smooth",
                            top: elements[1].offsetTop,
                            left: 0,
                        })
                    }
                />
                <AboutMe ref={aboutMe} />
                <ProjectsMobile ref={projects} />
                <MoreProjectsMobile ref={moreProjects} />
                <ContactMe ref={contactMe} />
            </main>

            <div class="absolute top-8 flex w-screen select-none justify-center gap-5 md:right-10 md:w-fit">
                <LabeledIcon
                    containerClass="link-primary hover:text-white"
                    href="./pdf/bruno-ramirez-resume.pdf"
                    IconComponent={<HiOutlineNewspaper class="h-6 w-6" />}
                    LabelComponent={<p class="text-lg">Resume</p>}
                />
                <LabeledIcon
                    containerClass="link-primary hover:text-white"
                    href="./pdf/cover-letter.pdf"
                    IconComponent={
                        <HiOutlineEnvelope class="h-6 w-6 py-[0.05rem]" />
                    }
                    LabelComponent={<p class="text-lg">Cover Letter</p>}
                />
                <LabeledIcon
                    containerClass="link-primary hover:text-white"
                    href="https://github.com/jamtycle"
                    IconComponent={<FiGithub class="h-6 w-6 py-0.5" />}
                    LabelComponent={<p class="text-lg">Github</p>}
                />
            </div>

            <div class="fixed right-10 top-[34%] hidden select-none md:inline-block">
                <ul class="steps steps-vertical text-white">
                    <For each={["Cover", "About me", "Projects", "Contact me"]}>
                        {(item, i) => (
                            <li
                                class="step cursor-pointer font-semibold"
                                classList={{
                                    "step-primary": targetIndex() >= i(),
                                }}
                                data-content="⦿"
                                onClick={() => setTargetIndex(i())}
                            >
                                {item}
                            </li>
                        )}
                    </For>
                </ul>
            </div>

            <div class="fixed right-10 top-3/4 hidden flex-col items-end gap-5 md:flex">
                <a
                    class="btn btn-circle btn-outline btn-primary btn-md border-4"
                    classList={{ "btn-disabled": targetIndex() === 0 }}
                    onClick={() => handleTargetIndexChange(-1)}
                >
                    <HiOutlineArrowUp class="h-full w-3/4" />
                </a>

                <a
                    class="btn btn-circle btn-outline btn-primary btn-md border-4"
                    classList={{ "btn-disabled": targetIndex() === 3 }}
                    onClick={() => handleTargetIndexChange(1)}
                >
                    <HiOutlineArrowDown class="h-full w-3/4" />
                </a>
            </div>

            <div class="fixed right-10 top-3/4 hidden flex-col items-end gap-5 md:flex">
                <a
                    class="btn btn-circle btn-outline btn-primary btn-md border-4"
                    classList={{ "btn-disabled": targetIndex() === 0 }}
                    onClick={() => handleTargetIndexChange(-1)}
                >
                    <HiOutlineArrowUp class="h-full w-3/4" />
                </a>

                <a
                    class="btn btn-circle btn-outline btn-primary btn-md border-4"
                    classList={{ "btn-disabled": targetIndex() === 3 }}
                    onClick={() => handleTargetIndexChange(1)}
                >
                    <HiOutlineArrowDown class="h-full w-3/4" />
                </a>
            </div>

            <Show when={targetIndex() === 0}>
                <div class="fixed bottom-3 right-[38%] flex animate-bounce select-none flex-col items-center text-3xl tracking-widest md:hidden">
                    <p>Swipe</p>
                    <HiOutlineChevronDoubleDown class="h-10 w-10" />
                </div>
            </Show>
        </>
    );
}

export default MobileApp;
