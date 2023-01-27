const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerIcon = document.querySelector(".burger__icon");

const showBurger = () => {
	burger.classList.toggle("active");
	nav.classList.toggle("active");
};
const hideBurger = () => {
	burger.classList.remove("active");
	nav.classList.remove("active");
};
burgerIcon.addEventListener("click", showBurger);
nav.addEventListener("click", hideBurger);

const useBurger = () => {
	burgerIcon.addEventListener("click", showBurger);
	nav.addEventListener("click", hideBurger);
};

export default useBurger;
