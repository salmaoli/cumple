
/* =========================================
   NAVEGACIÓN
========================================= */

const buttons = document.querySelectorAll("[data-next]");

const screens = document.querySelectorAll(".screen");


buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const nextScreen = button.dataset.next;

        changeScreen(nextScreen);

    });

});


function changeScreen(screenId) {

    screens.forEach((screen) => {

        screen.classList.remove("active");

    });


    const target = document.getElementById(screenId);


    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   REGALO
========================================= */

const giftButton =
    document.getElementById("giftButton");


giftButton.addEventListener("click", () => {

    // Cambiar a la pantalla final
    changeScreen("final");

    // Lanzar el confeti
    createConfetti();

    // Reproducir tu voz
    const birthdayAudio =
        document.getElementById("birthdayAudio");

    if (birthdayAudio) {

        birthdayAudio.currentTime = 0;

        birthdayAudio.play().catch((error) => {

            console.log(
                "No se pudo reproducir el audio:",
                error
            );

        });

    }

});


/* =========================================
   CONFETI
========================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti-container");


    const symbols = [
        "🎉",
        "✨",
        "💗",
        "❤️",
        "⭐",
        "🎊",
        "🥳",
        "🎂"
    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add("confetti");


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            Math.random() * 20 + 12 + "px";


        confetti.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 7000);

    }

}


/* =========================================
   BOTÓN REINICIAR
========================================= */

const restartButton =
    document.getElementById("restartButton");


restartButton.addEventListener("click", () => {

    changeScreen("home");

});


/* =========================================================
   🦆 PATITOS
========================================================= */

function createDuck() {

    const duck = document.createElement("div");

    duck.classList.add("duck");

    duck.textContent = "🦆";

    // Posición aleatoria
    duck.style.left =
        Math.random() * 90 + "vw";

    duck.style.top =
        Math.random() * 80 + "vh";

    // Tamaño aleatorio
    const size =
        1.5 + Math.random() * 1.5;

    duck.style.fontSize =
        size + "rem";

    // Velocidad aleatoria
    duck.style.animationDuration =
        2 + Math.random() * 3 + "s";

    document.body.appendChild(duck);

    // Eliminar después de unos segundos
    setTimeout(() => {

        duck.remove();

    }, 6000);
}


/* Crear un patito de vez en cuando */

setInterval(() => {

    createDuck();

}, 7000);


/* =========================================================
   🦆 PATITO VOLANDO
========================================================= */

function flyingDuck() {

    const duck = document.createElement("div");

    duck.classList.add("duck-fly");

    duck.textContent = "🦆";

    duck.style.top =
        15 + Math.random() * 65 + "vh";

    document.body.appendChild(duck);

    setTimeout(() => {

        duck.remove();

    }, 8500);
}


/* Un pato volando cada cierto tiempo */

setInterval(() => {

    flyingDuck();

}, 12000);



