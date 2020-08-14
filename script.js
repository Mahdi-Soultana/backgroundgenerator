var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var right = document.getElementById('right');
var left = document.getElementById('left');
var up = document.getElementById("up");
var down = document.getElementById('down');
var copieButton = document.getElementById('copieButton');
var copie = document.getElementById('copie');
var direction = "right";

var currentcolortext = document.getElementById("copie");
var body = document.getElementById("body");

function setLeft() {
	direction = "left";
	setColor();
}
function setRight() {
	direction = "right";
	setColor();
}

function setColor() {
	body.style.background = "linear-gradient( to "
		+ direction + "," + color1.value + "," + color2.value + ")";
	currentcolortext.value = body.style.background + ";";
}
function copieText() {
	copie.select();
	document.execCommand("copy");
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);

right.addEventListener("click", setRight);
left.addEventListener("click", setLeft);

copieButton.addEventListener("click", copieText)


