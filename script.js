/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Leonardo Moncada Castro.
 */

//MARK TO GRADE CONVERTER

//function to convert the mark to a grade

function getGrade() {
  const message = document.getElementById("gradeResult");
  //   message.innerHTML = "";

  let mark = document.getElementById("mark").value;
  try {
    if (mark === "") throw "empty";
    if (isNaN(mark)) throw "only numbers are allowed";
    if (mark > 100) throw "it can't be higher than 100";
    if (mark >= 90) {
      message.innerHTML = "Mark " + mark + " is equivalent to Grade A";
    } else if (mark >= 80) {
      message.innerHTML = "Mark " + mark + " is equivalent to Grade B";
    } else if (mark >= 70) {
      message.innerHTML = "Mark " + mark + " is equivalent to Grade C";
    } else if (mark >= 50) {
      message.innerHTML = "Mark " + mark + " is equivalent to Grade D";
    } else if (mark >= 0) {
      message.innerHTML = "Mark " + mark + " is equivalent to Grade F";
    } else {
      throw "it can't be a negative number";
    }
  } catch (error) {
    message.innerHTML = "Please try again with a valid imput";
    alert("Invalid input: " + error);
  }
}

//TEMPERATURE CONVERTER

//Function to convert from Fahrenheit to Celsius
function toCelsius() {
  let fahrenheit = document.getElementById("Fahrenheit").value;
  let celsius = ((5 / 9) * (fahrenheit - 32)).toFixed(2);

  document.getElementById("celsiusText").innerHTML =
    fahrenheit + "°F is " + celsius + "°C";

  console.log(fahrenheit + "°F is " + celsius + "°C");
}

//Function to convert from Celsius to Kelvin
function toKelvin() {
  let celsius = parseInt(document.getElementById("Celsius").value);
  let kelvin = celsius + 273.15;

  document.getElementById("kelvinText").innerHTML =
    celsius + "°C is " + kelvin + "°K";

  console.log(celsius + "°C is " + kelvin + "°K");
}

//Function to toggle the sections
function toggleSection(scale) {
  const sections = document.querySelectorAll(".section");
  // Iterate through each section
  sections.forEach((section) => {
    if (section.getAttribute("scale") === scale) {
      section.style.display = "block"; // Display the section
    } else {
      section.style.display = "none"; // Hide the section
    }
  });
}

//event listener for Enter key on fahrenheit input
var input = document.getElementById("Fahrenheit");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("toC").click();
  }
});

//event listener for Enter key on celsius input
var input = document.getElementById("Celsius");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("toK").click();
  }
});
