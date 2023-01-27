let deviceWidth = window.innerWidth;

const drawOwerlayItem = () => {
	let item = document.createElement("li");
	item.classList.add("header__owerlay");
	document.querySelector("#header").appendChild(item);
};

const drawFullOwerlay = () => {
	if (deviceWidth < 700) {
		for (let i = 0; i < 21; i++) {
			drawOwerlayItem();
		}
	} else {
		for (let i = 0; i < 51; i++) {
			drawOwerlayItem();
		}
	}
};

export default drawFullOwerlay;
