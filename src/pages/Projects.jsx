import { Show, createSignal, For, onMount, createEffect, on } from "solid-js";
import { MoreProjectsData, ProjectsData } from "../data/Projects";
import {
    HiOutlineFolderPlus,
    HiOutlineRectangleStack,
    HiOutlineDocumentText,
} from "solid-icons/hi";
import { AiOutlineTrophy } from "solid-icons/ai";
import { BsArrow90degDown } from "solid-icons/bs";
import BaseModal from "../components/BaseModal";

const type_tags = [
    "Backend",
    "Frontend",
    "Database",
    "IA",
    "Desktop",
    "Web",
    "Academic",
].sort();

let any_hover = false;

/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @param {import("solid-js").Accessor<number>} props.targetIndex
 * @returns
 */
export default function Projects(props) {
    /** @type {HTMLDialogElement} */
    let project_dialog;
    /** @type {HTMLDialogElement} */
    let more_projects_dialog;
    /** @type {[import("solid-js").Signal<import("../data/Projects").ProjectModal | false>, import("solid-js").Setter<import("../data/Projects").ProjectModal>]} */
    const [modalProject, setModalProject] = createSignal(false);
    /** @type {[import("solid-js").Signal<boolean>, import("solid-js").Setter<boolean>]} */
    const [showHelp, setShowHelp] = createSignal(false);

    const [easterEggClicks, setEasterEggClicks] = createSignal(0);
    const [eEToolTip, setEETooltip] = createSignal("");

    const [filter, setFilter] = createSignal([], { equals: false });
    const [projectData, setProjectData] = createSignal(
        ProjectsData.slice(0, 5),
        { equals: false },
    );

    /** @param {import("../data/Projects").ProjectModal} _project */
    const openModal = (_project) => {
        setModalProject(_project);
        project_dialog.showModal();
    };

    createEffect(() => {
        if (props.targetIndex() !== 2) return;
        setTimeout(() => {
            if (any_hover) return;
            setShowHelp(true);
            setTimeout(() => setShowHelp(false), 12000);
        }, 8000);
    });

    createEffect(
        on(
            () => easterEggClicks(),
            (clicks) => {
                if (clicks > 0 && clicks <= 10) {
                    setEETooltip("👀");
                }
                if (clicks > 10 && clicks <= 20) {
                    setEETooltip("🤨");
                } else if (clicks > 20) {
                    setEETooltip("You spin my head right round, right round");
                }
            },
            { defer: true },
        ),
    );

    createEffect(
        on(
            () => filter(),
            (info) => {
                if (!info || info.length === 0) {
                    setProjectData(ProjectsData.slice(0, 5));
                    return;
                }

                setProjectData(
                    ProjectsData.filter((project) =>
                        info.some((t) => project.card.types.includes(t)),
                    ).slice(0, 5),
                );
            },
            { defer: true },
        ),
    );

    return (
        <artice
            ref={props.ref}
            class="relative flex h-screen w-screen select-none flex-col items-center justify-center gap-9 align-middle"
            id="projects"
        >
            <div
                class="toast toast-start toast-top"
                onClick={() => setEasterEggClicks(0)}
            >
                <Show when={easterEggClicks() >= 20}>
                    <div class="alert border-2 border-primary bg-base-300 text-white hover:bg-base-100">
                        <AiOutlineTrophy class="h-10 w-10" />
                        <div class="flex flex-col">
                            <span>Archievement unlocked</span>
                            <span>You make the project spin! 😵</span>
                        </div>
                    </div>
                </Show>
            </div>

            <ProjectModal ref={project_dialog} modalProject={modalProject()} />
            <MoreProjectsModal
                ref={more_projects_dialog}
                modalProject={modalProject()}
            />

            <h3
                class="text-center text-4xl font-bold md:text-6xl"
                onClick={() => setEasterEggClicks(easterEggClicks() + 1)}
                data-tip={eEToolTip()}
                classList={{
                    tooltip: easterEggClicks() > 0,
                    "tooltip-secondary": easterEggClicks() >= 20,
                    btn: easterEggClicks() > 0,
                    "btn-ghost": easterEggClicks() > 0,
                    "btn-lg": easterEggClicks() > 0,
                }}
            >
                &lt; PROJECTS &gt;
            </h3>
            <div class="hidden gap-3 md:flex">
                <For each={type_tags}>
                    {(tag) => {
                        const [tagShow, setTagShow] = createSignal(true);

                        return (
                            <div
                                class="badge badge-primary badge-lg cursor-pointer"
                                classList={{
                                    "badge-outline": tagShow(),
                                    "animate-pulse":
                                        tagShow() && easterEggClicks() <= 20,
                                    "animate-spin":
                                        tagShow() && easterEggClicks() > 20,
                                }}
                                onClick={() => {
                                    setTagShow(!tagShow());
                                    setFilter(
                                        tagShow()
                                            ? filter().filter((t) => t !== tag)
                                            : [...filter(), tag],
                                    );
                                }}
                            >
                                {tag}
                            </div>
                        );
                    }}
                </For>
            </div>

            <div
                class="relative col-auto grid h-3/5 w-10/12 grid-cols-2 grid-rows-3 gap-10 md:w-9/12 lg:grid-cols-3 lg:grid-rows-2"
                data-aos="fade-up-right"
            >
                <Show when={showHelp()}>
                    <div class="animate-appears-and-bounce absolute -top-14 right-0 z-10 flex">
                        <BsArrow90degDown class="pt-3 text-6xl text-white" />
                        <p class="text-2xl">Hover me!</p>
                    </div>
                </Show>

                <For each={projectData()}>
                    {(project) => (
                        <ProjectCard
                            {...project.card}
                            hidden={
                                filter().length > 0 &&
                                !project.card.types.some((t) =>
                                    filter().includes(t),
                                )
                            }
                            onMoreClick={() => openModal(project.modal)}
                        />
                    )}
                </For>
                <ProjectCard
                    {...{
                        title: "AND MORE...",
                        content:
                            "Throughout my career, I have collected over 80 projects, you can see more clicking the button below.",
                    }}
                    onMoreClick={() => more_projects_dialog.showModal()}
                />
            </div>
        </artice>
    );
}

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.content
 * @param {string} props.imgSrc
 * @param {string} props.imgAlt
 * @param {string[]} props.types
 * @param {boolean} props.hidden
 * @param {() => void} props.onMoreClick
 * @returns
 */
