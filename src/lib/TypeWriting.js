/**
 * @param {() => void} _on_finish
 */
function indexAnimation(_on_finish) {
    typeWriter(
        "#name",
        "Bruno Ramirez",
        0,
        50,
        100,
        () => {
            document.querySelector("#aka-container").innerHTML =
                `<div class="flex flex-row justify-center">
                    <span class="text-2xl">(&nbsp;</span>
                    <h3 class="text-center text-2xl" id="aka">
                        Jamtycle
                    </h3>
                    <span class="text-2xl">&nbsp;)</span>
                </div>`;
            typeWriter(
                "#aka",
                "Jamtycle",
                0,
                50,
                100,
                () => {
                    typeWriter(
                        "#desc",
                        "Frontend...",
                        0,
                        50,
                        300,
                        () => {
                            reverseTypeWriter(
                                "#desc",
                                50,
                                300,
                                () => {
                                    typeWriter(
                                        "#desc",
                                        "Backend...",
                                        0,
                                        50,
                                        300,
                                        () => {
                                            reverseTypeWriter(
                                                "#desc",
                                                50,
                                                300,
                                                () => {
                                                    typeWriter(
                                                        "#desc",
                                                        "FULL STACK",
                                                        0,
                                                        50,
                                                        100,
                                                        () => {
                                                            reverseTypeWriter(
                                                                "#desc",
                                                                50,
                                                                300,
                                                                () => {
                                                                    typeWriter(
                                                                        "#desc",
                                                                        "Software Developer",
                                                                        0,
                                                                        50,
                                                                        50,
                                                                        () => {
                                                                            _on_finish();
                                                                            // document
                                                                            //     .querySelector(
                                                                            //         "#more",
                                                                            //     )
                                                                            //     .classList.replace(
                                                                            //         "opacity-0",
                                                                            //         "animate-alpha",
                                                                            //     );
                                                                        },
                                                                        100,
                                                                    );
                                                                },
                                                                400,
                                                            );
                                                        },
                                                        400,
                                                    );
                                                },
                                                400,
                                            );
                                        },
                                        500,
                                    );
                                },
                                400,
                            );
                        },
                        1000,
                    );
                },
                100,
            );
        },
        100,
    );
}

function reverseTypeWriter(
    _element,
    _speed_min,
    _speed_max,
    _on_finish,
    _on_finish_delay,
) {
    _element =
        typeof _element === "string"
            ? document.querySelector(_element)
            : _element;
    if (_element.innerHTML.length <= 0) {
        if (_on_finish) setTimeout(_on_finish, _on_finish_delay);
        return;
    }

    _element.innerHTML = _element.innerHTML.substring(
        0,
        _element.innerHTML.length - 1,
    );
    setTimeout(
        () =>
            reverseTypeWriter(
                _element,
                _speed_min,
                _speed_max,
                _on_finish,
                _on_finish_delay,
            ),
        random(_speed_min, _speed_max),
    );
}

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

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default {
    indexAnimation,
};
