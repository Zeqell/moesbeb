let productosEnCarrito = [];
let divProductos = document.getElementById("productos");
let buscador = document.getElementById("buscador");
let btnVerCatalogo = document.getElementById("verCatalogo");
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo");
let modalBody = document.getElementById("modal-body");
let botonCarrito = document.getElementById("botonCarrito");
let coincidencia = document.getElementById("coincidencia");

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function buscarInfo(buscado, array) {
    let busqueda = array.filter(
        (productos) =>
            productos.nombre.toLowerCase().includes(buscado.toLowerCase()) ||
            productos.descripcion.toLowerCase().includes(buscado.toLowerCase())
    );

    if (busqueda.length == 0) {
        coincidencia.innerHTML = "";
        let nuevoDiv = document.createElement("div");
        nuevoDiv.innerHTML = `<p> No hay coincidencias</p>`;
        coincidencia.appendChild(nuevoDiv);
        mostrarCatalogo(array);
    } else {
        coincidencia.innerHTML = "";
        mostrarCatalogo(busqueda);
    }
}

function mostrarCatalogo(array) {
    divProductos.innerHTML = "";

    for (const productos of array) {
        let nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("col-12", "col-md-6", "col-lg-4", "my-4");
        nuevoProducto.innerHTML = `<div id="${productos.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="../img/${productos.imagen}" alt="${productos.descripcion} de ${productos.nombre}">
        <div class="card-body">
            <h4 class="card-title">${productos.nombre}</h4>
            <p>descripcion: ${productos.descripcion}</p>
            <p class="">Precio: ${productos.precio}</p>
        <button id="agregarBtn${productos.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`;
        divProductos.appendChild(nuevoProducto);
        let btnAgregar = document.getElementById(`agregarBtn${productos.id}`);

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(productos);
        });
    }
}

function agregarAlCarrito(productos) {
    productosEnCarrito.push(productos);
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = "";

    array.forEach((productoCarrito) => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
    <img class="card-img-top" height="300px" src="../img/${productoCarrito.imagen}" alt="${productoCarrito.descripcion}">
    <div class="card-body">
            <h4 class="card-title">${productoCarrito.nombre}</h4>
            <p class="card-text">${productoCarrito.precio}</p> 
            <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
    </div>    
</div>
`;
    });

    array.forEach((productoCarrito, indice) => {
        document
            .getElementById(`botonEliminar${productoCarrito.id}`)
            .addEventListener("click", () => {
                let cardProducto = document.getElementById(
                    `productoCarrito${productoCarrito.id}`
                );
                cardProducto.remove();
                productosEnCarrito.splice(indice, 1);
                localStorage.setItem("carrito", JSON.stringify(productosEnCarrito));
            });
    });
}

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, estanteria);
});

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito);
});

mostrarCatalogo(estanteria);
