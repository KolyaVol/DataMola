const burger = document.querySelector('.burger');
const nav = document.querySelector(".nav");
const burgerIcon = document.querySelector(".burger__icon");

const showBurger = () => {
    burger.classList.toggle('active');
    nav.classList.toggle("active");
}
burgerIcon.addEventListener('click', showBurger);