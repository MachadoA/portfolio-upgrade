const btnMobile = document.getElementById('btn-mobile');
const nav = document.querySelector('nav');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu,);

function toggleMenu(e){
    e.preventDefault();

    if(e.type === 'touchstart'); 
    nav.classList.toggle('active');

    //Acessibilidade
    const active =nav.classList.contains('active');
    e.currentTarget.setAttribute('aria-label', active ? 'Close Menu' : 'Open Menu');
}

document.querySelectorAll('.btn-menu').forEach((link) =>
    link.addEventListener("click", () => {
        nav.classList.remove('active')
    })
)

// const body = document.body;
// const header = document.querySelector('header');
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// window.addEventListener("scroll", move, false);

// function move() {
//     const currentScroll = window.scrollY;

//     if (currentScroll == 0) {
//         body.classList.remove(scrollUp);
//         return;
//     }

//     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//         ///down
//         body.classList.remove(scrollUp);
//         body.classList.add(scrollDown);
//     } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)){
//         ///up
//         body.classList.remove(scrollDown);
//         body.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll;
// }
