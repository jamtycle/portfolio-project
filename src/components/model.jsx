import { createRenderEffect } from "solid-js";

/**
 *
 * @param {HTMLInputElement} el Html input element
 * @param {[import("solid-js").Accessor<any>, import("solid-js").Setter<any>]} value
 */
export default function model(el, value) {
    const [field, setField] = value();

    createRenderEffect(() => {
        if (el.type === "checkbox") el.checked = field();
        else el.value = field();
    });

    el.addEventListener("input", (e) => {
        let value;

        switch (el.type) {
            case "number":
                value = parseFloat(e.target.value);
                break;
            case "date":
                value = new Date(e.target.value);
                if (value === "Invalid Date")
                    value = new Date(Date.now()).toISOString().slice(0, 10);
                else value = value.toISOString().slice(0, 10);
                break;
            case "checkbox":
                value = /^true$/i.test(el.checked);
                break;
            default:
                value = e.target.value;
                break;
        }

        setField(value);
    });
}
