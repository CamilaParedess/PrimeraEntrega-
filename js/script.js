/* Utilizo una función con la propiedad lenght para recorrer una lista de productos de maquillaje iterando el array */

const maquillaje = ["Delineador", "Polvo compacto", "Labial", "Base", "Corrector", "Máscara de pestañas", "Rubor", "Sombras"];
function recorrerArray(array) {
    let largoArray = array.length;
    for (let i = 0; i < largoArray; i++) {
        console.log(array[i]);
    }
}
recorrerArray(maquillaje);

/* Utilizo una función con la propiedad unshift para agregar un nuevo producto de maquillaje al comienzo de la lista iterando el array */

maquillaje.unshift("Iluminador");
console.log(maquillaje);

/* Utilizo una función con la propiedad push para agregar un nuevo producto de maquillaje al final de la lista iterando el array */
maquillaje.push("Gloss");
console.log(maquillaje);


/* Utilizo el método map para crear un nuevo array con los elementos del array original */

const stockMaquillaje = [
    { nombre: 'Iluminador en polvo LOréal París', precio: 1900 },
    { nombre: 'Delineador De Ojos Liquido', precio: 1280 },
    { nombre: 'Polvo compacto Vogue', precio: 1020 },
    { nombre: 'Labial Maybelline Super Stay Matte Ink', precio: 2030 },
    { nombre: 'Base Líquida de Maquillaje Max Factor', precio: 3300 },
    { nombre: 'Rimmel Multi Tasker Concealer Corrector', precio: 2010 },
    { nombre: 'Máscara de pestañas Maybelline', precio: 2270 },
    { nombre: 'Rubor Blush Paradise', precio: 2700 },
    { nombre: 'Paleta de Sombras Revlon', precio: 1950 },
    { nombre: 'Brillo Labial Hidratante Maybelline Lifter Gloss', precio: 1820 },
]

const nombres = stockMaquillaje.map((makeup) => makeup.nombre)
console.log(nombres)


/* Utilizo el método map y el metodo return para poder aumentar el precio de los distintos articulos de maquillaje un 10% */

const precioActualizado = stockMaquillaje.map((makeup) => {
    return {
        nombre: makeup.nombre,
        precio: makeup.precio * 1.1 
    }
})

console.log(precioActualizado)


/* Realizo un array con objetos usando un booleano, for...of y sumando el IVA al precio de los labiales */

class Labiales {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Labiales("Labial Maybelline Super Stay Matte Ink tono 20 Pione", "2030"));
productos.push(new Labiales("Labial Maybelline Super Stay Matte Ink tono 25 Heroi", "2030"));
productos.push(new Labiales("Labial Maybelline Super Stay Matte Ink tono 120 Arti", "2030"));
productos.push(new Labiales("Labial Maybelline Super Stay Matte Ink tono 50 Voyager", "2030"));
for (const labiales of productos)
    labiales.sumarIva();
console.log(productos);
