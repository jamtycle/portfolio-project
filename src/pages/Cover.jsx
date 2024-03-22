import { onMount } from "solid-js";
import { descriptionAnimation, typeWriterAsync } from "../lib/TypeWriting.js";
import "../assets/glitch.css";
import "../assets/animations.css";

/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @param {() => void} props.nextTarget
 * @returns
 */
export default function Cover(props) {
    let title_name, aka, description;

    onMount(() => {
        typeWriterAsync(title_name, 0);
        typeWriterAsync(aka, 0);
        descriptionAnimation(description);
    });

    return (
        <div
            ref={props.ref}
            class="flex h-screen w-screen select-none flex-col justify-center gap-14"
            id="hero"
        >
            <div class="flex w-full flex-col items-center justify-center gap-5 align-middle">
                <div class="flex w-full flex-col content-center items-center justify-center">
                    <div class="flex w-full flex-row justify-center text-4xl md:text-5xl lg:text-8xl">
                        <span class="font-bold">[&nbsp;</span>
                        <h1
                            class=" overflow-hidden text-nowrap font-bold"
                            typing-content="Bruno Ramirez"
                            ref={title_name}
                        />
                        <span class="font-bold">&nbsp;] </span>
                    </div>
                    <p
                        class="text-md flex flex-row justify-center text-xl opacity-50 md:text-3xl"
                        typing-content="(&nbsp;Jamtycle&nbsp;)"
                        ref={aka}
                    />
                </div>
                <div class="flex h-[1.3em] flex-col justify-center">
                    <h2
                        class="w-full text-center text-2xl font-semibold md:text-3xl lg:text-5xl"
                        ref={description}
                    />
                </div>
            </div>
            <div class="flex w-full items-center justify-center align-middle">
                <a
                    class="glitch layers animate-alpha btn btn-outline btn-primary hero btn-lg flex w-2/3 items-center justify-center rounded-none border-4 py-2 align-middle md:w-fit"
                    onClick={() => props.nextTarget()}
                    id="more"
                    data-text="AND MORE"
                >
                    <span class="my-auto ml-3 h-fit text-nowrap text-2xl md:text-4xl">
                        AND MORE
                    </span>
                </a>
            </div>
        </div>
    );
}
