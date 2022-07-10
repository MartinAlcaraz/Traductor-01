
import { servicios } from "./service.js";

const textoEntrada = document.querySelector("[data-tipo-texto-entrada]");
const textoSalida = document.querySelector("[data-tipo-texto-salida]");
const carrusel = document.querySelector(".carrusel");

let cantEntradas = 0;

const getLenguajes = async () => {
    let listaLenguajes;
    try {
        listaLenguajes = await servicios.lenguajes();

        listaLenguajes.data.languages.forEach(element => {
            console.log(element);
        });
    } catch (error) {
        console.log("hubo un error en la consulta de lenguajes");
        console.log(error);
    }
}

const traducir = async (texto) => {
    try {
        let traduccion = await servicios.traducir(texto);

        console.log(traduccion);
        console.log(" space ");
        console.log(traduccion.data.translatedText);

    } catch (error) {
        console.log(error);
    }
}

//getLenguajes();


let traducirTexto = async () => {
    let idiomaEntrada = document.querySelector(".carrusel__item-active").getAttribute("value");
    console.log("idiomaEntrada " + idiomaEntrada);
    idiomaEntrada = "en";
    let idiomaSalida = "es";
    let texto = textoEntrada.value;

    try {
        let textoTraducido = await servicios.traducir(idiomaEntrada, idiomaSalida, texto);
        if (textoTraducido){
            detenerAnimacion();
        }
        textoSalida.value = textoTraducido.data.translatedText;
    } catch (error) {
        textoSalida.value = "No se pudo traducir";
    }
}

let intervalId;
let animarSalida = true;

function detenerAnimacion() {
    clearInterval(intervalId);
    animarSalida = true;
}

function iniciarAnimacion() {
    textoSalida.value = ".";
    intervalId = setInterval(() => {
        if (textoSalida.value == ".....") {
            textoSalida.value = ".";
        } else {
            textoSalida.value += ".";
        }
    }, 400);
}

function prepararTraduccion() {
    cantEntradas++;
    let entrada = cantEntradas;
    if (animarSalida) {
        animarSalida = false;
        iniciarAnimacion();
    }
    setTimeout(() => {
        if (entrada == cantEntradas && textoEntrada.value != "") {
            traducirTexto();
        }
    }, 1500);
}

textoEntrada.addEventListener("keydown", prepararTraduccion);

// create an observer instance of class
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

        if (mutation.target.className == "carrusel__item carrusel__item-active") {
            prepararTraduccion();
        }
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, subtree: true };

// comenzar a observar
observer.observe(carrusel, config);
  // dejar de observar
 //  observador.disconnect();

