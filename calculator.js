
// This project is all about creating a scientific calculator which performs basic mathematical calculations 
// as well as trigonometric calculations



//creating function named addChar
function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

//creating a  function for finding square root of anumbers.
function sqrt(form) {
	form.display_calc.value = Math.sqrt(form.display_calc.value);
}
//function that finds the logarithm of a number
function log(form) {
	form.display_calc.value = Math.log(form.display_calc.value);
}
//function that finds the expenontional of a number
function exp(form) {
	form.display_calc.value = Math.exp(form.display_calc.value);
}
//deletingChar function that deletes the input
function deletingChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
//function that returns cosine value of a number
function cos(form) {
	form.display_calc.value = Math.cos(form.display_calc.value);
}
//function that returns the sine value of a number
function sin(form) {
	form.display_calc.value = Math.sin(form.display_calc.value);
}
//function that returns the tangent value of a number
function tan(form) {
	form.display_calc.value = Math.tan(form.display_calc.value);
}
var val = 0.0;
// it returns the value by adding % to it
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  
    form.display_calc.value = eval(form.display_calc.value);
  }

//function that returns the square of the number
function square(form) {
	form.display_calc.value = eval(form.display_calc.value) * eval(form.display_calc.value)
}
//function that evaluates the input of the number under some conditions
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}