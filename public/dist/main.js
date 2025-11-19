import { getProductoPorId } from "./service/getProductoService.js";
const btn = document.getElementById("ProductNumber");
const salida = document.getElementById("Products");
function getIdFromButton() {
    console.log('--------------------------------------');
    console.log('Llama a la function GET ID FROM BUTTON');
    console.log('--------------------------------------');
    const input = prompt("Introduce el id");
    const id = Number(input);
    if (Number.isNaN(id)) {
        alert("No as introducido un numero");
        return;
    }
    return id;
}
function findProduct(id) {
    console.log('--------------------------------------');
    console.log('Llama a la function FIND EMPLEADO');
    console.log('--------------------------------------');
    getProductoPorId(id)
        .then((producto) => {
        console.log("PROMISE RESOLVE, PASO PRO EL THEN");
        console.log(producto, 'producto');
        salida.textContent = `El Producto buscado es ${producto}`;
    })
        .catch((error) => {
        console.log("PROMISE RESOLVE, PASO POR EL CATCH");
        console.log(error, 'error');
        salida.textContent = error;
    });
}
btn.addEventListener("click", () => {
    console.log('--------------------------------------');
    console.log('Llama a la function ADD EVENT LISTENER');
    console.log('--------------------------------------');
    try {
        const id = getIdFromButton();
        if (id != undefined)
            findProduct(id);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "error inesperado";
        salida.textContent = message;
    }
});
