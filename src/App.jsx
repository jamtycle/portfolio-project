import { lazy, Show } from "solid-js";
import { mobileCheck } from "./lib/MobileCheck";

const DesktopApp = lazy(() => import("./DesktopApp"));
const MobileApp = lazy(() => import("./MobileApp"));

function App() {
    return (
        <Show when={mobileCheck()} fallback={<DesktopApp />}>
            <MobileApp />
        </Show>
    );
}

export default App;
