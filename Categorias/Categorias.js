document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.cabecera nav');

    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const carruseles = document.querySelectorAll(".carrusel");

  carruseles.forEach(carrusel => {
    const contenedor = carrusel.querySelector(".imagenes");
    const fila = carrusel.querySelector(".imagecarousel");
    const flechaIzq = carrusel.querySelector(".flecha.izq");
    const flechaDer = carrusel.querySelector(".flecha.der");

    const img = fila.querySelector("img");

    // Obtenemos gap en px desde .entradas
    const estilos = window.getComputedStyle(fila);
    const gap = parseFloat(estilos.gap) || 0;

    // Paso = ancho de imagen + gap
    const step = img.offsetWidth + gap;

    flechaIzq.addEventListener("click", () => {
      contenedor.scrollBy({ left: -step, behavior: "smooth" });
    });

    flechaDer.addEventListener("click", () => {
      contenedor.scrollBy({ left: step, behavior: "smooth" });
    });
  });
});

