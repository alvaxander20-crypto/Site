// Cadena dada en la práctica (simula venir de un servidor)
const productosJSON = '[{"nombre": "Mouse", "precio": 15.5}, {"nombre": "Teclado", "precio": 25}, {"nombre": "Monitor", "precio": 120.99}]';

// PASO 1: Convertir a un arreglo de objetos JavaScript
let productos = JSON.parse(productosJSON);

// PASO 2: Agregar un nuevo producto (usamos audífonos ya que tienes la imagen)
productos.push({ "nombre": "Audífonos", "precio": 35.00 });

// PASO 2 (Continuación): Hacer la modificación al arreglo para incluir la foto
// Asignamos el nombre de la imagen correspondiente a cada índice
productos[0].imagen = "img/mouse.jpg";
productos[1].imagen = "img/teclado.jpg";
productos[2].imagen = "img/monitor.jpg";
productos[3].imagen = "img/audifonos.jpg";

// PASO 3: Recorrer el arreglo y mostrar los datos usando tarjetas
// Referenciamos al contenedor en el HTML
const contenedor = document.getElementById("contenedor-productos");

// Usamos forEach para recorrer el arreglo, igual que en el ejemplo de estudiantes
productos.forEach(producto => {
    
    // Creamos el div principal de la tarjeta
    const tarjeta = document.createElement("div");
    
    // Le adicionamos la clase CSS
    tarjeta.classList.add("tarjeta-producto");

    // Creamos el contenido con innerHTML, agregando la imagen y los datos
    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
    `;

    // Finalmente, añadimos la tarjeta al contenedor principal
    contenedor.appendChild(tarjeta);
});
