export const analizarYguardarPalabras = (texto) => {
    let arrayTexto = texto.split(" ");

    let map = new Map(JSON.parse(localStorage.getItem('ListaPalabras'))) || new Map();

    console.log('map leido');
    console.log(map);

    arrayTexto.forEach(palabra => {
        if (map.has(palabra)) {
            let cant = map.get(palabra);
            cant++;
            map.set(palabra, cant);
        } else {
            map.set(palabra, 1);
        }
    });
  
    localStorage.setItem('ListaPalabras', JSON.stringify( Array.from( map.entries() )));
}