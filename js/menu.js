const btnMobile = document.getElementById('btn-mobile');
const nav = document.querySelector('nav');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(e){
    e.preventDefault();
    console.log('clicou')

    if(e.type === 'touchstart' || e.type === 'click') {
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

