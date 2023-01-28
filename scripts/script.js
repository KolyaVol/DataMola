import useBurger from "./burger.js";
import drawFullOwerlay from "./headerOwerlay.js";
import { runSlider } from "./slider.js";

const onEntry = (entry) => {
	entry.forEach((change) => {
		if (change.isIntersecting) {
			change.target.classList.add("elem-show");
		}
	});
};
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".animation");
for (let elm of elements) {
	observer.observe(elm);
}

drawFullOwerlay();
runSlider();
useBurger();
