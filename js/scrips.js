// primera pre-entrega

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

//segunda pre-entrega

// let productos = [
//     {
//         id: 1,
//         nombreProducto: "Malaria",
//         descripcion: "De gran intensidad aromática y ataque amable",
//         precio: 8000,
//         imagen: "../img/malaria-gin-ti.png",
//         cantidad: 0
//     },

//     {
//         id: 2,
//         nombreProducto: "Malaria Black",
//         descripcion:
//             "Malaria Black es un gin contemporáneo en el que se destacan los frutos rojos, acompañado con notas especiadas y cítricas",
//         precio: 12000,
//         imagen: "../img/malaria-black.webp",
//         cantidad: 0
//     },

//     {
//         id: 3,
//         nombreProducto: "Set Malaria",
//         descripcion:
//             "Kit Premium de Malaria Gin, con caja de madera de fenólico de pino de 8mm, revestido con cetol nogal.",
//         precio: 20000,
//         imagen: "../img/gin-box-malaria-tienda.png",
//         cantidad: 0
//     },

//     {
//         id: 4,
//         nombreProducto: "Copon Malaria",
//         descripcion:
//             "Los copones son de cristal transparente, de excelente calidad.",
//         precio: 3000,
//         imagen: "../img/malaria-gin-copon-tienda.webp",
//         cantidad: 0
//     },

//     {
//         id: 5,
//         nombreProducto: "Citadelle",
//         descripcion:
//             "Esta ginebra francesa por excelencia es seca, estructurada y presenta un equilibrio entre finura e intensidad.",
//         precio: 16000,
//         imagen: "../img/citadelle-tienda-sf.png",
//         cantidad: 0
//     },

//     {
//         id: 6,
//         nombreProducto: "Citadelle Reserva",
//         descripcion:
//             "Esta ginebra francesa por excelencia es seca, estructurada y presenta un equilibrio entre finura e intensidad.",
//         precio: 18000,
//         imagen: "../img/citadelle-reserva-tienda.webp",
//         cantidad: 0
//     },

//     {
//         id: 7,
//         nombreProducto: "Citadelle Jardin De Ete",
//         descripcion:
//             "Inspirada en el jardín del Castillo de Bonbonnet, un entorno natural en el que crecen flores, frutas y plantas aromáticas.",
//         precio: 20000,
//         imagen: "../img/Citadelle_JardinDete_750ml.jpg",
//         cantidad: 0
//     },

//     {
//         id: 8,
//         nombreProducto: "Citadelle Extreme",
//         descripcion:
//             "Su carácter fresco y poético se ve acentuado por una crianza de 5 meses en barricas de cerezo, además de una esencia de madera marcada por frutos rojos y avellana fresca. ",
//         precio: 15000,
//         imagen: "../img/gin-citadelle-extreme-wild-blossom-tienda.webp",
//         cantidad: 0
//     },

//     {
//         id: 9,
//         nombreProducto: "Copon Citadelle",
//         descripcion:
//             "Los copones son de cristal transparente, de muy alta calidad.",
//         precio: 10000,
//         imagen: "../img/citadelle-copa-tienda.webp",
//         cantidad: 0
//     },

//     {
//         id: 10,
//         nombreProducto: "Mom",
//         descripcion:
//             "Elaborada a partir de frutos rojos y exóticos ingredientes botánicos que le confieren un carácter extremadamente suave.",
//         precio: 13000,
//         imagen: "../img/gin-mom.jpg",
//         cantidad: 0
//     },

//     {
//         id: 11,
//         nombreProducto: "Mom Love",
//         descripcion: "Elaborada con fresas y exoticos ingredientes botanicos.",
//         precio: 15000,
//         imagen: "../img/mom-love-gin.jpg",
//         cantidad: 0
//     },

//     {
//         id: 12,
//         nombreProducto: "Mom Rock",
//         descripcion:
//             "Ginebra elaborados con productos altamente seleccionados para un sabor unicio.",
//         precio: 17000,
//         imagen: "../img/mom-rock-gin.webp",
//         cantidad: 0
//     },

//     {
//         id: 13,
//         nombreProducto: "Set Mom",
//         descripcion: "Set Premium Mom",
//         precio: 37000,
//         imagen: "../img/mom-gin-gift-set-tienda.png",
//         cantidad: 0
//     },

//     {
//         id: 14,
//         nombreProducto: "Botanicos",
//         descripcion: "Botanicos Premium seleccionados para un Gin unico.",
//         precio: 4500,
//         imagen: "../img/botanicos-gin-tienda.jpg",
//         cantidad: 0
//     },
// ];

// let productCards = document.getElementById("product-cards");
// let carrito = [];

// for (let i = 0; i < productos.length; i++) {
//     let producto = productos[i];

//     let cardHTML = `
//     <div class="col-md-4 mb-4">
//         <div class="card">
//         <img src="${producto.imagen
//         }" class="card-img-top" alt="Imagen del producto">
//         <div class="card-body">
//             <h5 class="card-title">${producto.descripcion}</h5>
//             <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
//             <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad
//         }">
//             <button class="btn btn-primary">Agregar al carrito</button>
//         </div>
//         </div>
//     </div>
//     `;

