let carrito = "";
let nuevaCompra = false;
let productos = prompt("Selecciona el producto que desees (Mom, Malaria, Citadelle, Botanicos, Copon):");
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos} que desea comprar:`));

function hacerCompra(productos, cantidad) {
    do {
        seleccionarProducto(productos, cantidad);
        nuevaCompra = confirm("¿Desea continuar con sus compras?");
        if (nuevaCompra) {
            productos = prompt("Selecciona el producto que desees (Mom, Malaria, Citadelle, Botanicos, Copon):");
            cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos} que desea comprar:`));
        }
    } while (nuevaCompra);
    console.log("Productos en el carrito:");
    console.log(carrito);
}

function seleccionarProducto(productos, cantidad) {
    switch (productos.toLowerCase()) {
        case "mom":
            carrito += `Mom - Cantidad: ${cantidad} - Precio Total: ${15000 * cantidad
                } pesos\n`;
            break;
        case "malaria":
            carrito += `Malaria - Cantidad: ${cantidad} - Precio Total: ${8000 * cantidad
                } pesos\n`;
            break;
        case "citadelle":
            carrito += `Citadelle - Cantidad: ${cantidad} - Precio Total: ${25000 * cantidad
                } pesos\n`;
            break;
        case "botanicos":
            carrito += `Botanicos - Cantidad: ${cantidad} - Precio Total: ${7000 * cantidad
                } pesos\n`;
            break;
        case "copon":
            carrito += `Copon - Cantidad: ${cantidad} - Precio Total: ${5000 * cantidad
                } pesos\n`;
            break;
        default:
            alert("El producto ingresado no está disponible.");
            break;
    }
}
hacerCompra(productos, cantidad);
