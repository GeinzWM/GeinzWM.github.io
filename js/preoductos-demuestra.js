
var productos = [
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },

]
var container2s=document.getElementById("product-listid")
productos.forEach(producto => {
    const lis = document.createElement("li")
    lis.innerHTML = `
        <div class="Container">
        <div class="productos">
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="textoss">${producto.descripcion}</p>
        <p class="categoriasss">${producto.categoria}</p>
        <p class="precio">${producto.precio}</p>
        <p class="stock">${producto.stok}</p>
    </div>
    </div>
    `;
    
var productos = [
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },
    {
        titulo: "Polo overzide",
        descripcion: "Hecho 100% de algodon",
        imagen: "img/delantera1.png",
        precio: "S/45.00",
    },

]
var container2s=document.getElementById("product-listid")
productos.forEach(producto => {
    const lis = document.createElement("li")
    lis.innerHTML = `
        <div class="Container">
        <div class="productos">
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="textoss">${producto.descripcion}</p>
        <p class="categoriasss">${producto.categoria}</p>
        <p class="precio">${producto.precio}</p>
        <p class="stock">${producto.stok}</p>
    </div>
    </div>
    `;
}),
container2s.appendChild(lis);
})

