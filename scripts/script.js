import {runSlider} from "./slider.js";

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerIcon = document.querySelector(".burger__icon");

const showBurger = () => {
	burger.classList.toggle("active");
	nav.classList.toggle("active");
};
burgerIcon.addEventListener("click", showBurger);

function onEntry(entry) {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add("elem-show");
		}
	});
}
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animation");
for (let elm of elements) {
	observer.observe(elm);
}

runSlider();