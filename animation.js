/* HEADER */
const title = Array.from(document.querySelectorAll('.container-slogan > *'));
const logo = document.querySelector('.logo');
const links = Array.from(document.querySelectorAll('nav.menu a'));
const header = document.querySelector('header');

/* SECTION PRESENTATION */
const imgLeft = document.getElementById('card1');
const txtLeft = document.getElementById('txt1');
const imgRight = document.getElementById('card2');
const txtRight = document.getElementById('txt2');

/* MENU */
const menu = Array.from(document.getElementById('menu').children);
const navigation = document.querySelector('section.navigation');

/* CHEF */
const imgChef = document.getElementById('imgChef');
const txtChef = document.querySelector('section.chief .block-body');

/* RESERVATION */
const txtReservation = Array.from(document.getElementById('bodyReservation').children)


/* ANIMATION HEADER */
const TLHeader = gsap.timeline({
    defaults: {
        duration: 0.4
    }
});

TLHeader
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


/* ANIMATION SECTION PRESENTATION */
gsap.from([imgLeft, txtLeft, txtLeft.children], {
    x: 100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.presentation .block-left',
        start: "top-=100 center",
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
        start: "top-=100 center",
        end: "bottom center",
        toggleActions: "play reverse play none",
    }
})

/* ANIMATION MENU ET NAVIGATION */
const fade = {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
}
gsap.from(menu, {
    ...fade,
    scrollTrigger: {
        trigger: 'section.navigation',
        start: "top-=300 center",
        end: "bottom+=200 center",
        // markers: true,
        toggleActions: "play reverse play none",
    }
});
gsap.from(['section.navigation nav a'], {
    ...fade,
    scrollTrigger: {
        trigger: 'section.navigation',
        start: "top-=100 center",
        end: "bottom+=200 center",
        toggleActions: "play reverse play none",
    }
});
gsap.from(['section.navigation'], {
    ...fade,
    scrollTrigger: {
        trigger: 'section.navigation',
        start: "top-=300 center",
        end: "bottom+=200 center",
        toggleActions: "play reverse play none",
    }
});


/* ANIMATION SECTION CHEF */
gsap.from([imgChef, txtChef.children], {
    ...fade,
    scrollTrigger: {
        trigger: 'section.chief',
        start: "top-=100 center",
        end: "bottom+=100 center",
        toggleActions: "play reverse play none",
    }
});


/* ANIMATION RESERVATION */
gsap.from(txtReservation, {
    ...fade,
    scrollTrigger: {
        trigger: 'section.reservation',
        start: "top-=100 center",
        end: "bottom+=100 center",
        toggleActions: "play reverse play none",
    }
});