import { Show, createSignal, onMount } from "solid-js";
import TypeWriting from "../lib/TypeWriting";
import { FaSolidQuoteLeft, FaSolidQuoteRight } from "solid-icons/fa";
import "../assets/glitch.css";
import "../assets/animations.css";

/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @param {() => void} props.nextTarget
 * @returns
 */
export default function Cover(props) {
    const [animFinished, setAnimFinished] = createSignal(false);

    onMount(() => {
        setAnimFinished(false);
        TypeWriting.indexAnimation(() => {
            setAnimFinished(true);
        });
    });

    return (
        <div
            ref={props.ref}
            class="flex h-screen w-full select-none flex-col justify-center gap-14"
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
                <Show when={animFinished()}>
                    <div class="animate-alpha-slow mx-auto flex w-fit flex-col items-center justify-center align-middle">
                        <p class="relative whitespace-pre text-center text-xl italic">
                            <FaSolidQuoteLeft class="absolute -left-14 top-1 h-12 w-12" />
                            Scientists are the ones who ought to guide{"\n"}
                            major decisions, with the help of macines.
                            <FaSolidQuoteRight class="absolute -right-14 top-1 h-12 w-12" />
                        </p>
                        <p class="w-full text-right font-semibold">
                            Miguel Benasayag, The Tyranny of Algorithms
                        </p>
                    </div>
                </Show>
            </div>
            <div
                class="flex w-full items-center justify-center align-middle"
                id="desc-container"
            >
                <a
                    class="glitch layers animate-alpha btn btn-outline btn-primary hero btn-lg flex w-fit items-center justify-center rounded-none border-4 py-2 align-middle"
                    // onClick={() => console.log(window.scrollTo({ behavior: "smooth"}))}
                    onClick={() => props.nextTarget()}
                    id="more"
                    data-text="AND MORE"
                >
                    <span class="ml-3 h-full text-4xl">AND MORE</span>
                </a>
            </div>
        </div>
    );
}
