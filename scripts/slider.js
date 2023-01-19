const skillsArr = [];

Array.from(document.querySelectorAll(".skills__item")).map((item) => {
	skillsArr.push(item.textContent);
	item.remove();
});

let step = 0,
	startOffset = 0;

const drawElement = () => {
	let skill = document.createElement("li");
	skill.textContent = skillsArr[step];
	skill.classList.add("skills__item");
	skill.style.left = startOffset * 10 + "vw";
	document.querySelector(".skills__list").appendChild(skill);
	step + 1 === skillsArr.length ? (step = 0) : step++;
	startOffset++;
};

for (let i = 0; i < 5; i++) {
	drawElement();
}

const sliderScroll = () => {
	drawElement();
	let allSkills = Array.from(document.querySelectorAll(".skills__item"));
	let secondOffset = 0;
	allSkills.map((item) => {
		item.style.left = secondOffset * 10 + "vw";
		secondOffset++;
	});

	allSkills[0].classList.add("slider-left");
	allSkills[allSkills.length - 1].classList.add("slider-right");

	setTimeout(() => {
		allSkills[0].remove();
		allSkills[allSkills.length - 1].classList.remove("slider-right");
	}, 2000);
};

export function runSlider() {
	let sliderTimer = setInterval(sliderScroll, 2015);
	document.querySelector(".skills").addEventListener("mouseenter", () => {
		if (sliderTimer) {
			clearInterval(sliderTimer);
			sliderTimer = "";
		}
	});

	document.querySelector(".skills").addEventListener("mouseleave", () => {
		sliderTimer = setInterval(sliderScroll, 2015);
	});
}


