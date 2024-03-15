let points = [];
let movepoints = [];
let qpoints = 33;
let screens = ["hero", "about", "projects", "contact"];
let current_screen = 0;

function setup() {
    let cnv = createCanvas(windowWidth + 80, windowHeight + 80);
    cnv.id("canvas-background");

    for (let index = 0; index < qpoints; index++) {
        let point = [abs(floor(randomGaussian(0, windowWidth))), abs(floor(randomGaussian(0, windowHeight)))];
        points.push(point);
        points[index].push((points[index][0] + points[index][1]) / 2);
        movepoints.push(point);
    }

    indexAnimation();

    let top = getTopElement();
    if (top) scrollToSmooth(top.id);
}

let xoff = 0.0;
let yoff = 0.0;
let t = 0.0;
let linesize = 250;

function draw() {
    clear();

    fill("rgba(252, 179, 76, 120)");
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        noiseSeed(point[2]);

        x = (movepoints[i][0] + noise(t + random()) * 4) % (width + 40);
        y = (movepoints[i][1] + noise(t + random()) * 2) % (height + 40);

        noStroke();
        circle(x, y, 50);

        movepoints[i][0] = x;
        movepoints[i][1] = y;

        // Venom lines
        let pclose = movepoints.filter(innerpoint => dist(x, y, innerpoint[0], innerpoint[1]) <= linesize);
        pclose.forEach(innerpoint => {
            let d = dist(x, y, innerpoint[0], innerpoint[1]);
            stroke(`rgba(252, 179, 76, ${map(d, 0, linesize, 1, 0)})`);
            strokeWeight(map(d, 0, linesize, 0, 10) * 2.5);
            line(x, y, innerpoint[0], innerpoint[1]);
        });
    }
    t += 0.0008;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function indexAnimation() {
    typeWriter("#name", "Bruno Ramirez", 0, 50, 100, () => {
        document.querySelector("#aka-container").innerHTML = "<div class=\"flex flex-row justify-center\"><span class=\"text-4xl\">(&nbsp;</span><h3 class=\"text-center text-4xl\" id=\"aka\">Jamtycle</h3><span class=\"text-4xl\">&nbsp;)</span></div>";
        typeWriter("#aka", "Jamtycle", 0, 50, 100, () => {
            typeWriter("#desc", "Frontend...", 0, 50, 300, () => {
                reverseTypeWriter("#desc", 50, 300, () => {
                    typeWriter("#desc", "Backend...", 0, 50, 300, () => {
                        reverseTypeWriter("#desc", 50, 300, () => {
                            typeWriter("#desc", "FULL STACK", 0, 50, 100, () => {
                                reverseTypeWriter("#desc", 50, 300, () => {
                                    typeWriter("#desc", "Software Developer", 0, 50, 50, () => {
                                        document.querySelector("#more").classList.replace("opacity-0", "animate-alpha");
                                    }, 100);
                                }, 400);
                            }, 400);
                        }, 400);
                    }, 500);
                }, 400);
            }, 1000);
        }, 100);
    }, 100);
}

function typeWriter(_element, _sentence, _n, _speed_min, _speed_max, _on_finish, _on_finish_delay) {
    if (_n >= _sentence.length) {
        if (_on_finish != null) setTimeout(_on_finish, _on_finish_delay);
        return;
    }

    document.querySelector(_element).innerHTML = _sentence.substring(0, ++_n);
    setTimeout(() => typeWriter(_element, _sentence, _n, _speed_min, _speed_max, _on_finish, _on_finish_delay), random(_speed_min, _speed_max));
}

function reverseTypeWriter(_element, _speed_min, _speed_max, _on_finish, _on_finish_delay) {
    _element = typeof (_element) === "string" ? document.querySelector(_element) : _element;
    if (_element.innerHTML.length <= 0) {
        if (_on_finish) setTimeout(_on_finish, _on_finish_delay);
        return;
    }

    _element.innerHTML = _element.innerHTML.substring(0, _element.innerHTML.length - 1);
    setTimeout(() => reverseTypeWriter(_element, _speed_min, _speed_max, _on_finish, _on_finish_delay), random(_speed_min, _speed_max));
}

function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}


