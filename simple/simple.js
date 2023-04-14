function changeColor() {
  let backgroundSimple = document.getElementById("mainID");
  let squareCenter = document.getElementById("square-center");
  squareCenter.style.backgroundColor = "black";

  let backGroundSorteado = randomNumber(6);

  if (backGroundSorteado == 0) {
    backgroundSimple.style.backgroundColor = "red";
    document.querySelector("#text").innerHTML = "Background Color : RED";
  } else if (backGroundSorteado == 1) {
    backgroundSimple.style.backgroundColor = "blue";
    document.querySelector("#text").innerHTML = "Background Color : BLUE";
  } else if (backGroundSorteado == 2) {
    backgroundSimple.style.backgroundColor = "green";
    document.querySelector("#text").innerHTML = "Background Color : GREEN";
  } else if (backGroundSorteado == 3) {
    backgroundSimple.style.backgroundColor = "purple";
    document.querySelector("#text").innerHTML = "Background Color : PURPLE";
  } else if (backGroundSorteado == 4) {
    squareCenter.style.backgroundColor = "black";
    backgroundSimple.style.backgroundColor = "black";
    document.querySelector("#text").innerHTML = "Background Color : BLACK";
  } else if (backGroundSorteado == 5) {
    backgroundSimple.style.backgroundColor = "yellow";
    document.querySelector("#text").innerHTML = "Background Color : YELLOW";
  }
}

function randomNumber(numeroMaximo) {
  return Math.floor(Math.random() * numeroMaximo);
}
