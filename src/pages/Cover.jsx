import { onMount } from "solid-js";
import TypeWriting from "../lib/TypeWriting";
import "../assets/glitch.css";
import "../assets/animations.css";

export default function Cover() {
    onMount(() => {
        TypeWriting.indexAnimation();
    });

    return (
        <div
            class="flex h-screen w-full select-none flex-col justify-center gap-24"
            id="hero"
        >
            <div class="grid w-full auto-rows-[minmax(0,_0.7fr)] content-center items-center justify-center">
                <div class="flex w-full flex-row">
                    <span class="text-9xl font-bold">[&nbsp;</span>
                    <h1
                        class="w-full text-center text-9xl font-bold"
                        id="name"
                    />
                    <span class="text-9xl font-bold">&nbsp;] </span>
                </div>
                <div
                    class="flex flex-row justify-center self-start py-6"
                    id="aka-container"
                />
                <div class="flex flex-col justify-center" id="desc-container">
                    <h2
                        class="w-full text-center text-6xl font-semibold"
                        id="desc"
                    />
                </div>
            </div>
            <div
                class="flex w-full items-center justify-center align-middle"
                id="desc-container"
            >
                <a
                    class="glitch layers btn btn-outline btn-primary hero btn-lg flex w-fit items-center justify-center rounded-none border-4 py-2 align-middle animate-alpha"
                    // onClick={() => console.log(window.scrollTo({ behavior: "smooth"}))}
                    id="more"
                    data-text="AND MORE"
                >
                    <span class="h-full text-4xl ml-3">AND MORE</span>
                </a>
            </div>
        </div>
    );
}
