const campoInput = document.querySelector(".caja-texto");
const campoOutput = document.querySelector(".texto-resultado");
const munieco = document.querySelector(".contenedor-muneco");
const contenedor = document.querySelector(".contenedor-parrafo");
const imagen = document.querySelector("#imagen");

const parametros = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

campoInput.addEventListener("click", () => {
    campoInput.style.backgroundImage = "none";
});

window.onload = function () {
    mostrarElementosIniciales();
};

function mostrarElementosIniciales() {
    munieco.style.display = "block";
    contenedor.style.display = "block";
}

function encriptador() {
    const animacionCarga = document.querySelector(".nueva-seccion .animacion-carga");
    const audio = document.getElementById("audio");
    animacionCarga.style.display = "block";
    audio.play();

    setTimeout(() => {
        const texto = encriptarTexto(campoInput.value);
        campoOutput.textContent = texto;
        ocultarElementos();
        animacionCarga.style.display = "none";
    }, 2000);
}

function desencriptador() {
    const animacionCarga = document.querySelector(".nueva-seccion .animacion-carga");
    const audio = document.getElementById("audio");
    animacionCarga.style.display = "block";
    audio.play();

    setTimeout(() => {
        const texto = desencriptarTexto(campoInput.value);
        campoOutput.textContent = texto;
        ocultarElementos();
        animacionCarga.style.display = "none";
    }, 2500);
}

function ocultarElementos() {
    munieco.style.display = "none";
    contenedor.style.display = "none";
}

function encriptarTexto(texto) {
    for (let i = 0; i < parametros.length; i++) {
        if (texto.includes(parametros[i][0])) {
            texto = texto.replaceAll(parametros[i][0], parametros[i][1]);
        }
    }
    return texto;
}

function desencriptarTexto(texto) {
    for (let i = 0; i < parametros.length; i++) {
        if (texto.includes(parametros[i][1])) {
            texto = texto.replaceAll(parametros[i][1], parametros[i][0]);
        }
    }
    return texto;
}

const btnEncriptar = document.querySelector(".btn-encriptar");
btnEncriptar.addEventListener("click", encriptador);

const btnDesencriptar = document.querySelector(".btn-desencriptar");
btnDesencriptar.addEventListener("click", desencriptador);

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    campoInput.value = campoOutput.textContent; 
});