function ProjectCard(props) {
    const [showHover, setShowHover] = createSignal(false);

    createEffect(
        on(
            () => showHover(),
            () => (any_hover = true),
            { defer: true },
        ),
    );

    return (
        <div
            class="card h-full w-full bg-[#18262E] shadow-xl"
            classList={{
                hidden: props.hidden,
                "image-full": showHover(),
            }}
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
        >
            <figure class="h-full !max-h-full w-full !max-w-full">
                <Show
                    when={props.imgSrc}
                    fallback={
                        <HiOutlineFolderPlus class="h-28 w-28 text-white" />
                    }
                >
                    <img
                        class="h-full w-full rounded-2xl object-cover object-center"
                        classList={{ "blur-sm": showHover() }}
                        src={props.imgSrc}
                        alt={props.imgAlt}
                    />
                </Show>
            </figure>
            <Show when={showHover()}>
                <div class="card-body h-full !max-h-full w-full !max-w-full gap-0 p-1 md:gap-2 md:p-4 2xl:p-8">
                    <h2 class="card-title text-xs text-white md:text-base 2xl:text-2xl">
                        {props.title}
                    </h2>
                    <p class="whitespace-pre-line text-left text-xs font-semibold leading-tight text-white md:text-sm 2xl:text-xl">
                        {props.content}
                    </p>
                    <div class="flex w-full flex-wrap gap-2 overflow-hidden">
                        <For each={props.types}>
                            {(type) => (
                                <div class="badge badge-primary badge-xs md:badge-md lg:badge-sm 2xl:badge-lg">
                                    {type}
                                </div>
                            )}
                        </For>
                    </div>
                    <div class="card-actions justify-end">
                        <button
                            class="btn btn-primary btn-xs btn-block text-base uppercase md:btn-sm"
                            onClick={() => props.onMoreClick()}
                        >
                            see more
                        </button>
                    </div>
                </div>
            </Show>
        </div>
    );
}

/**
 * @param {object} props
 * @param {import("solid-js").Ref<HTMLDialogElement>} props.ref
 * @param {import("../data/Projects").ProjectModal | false} props.modalProject
 */
