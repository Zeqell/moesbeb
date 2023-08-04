let productosEnCarrito = [];

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

function ordenarMayorMenor(array) {
    let mayorMenor = [].concat(array);
    mayorMenor.sort((a, b) => b.precio - a.precio);
    mostrarCatalogo(mayorMenor);
}

function ordenarMenorMayor(array) {
    let menorMayor = [].concat(array);
    menorMayor.sort((a, b) => a.precio - b.precio);
    mostrarCatalogo(menorMayor);
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array);
    alfabeticamente.sort((a, b) => {
        if (a.descripcion < b.descripcion) return -1
        if (a.descripcion > b.descripcion) return 1
        return 0;
    });
    mostrarCatalogo(alfabeticamente);
}

let divProductos = document.getElementById("productos");
let btnGuardarProductos = document.getElementById("guardarProductosBtn");
let buscador = document.getElementById("buscador");
let btnVerCatalogo = document.getElementById("verCatalogo");
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo");
let modalBody = document.getElementById("modal-body");
let botonCarrito = document.getElementById("botonCarrito");
let coincidencia = document.getElementById("coincidencia");
let selectOrden = document.getElementById("selectOrden");

function mostrarCatalogo(array) {
    divProductos.innerHTML = "";

    for (const productos of array) {
        let nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("col-12", "col-md-6", "col-lg-4", "my-4");
        nuevoProducto.innerHTML = `<div id="${productos.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="${productos.imagen}" alt="${productos.descripcion} de ${productos.nombre}">
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
    <img class="card-img-top" height="300px" src="${productoCarrito.imagen}" alt="${productoCarrito.descripcion}">
    <div class="card-body">
            <h4 class="card-title">${productoCarrito.descripcion}</h4>

            <p class="card-text">$${productoCarrito.precio}</p> 
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

function cargarProducto(array) {
    let inputnombre = document.getElementById("nombreInput");
    let inputdescripcion = document.getElementById("descripcionInput");
    let inputprecio = document.getElementById("precioInput");

    let ProductoCreado = new productos(
        array.length + 1,
        inputnombre.value,
        inputdescripcion.value,
        parseInt(inputprecio.value),
        "malaria-black.webp"
    );
    array.push(ProductoCreado);
    localStorage.setItem("estanteria", JSON.stringify(array));
    mostrarCatalogo(array);
    inputnombre.value = "";
    inputdescripcion.value = "";
    inputprecio.value = "";
}

btnGuardarProductos.addEventListener("click", () => {
    cargarProducto(estanteria);
});

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, estanteria);
});

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito);
});

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        ordenarMayorMenor(estanteria);
    } else if (selectOrden.value == 2) {
        ordenarMenorMayor(estanteria);
    } else if (selectOrden.value == 3) {
        ordenarAlfabeticamente(estanteria);
    } else {
        mostrarCatalogo(estanteria);
    }
});

mostrarCatalogo(estanteria);
