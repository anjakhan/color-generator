var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var button = document.querySelector("button")

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value
		+ ", "
		+ color2.value
		+ ")"

	css.textContent = body.style.background + ";";
};

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Random Number
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

// Random Number Color Picker
function getColorInteger() {
	return Math.floor(Math.random() * 255) + 0;
};

// Random Background Color + rgb to hex conversion
function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getColor() {
	color1.value = rgbToHex(getColorInteger(),getColorInteger(),getColorInteger())
	color2.value = rgbToHex(getColorInteger(),getColorInteger(),getColorInteger())
	
	setGradient()
};

button.addEventListener("click", getColor)