/**
 * @param {Object} props
 * @param {string} props.containerClass
 * @param {string} props.linkClass
 * @param {string} props.href
 * @param {string} props.tooltip
 * @param {import("solid-js").Component} props.IconComponent
 * @param {import("solid-js").Component} props.LabelComponent
 * @returns
 */
export default function LabeledIcon(props) {
    return (
        <div
            class={`${props.tooltip ? "tooltip" : ""} ${props.containerClass}`}
            data-tip={props.tooltip}
        >
            <a
                class={`flex items-center justify-between gap-1 ${props.linkClass}`}
                //hover:text-primary
                href={props.href}
                target="_blank"
            >
                {props.IconComponent}
                {props.LabelComponent}
            </a>
        </div>
    );
}
