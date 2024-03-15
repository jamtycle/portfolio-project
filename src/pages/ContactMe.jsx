import {
    HiOutlineDevicePhoneMobile,
    HiOutlineMapPin,
    HiOutlineNewspaper,
} from "solid-icons/hi";
import { FiGithub } from "solid-icons/fi";

export default function ContactMe() {
    return (
        <div
            class="flex h-screen w-full select-none flex-col items-center justify-center gap-12"
            id="contact"
        >
            <h3 class="text-6xl font-bold" data-aos="fade-down">
                CONTACT ME
            </h3>
            <div
                class="flex h-3/5 w-3/5 flex-col items-center gap-10"
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
        <div class="grid grid-cols-4">
            <div
                class="tooltip flex flex-col items-center justify-between"
                data-tip="Living the dream 🇨🇦"
            >
                <HiOutlineMapPin class="h-24 w-24" />
                <p class="self-end text-2xl font-semibold">Toronto, Canada</p>
            </div>
            <div
                class="tooltip"
                data-tip="Get my resume for free! (this one time 😉)"
            >
                <a
                    class="flex flex-col items-center justify-between hover:text-primary"
                    href="./pdf/bruno-ramirez-resume.pdf"
                    data-tip="resume-tooltip"
                    target="_blank"
                >
                    <HiOutlineNewspaper class="h-24 w-24" />
                    <p class="text-2xl font-semibold">Resume</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Check my repos 😳">
                <a
                    class="flex flex-col items-center justify-between hover:text-primary"
                    href="https://github.com/jamtycle"
                    target="_blank"
                    data-tip="github-tooltip"
                >
                    <FiGithub class="h-24 w-24 py-2" />
                    <p class="text-2xl font-semibold">Github</p>
                </a>
            </div>
            <div
                class="tooltip flex flex-col items-center justify-end"
                data-tip="Call me maybe 🤙"
            >
                <HiOutlineDevicePhoneMobile class="h-24 w-24 py-2" />
                <p class="text-xl font-bold">(647) 994-0631</p>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <form
            class="flex h-96 max-w-2xl flex-col justify-center gap-7"
            onSubmit={(e) => e.preventDefault()}
        >
            <div class="flex w-full flex-col gap-4">
                <div class="join">
                    <input
                        class="input join-item input-bordered w-full max-w-xs"
                        id="grid-first-name"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        class="input join-item input-bordered w-full max-w-xs"
                        id="grid-last-name"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
                <div class="w-full">
                    <input
                        class="input input-bordered w-full"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />
                </div>
                <div class="flex h-32 flex-col">
                    <textarea
                        class="textarea textarea-bordered h-full"
                        id="message"
                        placeholder="Message"
                    />
                </div>
            </div>
            <button
                class="btn btn-primary btn-block text-lg uppercase"
                type="submit"
            >
                SEND
            </button>
        </form>
    );
}
