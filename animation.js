/* HEADER */
const title = Array.from(document.querySelectorAll('.container-slogan > *'));
const logo = document.querySelector('.logo');
const links = Array.from(document.querySelectorAll('nav.menu a'));
const header = document.querySelector('header');

// gsap.defaults({ 

// }); 

const TL = gsap.timeline({
    defaults: {
        duration: 0.4
    }
});

/* ANIMATION HEADER */
TL
.from(header, {
    backgroundPositionY: '-80vh',
    duration: 0.7,
    ease: "circ.out"
})
.from(title, {
    x: 100,
    opacity: 0,
    stagger: 0.2
})
.from(logo, {
    x: 50,
    opacity: 0,
})
.from(links, {
    x: 50,
    opacity: 0,
    stagger: 0.1
})