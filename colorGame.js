var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
// pick a random color from colors
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare clicked color to picked color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
		}
		else {
			//document.body.style represents inline styles in the body NOT the style given in colorGame.css
			var bodyStyle = window.getComputedStyle(document.body);
			this.style.backgroundColor = bodyStyle.getPropertyValue('background-color');
			messageDisplay.textContent = "Try Again"
		}
	});
}

//change all squares backgroundColor to color. Change h1 backgroundColor to color as well
function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}
//return a random color
function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
// return an array of strings that represent rgb values with length num
function generateRandomColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr[i] = getRandomColor();
	}
	return arr;
}
function getRandomColor() {
	// pick red, green, and blue from 0-255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// using template string
	return `rgb(${r}, ${g}, ${b})`;
}