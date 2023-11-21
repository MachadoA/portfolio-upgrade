const main = document.querySelector('.presentation');
const animation = document.querySelector('.animation-article');

main.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    animation.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  main.addEventListener("touchstart", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    animation.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  
  main.addEventListener("mouseleave", (e) => {
    animation.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
  main.addEventListener("touchend", (e) => {
    animation.style.transform = `rotateY(0deg) rotateX(0deg)`;
  });
  
