
const items = document.querySelectorAll(".slider-item");
const body = document.querySelector(".body");
const carruselEntrada = document.querySelector(".carrusel--entrada");
const carruselSalida = document.querySelector(".carrusel--salida");
const botonEntradaIzq = document.querySelector("#boton-entrada__izquierdo");
const botonEntradaDer = document.querySelector("#boton-entrada__derecho");
const botonSalidaIzq = document.querySelector("#boton-salida__izquierdo");
const botonSalidaDer = document.querySelector("#boton-salida__derecho");

botonEntradaIzq.addEventListener("click", () => {
    carruselEntrada.scrollLeft -= 150;
});
botonEntradaDer.addEventListener("click", () => {
    carruselEntrada.scrollLeft += 150;
});

botonSalidaIzq.addEventListener("click", () => {
    carruselSalida.scrollLeft -= 150;
});
botonSalidaDer.addEventListener("click", () => {
    carruselSalida.scrollLeft += 150;
});

let timerScrollEndDetect = null;

carruselEntrada.addEventListener('scroll', function () {
    clearTimeout(timerScrollEndDetect);

    timerScrollEndDetect = setTimeout(function () {
        let min = 0;
        [].slice.call(carruselEntrada.children).forEach(function (elem, index) {
            //    console.log(index);
            //    console.log("elem: "+elem.offsetLeft);
            //    console.log("getBoundingClientRect().left: "+elem.getBoundingClientRect().left);
            //    console.log("carrusel: "+carrusel.offsetLeft);
            //    console.log("math: "+ Math.abs(elem.getBoundingClientRect().left -50 - carrusel.getBoundingClientRect().left)); 

            // se restan 50px porque se empieza con 50px de margen izquierdo
            if (Math.abs(elem.getBoundingClientRect().left - 50 - carruselEntrada.getBoundingClientRect().left) < 10) {
                elem.classList.add('carrusel__entrada--item-active');
                // result.innerHTML = 'elemento '+ (index);
            } else {
                elem.classList.remove('carrusel__entrada--item-active');
            }
        });
    }, 400);
});

carruselSalida.addEventListener('scroll', function () {
    clearTimeout(timerScrollEndDetect);

    timerScrollEndDetect = setTimeout(function () {
        let min = 0;
        [].slice.call(carruselSalida.children).forEach(function (elem, index) {
            //    console.log(index);
            //    console.log("elem: "+elem.offsetLeft);
            //    console.log("getBoundingClientRect().left: "+elem.getBoundingClientRect().left);
            //    console.log("carrusel: "+carrusel.offsetLeft);
            //    console.log("math: "+ Math.abs(elem.getBoundingClientRect().left -50 - carrusel.getBoundingClientRect().left)); 

            // se restan 50px porque se empieza con 50px de margen izquierdo
            if (Math.abs(elem.getBoundingClientRect().left - 50 - carruselSalida.getBoundingClientRect().left) < 10) {
                elem.classList.add('carrusel__salida--item-active');
                // result.innerHTML = 'elemento '+ (index);
            } else {
                elem.classList.remove('carrusel__salida--item-active');
            }
        });
    }, 400);
});
