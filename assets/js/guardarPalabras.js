export const analizarYguardarPalabras = (texto) => {
    texto = texto.trim();
    let arrayTexto = texto.split(" ");

    let map = new Map(JSON.parse(localStorage.getItem('ListaPalabras'))) || new Map();

    // console.log('map leido');
    // console.log(map);

    arrayTexto.forEach(palabra => {
        if (map.has(palabra)) {
            let cant = map.get(palabra);
            cant++;
            map.set(palabra, cant);
        } else {
            palabra.replace(" ",""); // elimina los strings que son espacios.
            if (palabra != ""){
                map.set(palabra, 1);
            }
        }
    });

    localStorage.setItem('ListaPalabras', JSON.stringify(Array.from(map.entries())));
}

/*

Este map no funciona en github.pages

export const analizarYguardarPalabras = (texto) => {
    texto = texto.trim();
    let arrayTexto = texto.split(" ");

    let map = new Map(JSON.parse(localStorage.getItem('ListaPalabras'))) || new Map();

    // console.log('map leido');
    // console.log(map);

    arrayTexto.forEach(palabra => {
        if (map.has(palabra)) {
            let cant = map.get(palabra);
            cant++;
            map.set(palabra, cant);
        } else {
            palabra.replace(" ",""); // elimina los strings que son espacios.
            if (palabra != ""){
                map.set(palabra, 1);
            }
        }
    });

    localStorage.setItem('ListaPalabras', JSON.stringify(Array.from(map.entries())));
}
*/