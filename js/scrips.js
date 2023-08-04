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