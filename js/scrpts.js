// let carrito = "";
// let nuevaCompra = false;
// let productos = prompt("Selecciona el producto que desees (Mom, Malaria, Citadelle, Botanicos, Copon):");
// let cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos} que desea comprar:`));

// function hacerCompra(productos, cantidad) {
//     do {
//         seleccionarProducto(productos, cantidad);
//         nuevaCompra = confirm("¿Desea continuar con sus compras?");
//         if (nuevaCompra) {
//             productos = prompt("Selecciona el producto que desees (Mom, Malaria, Citadelle, Botanicos, Copon):");
//             cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos} que desea comprar:`));
//         }
//     } while (nuevaCompra);
//     console.log("Productos en el carrito:");
//     console.log(carrito);
// }

// function seleccionarProducto(productos, cantidad) {
//     switch (productos.toLowerCase()) {
//         case "mom":
//             carrito += `Mom - Cantidad: ${cantidad} - Precio Total: ${15000 * cantidad
//                 } pesos\n`;
//             break;
//         case "malaria":
//             carrito += `Malaria - Cantidad: ${cantidad} - Precio Total: ${8000 * cantidad
//                 } pesos\n`;
//             break;
//         case "citadelle":
//             carrito += `Citadelle - Cantidad: ${cantidad} - Precio Total: ${25000 * cantidad
//                 } pesos\n`;
//             break;
//         case "botanicos":
//             carrito += `Botanicos - Cantidad: ${cantidad} - Precio Total: ${7000 * cantidad
//                 } pesos\n`;
//             break;
//         case "copon":
//             carrito += `Copon - Cantidad: ${cantidad} - Precio Total: ${5000 * cantidad
//                 } pesos\n`;
//             break;
//         default:
//             alert("El producto ingresado no está disponible.");
//             break;
//     }
// }
// hacerCompra(productos, cantidad);

let productos = [
    {
        id: 1,
        nombreProducto: "Malaria",
        precio: 8000,
    },
    {
        id: 2,
        nombreProducto: "Citadelle",
        precio: 10000,
    },
    {
        id: 3,
        nombreProducto: "Mom",
        precio: 15000,
    },
    {
        id: 4,
        nombreProducto: "Copon Malaria",
        precio: 3000,
    },
    {
        id: 5,
        nombreProducto: "Botanicos",
        precio: 4500,
    },
];

let carrito = [];

function buscarProducto() {
    let seleccion = prompt(
        "Ingrese el nombre del producto que desea comprar: (Malaria, Citadelle, Mom, Copon Malaria, Botanicos)"
    );

    producto = productos.find(
        (p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase()
    );
}

function agregarCarrito() {
    if (producto) {
        let cantidad = parseInt(
            prompt("Ingrese la cantidad que desea comprar:")
        );
        carrito.push({
            producto: producto.nombreProducto,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad,
        });
    } else {
        alert(
            "El producto seleccionado no se encuentra en stock. Ingrese nuevamente el producto."
        );
    }
}

function confirmarCompra() {
    while (true) {
        buscarProducto();
        agregarCarrito();

        if (!confirm("¿Desea agregar otro producto a su Compra?")) {
            break;
        }
    }
}

function calcularTotal() {
    console.log("Carrito de compras:");
    carrito.forEach((prod) => {
        console.log(`- ${prod.cantidad} ${prod.producto}: ${prod.subtotal}`);
    });

    let total = carrito.reduce((sum, prod) => sum + prod.subtotal, 0);
    console.log(`Total a pagar: ${total}`);
}

function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
}

confirmarCompra();

if (carrito.length > 0) {
    if (confirm("¿Desea cancelar su compra?")) {
        vaciarCarrito();
    }
}

calcularTotal();
