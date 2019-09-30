let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomColorGeneratorButton = document.getElementById("random");


// First page load Default values
color1.value = "#ff0000";
color2.value = "#ffff00";
body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
css.textContent = `${body.style.background};`;


randomColorGeneratorButton.addEventListener("click", function() {
	// console.log("button is working");
	let randomColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	let randomColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	color1.value = randomColor1;
	color2.value = randomColor2;
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
});

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

