// // navbar // //
document.querySelector(".navbar-toggler").onclick = function () {
	document.querySelector("nav").classList.toggle("backg");
};
// //how to make random backgrounds// // //

setInterval(() => {
	let images = ["01.jpg", "02.jpg", "03.jpg"];
	let randomNumber = Math.floor(Math.random() * images.length);
	document.querySelector(
		".landing"
	).style.cssText = `background-image: url(./imgs/${images[randomNumber]})`;
}, 5000);
// // // // // // // // // // // // // // // // // // //
// // how to make progress bar in skills // //

Array.from(document.querySelectorAll(".skills .progress")).forEach(
	(progress) => {
		let span = progress.children[0];
		span.style.cssText = `width: ${span.parentElement.dataset.width}`;
	}
);
// // // // // // // // // // // // // // // // // // //
// // how to make skills effect // //

Array.from(document.querySelectorAll(".skills .face")).forEach((box) => {
	box.addEventListener("click", (e) => {
		e.target.parentElement.classList.toggle("effect");
	});
});
// // // // // // // // // // // // // // // // // // //
// // how to make links scroll // //
Array.from(document.querySelectorAll(".navbar-nav li a")).forEach((a) => {
	a.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector(e.target.dataset.section).scrollIntoView({
			behavior: "smooth",
		});
	});
});
// // // // // // // // // // // // // // // // // // //
// // how to make our work effect // //
Array.from(document.querySelectorAll(".our-work .img-box")).forEach((box) => {
	box.addEventListener("click", (e) => {
		let work = document.querySelector(".our-work");
		let popup = document.createElement("div");
		let popimg = document.createElement("img");
		let overlay = document.createElement("div");
		let btn = document.createElement("button");
		let link = document.createElement("a");
		link.href = `https://adhamelhabashy.github.io/${e.target.dataset.name}/`;
		link.textContent = "SHOW MORE";
		link.target = "blank";
		btn.textContent = "X";
		btn.classList.add("img-btn");
		overlay.classList.add("popup-overlay");
		popimg.src = e.target.src;
		popimg.classList.add("img-fluid");
		popup.append(popimg);
		popup.append(btn);
		popup.append(link);
		popup.classList.add("popup");
		work.append(popup);
		document.body.appendChild(overlay);
		btn.onclick = (e) => {
			btn.parentElement.remove();
			overlay.remove();
		};
	});
});
// // // // // // // // // // // // // // // // // // //
// // how to make features effect // //
window.onscroll = function () {
	let features = document.querySelector(".features");
	let about = document.querySelector(".about-us");
	let skills = document.querySelector(".skills");
	let work = document.querySelector(".our-work");
	let contact = document.querySelector(".contact");
	if (this.scrollY >= features.offsetTop - 800) {
		features.classList.add("effect");
	}
	if (this.scrollY >= about.offsetTop - 800) {
		about.classList.add("effect");
	}
	if (this.scrollY >= skills.offsetTop - 800) {
		skills.classList.add("effect");
	}
	if (this.scrollY >= contact.offsetTop - 800) {
		contact.classList.add("effect");
	}
	if (this.scrollY >= work.offsetTop - 800) {
		work.classList.add("effect");
	}
};
// // // // // // // // // // // // // // // // // // //
