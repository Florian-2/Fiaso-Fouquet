const html = document.querySelector("html");
const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".menu");
let touchStart = (touchEnd = 0);

const ongletsLinks = Array.from(document.querySelectorAll(".link-nav"));
const contenu = document.querySelectorAll(".container-menu");

// Menu Mobile / Scroll
btn.addEventListener("click", () => {
	btn.classList.toggle("active");
	nav.classList.toggle("active");

	if (nav.classList.contains("active")) html.classList.add("no-scroll");
	else html.classList.remove("no-scroll");
});

nav.addEventListener("touchstart", (e) => (touchStart = e.targetTouches[0].clientX));

nav.addEventListener("touchmove", (e) => (touchEnd = e.targetTouches[0].clientX));

nav.addEventListener("touchend", () => {
	// Une différence (entre touchEnd et touchStart) d'au moins 100px est nécessaire pour que le menu se ferme
	if (touchEnd - touchStart > 100) {
		nav.classList.remove("active");
		btn.classList.remove("active");
		html.classList.remove("no-scroll");
	}
});

// Onglets
let indexData = 0;

ongletsLinks.forEach((link) => {
	link.addEventListener("click", () => {
		link.classList.add("active");

		indexData = link.dataset.anim;
		console.log(indexData);

		for (let i = 0; i < ongletsLinks.length; i++) {
			if (ongletsLinks[i].dataset.anim != indexData) {
				ongletsLinks[i].classList.remove("active");
			}
		}

		for (let c = 0; c < contenu.length; c++) {
			if (contenu[c].dataset.anim == indexData) {
				contenu[c].classList.add("activeContenu");
			} else {
				contenu[c].classList.remove("activeContenu");
			}
		}
	});
});
