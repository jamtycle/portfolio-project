import { HiOutlineArrowDown, HiOutlineArrowUp } from "solid-icons/hi";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Cover from "./pages/Cover";
import Projects from "./pages/Projects";

function App() {
    return (
        <>
            <main>
                <Cover />
                <AboutMe />
                <Projects />
                <ContactMe />
            </main>

            <div class="fixed right-10 top-3/4 flex flex-col gap-5">
                <a class="btn btn-circle btn-primary btn-outline btn-lg border-4" id="up">
                    <HiOutlineArrowUp class="h-full w-3/4" />
                </a>

                <a
                    class="btn btn-circle btn-primary btn-outline btn-lg border-4"
                    id="down"
                >
                    <HiOutlineArrowDown class="h-full w-3/4" />
                </a>
            </div>
        </>
    );
}

export default App;
