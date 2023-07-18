/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Leonardo Moncada Castro.
 */

//MARK TO GRADE CONVERTER

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

function toCelsius() {
  let fahrenheit = document.getElementById("Fahrenheit").value;
  let celsius = ((5 / 9) * (fahrenheit - 32)).toFixed(2);

  document.getElementById("celsiusText").innerHTML =
    fahrenheit + "°F is " + celsius + "°C";

  console.log(fahrenheit + "°F is " + celsius + "°C");
}

function toFahrenheit() {
  let celsius = document.getElementById("Celsius").value;
  let fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);

  document.getElementById("fahrenheitText").innerHTML =
    celsius + "°C is " + fahrenheit + "°F";

  console.log(celsius + "°C is " + fahrenheit + "°F");
}

function toggleSection(scale) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.getAttribute("scale") === scale) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

var input = document.getElementById("Fahrenheit");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("toC").click();
  }
});

var input = document.getElementById("Celsius");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("toF").click();
  }
});
