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

const skillsArr = [];

Array.from(document.querySelectorAll(".a")).map((item) => {
	skillsArr.push(item.textContent);
	item.remove();
});

let step = 0;
let offset = 0;

const draw = () => {
	let skill = document.createElement("li");
	skill.textContent = skillsArr[step];
	skill.classList.add("a");
	skill.style.left = offset * 10 + "vw";
	document.querySelector(".skills__list").appendChild(skill);

	step + 1 === skillsArr.length ? (step = 0) : step++;
	offset++;
};

for (let i = 0; i < 5; i++) {
	draw();
}

const moveLeft = () => {
	draw();
	let allSkills = Array.from(document.querySelectorAll(".a"));
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

let idi = setInterval(moveLeft, 2050);

document.querySelector(".skills").addEventListener("mouseenter", () => {
	if (idi) {
		clearInterval(idi);
		idi = "";
	}
});

document.querySelector(".skills").addEventListener("mouseleave", () => {
	idi = setInterval(moveLeft, 2050);
});
