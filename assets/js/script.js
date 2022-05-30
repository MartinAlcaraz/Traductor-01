
const items = document.querySelectorAll(".slider-item");
const body = document.querySelector(".body");
const carrusel = document.querySelector(".carrusel");
const botonIzqCarrusel = document.querySelector("#boton-izquierdo");
const botonDerCarrusel = document.querySelector("#boton-derecho");

botonDerCarrusel.addEventListener("click", () => {
    carrusel.scrollLeft += 150;
});
botonIzqCarrusel.addEventListener("click", () => {
    carrusel.scrollLeft -= 150;
});

let timerScrollEndDetect = null;

carrusel.addEventListener('scroll', function () {
    clearTimeout(timerScrollEndDetect);

    timerScrollEndDetect = setTimeout(function () {
      let min= 0;
        [].slice.call(carrusel.children).forEach(function (elem, index) {
           console.log(index);
           console.log("elem: "+elem.offsetLeft);
           console.log("getBoundingClientRect().left: "+elem.getBoundingClientRect().left);
           console.log("carrusel: "+carrusel.offsetLeft);
           console.log("math: "+ Math.abs(elem.getBoundingClientRect().left -50 - carrusel.getBoundingClientRect().left)); 

           // se restan 50px porque se empieza con 50px de margen izquierdo
           if (Math.abs(elem.getBoundingClientRect().left -50 - carrusel.getBoundingClientRect().left) < 10) {
                  elem.classList.add('carrusel__item-active');
                  // result.innerHTML = 'elemento '+ (index);
           } else {
               elem.classList.remove('carrusel__item-active');
            }

        });
    }, 400);    
    
});

