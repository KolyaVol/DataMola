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
	draw()
}

const moveLeft = () => {
	draw()
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
	}, 3000);
	
};


document.querySelector(".skills").addEventListener("click", moveLeft);