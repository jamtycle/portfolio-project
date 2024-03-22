import { Show, For } from "solid-js";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "solid-icons/hi";
import { MoreProjectsData, ProjectsData } from "../data/Projects";
/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @returns
 */
export default function MoreProjectsMobile(props) {
    return (
        <artice
            ref={props.ref}
            class="relative flex w-screen select-none flex-col items-center justify-center gap-9 align-middle"
        >
            <h3 class="text-center text-4xl font-bold md:text-6xl">
                &lt; MORE PROJECTS &gt;
            </h3>

            <div class="flex h-fit w-10/12 flex-col md:w-9/12">
                <div class="carousel h-fit w-full gap-5">
                    <For each={MoreProjectsData}>
                        {(project, i) => (
                            <MoreProjectCard
                                i={i()}
                                id={`more_project_${i()}`}
                                project={project}
                            />
                        )}
                    </For>
                </div>
            </div>
        </artice>
    );
}

/**
 * @param {object} props
 * @param {number} props.i
 * @param {string} props.id
 * @param {import("../data/Projects").ExtraProject} props.project
 * @returns
 */
function MoreProjectCard(props) {
    return (
        <div id={props.id} class="carousel-item w-full">
            <div class="flex h-fit w-full flex-col gap-5 py-3">
                <figure class="mx-auto flex h-full w-full">
                    <Show when={props.i !== 0}>
                        <a
                            href={`#more_project_${props.i - 1}`}
                            class="btn btn-circle btn-ghost btn-sm my-auto"
                        >
                            <HiOutlineChevronLeft class="h-8 w-8" />
                        </a>
                    </Show>
                    <h2 class="w-full text-center text-xl font-bold text-white md:text-lg">
                        {`${props.i + 1}. ${props.project.name}`}
                    </h2>
                    <Show when={props.i < ProjectsData.length - 1}>
                        <a
                            href={`#more_project_${props.i + 1}`}
                            class="btn btn-circle btn-ghost btn-sm my-auto"
                        >
                            <HiOutlineChevronRight class="h-8 w-8" />
                        </a>
                    </Show>
                </figure>
                <div class="flex flex-col gap-4">
                    <div class="flex w-full flex-wrap gap-2">
                        <For each={props.project.types}>
                            {(type) => (
                                <div class="badge badge-primary badge-outline badge-md">
                                    {type}
                                </div>
                            )}
                        </For>
                    </div>
                    <div class="grid gap-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-4">
                                <h3 class="text-lg font-bold">
                                    About the project
                                </h3>
                                <p class="h-full overflow-y-auto text-base">
                                    {props.project.description}
                                </p>
                            </div>
                            <h3 class="text-lg font-bold">Tech Stack</h3>
                            <div class="grid grid-cols-2 grid-rows-2 gap-3 whitespace-break-spaces text-wrap">
                                <For each={props.project.techstack}>
                                    {(stack) => (
                                        <div class="flex flex-col gap-1">
                                            <h4 class="text-base font-semibold">
                                                {stack.stackName}
                                            </h4>
                                            <ul class="list-inside list-disc">
                                                <For each={stack.techs}>
                                                    {(tech) => (
                                                        <li class="list-item text-base">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
