import { productos } from "../data/info.js";
export async function getProductoPorCategoria(categoria) {
    console.log("----------------------------------");
    console.log("Llamada a la función GET PRODUCTO POR CATEGORIA");
    console.log("----------------------------------");
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.filter(e => e.categoria === categoria);
            if (producto.length > 0) {
                resolve(producto);
            }
            else {
                reject(`Producto con categorias ${categoria} no existe`);
            }
        }, 1000);
    });
    return promesa;
}
