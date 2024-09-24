import { For, createEffect, createSignal, on, onMount } from "solid-js";
import {
    HiOutlineArrowDown,
    HiOutlineArrowUp,
    HiOutlineEnvelope,
    HiOutlineNewspaper,
} from "solid-icons/hi";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Cover from "./pages/Cover";
import Projects from "./pages/Projects";
import { FiGithub } from "solid-icons/fi";
import LabeledIcon from "./components/LabeledIcon";

function DesktopApp() {
    /** @type {boolean} */
    let isScrolling = false;
    let cover, aboutMe, projects, contactMe;
    /** @type {HTMLElement[]} */
    let elements;

    /** @type {[import("solid-js").Accessor<number>, import("solid-js").Setter<number>]} */
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

    onMount(() => {
        elements = [cover, aboutMe, projects, contactMe];
        window.scrollTo({ behavior: "smooth", top: 0, left: 0 });

        window.addEventListener("scroll", () => (isScrolling = true));
        window.addEventListener("scrollend", () => (isScrolling = false));

        window.addEventListener("wheel", (e) => {
            if (e.deltaY > 0) handleTargetIndexChange(1);
            else handleTargetIndexChange(-1);
        });

        setTargetIndex(0);
    });

    createEffect(
        on(
            () => targetIndex(),
            (index) => {
                const el = elements[index];
                window.scrollTo({
                    behavior: "smooth",
                    top: el.offsetTop,
                    left: 0,
                });
            },
            { defer: true },
        ),
    );

    return (
        <>
            <main class="grid w-screen grid-rows-4 text-white">
                <Cover
                    ref={cover}
                    nextTarget={() => handleTargetIndexChange(1)}
                />
                <AboutMe ref={aboutMe} />
                <Projects ref={projects} targetIndex={targetIndex} />
                <ContactMe ref={contactMe} />
            </main>

            <div class="fixed top-8 flex w-screen select-none justify-center gap-5 md:right-10 md:w-fit">
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
                <ul class="md:text-md steps steps-vertical text-xs text-white 2xl:text-base">
                    <For each={["Cover", "About me", "Projects", "Contact me"]}>
                        {(item, i) => (
                            <li
                                class="step cursor-pointer font-semibold md:after:!h-7 md:after:!w-7 2xl:after:!h-9 2xl:after:!w-9"
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
        </>
    );
}

export default DesktopApp;
