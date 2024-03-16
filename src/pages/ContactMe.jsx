import {
    HiOutlineAtSymbol,
    HiOutlineDevicePhoneMobile,
    HiOutlineEnvelope,
    HiOutlineIdentification,
    HiOutlineMapPin,
    HiOutlineNewspaper,
} from "solid-icons/hi";
import { FiGithub } from "solid-icons/fi";

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
                class="flex h-3/5 w-3/5 flex-col items-center"
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
        <div class="grid max-w-lg grid-cols-4">
            <div
                class="link-primary tooltip flex flex-col items-center hover:text-white"
                data-tip="Living the dream 🇨🇦"
            >
                <HiOutlineMapPin class="h-14 w-14" />
                <p class="self-end text-2xl font-semibold">Toronto, Canada</p>
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
                    <p class="text-2xl font-semibold">Resume</p>
                </a>
            </div>
            <div class="tooltip" data-tip="Check my repos 😳">
                <a
                    class="link-primary flex flex-col items-center hover:text-white"
                    href="https://github.com/jamtycle"
                    target="_blank"
                >
                    <FiGithub class="h-14 w-14 py-2" />
                    <p class="text-2xl font-semibold">Github</p>
                </a>
            </div>
            <div
                class="link-primary tooltip flex flex-col items-center hover:text-white"
                data-tip="Call me maybe 🤙"
            >
                <HiOutlineDevicePhoneMobile class="h-14 w-14 py-2" />
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
                    <label class="input join-item input-bordered flex items-center gap-2">
                        <HiOutlineIdentification class="h-fit" />
                        <input
                            type="text"
                            id="first-name"
                            class="grow"
                            placeholder="First Name"
                        />
                    </label>
                    <label class="input join-item input-bordered flex items-center gap-2">
                        <HiOutlineIdentification class="h-fit" />
                        <input
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
                        class="textarea textarea-bordered h-full pl-[2.4rem]"
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
