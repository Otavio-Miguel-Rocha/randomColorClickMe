function changeColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let backgroundHex = document.getElementById("mainID");

  backgroundHex.style.backgroundColor = "#" + randomColor;
  document.querySelector("#text").innerHTML =
    "Background Color : #" + randomColor;
}
