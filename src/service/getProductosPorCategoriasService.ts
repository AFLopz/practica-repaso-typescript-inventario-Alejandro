import { productos } from "../data/info.js";
import { Producto } from "../domain/entities/productos";

export async function getProductoPorCategoria(categoria: string): Promise<Producto[]>{
    console.log("----------------------------------");
    console.log("Llamada a la función GET PRODUCTO POR CATEGORIA")
    console.log("----------------------------------");

    const promesa: Promise<Producto[]> = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const producto = productos.filter( e => e.categoria === categoria);
            if(producto.length > 0) {
                resolve(producto);
            } else {
                reject(`Productos con categorias ${categoria} no existe`)
            }
        }, 1000);
    });
    return promesa;
}