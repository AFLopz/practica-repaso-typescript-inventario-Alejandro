import { productos } from "../data/info.js";


export async function getProducto(id: number): Promise<string>{
    console.log("----------------------------------");
    console.log("Llamada a la función GET EMPLEADO")
    console.log("----------------------------------");

    const promesa: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const producto = productos.find( e => e.id === id)?.nombre
            if(producto) {
                resolve(producto);
            } else {
                reject(`Producto con id ${id} no existe`)
            }
        }, 800);
    });
    return promesa;
}