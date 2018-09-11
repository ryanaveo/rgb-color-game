var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 0)"
]

var squares = document.querySelectorAll(".square");
// pick a random color from colors
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

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

//change all squares backgroundColor to color
function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}
//return a random color
function pickColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}