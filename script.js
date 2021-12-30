

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];
var gradient_info = document.getElementById("g-info");
gradient_info.textContent = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
body.style.color = "#ffffff";


function setBgColor() {
    var gradient = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    body.style.backgroundImage = gradient;
    gradient_info.textContent = gradient;
}

color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);