import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [solid()],
    build: {
        target: "esnext",
    },
    base: "https://jamtycle.github.io/portfolio-project/portfolio/"
});