//     productCards.innerHTML += cardHTML;
// }

// let carrito = [];

// function buscarProducto() {
//     let seleccion = prompt(
//         "Ingrese el nombre del producto que desea comprar: (Malaria, Citadelle, Mom, Copon Malaria, Botanicos)"
//     );

//     producto = productos.find(
//         (p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase()
//     );
// }

// function agregarCarrito() {
//     if (producto) {
//         let cantidad = parseInt(
//             prompt("Ingrese la cantidad que desea comprar:")
//         );
//         carrito.push({
//             producto: producto.nombreProducto,
//             cantidad: cantidad,
//             subtotal: producto.precio * cantidad,
//         });
//     } else {
//         alert(
//             "El producto seleccionado no se encuentra en stock. Ingrese nuevamente el producto."
//         );
//     }
// }

// function confirmarCompra() {
//     while (true) {
//         buscarProducto();
//         agregarCarrito();

//         if (!confirm("¿Desea agregar otro producto a su Compra?")) {
//             break;
//         }
//     }
// }

// function calcularTotal() {
//     console.log("Carrito de compras:");
//     carrito.forEach((prod) => {
//         console.log(`- ${prod.cantidad} ${prod.producto}: ${prod.subtotal}`);
//     });

//     let total = carrito.reduce((sum, prod) => sum + prod.subtotal, 0);
//     console.log(`Total a pagar: ${total}`);
// }

// function vaciarCarrito() {
//     carrito = [];
//     console.log("El carrito ha sido vaciado.");
// }

// confirmarCompra();

// if (carrito.length > 0) {
//     if (confirm("¿Desea cancelar su compra?")) {
//         vaciarCarrito();
//     }
// }

// calcularTotal();

class productos {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id,
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El nombre es ${this.nombre}, la descripcion es ${this.descripcion} y su precio es ${this.precio}`)
    }
}

const produc1 = new productos (1, "Malaria", "De gran intensidad aromática y ataque amable", 8000, "malaria-gin-ti.png")
const produc2 = new productos (2, "Malaria Black", "Malaria Black es un gin contemporáneo en el que se destacan los frutos rojos, acompañado con notas especiadas y cítricas", 12000, "malaria-black.webp")
const produc3 = new productos (3, "Set Malaria", "Kit Premium de Malaria Gin, con caja de madera de fenólico de pino de 8mm, revestido con cetol nogal.", 20000, "gin-box-malaria-tienda.png")
const produc4 = new productos (4, "Copon Malaria", "Los copones son de cristal transparente, de excelente calidad.", 5000, "malaria-gin-copon-tienda.webp")
const produc5 = new productos (5, "Citadelle", "Esta ginebra francesa por excelencia es seca, estructurada y presenta un equilibrio entre finura e intensidad.", 15000,"citadelle-tienda-sf.png")
const produc6 = new productos (6, "Citadelle Reserva","Esta ginebra francesa por excelencia es seca, estructurada y presenta un equilibrio entre finura e intensidad.", 18000, "citadelle-reserva-tienda.webp")
const produc7 = new productos (7, "Citadelle Jardin De Ete", "Inspirada en el jardín del Castillo de Bonbonnet, un entorno natural en el que crecen flores, frutas y plantas aromáticas.", 20000, "Citadelle_JardinDete_750ml.jpg")
const produc8 = new productos (8, "Citadelle Extreme", "Su carácter fresco y poético se ve acentuado por una crianza de 5 meses en barricas de cerezo, además de una esencia de madera marcada por frutos rojos y avellana fresca.", 15000, "gin-citadelle-extreme-wild-blossom-tienda.webp")
const produc9 = new productos (9, "Copon Citadelle", "Los copones son de cristal transparente, de muy alta calidad.", 10000, "citadelle-copa-tienda.webp")
const produc10 = new productos (10, "Mom", "Elaborada a partir de frutos rojos y exóticos ingredientes botánicos que le confieren un carácter extremadamente suave.", 13000, "gin-mom.jpg")
const produc11 = new productos (11, "Mom Love", "Elaborada con fresas y exoticos ingredientes botanicos.", 15000, "mom-love-gin.jpg" )
const produc12 = new productos (12, "Mom Rock", "Ginebra elaborados con productos altamente seleccionados para un sabor unicio.", 18000, "mom-rock-gin.webp")
const produc13 = new productos (13, "Set Mom", "Set Premium Mom", 37000, "mom-gin-gift-set-tienda.png")
const produc14 = new productos (14, "Botanicos","Botanicos Premium seleccionados para un Gin unico", 7000, "botanicos-gin-tienda.jpg")

let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(produc1, produc2, produc3, produc4, produc5, produc6, produc7, produc8, produc9, produc10, produc11, produc12, produc13, produc14)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}