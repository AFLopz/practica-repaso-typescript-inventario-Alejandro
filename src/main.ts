import { getProductoPorCategoria } from "./service/getProductosPorCategoriasService.js";

const btn = document.getElementById("ProductNumber") as HTMLButtonElement;
const salida = document.getElementById("Products") as HTMLElement;

function getIdFromButton(): string {
    console.log('--------------------------------------')
    console.log('Llama a la function GET ID FROM BUTTON')
    console.log('--------------------------------------')

    const input = prompt("Introduce la categoria")
    const categoria = input || ""
    return categoria
}

function findProductos(categoria : string): void{
    console.log('--------------------------------------')
    console.log('Llama a la function FIND PRODUCTO')
    console.log('--------------------------------------')
    getProductoPorCategoria(categoria)
        .then((producto) =>{
            console.log("PROMISE RESOLVE, PASO PRO EL THEN")
            console.log(producto, 'producto')
            salida.textContent = `Los productos buscado son ${producto}`
        })
        .catch((error)=>{
            console.log("PROMISE RESOLVE, PASO POR EL CATCH")
            console.log(error, 'error')
            salida.textContent = error
        })
}

btn.addEventListener("click", ()=> {
    console.log('--------------------------------------')
    console.log('Llama a la function ADD EVENT LISTENER')
    console.log('--------------------------------------')

    try{
        const categoria= getIdFromButton()
        if(categoria!= undefined)findProductos(categoria)
    }catch (error){
        const message = error instanceof Error ? error.message : "error inesperado"
        salida.textContent = message
    }
})