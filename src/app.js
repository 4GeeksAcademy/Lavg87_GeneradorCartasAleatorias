import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let top = document.getElementById("top")
  let mid = document.getElementById("mid")
  let base = document.getElementById("base")

  let Figuras = ["♠", "♣", "♥", "♦"];
  let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  
  let random_fig = Math.floor(Math.random() * Figuras.length)
  let random_num = Math.floor(Math.random() * cards.length)

  let color = (Figuras[random_fig] === "♥" || Figuras[random_fig] === "♦") ? "red" : "black"

  top.style.color = color
  base.style.color = color
  mid.style.color = color


  top.innerText = Figuras[random_fig]
  base.innerText = Figuras[random_fig]
  mid.innerText = cards[random_num]


};

