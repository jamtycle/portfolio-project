import { Show, createSignal, For, onMount } from "solid-js";
import { MoreProjectsData, ProjectsData } from "../data/Projects";
import {
    HiOutlineFolderPlus,
    HiOutlineRectangleStack,
    HiOutlineDocumentText,
} from "solid-icons/hi";
import BaseModal from "../components/BaseModal";

export default function Projects() {
    /**
     * @type {HTMLDialogElement}
     */
    let project_dialog;
    /**
     * @type {HTMLDialogElement}
     */
    let more_projects_dialog;
    /**
     * @type {[import("solid-js").Signal<import("../data/Projects").ProjectModal>, import("solid-js").Setter<import("../data/Projects").ProjectModal>]}
     */
    const [modalProject, setModalProject] = createSignal(false);

    /**
     * @param {import("../data/Projects").ProjectModal} _project
     */
    const openModal = (_project) => {
        setModalProject(_project);
        project_dialog.showModal();
    };

    return (
        <artice
            class="flex h-screen w-full select-none flex-col items-center justify-center align-middle"
            id="projects"
        >
            <ProjectModal ref={project_dialog} modalProject={modalProject()} />
            <MoreProjectsModal
                ref={more_projects_dialog}
                modalProject={modalProject()}
            />

            <h3
                class="col-span-2 col-start-1 row-start-1 mb-9 text-center text-6xl font-bold"
                data-aos="fade-down"
            >
                PROJECTS
            </h3>
            <div
                class="col-auto grid h-3/5 w-9/12 grid-cols-3 grid-rows-2 content-center items-center justify-center justify-items-center gap-10 align-middle"
                data-aos="fade-up-right"
            >
                <For each={ProjectsData}>
                    {(project) => (
                        <ProjectCard
                            {...project.card}
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
 * @param {() => void} props.onMoreClick
 * @returns
 */
function ProjectCard(props) {
    const [showHover, setShowHover] = createSignal(false);

    return (
        <div
            class="card h-full w-full bg-[#18262E] shadow-xl"
            classList={{
                "image-full": showHover(),
            }}
            onMouseEnter={() => setShowHover(true)}
            onMouseLeave={() => setShowHover(false)}
        >
            <figure class="h-full w-full">
                <Show
                    when={props.imgSrc}
                    fallback={
                        <HiOutlineFolderPlus class="h-28 w-28 text-white" />
                    }
                >
                    <img
                        class="h-full w-full rounded-2xl object-cover object-center"
                        classList={{ "blur-lg": showHover() }}
                        src={props.imgSrc}
                        alt={props.imgAlt}
                    />
                </Show>
            </figure>
            <Show when={showHover()}>
                <div class="card-body gap-5">
                    <h2 class="card-title text-white">{props.title}</h2>
                    <p class="text-left text-lg font-semibold leading-tight text-white">
                        {props.content}
                    </p>
                    <div class="card-actions justify-end">
                        <button
                            class="btn btn-primary btn-block text-lg uppercase"
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
                        <div class="carousel w-full">
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
                window.location.pathname + "#projects" + window.location.search,
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
            <div class="flex w-full flex-col gap-5">
                <div class="carousel m-auto w-full">
                    <For each={MoreProjectsData}>
                        {(info, i) => (
                            <div id={`item${i()}`} class="carousel-item w-full">
                                <div>
                                    <h3 class="text-3xl font-bold">
                                        {info.name}
                                    </h3>
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
