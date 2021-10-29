/* HEADER */
const title = Array.from(document.querySelectorAll('.container-slogan > *'));
const logo = document.querySelector('.logo');
const links = Array.from(document.querySelectorAll('nav.menu a'));
const header = document.querySelector('header');

/* SECTION PRESENTATION */
const imgLeft = document.getElementById('card1');
const imgRight = document.getElementById('card2');
const txtLeft = document.getElementById('txt1');
const txtRight = document.getElementById('txt2');


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


/* SECTION PRESENTATION */
gsap.from([imgLeft, txtLeft, txtLeft.children], {
    x: 100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.presentation .block-left',
        start: "top-=200 center",
        end: "bottom center",
        toggleActions: "play reverse play none",
    }
})
gsap.from([imgRight, txtRight, txtRight.children], {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.presentation .block-right',
        markers: true,
        start: "top-=200 center",
        end: "bottom center",
        toggleActions: "play reverse play none",
    }
})