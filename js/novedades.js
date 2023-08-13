var deporte = [
  {
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/modelo.jpg",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicional: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  }
];

var container2 = document.getElementById("productos_containter2_deporte");
const emergentes = document.getElementById("Emergenteids");
const cerrarModals = document.getElementById('cerrarModals');
const descripcionModals = document.getElementById('descripcionModals');
const precioModals = document.getElementById('precioModals');
const imagenModals = document.getElementById('imagenModals');

deporte.forEach(deport => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="productopadre">
    <div class="producto">
    <img src="${deport.imagen}" alt="${deport.titulo}" class="producto-imagen">
    <h3 class="producto-titulo">${deport.titulo}</h3>
    <p class="categoriasss">${deport.categoria}</p>
    <p class="textoss">${deport.descripcion}</p>
    <p class="precio">${deport.precio}</p>
    <p class="stock">${deport.stok}</p>

  </div>
  </div>
      
    `;
  container2.appendChild(li);

 
});