function createBubbles(bubbleQuantity) {
    document.querySelectorAll(".bubbles").forEach((container) => {
        container.style.display = "inline-grid";
        for (let i = 0; i < bubbleQuantity; i++) {
            var rup = Math.random() * 8;

            var bubble = document.createElement("div");
            bubble.className = "bubble";
            bubble.style.top = `${rup}px`;

            var anim_delay = Math.random() * 5;
            var hugger = document.createElement("div");
            hugger.className = "bubblehugger";
            bubble.style.animationDelay = `${anim_delay}s`;
            hugger.style.animationDelay = `${anim_delay}s`;
            hugger.appendChild(bubble);

            container.appendChild(hugger);
        }

        var percent_container = document.createElement("div");
        percent_container.id = "percent-indicator";
        percent_container.style.display = "flex";
        percent_container.style.position = "absolute";
        percent_container.style.top = -1;
        percent_container.style.left = -2;
        percent_container.style.width = "100%";
        percent_container.style.height = "10px";
        for (let i = 0; i < 10; i++) {
            var percent = document.createElement("div");
            percent.style.border = "0.1px solid black";
            if (i > 0 || i < 10) percent.style.borderWidth = "0.1px 0px 0.1px 0.1px";
            if (i == 0) percent.style.borderRadius = "20px 0px 0px 20px";
            if (i == 10) percent.style.borderRadius = "0px 20px 20px 0px";
            percent.style.width = "10%";
            percent.style.height = "10px";
            percent_container.appendChild(percent);
        }

        var progress_bar = container.parentElement;
        progress_bar.appendChild(percent_container);
    });
}


function scrollToSmooth(_id) {
    current = screens.indexOf(_id);
    if (current === -1) return;
    current_screen = current;
    let element = document.querySelector(`#${_id}`);
    if (current === 0) {
        hideElement("up");
        hideElement("down");
    }
    else {
        showElement("up");
        showElement("down");
    }
    setTimeout(() => window.scrollTo({ top: element.offsetTop, behavior: "smooth" }), 50);
}

function scrollUp() {
    if (--current_screen <= 0) {
        current_screen = 0;
    }
    scrollToSmooth(screens[current_screen]);
}

function scrollDown() {
    if (++current_screen >= screens.length) {
        current_screen = screens.length - 1;
    }
    scrollToSmooth(screens[current_screen]);
}

function hideElement(_id) {
    removeClassToElement(_id, "animate-alpha");
    addClassToElement(_id, "animate-alpha-disappear");
    setTimeout(() => {
        addClassToElement(_id, "invisible");
    }, 500);
}

function showElement(_id) {
    removeClassToElement(_id, "invisible");
    removeClassToElement(_id, "animate-alpha-disappear");
    addClassToElement(_id, "animate-alpha");
}

function addClassToElement(_id, ..._class) {
    let element = document.querySelector(`#${_id}`);
    if (!element) return;
    for (let i = 0; i < _class.length; i++)
        element.classList.add(_class[i]);
}

function removeClassToElement(_id, ..._class) {
    let element = document.querySelector(`#${_id}`);
    if (!element) return;
    for (let i = 0; i < _class.length; i++)
        element.classList.remove(_class[i]);
}

function getTopElement() {
    const elements = document.getElementsByTagName("*");

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.offsetTop >= window.scrollY) {
            return element;
        }
    }

    return null;
}

const projects_content = [
    {
        id: "dynamic-reports",
        title: "DYNAMIC REPORTS",
        content: "<div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/dynamic-full.png\" alt=\"\" /></div><div><img class=\"h-full max-w-full rounded-lg\" src=\"./img/dynamic-data-1.png\" alt=\"\" /></div><div><img class=\"h-full max-w-full rounded-lg\" src=\"./img/dynamic-data-2.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/dynamic-data-seeker.png\" alt=\"\" /></div>"
    },
    {
        id: "image-processing",
        title: "IMAGE PROCESSING",
        content: "<div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/images-1.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/images-2.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/images-3.png\" alt=\"\" /></div>"
    },
    {
        id: "desktop-manager",
        title: "DESKTOP APP MANAGER",
        content: "<div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fito-updater.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fito-updater-m1.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fito-updater-opt.png\" alt=\"\" /></div>"
    },
    {
        id: "fitodyna",
        title: "FITODYNA",
        content: "<div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fitodyna-1.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fitodyna-2.png\" alt=\"\" /></div><div><img class=\"h-auto max-w-full rounded-lg\" src=\"./img/fitodyna-3.png\" alt=\"\" /></div>"
    }
];

const content = document.querySelector("#projects-content");
const title = document.querySelector("#projects-title");

function setModal(_data) {
    let info = projects_content.find(x => x.id == _data);
    if (!info) return;

    title.innerHTML = info.title;
    content.innerHTML = info.content;
}

/**
 * @param {Element} _elemment The HTML element to zoom
 */
function zoomElement(_element) {
    // console.log(_element);
    if (!_element) return;
    // _element.classList.add("project-img-scale");
}