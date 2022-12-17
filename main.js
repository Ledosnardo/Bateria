const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio)
    }

    tecla.onkeydown = function (e) {
        const teclaCerta = e.code === "Enter" || e.code === "Space";

        if (teclaCerta) {
            tecla.classList.add("ativa");
        }

    }


    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }
}


function tocarSom(idAudio) {
    const elemento = document.querySelector(idAudio);
    const elementoPassou = elemento && elemento.localName === "audio";

    if (elementoPassou) {
        elemento.play();
    } else {
        console.log("Elemento não encontrado")
    }
}