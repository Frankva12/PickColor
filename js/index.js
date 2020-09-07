//Se traen los botones que necesitaremos
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const inputColor = document.querySelector(".color");

//generamos un addEventListener para los clicks del boton
btn.addEventListener("click", function () {
    //guardamos el valor del input en una variable llamada color
    let color = inputColor.value;
    //inicializamos la funcion con su parametro
    changeBackground(color);
});

//generamos la funcion de cambio de color del fondo
function changeBackground(color) {
    //mandamos a la variable del css el valor del input de color
    container.style.setProperty('--main-bg-color', `${color}`);
}