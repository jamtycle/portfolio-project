import { HiOutlineXMark } from "solid-icons/hi";

/**
 * @param {object} props
 * @param {string} props.class
 * @param {ref?: HTMLDialogElement | ((el: HTMLDialogElement) => void) | undefined} props.ref
 * @param {import("solid-js").JSX.Element} props.children
 * @param {boolean} props.open
 */
export default function BaseModal(props) {
    return (
        <dialog ref={props.ref} class="modal" open={props.open}>
            <div class={`modal-box bg-base-200 p-8 px-9 ${props.class}`}>
                <form method="dialog">
                    <button class="btn btn-circle btn-ghost btn-sm absolute right-4 top-4">
                        <HiOutlineXMark
                            class="h-6 w-6 text-white"
                            style={{ "stroke-width": "4" }}
                        />
                    </button>
                </form>
                {props.children}
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
