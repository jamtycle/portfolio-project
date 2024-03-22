const MIN_SPEED = 50;
const MAX_SPEED = 100;

/**
 * @param {HTMLElement} _element
 */
async function descriptionAnimation(_element) {
    const content = [
        "Frontend...",
        "Backend...",
        "FULL STACK",
        "Software Developer",
    ];

    for (let i = 0; i < content.length; i++) {
        const str = content[i];
        _element.setAttribute("typing-content", str);
        await typeWriterAsync(_element, 0, random(1000, 2000));
        if (i === content.length - 1) break;
        await reverseTypeWriter(_element);
    }
}

/**
 * @param {HTMLElement} _element
 * @param {() => void} _on_finish
 * @param {number} _on_finish_delay
 * @returns
 */
async function reverseTypeWriter(_element, _on_finish, _on_finish_delay) {
    if (_element.innerText.length <= 0) {
        if (!_on_finish) return;
        await new Promise((resolve) =>
            setTimeout(_on_finish(resolve), _on_finish_delay),
        );
        return;
    }

    const content = _element.innerText;
    _element.innerText = content.substring(0, content.length - 1);

    const speed = random(MIN_SPEED, MAX_SPEED);
    await new Promise((resolve) => setTimeout(resolve, speed));
    await reverseTypeWriter(_element, _on_finish, _on_finish_delay);
}

/**
 *
 * @param {HTMLElement} _element
 * @param {string} _sentence
 * @param {number} _n
 * @param {number} _speed_min
 * @param {number} _speed_max
 * @param {() => void} _on_finish
 * @param {number} _on_finish_delay
 * @returns
 */
function typeWriter(
    _element,
    _sentence,
    _n,
    _speed_min,
    _speed_max,
    _on_finish,
    _on_finish_delay,
) {
    if (_n >= _sentence.length) {
        if (_on_finish != null) setTimeout(_on_finish, _on_finish_delay);
        return;
    }

    document.querySelector(_element).innerHTML = _sentence.substring(0, ++_n);
    setTimeout(
        () =>
            typeWriter(
                _element,
                _sentence,
                _n,
                _speed_min,
                _speed_max,
                _on_finish,
                _on_finish_delay,
            ),
        random(_speed_min, _speed_max),
    );
}

/**
 * @param {HTMLElement} _element
 * @param {number} _current
 * @param {number} _finish_delay
 * @returns
 */
async function typeWriterAsync(_element, _current, _finish_delay = 0) {
    const sentence = _element.getAttribute("typing-content");

    if (_current >= sentence.length) {
        await new Promise((resolve) => setTimeout(resolve, _finish_delay));
        return;
    }

    _element.innerText = sentence.substring(0, ++_current);

    const speed = random(MIN_SPEED, MAX_SPEED);

    await new Promise((resolve) => setTimeout(resolve, speed));
    await typeWriterAsync(_element, _current, _finish_delay);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export { descriptionAnimation, typeWriter, typeWriterAsync };
