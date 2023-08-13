var productos2 = [
  {
    titulo: "Polo overzide",
    descripcion: "Hecho 100% de algodon",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/45.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/trasera1.png",
      "img/polera4.jpg"
    ]

  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/trasera1.png",
    categoria: "polos",
    precio: "S/203.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/modelo.jpg",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 322",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/210.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  },
  {
    titulo: "Producto 2",
    descripcion: "Descripción del producto 2",
    imagen: "img/delantera1.png",
    categoria: "polos",
    precio: "S/20.00",
    stok: "stock",
    imagenesAdicionales: [
      "img/delantera1.png",
      "img/delantera1.png",
      "img/delantera1.png"
    ]
  }

];
const emergente = document.getElementById("Emergenteid");
const cerrarModal = document.getElementById('cerrarModal');
const descripcionModal = document.getElementById('descripcionModal');
const precioModal = document.getElementById('precioModal');
const imagenModal = document.getElementById('imagenModal');
var container2 = document.getElementById("productos_containter2");

  imagenModal.addEventListener("mouseenter", function () {
    imagenModal.classList.add("aplicarscala")
  })
  imagenModal.addEventListener("mouseleave", function () {
    imagenModal.classList.remove("aplicarscala")
  })
productos2.forEach(producto => {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="productopadre">
      <div class="producto">
        <img src="${producto.imagen}" alt="${producto.titulo}" class="producto-imagen">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="textoss">${producto.descripcion}</p>
        <p class="categoriasss">${producto.categoria}</p>
        <p class="precio">${producto.precio}</p>
        <p class="stock">${producto.stok}</p>
      </div>
    </div>
  `;

  container2.appendChild(li);

  const imagenesProductos = li.querySelectorAll('.producto-imagen');

  imagenesProductos.forEach(imagen => {
    imagen.addEventListener('click', function () {
      emergente.style.display = 'block';

      const contenedorProducto = imagen.closest('.producto');
      const descripcion = contenedorProducto.querySelector('.textoss').textContent;
      const precio = contenedorProducto.querySelector('.precio').textContent;
      const imagenSrc = imagen.src;

      descripcionModal.textContent = descripcion;
      precioModal.textContent = precio;
      imagenModal.src = imagenSrc;


      // Mostrar las imágenes adicionales en el emergente
      const imagenesAdicionales = producto.imagenesAdicionales;
      const imagenesAdicionalesModalDiv = document.getElementById('imagenesAdicionalesModal');
      imagenesAdicionalesModalDiv.innerHTML = '';

      imagenesAdicionales.forEach(imgSrc => {
        const imgs = document.createElement('img');
        imgs.src = imgSrc;
        imgs.classList.add('imagen-adicional');
        imagenesAdicionalesModalDiv.appendChild(imgs);

        // Agregar evento mouseenter para cambiar el fondo de las imágenes adicionales
        imgs.addEventListener('mouseenter', function () {
          imagenModal.src = imgSrc; // Cambiar la imagen principal al pasar el mouse
          imagenModal.classList.add("aplicarscala");
        });
        imgs.addEventListener('mouseleave', function () {
          imagenModal.src = imagenSrc; // Restaurar la imagen principal al quitar el mouse
          imagenModal.classList.remove("aplicarscala");
        });

      });
    });
  });
});


cerrarModal.addEventListener('click', function () {
  emergente.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === emergente) {
    emergente.style.display = 'none';
  }
});


