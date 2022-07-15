
export const crearLI = (texto) => {

    let li = document.createElement("li");
    li.classList.add("menu__item");
    li.textContent = texto;
    return li;
}
