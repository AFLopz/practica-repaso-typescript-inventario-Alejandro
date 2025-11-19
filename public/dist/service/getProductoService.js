import { productos } from "../data/info.js";
export async function getProductoPorId(id) {
    console.log("----------------------------------");
    console.log("Llamada a la función GET PRODUCTO POR ID");
    console.log("----------------------------------");
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(e => e.id === id)?.nombre;
            if (producto) {
                resolve(producto);
            }
            else {
                reject(`Producto con id ${id} no existe`);
            }
        }, 800);
    });
    return promesa;
}
