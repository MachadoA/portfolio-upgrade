const btnMobile = document.getElementById('btn-mobile');
const nav = document.querySelector('nav');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(e){
    e.preventDefault();

    if(e.type === 'touchstart') {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        e.currentTarget.setAttribute('aria-label', active ? 'Close Menu' : 'Open Menu');
    }
}

document.querySelectorAll('.btn-menu').forEach((link) =>
    link.addEventListener("click", () => {
        nav.classList.remove('active');
    })
);

// Inicialize o ScrollReveal apenas uma vez
const sr = ScrollReveal({ reset: true });

sr.reveal(".conf-about", {
    duration: 2500,
    move: 0,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
});

sr.reveal(".skills", {
    duration: 2500,
    scale: 0.85
});

sr.reveal(".personal-projects", {
    duration: 2500,
    move: 0
});

sr.reveal(".contactme", {
    duration: 2500,
    scale: 0.85
});
