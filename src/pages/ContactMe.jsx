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
            class="flex h-screen w-screen select-none flex-col items-center justify-center gap-12"
            id="contact"
        >
            <h3 class="text-4xl font-bold md:text-6xl" data-aos="fade-down">
                &lt; CONTACT ME &gt;
            </h3>
            <div
                class="flex w-[90%] flex-col items-center gap-5 md:h-3/5 md:w-3/5"
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
        <div class="grid w-full grid-cols-4 text-xs md:max-w-xl md:text-base">
            <div
                class="link-primary tooltip flex flex-col items-center gap-2 hover:text-white md:gap-0"
                data-tip="Living the dream 🇨🇦"
            >
                <HiOutlineMapPin class="h-10 w-10 md:h-14 md:w-14" />
                <p class="self-end font-semibold">Toronto, Canada</p>
            </div>
            <div
                class="tooltip"
                data-tip="Get my resume for free! (this one time 😉)"
            >
                <a
                    class="link-primary flex flex-col items-center gap-2 hover:text-white md:gap-0"
                    href="./pdf/bruno-ramirez-resume.pdf"
                    target="_blank"
                >
                    <HiOutlineNewspaper class="h-10 w-10 md:h-14 md:w-14" />
                    <p class="font-semibold">Resume</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Check my repos 😳">
                <a
                    class="link-primary flex flex-col items-center gap-2 hover:text-white md:gap-0"
                    href="https://github.com/jamtycle"
                    target="_blank"
                >
                    <FiGithub class="h-10 w-10 py-1 md:h-14 md:w-14 md:py-2" />
                    <p class="font-semibold">Github</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Call me maybe 🤙">
                <a
                    class="link-primary flex flex-col items-center gap-2 hover:text-white md:gap-0"
                    href="tel:+16479940631"
                    target="_blank"
                >
                    <HiOutlineDevicePhoneMobile class="h-10 w-10 py-0.5 md:h-14 md:w-14 md:py-1.5" />
                    <p class="font-semibold">&#40;647&#41; 994-0631</p>
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

    const cleanForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    };

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
                cleanForm();
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
            class="flex max-sm:w-full max-w-full flex-col justify-center gap-8 md:max-w-2xl"
            onSubmit={(e) => {
                handleSubmit(e);
                e.preventDefault();
            }}
        >
            <div class="flex w-full flex-col gap-4">
                {/* flex flex-col gap-4  */}
                <div class="md:join max-md:flex max-md:flex-col max-md:gap-4">
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
                        "btn-disabled": sending() || sent(),
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
