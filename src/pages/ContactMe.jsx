import { For, Show, createSignal } from "solid-js";
import {
    HiOutlineAtSymbol,
    HiOutlineDevicePhoneMobile,
    HiOutlineEnvelope,
    HiOutlineIdentification,
    HiOutlineInformationCircle,
    HiOutlineMapPin,
    HiOutlineNewspaper,
} from "solid-icons/hi";
import { FiGithub } from "solid-icons/fi";
import emailjs from "@emailjs/browser";
import model from "../components/model";

/**
 * @param {Object} props
 * @param {import("solid-js").Ref<HTMLDivElement>} props.ref
 * @returns
 */
export default function ContactMe(props) {
    return (
        <div
            ref={props.ref}
            class="flex h-screen w-full select-none flex-col items-center justify-center gap-12"
            id="contact"
        >
            <h3 class="text-6xl font-bold" data-aos="fade-down">
                CONTACT ME
            </h3>
            <div
                class="flex h-3/5 w-3/5 flex-col items-center gap-5"
                data-aos="fade-up-right"
            >
                <IconRow />
                <ContactForm />
            </div>
        </div>
    );
}

function IconRow() {
    return (
        <div class="grid max-w-xl grid-cols-4 text-base">
            <div
                class="link-primary tooltip flex flex-col items-center hover:text-white"
                data-tip="Living the dream 🇨🇦"
            >
                <HiOutlineMapPin class="h-14 w-14" />
                <p class="self-end font-semibold">Toronto, Canada</p>
            </div>
            <div
                class="tooltip"
                data-tip="Get my resume for free! (this one time 😉)"
            >
                <a
                    class="link-primary flex flex-col items-center hover:text-white"
                    href="./pdf/bruno-ramirez-resume.pdf"
                    target="_blank"
                >
                    <HiOutlineNewspaper class="h-14 w-14" />
                    <p class="font-semibold">Resume</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Check my repos 😳">
                <a
                    class="link-primary flex flex-col items-center hover:text-white"
                    href="https://github.com/jamtycle"
                    target="_blank"
                >
                    <FiGithub class="h-14 w-14 py-2" />
                    <p class="font-semibold">Github</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Call me maybe 🤙">
                <a
                    class="link-primary flex flex-col items-center hover:text-white"
                    href="tel:+16479940631"
                    target="_blank"
                >
                    <HiOutlineDevicePhoneMobile class="h-14 w-14 py-1.5" />
                    <p class="font-semibold">(647) 994-0631</p>
                </a>
            </div>
        </div>
    );
}

function ContactForm() {
    const [firstName, setFirstName] = createSignal("");
    const [lastName, setLastName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [message, setMessage] = createSignal("");

    const [sending, setSending] = createSignal(false);
    const [sent, setSent] = createSignal(false);

    const [messages, setMessages] = createSignal([], {
        equals: false,
    });

    /**
     * @param {SubmitEvent} e
     */
    const handleSubmit = () => {
        // console.dir(e.);
        const info = {
            firstName: firstName(),
            lastName: lastName(),
            email: email(),
            message: message(),
        };

        setMessages([]);
        setSent(false);

        if (!info.firstName || !info.lastName) {
            setMessages((prev) => [...prev, "First and last name is required"]);
            return;
        }

        if (!info.email) {
            setMessages((prev) => [...prev, "Email is required"]);
            return;
        }

        if (!info.message) {
            setMessages((prev) => [...prev, "Don't be shy! Leave a message!"]);
            return;
        }

        setSending(true);
        emailjs
            .send(
                import.meta.env.VITE_EMAIL_JS_SERVICE,
                import.meta.env.VITE_EMAIL_JS_TEMPLATE,
                {
                    from_name: `${info.firstName} ${info.lastName}`,
                    from_email: info.email,
                    message: info.message,
                },
                {
                    publicKey: import.meta.env.VITE_EMAIL_JS_USER,
                },
            )
            .then(() => {
                console.log("Email sended successfully!");
                setSending(false);
                setSent(true);
            })
            .catch((ex) => {
                console.error(ex);
                setSending(false);
                setMessages((prev) => [
                    ...prev,
                    "There was an error sending your message. Please try again later.",
                ]);
            });
    };

    return (
        <form
            class="flex max-w-2xl flex-col justify-center gap-8"
            onSubmit={(e) => {
                handleSubmit(e);
                e.preventDefault();
            }}
        >
            <div class="flex w-full flex-col gap-4">
                <div class="join">
                    <label class="input join-item input-bordered flex items-center gap-2">
                        <HiOutlineIdentification class="h-fit" />
                        <input
                            use:model={[firstName, setFirstName]}
                            type="text"
                            id="first-name"
                            class="grow"
                            placeholder="First Name"
                        />
                    </label>
                    <label class="input join-item input-bordered flex items-center gap-2">
                        <HiOutlineIdentification class="h-fit" />
                        <input
                            use:model={[lastName, setLastName]}
                            type="text"
                            id="last-name"
                            class="grow"
                            placeholder="Last Name"
                        />
                    </label>
                </div>
                <div class="w-full">
                    <label class="input input-bordered flex items-center gap-2">
                        <HiOutlineAtSymbol class="h-fit" />
                        <input
                            use:model={[email, setEmail]}
                            type="email"
                            id="email"
                            class="grow"
                            placeholder="Email"
                        />
                    </label>
                </div>
                <div class="relative flex h-32 flex-col">
                    <HiOutlineEnvelope class="absolute left-[1rem] top-[1rem] h-fit" />
                    <textarea
                        use:model={[message, setMessage]}
                        class="textarea textarea-bordered h-full pl-[2.4rem]"
                        id="message"
                        placeholder="Message"
                    />
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <div class="flex flex-col gap-1">
                    <For each={messages()}>
                        {(message) => (
                            <div class="flex items-center justify-center gap-2 bg-red-500 py-1 text-center align-middle text-black">
                                <HiOutlineInformationCircle class="h-6 w-6" />
                                <p class="text-base">{message}</p>
                            </div>
                        )}
                    </For>
                </div>
                <button
                    class="btn btn-primary btn-block tooltip-bottom tooltip-success text-lg uppercase"
                    classList={{
                        "btn-disabled": sending(),
                        tooltip: sent(),
                        "tooltip-open": sent(),
                    }}
                    data-tip="Email sended successfully! I will get in touch with you soon!"
                    type="submit"
                >
                    <Show when={sending()}>
                        <span class="loading loading-spinner loading-md" />
                    </Show>
                    SEND
                </button>
            </div>
        </form>
    );
}
