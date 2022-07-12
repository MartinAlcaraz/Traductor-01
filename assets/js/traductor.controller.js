
import { servicios } from "./service.js";

const textoEntrada = document.querySelector("[data-tipo-texto-entrada]");
const textoSalida = document.querySelector("[data-tipo-texto-salida]");
const carruselEntrada = document.querySelector(".carrusel--entrada");
const carruselSalida = document.querySelector(".carrusel--salida");

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
    let idiomaEntrada = document.querySelector(".carrusel__entrada--item-active").getAttribute("value");
    //console.log("idiomaEntrada " + idiomaEntrada);
    let idiomaSalida = document.querySelector(".carrusel__salida--item-active").getAttribute("value");
    //console.log("idiomaSalida " + idiomaSalida);
    let texto = textoEntrada.value;
    
    if (idiomaEntrada == idiomaSalida){
        textoSalida.value = "Cambie el idioma de salida.";
        detenerAnimacion();
        return;
    }
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

// create an observer instance
// si se elige otro idioma el observer lo detectará. 
let observerCarruselEntrada = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.target.className == "carrusel__item carrusel__entrada--item-active") {
            prepararTraduccion();
        }
    });
});

let observerCarruselSalida = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.target.className == "carrusel__item carrusel__salida--item-active") {
            prepararTraduccion();
        }
    });
});


// configuration of the observer:
let config = { attributes: true, childList: true, subtree: true };

// comenzar a observar
observerCarruselEntrada.observe(carruselEntrada, config);
  // dejar de observar
 //  observador.disconnect();

 observerCarruselSalida.observe(carruselSalida, config);

