// === MENÚ HAMBURGUESA ===
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
window.toggleMenu = toggleMenu;

// Cambia el header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// === CERRAR MENÚ AL CLICKEAR UN ENLACE (MÓVIL) ===
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});
// === FADE SCROLL (para franja azul u otros elementos destacados) ===
const fadeScrollElements = document.querySelectorAll('.fade-scroll');

const manejarFadeScroll = () => {
    fadeScrollElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', manejarFadeScroll);
window.addEventListener('load', manejarFadeScroll);

// === FADE IN (solo una vez al entrar en pantalla) ===
const fadeElements = document.querySelectorAll('.fade-in');

const manejarFadeIn = () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 0 && !el.classList.contains('visible')) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', manejarFadeIn);
window.addEventListener('load', manejarFadeIn);


window.addEventListener('scroll', manejarFadeIn);
window.addEventListener('load', manejarFadeIn);

// === FADE UP (repetible) ===
const fadeUpElements = document.querySelectorAll('.fade-up');

const manejarFadeUp = () => {
    fadeUpElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', manejarFadeUp);
window.addEventListener('load', manejarFadeUp);



const imagenesSobreNosotros = ["img/estand2.jpg", "img/ft.jpg", "img/localint1.jpeg", "img/bahco.jpg"];
let indexSobre = 0;

function mostrarImagenSobre() {
    document.getElementById("img-sobrenosotros").src = imagenesSobreNosotros[indexSobre];
}

document.getElementById("next-sobrenosotros").addEventListener("click", () => {
    indexSobre = (indexSobre + 1) % imagenesSobreNosotros.length;
    mostrarImagenSobre();
});

document.getElementById("prev-sobrenosotros").addEventListener("click", () => {
    indexSobre = (indexSobre - 1 + imagenesSobreNosotros.length) % imagenesSobreNosotros.length;
    mostrarImagenSobre();
});

// Carrusel automático
setInterval(() => {
    indexSobre = (indexSobre + 1) % imagenesSobreNosotros.length;
    mostrarImagenSobre();
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.marcas-slider');
    const leftBtn = document.querySelector('.flecha-izq');
    const rightBtn = document.querySelector('.flecha-der');

    let scrollAmount = 0;
    const scrollStep = 200;

    // Movimiento automático
    let autoScroll = setInterval(() => {
        slider.scrollLeft += 1;
    }, 10);

    // Flecha izquierda
    leftBtn.addEventListener('click', () => {
        slider.scrollLeft -= scrollStep;
    });

    // Flecha derecha
    rightBtn.addEventListener('click', () => {
        slider.scrollLeft += scrollStep;
    });

    // Pausa al pasar el mouse
    slider.addEventListener('mouseover', () => clearInterval(autoScroll));
    slider.addEventListener('mouseout', () => {
        autoScroll = setInterval(() => {
            slider.scrollLeft += 1;
        }, 10);
    });
});
const slider = document.querySelector('.marcas-slider');
const btnIzq = document.querySelector('.flecha-izq');
const btnDer = document.querySelector('.flecha-der');

// Función para mover el carrusel hacia los lados
btnIzq.addEventListener('click', () => {
    slider.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

btnDer.addEventListener('click', () => {
    slider.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});


function enableDragScroll(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    // Activar solo en pantallas pequeñas (ej. celular)
    if (window.innerWidth > 768) return;

    let isDown = false;
    let startX, scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('dragging');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('dragging');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('dragging');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1.5;
        container.scrollLeft = scrollLeft - walk;
    });

    // Soporte táctil
    let startTouchX = 0;
    let startTouchScrollLeft = 0;

    container.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].pageX;
        startTouchScrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - startTouchX) * 1.5;
        container.scrollLeft = startTouchScrollLeft - walk;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    enableDragScroll('.marcas-slider');
    enableDragScroll('.carrusel-banner-track');
});
function toggleNovedad() {
    const box = document.getElementById('info-novedad');
    const flecha = document.getElementById('flecha-novedad');

    box.classList.remove('oculto');
    box.classList.add('visible');

    flecha.innerHTML = '▲';
}

function cerrarNovedad() {
    const box = document.getElementById('info-novedad');
    const flecha = document.getElementById('flecha-novedad');

    box.classList.remove('visible');
    box.classList.add('oculto');

    flecha.innerHTML = '▼';
}






function animarTitulo(id, texto) {
    const contenedor = document.getElementById(id);
    contenedor.innerHTML = ""; // limpiamos antes de animar

    texto.split("").forEach((letra, index) => {
        const span = document.createElement("span");
        span.textContent = letra;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(15px)";
        span.style.transition = "all 0.4s ease-out";
        span.style.transitionDelay = `${index * 60}ms`;

        contenedor.appendChild(span);

        // Forzamos animación en el siguiente frame
        requestAnimationFrame(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
        });
    });
}
function toggleNovedad() {
    const box = document.getElementById('info-novedad');
    const flecha = document.getElementById('flecha-novedad');

    box.classList.remove('oculto');
    box.classList.add('visible');

    animarTitulo("titulo-smartlife", "SMARTLIFE");
    animarTitulo("titulo-philips", "PHILIPS");

    flecha.innerHTML = '▲';
}

