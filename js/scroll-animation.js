const sr = ScrollReveal({ reset: true });

sr.reveal(".conf-about", {
    duration: 2500,
    move: 0,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
});

sr.reveal(".skills-name li", {
    duration: 500,
    origin: "top",
    distance: "20px",
    // delay: 50, 
    interval: 100,
});

sr.reveal(".card-container", {
    duration: 3000,
    move: 0,
    easing: "cubic-bezier(0.5, 0, 0, 1)"
});

sr.reveal(".contactme", {
    duration: 2500,
    scale: 0.85
});

//underline at the link nav menu
function setActiveMenuItem() {
    const sections = document.querySelectorAll('section');
    let currentPosition = window.scrollY;

    sections.forEach(section => {
        if (section.hasAttribute('id')) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
                const sectionId = section.getAttribute('id');
                // console.log('Seção atual:', sectionId);

                const menuItem = document.querySelector(`.btn-menu[href="#${sectionId}"]`);
                if (menuItem) {
                    document.querySelectorAll('.btn-menu').forEach(item => {
                        item.classList.remove('active'); });

                    menuItem.classList.add('active');
                }
            }
        }
    });
}

window.addEventListener('scroll', setActiveMenuItem);
