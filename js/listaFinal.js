var finalImg = [
    {
        
        imagen: "img/f5.webp",
    },
    {
       
        imagen: "img/f1.webp",

    },
    {
        imagen: "img/f3.webp",

    },
    {
        imagen: "img/f4.webp",

    },
    {
        imagen: "img/f2.webp",

    },
    {
        imagen: "img/f6.webp",

    },
    {
        imagen: "img/f7.webp",

    },
    {
        imagen: "img/f8.webp",

    },

];

var contenedorLista = document.getElementById("lista-finalid")

finalImg.forEach(lista => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="productolosta">
    <img src="${lista.imagen}" alt="${lista.titulo}" class="lista-finalimg">
    </div>
    `;
    contenedorLista.appendChild(li)
})