function ProjectModal(props) {
    /**
     * @type {HTMLDialogElement}
     */
    let dialog;
    const [currentImage, setCurrentImage] = createSignal(0);

    onMount(() => {
        if (!dialog) return;

        dialog.addEventListener("close", () => {
            setCurrentImage(0);
            history.pushState(
                "",
                document.title,
                window.location.pathname + "#projects" + window.location.search,
            );
        });
    });

    return (
        <BaseModal
            class="max-w-5xl"
            ref={(x) => {
                props.ref(x);
                dialog = x;
            }}
        >
            <Show when={props.modalProject}>
                <div class="flex gap-10">
                    <div class="w-5/12">
                        <div class="carousel w-full gap-2">
                            <For each={props.modalProject.carrousel}>
                                {(imgSrc, i) => (
                                    <div
                                        id={`item${i()}`}
                                        class="carousel-item"
                                    >
                                        <img
                                            src={imgSrc}
                                            class="aspect-square h-96 rounded-box object-cover"
                                        />
                                    </div>
                                )}
                            </For>
                        </div>
                        <div class="flex w-full justify-center gap-2 py-2">
                            <For each={props.modalProject.carrousel}>
                                {(_, i) => (
                                    <a
                                        href={`#item${i()}`}
                                        class="btn btn-xs"
                                        classList={{
                                            "btn-primary":
                                                currentImage() === i(),
                                        }}
                                        onClick={() => setCurrentImage(i())}
                                    >
                                        {i() + 1}
                                    </a>
                                )}
                            </For>
                        </div>
                    </div>
                    <div class="my-auto w-7/12">
                        <h3 class="text-3xl font-bold">
                            {props.modalProject.title}
                        </h3>
                        <div class="divider my-2 py-0" />
                        <div class="grid grid-cols-2">
                            <div class="flex flex-col gap-4">
                                <h3 class="text-2xl font-bold">
                                    <HiOutlineRectangleStack class="inline-block h-fit" />{" "}
                                    Tech Stack
                                </h3>
                                <div class="ml-5 flex flex-col gap-3">
                                    <For each={props.modalProject.techstack}>
                                        {(stack) => (
                                            <div class="flex flex-col gap-1">
                                                <h4 class="text-xl font-semibold">
                                                    {stack.stackName}
                                                </h4>
                                                <ul class="list-inside list-disc">
                                                    <For each={stack.techs}>
                                                        {(tech) => (
                                                            <li class="list-item text-lg">
                                                                {tech}
                                                            </li>
                                                        )}
                                                    </For>
                                                </ul>
                                            </div>
                                        )}
                                    </For>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h3 class="text-2xl font-bold">
                                    <HiOutlineDocumentText class="inline-block h-fit" />{" "}
                                    Project Description
                                </h3>
                                <p class="h-full overflow-y-auto text-justify">
                                    {props.modalProject.content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Show>
        </BaseModal>
    );
}

/**
 * @param {object} props
 * @param {import("solid-js").Ref<HTMLDialogElement>} props.ref
 * @param {import("../data/Projects").ProjectModal | false} props.modalProject
 */
function MoreProjectsModal(props) {
    /**
     * @type {HTMLDialogElement}
     */
    let dialog;
    const [currentImage, setCurrentImage] = createSignal(0);

    onMount(() => {
        if (!dialog) return;

        dialog.addEventListener("close", () => {
            setCurrentImage(0);
            history.pushState(
                "",
                document.title,
                window.location.pathname + window.location.search,
            );
        });
    });

    return (
        <BaseModal
            class="max-w-3xl"
            ref={(x) => {
                props.ref(x);
                dialog = x;
            }}
        >
            <div class="flex w-full select-none flex-col gap-5">
                <div class="carousel m-auto w-full">
                    <For each={MoreProjectsData}>
                        {(info, i) => (
                            <div id={`item${i()}`} class="carousel-item w-full">
                                <div>
                                    <div class="flex gap-5">
                                        <h3 class="text-3xl font-bold">
                                            {info.name}
                                        </h3>
                                        <div class="flex items-center justify-center gap-2">
                                            <For each={info.types}>
                                                {(type) => (
                                                    <div class="badge badge-primary badge-outline">
                                                        {type}
                                                    </div>
                                                )}
                                            </For>
                                        </div>
                                    </div>
                                    <div class="divider my-2 py-0" />
                                    <div class="grid grid-cols-2 gap-8">
                                        <Show when={info.techstack}>
                                            <div class="flex flex-col gap-4">
                                                <h3 class="text-2xl font-bold">
                                                    <HiOutlineRectangleStack class="inline-block h-fit" />{" "}
                                                    Tech Stack
                                                </h3>
                                                <div class="flex flex-col gap-5">
                                                    <For each={info.techstack}>
                                                        {(stack) => (
                                                            <div class="grid grid-cols-2 gap-1">
                                                                <h4 class="text-xl font-semibold">
                                                                    {
                                                                        stack.stackName
                                                                    }
                                                                </h4>
                                                                <ul class="">
                                                                    <For
                                                                        each={
                                                                            stack.techs
                                                                        }
                                                                    >
                                                                        {(
                                                                            tech,
                                                                        ) => (
                                                                            <li class="list-item text-lg">
                                                                                {
                                                                                    tech
                                                                                }
                                                                            </li>
                                                                        )}
                                                                    </For>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </For>
                                                </div>
                                            </div>
                                        </Show>
                                        <div
                                            class="flex flex-col gap-4"
                                            classList={{
                                                "col-span-2": !info.techstack,
                                            }}
                                        >
                                            <Show when={info.techstack}>
                                                <h3 class="text-2xl font-bold">
                                                    <HiOutlineDocumentText class="inline-block h-fit" />{" "}
                                                    Project Description
                                                </h3>
                                            </Show>
                                            <p class="h-full overflow-y-auto text-justify">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
                <div class="flex w-full justify-center gap-2 py-2">
                    <For each={MoreProjectsData}>
                        {(_, i) => (
                            <a
                                href={`#item${i()}`}
                                class="btn btn-xs"
                                classList={{
                                    "btn-primary": currentImage() === i(),
                                }}
                                onClick={() => setCurrentImage(i())}
                            >
                                {i() + 1}
                            </a>
                        )}
                    </For>
                </div>
            </div>
        </BaseModal>
    );
}
