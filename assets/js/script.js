
const items = document.querySelectorAll(".slider-item");
const body = document.querySelector(".body");
const carrusel = document.querySelector(".slider-container");


body.addEventListener("click", (event) => {
   console.log(" ");
   //console.log(event.offsetLeft);
   console.log(event.target.offsetLeft);   
});


// carrusel.addEventListener("scroll", (event) => {
//    let puntoCero = items[0].offsetLeft;
//    let puntoActual = event
//    switch ()
// });

var timerScrollEndDetect = null;

carrusel.addEventListener('scroll', function () {
    clearTimeout(timerScrollEndDetect);
    result = document.querySelector("#car");
    timerScrollEndDetect = setTimeout(function () {
      let min= 0;
        [].slice.call(carrusel.children).forEach(function (elem, index) {
           console.log(index);
           console.log("elem: "+elem.offsetLeft);
           console.log("carrusel: "+carrusel.offsetLeft);
           console.log("math: "+ Math.abs(elem.getBoundingClientRect().left - carrusel.getBoundingClientRect().left)); 

           // 
           if (Math.abs(elem.getBoundingClientRect().left - carrusel.getBoundingClientRect().left) < 10) {
                  elem.classList.add('item-active');
                  // result.innerHTML = 'elemento '+ (index);
           } else {
               elem.classList.remove('item-active');
            }

        });
    }, 500);    
    
});

